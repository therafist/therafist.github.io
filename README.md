# TheraFist — אתר תדמית | Avichay Dukerker

אתר סטטי, מהיר ורספונסיבי בעברית (RTL) עבור מותג הפיזיותרפיה **TheraFist**.
ללא שרת, ללא build — HTML/CSS/JS נקיים. מוכן לפריסה מיידית ב־GitHub Pages.

## 📁 מבנה הפרויקט

```
therafist-site/
├── index.html          # דף הבית
├── method.html         # על השיטה
├── treatments.html     # טיפולים ושיקום (כולל הסיפור של ג')
├── martial-arts.html   # אומנויות לחימה
├── media.html          # כתבות והופעות
├── memory.html         # לזכרו של אבא שלי
├── contact.html        # יצירת קשר
├── css/
│   └── main.css        # כל העיצוב (משתני צבע בראש הקובץ)
├── js/
│   └── main.js         # רכיבים משותפים: תפריט, פוטר, כפתורים צפים,
│                       # אנימציות, לייטבוקס, טופס → וואטסאפ/מייל
├── images/             # כל התמונות
├── videos/             # כל הסרטונים
└── .nojekyll           # מונע עיבוד Jekyll ב-GitHub Pages
```

**רכיבים משותפים:** ההדר, הפוטר וכפתורי הוואטסאפ/חיוג הצפים מוזרקים אוטומטית
לכל דף מתוך `js/main.js` — שינוי אחד שם מתעדכן בכל האתר.
פרטי הקשר (טלפון, מייל, קישורי רשתות) מוגדרים כקבועים בראש `js/main.js`.

## 🚀 פריסה ל-GitHub Pages

1. צרו ריפוזיטורי חדש ב-GitHub (למשל `therafist`).
2. מתוך תיקיית הפרויקט:
   ```bash
   git init
   git add .
   git commit -m "TheraFist website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/therafist.git
   git push -u origin main
   ```
3. ב-GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / root → Save**.
4. תוך דקה-שתיים האתר יעלה בכתובת:
   `https://USERNAME.github.io/therafist/`

> כל הנתיבים באתר יחסיים (`images/...`, `css/...`), ולכן האתר עובד גם
> תחת תת-נתיב של GitHub Pages וגם בדומיין מותאם אישית — בלי שום שינוי.
> אין ראוטר ואין צד-שרת, ולכן אין בעיות 404.

### דומיין מותאם אישית (אופציונלי)
ב-**Settings → Pages → Custom domain** הזינו את הדומיין ועדכנו רשומת CNAME אצל ספק הדומיין.

## 💻 הרצה מקומית

```bash
cd therafist-site
python3 -m http.server 8000
# ואז לפתוח: http://localhost:8000
```

(אפשר גם פשוט לפתוח `index.html` בדפדפן — הכול עובד גם מ-file://,
אבל שרת מקומי מדמה טוב יותר את סביבת GitHub Pages.)

## 🖼 החלפה / הוספה של תמונות

- **החלפה:** שמרו את הקובץ החדש באותו שם ובאותו נתיב (למשל `images/profile_pic.jpg`) — האתר יתעדכן מיד.
- **הוספה לגלריה:** העתיקו את הקובץ לתיקייה המתאימה והוסיפו בלוק `<figure>` בעמוד הרלוונטי:
  ```html
  <figure class="reveal">
    <img src="images/martial_arts/my_new_photo.jpg" alt="תיאור התמונה בעברית" loading="lazy">
    <figcaption>כיתוב קצר</figcaption>
  </figure>
  ```
- **קונבנציית שמות בתיקיית `poersonal_thera`:** קבצים שמתחילים ב-`army` / `hospital` / `floyd` / `lecturer` שייכים לקבוצות המתאימות בעמוד "טיפולים ושיקום".
- אם תמונה חסרה — יוצג אוטומטית placeholder ממותג במקום אייקון שבור.

### 🎯 המלצות אופטימיזציה לתמונות
- כווצו תמונות לפני העלאה: [squoosh.app](https://squoosh.app) (חינמי, בדפדפן).
- רוחב מומלץ: **1600px** לתמונות רוחב מלא, **800px** לתמונות גלריה.
- פורמט מומלץ: **WebP** באיכות 75–82 (חיסכון של ~60% לעומת JPG).
- סרטונים: מומלץ לכווץ ל-H.264 720p (עם [HandBrake](https://handbrake.fr)) — חוויית טעינה מהירה משמעותית בסלולר.
- כל התמונות באתר כבר נטענות ב-lazy loading אוטומטית.

## ✍️ עדכון טקסטים ופרטי קשר

- **טקסטים:** ישירות בקובצי ה-HTML — כל דף עצמאי וקריא.
- **טלפון / מייל / רשתות חברתיות:** בראש `js/main.js` (קבועים `PHONE_*`, `WA_LINK`, `EMAIL` וכו').
- **המלצות מטופלים:** בעמוד `index.html`, סקשן `#testimonials` — כרגע placeholders מעוצבים; מומלץ להחליף בהמלצות אמיתיות ברגע שיש.
- **צבעים:** משתני CSS בראש `css/main.css` (`--gold`, `--bg` וכו').

## ♿ נגישות וביצועים (מובנה)

- HTML סמנטי, ניווט מקלדת מלא (כולל תפריט מובייל ולייטבוקס), `alt` לכל תמונה.
- קישור "דילוג לתוכן", ניגודיות גבוהה, תמיכה ב-`prefers-reduced-motion`.
- Lazy loading לתמונות ולמפה, `preload=metadata` לסרטונים, פונטים עם `display=swap`.
- SEO: מטא-תיאורים בעברית לכל דף, Open Graph, JSON-LD (עסק מקומי).
