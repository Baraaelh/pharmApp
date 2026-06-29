# 💊 PharmacyLink

<div align="center">

![PharmacyLink](https://img.shields.io/badge/PharmacyLink-v1.0-1A7B4B?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)

**نظام ذكي لإدارة الصيدليات وربط المستخدمين بالأدوية**

[العرض التجريبي](#) · [تقرير المشكلة](#) · [طلب ميزة](#)

 https://baraaelh.github.io/pharmApp/
</div>

---

## 📖 نبذة عن المشروع

**PharmacyLink** هو نظام متكامل يهدف إلى حل مشكلة يواجهها كثير من المرضى في فلسطين — إيجاد دواء معين في أقرب صيدلية وبأفضل سعر. يربط المشروع بين ثلاثة أطراف: **المستخدم**، **الصيدلاني**، و**مدير النظام**.

### 🎯 المشكلة التي يحلها

- المريض لا يعرف أي صيدلية تبيع الدواء الذي يحتاجه
- لا توجد طريقة لمقارنة أسعار الأدوية بين الصيدليات
- قراءة الوصفات الطبية يدوياً تأخذ وقتاً وقد تحدث أخطاء
- الصيدلاني يحتاج نظام إدارة مخزون وبيع حديث
- لا يوجد نظام تذكير بمواعيد الجرعات للمرضى

---

## ✨ الميزات الرئيسية

### 👤 جانب المستخدم
| الميزة | الوصف |
|--------|--------|
| 🔍 **بحث ذكي** | ابحث عن دواء واعرف أين يتوفر مع المقارنة بالسعر والمسافة |
| 📷 **ماسح الروشتة** | ارفع صورة وصفتك الطبية والـ AI يستخرج الأدوية تلقائياً |
| 🏪 **قائمة الصيدليات** | تصفح الصيدليات القريبة منك مع مسافة GPS وساعات العمل |
| 🆕 **أدوية جديدة** | قسم خاص بآخر الأدوية التي أضافتها الصيدليات |
| 💊 **جدول الجرعات** | أضف أدويتك واحصل على تذكير في وقت كل جرعة |
| 🛒 **طلب أونلاين** | اطلب الأدوية من الصيدلية وادفع كاش أو تحويل بنكي |
| 💬 **تواصل مع الصيدلاني** | محادثة مباشرة مع الصيدلية في الوقت الفعلي |
| 🤖 **استشيرني** | شات بوت ذكي (فارم) للاستفسار عن الأدوية والجرعات |
| 🔔 **إشعارات ذكية** | تنبيهات للطلبات والجرعات والأدوية الجديدة في مفضلتك |
| ❤️ **المفضلة** | احفظ الأدوية والصيدليات المفضلة |

### 🏪 جانب الصيدلاني
| الميزة | الوصف |
|--------|--------|
| 📦 **إدارة المخزون** | أضف وعدّل وتتبع المخزون مع تنبيهات النقص |
| 🔲 **نقطة بيع QR** | امسح باركود علبة الدواء لتسجيل البيعة وخصمها من المخزون |
| 🛒 **إدارة الطلبات** | استقبل طلبات المستخدمين وحدّث حالتها |
| 📊 **التحليلات** | تقارير يومية وأسبوعية وشهرية للمبيعات والإيرادات |
| 💬 **المحادثات** | رد على استفسارات المستخدمين مباشرة |
| 🔔 **إشعارات فورية** | تنبيه بكل طلب جديد أو رسالة جديدة |
| 💊 **كتالوج الأدمن** | اختر الأدوية من قائمة معتمدة من الأدمن (لا يمكن إضافة دواء غير موجود بالكتالوج) |

### 🔧 جانب الأدمن
| الميزة | الوصف |
|--------|--------|
| 🏪 **إدارة الصيدليات** | موافقة، تعليق، أو حذف الصيدليات |
| 👥 **إدارة المستخدمين** | عرض وإدارة جميع المستخدمين والصيدلانيين |
| 💊 **كتالوج الأدوية** | القائمة الرئيسية لجميع الأدوية المعتمدة في النظام |
| 🛒 **مراقبة الطلبات** | عرض جميع الطلبات عبر كل الصيدليات |
| 📈 **التقارير** | إحصائيات شاملة للإيرادات والمستخدمين والأدوية |

---

## 🏗️ هيكل المشروع

```
pharmApp/
├── pharma-dashboard/          # 🌐 داشبورد الويب (هذا الـ repo)
│   ├── index.html             # صفحة اختيار الدور
│   ├── admin/                 # لوحة تحكم الأدمن
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── pharmacies.html
│   │   ├── users.html
│   │   ├── catalog.html
│   │   ├── orders.html
│   │   └── reports.html
│   ├── pharmacist/            # داشبورد الصيدلاني
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── inventory.html
│   │   ├── orders.html
│   │   ├── analytics.html
│   │   ├── qr-sales.html
│   │   ├── chats.html
│   │   └── profile.html
│   ├── user/                  # داشبورد المستخدم
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── dashboard.html
│   │   ├── pharmacies.html
│   │   ├── pharmacy-details.html
│   │   ├── new-medicines.html
│   │   ├── search-results.html
│   │   ├── orders.html
│   │   ├── doses.html
│   │   ├── favorites.html
│   │   ├── scanner.html
│   │   ├── chatbot.html
│   │   ├── chats.html
│   │   ├── checkout.html
│   │   ├── addresses.html
│   │   ├── notifications.html
│   │   └── profile.html
│   ├── css/                   # ملفات الستايل
│   │   ├── main.css
│   │   ├── sidebar.css
│   │   ├── chat.css
│   │   ├── notifications.css
│   │   └── admin.css
│   ├── js/                    # ملفات JavaScript
│   │   ├── firebase-config.js
│   │   ├── auth.js
│   │   ├── mock-data.js
│   │   ├── cart.js
│   │   ├── notifications.js
│   │   ├── openai.js
│   │   ├── admin/
│   │   ├── pharmacist/
│   │   └── user/
│   └── sw.js                  # Service Worker للإشعارات
│
├── pharma-backend/            # ⚙️ Laravel API (repo منفصل)
└── pharma-mobile/             # 📱 Flutter App (repo منفصل)
```

---

## 🔧 التقنيات المستخدمة

### Frontend (داشبورد الويب)
- **Vanilla JavaScript** — بدون frameworks
- **HTML5 + CSS3** — RTL support كامل
- **Chart.js** — رسوم بيانية تفاعلية
- **Firebase SDK** — Auth + Firestore + Realtime Database

### Backend
- **Laravel 11** — REST API
- **MySQL** — قاعدة البيانات الرئيسية
- **Firebase Admin SDK** — إرسال الإشعارات

### Mobile
- **Flutter** — تطبيق Android & iOS
- **Firebase** — Auth + Realtime Chat

### خدمات خارجية
- **Firebase Authentication** — تسجيل الدخول والتحقق من الإيميل
- **Firebase Realtime Database** — المحادثات الفورية
- **Firebase Cloud Messaging** — إشعارات المتصفح والموبايل
- **OpenAI GPT-4o** — ماسح الروشتة + شات بوت "فارم"
- **Google Vision API** — OCR احتياطي لقراءة الوصفات
- **openFDA API** — بيانات الأدوية (تفاصيل أدناه)

---

## 💊 openFDA Drug API

يستخدم المشروع **openFDA** كمصدر بيانات للأدوية.

### Base URL
```
https://api.fda.gov/drug/label.json
```

### أمثلة على الاستخدام

**البحث عن دواء باسمه:**
```
GET https://api.fda.gov/drug/label.json?search=openfda.brand_name:"paracetamol"&limit=5
```

**البحث بالمادة الفعالة:**
```
GET https://api.fda.gov/drug/label.json?search=openfda.substance_name:"amoxicillin"&limit=10
```

**الحصول على أدوية OTC (بدون وصفة):**
```
GET https://api.fda.gov/drug/label.json?search=openfda.product_type:"HUMAN+OTC+DRUG"&limit=20
```

**البحث بالاسم التجاري:**
```
GET https://api.fda.gov/drug/label.json?search=openfda.brand_name:"ibuprofen"&limit=5
```

### بنية الاستجابة
```json
{
  "meta": {
    "results": {
      "total": 256602,
      "limit": 1,
      "skip": 0
    }
  },
  "results": [
    {
      "openfda": {
        "brand_name": ["Paracetamol"],
        "generic_name": ["ACETAMINOPHEN"],
        "manufacturer_name": ["Company Name"],
        "product_type": ["HUMAN OTC DRUG"],
        "route": ["ORAL"],
        "substance_name": ["ACETAMINOPHEN"]
      },
      "indications_and_usage": ["...وصف الاستخدام..."],
      "dosage_and_administration": ["...الجرعة والطريقة..."],
      "warnings": ["...التحذيرات..."],
      "active_ingredient": ["...المادة الفعالة..."],
      "inactive_ingredient": ["...المواد غير الفعالة..."],
      "storage_and_handling": ["...شروط التخزين..."],
      "pregnancy_or_breast_feeding": ["...تحذيرات الحمل..."]
    }
  ]
}
```

### كيف يستخدمها المشروع

```javascript
// في Laravel — البحث عن دواء وإضافته للكتالوج
async function searchFDADrug(medicineName) {
  const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${medicineName}"&limit=5`;
  const response = await fetch(url);
  const data = await response.json();

  return data.results.map(drug => ({
    nameEn: drug.openfda?.brand_name?.[0] || '',
    genericName: drug.openfda?.generic_name?.[0] || '',
    manufacturer: drug.openfda?.manufacturer_name?.[0] || '',
    type: drug.openfda?.product_type?.[0] || '',
    route: drug.openfda?.route?.[0] || '',
    activeIngredient: drug.active_ingredient?.[0] || '',
    usage: drug.indications_and_usage?.[0] || '',
    dosage: drug.dosage_and_administration?.[0] || '',
    warnings: drug.warnings?.[0] || '',
    storage: drug.storage_and_handling?.[0] || '',
    requiresPrescription: drug.openfda?.product_type?.[0] !== 'HUMAN OTC DRUG'
  }));
}
```

> **ملاحظة:** الـ API مجاني ولا يحتاج API Key للاستخدام الأساسي.
> حد الطلبات: 1000 طلب/ساعة بدون مفتاح، 120,000 طلب/دقيقة بمفتاح مجاني.
> للحصول على مفتاح: [https://open.fda.gov/apis/authentication/](https://open.fda.gov/apis/authentication/)

---

## 🔄 كيف يعمل النظام

```
المستخدم يبحث عن دواء
         ↓
Laravel API يبحث في قاعدة البيانات
         ↓
يرجع قائمة الصيدليات التي تبيعه مرتبة حسب:
  • المسافة (GPS)
  • السعر
  • التقييم
         ↓
المستخدم يضيف للسلة ويطلب
         ↓
الصيدلاني يستقبل إشعار بالطلب (FCM)
         ↓
الصيدلاني يقبل ويحدّث الحالة
         ↓
المستخدم يستقبل إشعار بتأكيد الطلب
```

---

## 🚀 تشغيل المشروع

### المتطلبات
- VS Code + Live Server extension
- متصفح حديث (Chrome / Edge)
- حساب Firebase (مجاني)

### الخطوات

**1. Clone المشروع**
```bash
git clone https://github.com/yourusername/pharma-dashboard.git
cd pharma-dashboard
```

**2. إعداد Firebase**

أنشئ مشروع على [Firebase Console](https://console.firebase.google.com) وفعّل:
- Authentication → Email/Password
- Firestore Database
- Realtime Database
- Cloud Messaging

ثم افتح `js/firebase-config.js` وضع القيم:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "YOUR_DATABASE_URL"
};
```

**3. تشغيل المشروع**
- افتح `index.html` بـ VS Code Live Server
- أو اضغط `Go Live` من شريط VS Code

**4. بيانات تجريبية**
المشروع يعمل بـ mock data تلقائياً — لا يحتاج Firebase للعرض التجريبي.

---

## 👥 الأدوار والصلاحيات

| الدور | البريد التجريبي | الصلاحيات |
|-------|----------------|-----------|
| 👤 مستخدم | user@demo.com | بحث، طلب، جرعات، محادثة |
| 🏪 صيدلاني | pharmacist@demo.com | مخزون، مبيعات، طلبات، تحليلات |
| 🔧 أدمن | admin@demo.com | كل الصلاحيات + كتالوج الأدوية |

---

## 🗺️ خارطة الطريق

- [x] داشبورد الصيدلاني (مخزون، مبيعات QR، طلبات، تحليلات)
- [x] داشبورد المستخدم (بحث، سلة، طلبات، جرعات)
- [x] لوحة تحكم الأدمن (صيدليات، مستخدمين، كتالوج)
- [x] نظام المحادثات الفورية (Firebase Realtime DB)
- [x] ماسح الروشتة الذكي (OpenAI GPT-4o Vision)
- [x] شات بوت "فارم" الصيدلاني
- [x] نظام الإشعارات (FCM + localStorage)
- [ ] Laravel Backend API
- [ ] تطبيق Flutter للموبايل
- [ ] ربط openFDA لتعبئة الكتالوج تلقائياً
- [ ] خريطة تفاعلية للصيدليات (Google Maps)
- [ ] نظام تقييم الصيدليات

---

## 📸 لقطات الشاشة

> قريباً — سيتم إضافة لقطات الشاشة بعد اكتمال المشروع

---

## 🤝 المساهمة

هذا مشروع تخرج — لكن المساهمات مرحب بها!

1. Fork المشروع
2. أنشئ branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m '✨ feat: add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. افتح Pull Request

---

## 📄 الرخصة

موزع تحت رخصة MIT. انظر `LICENSE` للمزيد.

---

## 👨‍💻 المطور

**براء** — مشروع تخرج 2026



[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Baraaelh)

---

<div align="center">

صُنع بـ ❤️ في فلسطين 🇵🇸

</div>
