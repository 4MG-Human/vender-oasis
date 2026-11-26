# خطوات ربط نموذج الطلبات بملف Google Sheets مجاناً (في دقيقة واحدة)

النموذج الموجود في الموقع مجهز بالكامل لإرسال:
**(التاريخ والوقت، الاسم، رقم الجوال، الخدمة المختارة، والتفاصيل الإضافية)** مباشرة إلى ملف Google Sheet الخاص بك.

## الخطوة 1: إنشاء ملف Google Sheet
1. افتح [Google Sheets](https://sheets.new) وأنشئ جدولاً جديداً.
2. في الصف الأول، اكتب العناوين التالية في الأعمدة من `A` إلى `E`:
   - `A1`: التاريخ
   - `B1`: الاسم
   - `C1`: رقم الجوال
   - `D1`: الخدمة المطلوبة
   - `E1`: ملاحظات

## الخطوة 2: إضافة كود الاستقبال التلقائي (Apps Script)
1. من القائمة العلوية في ملف Google Sheet اضغط على **Extensions (الإضافات)** ثم **Apps Script**.
2. امسح أي كود موجود والصق الكود التالي:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp || new Date().toLocaleString("ar-SA"),
    data.name || "",
    data.phone || "",
    data.service || "",
    data.notes || ""
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. اضغط على زر **Deploy (نشر)** في الأعلى ثم **New deployment (نشر جديد)**.
4. اختر النوع **Web app (تطبيق ويب)**:
   - في خيار **Execute as**: اختر `Me`.
   - في خيار **Who has access**: اختر `Anyone` (مهم جداً).
5. اضغط **Deploy** وانسخ رابط الـ **Web app URL** الذي سيظهر لك.

## الخطوة 3: وضع الرابط في الموقع
ضع الرابط الذي نسخته في ملف `app/page.tsx` في السطر 28 داخل المتغير:
```ts
const GOOGLE_SHEET_WEBHOOK_URL = "ضع_الرابط_هنا";
```
(أو أرسل لي الرابط هنا وسأضعه لك وأحدث الموقع فوراً!).
