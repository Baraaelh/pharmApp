// PharmacyLink Service Worker — handles background FCM push notifications
// Must be at root: /sw.js

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

try {
  firebase.initializeApp({
    // TODO: paste your Firebase config here (same values as firebase-config.js)
    apiKey:            'YOUR_API_KEY',
    authDomain:        'YOUR_AUTH_DOMAIN',
    projectId:         'YOUR_PROJECT_ID',
    storageBucket:     'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId:             'YOUR_APP_ID'
  });

  const messaging = firebase.messaging();

  // Background messages (tab closed or in background)
  messaging.onBackgroundMessage(payload => {
    const d     = payload.data || payload.notification || {};
    const title = d.title || 'PharmacyLink';
    const body  = d.body  || '';

    self.registration.showNotification(title, {
      body,
      icon:    d.icon  || '/assets/icon-192.png',
      badge:   '/assets/badge-72.png',
      data:    { link: d.link || '/user/dashboard.html' },
      actions: [
        { action: 'open',    title: 'فتح' },
        { action: 'dismiss', title: 'تجاهل' }
      ]
    });
  });
} catch {
  // Firebase not configured — SW registers silently but won't handle FCM
}

// Notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'dismiss') return;

  const link = event.notification.data?.link || '/user/dashboard.html';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const client of list) {
        if (client.url.includes(link) && 'focus' in client) return client.focus();
      }
      return clients.openWindow ? clients.openWindow(link) : null;
    })
  );
});
