/* ============================================================
   TheraFist — main.js
   Shared components (header / footer / floating actions),
   animations, lightbox, forms. No dependencies.
   ============================================================ */
(function () {
  "use strict";

  var PHONE_DISPLAY = "052-3945292";
  var PHONE_TEL = "tel:+972523945292";
  var WA_LINK = "https://wa.me/972523945292";
  var WA_DEFAULT = WA_LINK + "?text=" + encodeURIComponent("היי אביחי, הגעתי מהאתר של TheraFist ואשמח לשמוע פרטים על טיפול 🙏");
  var EMAIL = "avichay.physio@gmail.com";
  var INSTAGRAM = "https://www.instagram.com/avichay.physio.therafist?igsh=MXZmYXB1em9wOGRzbg==";
  var FACEBOOK = "https://www.facebook.com/Avichay.physio";

  var NAV_ITEMS = [
    { href: "index.html", label: "בית" },
    { href: "method.html", label: "על השיטה" },
    { href: "treatments.html", label: "טיפולים ושיקום" },
    { href: "martial-arts.html", label: "אומנויות לחימה" },
    { href: "media.html", label: "כתבות והופעות" },
    { href: "memory.html", label: "לזכרו של אבא שלי" },
    { href: "contact.html", label: "יצירת קשר" }
  ];

  var ICONS = {
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.5 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1-1.44-5.03c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.42 9.44c0 5.2-4.23 9.44-9.43 9.44zM20.06 3.97A11.34 11.34 0 0 0 12.03 .64C5.77.64.68 5.73.68 11.99c0 2 .52 3.95 1.52 5.67L.58 23.36l5.83-1.53a11.35 11.35 0 0 0 5.62 1.48h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21.9v-8.4h2.8l.42-3.26H13.5V8.16c0-.94.26-1.59 1.62-1.59h1.72V3.65c-.3-.04-1.32-.13-2.5-.13-2.48 0-4.18 1.51-4.18 4.3v2.4H7.35v3.27h2.81v8.4h3.34z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>',
    sun: '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/></svg>',
    moon: '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>'
  };

  /* ---------- theme (dark is the default; saved choice wins) ---------- */
  function getTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* private mode */ }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#faf6ee" : "#0a0908");
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      var toLight = theme === "dark";
      btn.setAttribute("aria-label", toLight ? "מעבר למצב בהיר" : "מעבר למצב כהה");
      var label = btn.querySelector(".theme-toggle__label");
      if (label) label.textContent = toLight ? "מצב בהיר" : "מצב כהה";
    });
  }
  function toggleTheme() {
    applyTheme(getTheme() === "dark" ? "light" : "dark");
  }

  /* ---------- current page ---------- */
  var path = location.pathname.split("/").pop() || "index.html";

  /* ---------- header ---------- */
  var navLinks = NAV_ITEMS.map(function (item) {
    var current = item.href === path ? ' aria-current="page"' : "";
    return '<li><a href="' + item.href + '"' + current + ">" + item.label + "</a></li>";
  }).join("");

  var headerHTML =
    '<a class="skip-link" href="#main">דלג לתוכן המרכזי</a>' +
    '<header class="site-header">' +
    '  <div class="header-inner">' +
    '    <a class="brand" href="index.html" aria-label="TheraFist — דף הבית">' +
    '      <img src="images/logo.jpg" alt="הלוגו של TheraFist" width="44" height="44">' +
    "      <span>Thera<b>Fist</b></span>" +
    "    </a>" +
    '    <nav class="main-nav" id="main-nav" aria-label="ניווט ראשי">' +
    "      <ul>" + navLinks +
    '        <li><a class="nav-cta" href="' + WA_DEFAULT + '" target="_blank" rel="noopener">קביעת טיפול</a></li>' +
    '        <li class="nav-theme-item"><button class="theme-toggle theme-toggle--menu" type="button">' +
    ICONS.sun + ICONS.moon + '<span class="theme-toggle__label"></span></button></li>' +
    "      </ul>" +
    "    </nav>" +
    '    <button class="theme-toggle" type="button">' + ICONS.sun + ICONS.moon + "</button>" +
    '    <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="פתיחת תפריט">' +
    "      <span></span><span></span><span></span>" +
    "    </button>" +
    "  </div>" +
    "</header>";

  /* ---------- footer ---------- */
  var footerHTML =
    '<footer class="site-footer">' +
    '  <div class="container">' +
    '    <div class="footer-grid">' +
    '      <div class="footer-brand">' +
    '        <img src="images/logo.jpg" alt="TheraFist" width="74" height="74" loading="lazy">' +
    "        <p>TheraFist — שיקום אקטיבי המשלב פיזיותרפיה מקצועית עם עקרונות תנועה מעולם אומנויות הלחימה. כי השיקום האמיתי קורה בתנועה.</p>" +
    '        <div class="footer-social">' +
    '          <a href="' + INSTAGRAM + '" target="_blank" rel="noopener" aria-label="אינסטגרם">' + ICONS.instagram + "</a>" +
    '          <a href="' + FACEBOOK + '" target="_blank" rel="noopener" aria-label="פייסבוק">' + ICONS.facebook + "</a>" +
    '          <a href="mailto:' + EMAIL + '" aria-label="אימייל">' + ICONS.mail + "</a>" +
    "        </div>" +
    "      </div>" +
    "      <div>" +
    "        <h4>ניווט מהיר</h4>" +
    '        <ul class="footer-links">' +
    NAV_ITEMS.map(function (i) { return '<li><a href="' + i.href + '">' + i.label + "</a></li>"; }).join("") +
    "        </ul>" +
    "      </div>" +
    "      <div>" +
    "        <h4>יצירת קשר</h4>" +
    '        <ul class="footer-links">' +
    '          <li><a href="' + PHONE_TEL + '">טלפון: <bdo dir="ltr">' + PHONE_DISPLAY + "</bdo></a></li>" +
    '          <li><a href="mailto:' + EMAIL + '">' + EMAIL + "</a></li>" +
    '          <li>פתח תקווה והסביבה · קליניקה וביקורי בית</li>' +
    '          <li><a href="' + WA_DEFAULT + '" target="_blank" rel="noopener">שליחת הודעת וואטסאפ</a></li>' +
    '          <li><a href="accessibility.html">הצהרת נגישות</a></li>' +
    "        </ul>" +
    "      </div>" +
    "    </div>" +
    '    <div class="footer-bottom">© <span id="year"></span> TheraFist · אביחי דוקרקר, פיזיותרפיסט מוסמך B.P.T · כל הזכויות שמורות</div>' +
    "  </div>" +
    "</footer>";

  /* ---------- floating actions ---------- */
  var floatHTML =
    '<div class="float-actions">' +
    '  <a class="float-btn float-btn--wa" href="' + WA_DEFAULT + '" target="_blank" rel="noopener" aria-label="שליחת הודעת וואטסאפ">' + ICONS.whatsapp + "</a>" +
    '  <a class="float-btn float-btn--tel" href="' + PHONE_TEL + '" aria-label="חיוג לאביחי">' + ICONS.phone + "</a>" +
    "</div>";

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML + floatHTML);

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* theme: html[data-theme] was set by the inline head script; sync buttons + wire clicks */
  applyTheme(getTheme());
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", toggleTheme);
  });

  /* ---------- loader ---------- */
  var loader = document.querySelector(".loader");
  if (loader) {
    var hideLoader = function () {
      loader.classList.add("done");
      setTimeout(function () { loader.remove(); }, 700);
    };
    if (document.readyState === "complete") hideLoader();
    else window.addEventListener("load", hideLoader);
    setTimeout(hideLoader, 2600); // safety net
  }

  /* ---------- sticky header state ---------- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    header.classList.toggle("scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  function closeNav() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "פתיחת תפריט");
    document.body.classList.remove("nav-locked");
  }
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "סגירת תפריט" : "פתיחת תפריט");
    document.body.classList.toggle("nav-locked", open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeNav();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      closeNav();
      toggle.focus();
    }
  });

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- image fallback ---------- */
  var FALLBACK =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#16130e"/><text x="50%" y="48%" fill="#e8b84b" font-family="sans-serif" font-size="34" font-weight="bold" text-anchor="middle">TheraFist</text><text x="50%" y="58%" fill="#b5aa90" font-family="sans-serif" font-size="18" text-anchor="middle">התמונה אינה זמינה</text></svg>'
    );
  document.addEventListener(
    "error",
    function (e) {
      var img = e.target;
      if (img.tagName === "IMG" && img.src !== FALLBACK) {
        img.src = FALLBACK;
        img.closest("figure") && img.closest("figure").classList.add("img-fallback");
      }
    },
    true
  );

  /* ---------- lightbox ---------- */
  var galleryFigs = document.querySelectorAll(".gallery figure");
  if (galleryFigs.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "תצוגת תמונה מוגדלת");
    lb.innerHTML =
      '<button class="lightbox__close" aria-label="סגירה">✕</button><img alt="">';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img");
    var lbClose = lb.querySelector(".lightbox__close");
    var lastFocus = null;

    function openLb(fig) {
      var img = fig.querySelector("img");
      if (!img) return;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || "";
      lb.classList.add("open");
      lastFocus = document.activeElement;
      lbClose.focus();
    }
    function closeLb() {
      lb.classList.remove("open");
      if (lastFocus) lastFocus.focus();
    }
    galleryFigs.forEach(function (fig) {
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("role", "button");
      var img = fig.querySelector("img");
      fig.setAttribute("aria-label", "הגדלת תמונה: " + (img ? img.alt : ""));
      fig.addEventListener("click", function () { openLb(fig); });
      fig.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLb(fig);
        }
      });
    });
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target === lbClose) closeLb();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lb.classList.contains("open")) closeLb();
    });
  }

  /* ---------- contact form → WhatsApp / mailto ---------- */
  document.querySelectorAll("form[data-contact-form]").forEach(function (form) {
    function buildMessage() {
      var get = function (name) {
        var field = form.querySelector('[name="' + name + '"]');
        return field ? field.value.trim() : "";
      };
      var lines = [
        "היי אביחי, פנייה חדשה מהאתר של TheraFist:",
        "",
        "שם: " + get("name"),
        "טלפון: " + get("phone")
      ];
      var topic = get("topic");
      if (topic) lines.push("נושא הפנייה: " + topic);
      var msg = get("message");
      if (msg) lines.push("", msg);
      return lines.join("\n");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      window.open(WA_LINK + "?text=" + encodeURIComponent(buildMessage()), "_blank", "noopener");
    });
    var mailBtn = form.querySelector("[data-mailto]");
    if (mailBtn) {
      mailBtn.addEventListener("click", function () {
        if (!form.reportValidity()) return;
        location.href =
          "mailto:" + EMAIL +
          "?subject=" + encodeURIComponent("פנייה חדשה מהאתר — TheraFist") +
          "&body=" + encodeURIComponent(buildMessage());
      });
    }
    /* accessible error state: native browser message + aria-invalid marking */
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      if (field.required) field.setAttribute("aria-required", "true");
      field.addEventListener("invalid", function () { field.setAttribute("aria-invalid", "true"); });
      field.addEventListener("input", function () { field.removeAttribute("aria-invalid"); });
    });
  });

  /* ============================================================
     Accessibility widget
     ============================================================ */
  var A11Y_KEY = "a11y";
  var A11Y_FLAGS = ["grayscale", "contrast", "links", "motion", "readable"];
  var a11yState = { font: 100, grayscale: false, contrast: false, links: false, motion: false, readable: false };
  try {
    var saved = JSON.parse(localStorage.getItem(A11Y_KEY) || "{}");
    A11Y_FLAGS.forEach(function (k) { if (typeof saved[k] === "boolean") a11yState[k] = saved[k]; });
    if (typeof saved.font === "number") a11yState.font = Math.min(140, Math.max(90, saved.font));
  } catch (e) { /* private mode */ }

  var A11Y_LABELS = {
    grayscale: "גווני אפור",
    contrast: "ניגודיות גבוהה",
    links: "הדגשת קישורים",
    motion: "עצירת אנימציות",
    readable: "פונט קריא"
  };

  var a11yHTML =
    '<button class="a11y-btn" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="a11y-panel" aria-label="פתיחת תפריט נגישות">' +
    '  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="4.3" r="2.1"/><path d="M21 7.2c-2.9.8-5.9 1.2-9 1.2s-6.1-.4-9-1.2l-.5 1.9c2 .56 4.1.95 6.2 1.14v2.66l-2.5 7.4 1.9.66 2.4-7.06h2l2.4 7.06 1.9-.66-2.5-7.4v-2.66c2.1-.19 4.2-.58 6.2-1.14z"/></svg>' +
    "</button>" +
    '<div class="a11y-panel" id="a11y-panel" role="dialog" aria-modal="false" aria-label="הגדרות נגישות">' +
    "  <h2>הגדרות נגישות</h2>" +
    "  <p>ההעדפות נשמרות בדפדפן שלך לביקורים הבאים.</p>" +
    '  <div class="a11y-grid">' +
    '    <div class="a11y-fontsize">' +
    '      <button type="button" data-a11y-font="-10" aria-label="הקטנת טקסט">א−</button>' +
    "      <span>גודל טקסט <output aria-live=\"polite\"></output></span>" +
    '      <button type="button" data-a11y-font="10" aria-label="הגדלת טקסט">א+</button>' +
    "    </div>" +
    A11Y_FLAGS.map(function (k) {
      return '<button type="button" class="a11y-opt" data-a11y-toggle="' + k + '" aria-pressed="false">' + A11Y_LABELS[k] + "</button>";
    }).join("") +
    '    <button type="button" class="a11y-opt a11y-reset" data-a11y-reset>↺ איפוס הגדרות</button>' +
    "  </div>" +
    '  <a class="a11y-panel__link" href="accessibility.html">הצהרת נגישות</a>' +
    "</div>";
  document.body.insertAdjacentHTML("beforeend", a11yHTML);

  var a11yBtn = document.querySelector(".a11y-btn");
  var a11yPanel = document.getElementById("a11y-panel");
  var a11yOut = a11yPanel.querySelector("output");

  function a11yApply() {
    var d = document.documentElement;
    if (a11yState.font !== 100) d.setAttribute("data-a11y-font", a11yState.font);
    else d.removeAttribute("data-a11y-font");
    d.classList.toggle("a11y-grayscale", a11yState.grayscale);
    d.classList.toggle("a11y-contrast", a11yState.contrast);
    d.classList.toggle("a11y-links", a11yState.links);
    d.classList.toggle("a11y-no-motion", a11yState.motion);
    d.classList.toggle("a11y-readable", a11yState.readable);
    try { localStorage.setItem(A11Y_KEY, JSON.stringify(a11yState)); } catch (e) { /* private mode */ }
    a11yPanel.querySelectorAll("[data-a11y-toggle]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(!!a11yState[b.getAttribute("data-a11y-toggle")]));
    });
    a11yOut.textContent = a11yState.font + "%";
  }
  a11yApply();

  function a11yOpen() {
    a11yPanel.classList.add("open");
    a11yBtn.setAttribute("aria-expanded", "true");
    a11yBtn.setAttribute("aria-label", "סגירת תפריט נגישות");
    a11yPanel.querySelector("button").focus();
  }
  function a11yClose(refocus) {
    a11yPanel.classList.remove("open");
    a11yBtn.setAttribute("aria-expanded", "false");
    a11yBtn.setAttribute("aria-label", "פתיחת תפריט נגישות");
    if (refocus) a11yBtn.focus();
  }
  a11yBtn.addEventListener("click", function () {
    a11yPanel.classList.contains("open") ? a11yClose(false) : a11yOpen();
  });
  a11yPanel.addEventListener("click", function (e) {
    var fontBtn = e.target.closest("[data-a11y-font]");
    if (fontBtn) {
      a11yState.font = Math.min(140, Math.max(90, a11yState.font + Number(fontBtn.getAttribute("data-a11y-font"))));
      a11yApply();
      return;
    }
    var toggleBtn = e.target.closest("[data-a11y-toggle]");
    if (toggleBtn) {
      var key = toggleBtn.getAttribute("data-a11y-toggle");
      a11yState[key] = !a11yState[key];
      a11yApply();
      return;
    }
    if (e.target.closest("[data-a11y-reset]")) {
      a11yState = { font: 100, grayscale: false, contrast: false, links: false, motion: false, readable: false };
      a11yApply();
    }
  });
  /* keyboard: Escape closes, Tab is trapped while open */
  document.addEventListener("keydown", function (e) {
    if (!a11yPanel.classList.contains("open")) return;
    if (e.key === "Escape") { a11yClose(true); return; }
    if (e.key !== "Tab") return;
    var focusables = a11yPanel.querySelectorAll("button, a[href]");
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  /* click outside closes */
  document.addEventListener("click", function (e) {
    if (a11yPanel.classList.contains("open") && !e.target.closest(".a11y-panel") && !e.target.closest(".a11y-btn")) {
      a11yClose(false);
    }
  });
})();
