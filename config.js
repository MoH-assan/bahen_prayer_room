// ============================================================
//  IQAMA REMINDER — CONFIGURATION
//  Edit this file to update times, content, and settings.
//  No need to touch index.html!
// ============================================================

const CONFIG = {

  // Timezone (IANA format)
  timezone: "America/Toronto",

  // ── Last Updated ──────────────────────────────────────────
  // Change this date whenever you update iqama times.
  lastUpdated: "2026-02-22",

  // ── Location ──────────────────────────────────────────────
  location: {
    name: "Bahen Centre, 40 St. George St",
    mapsUrl: "https://maps.google.com/?q=Bahen+Centre+40+St+George+St+Toronto+ON",
  },

  // ── Adhan Times API ───────────────────────────────────────
  // Fetched daily from AlAdhan.com. Method 2 = ISNA.
  adhanApi: {
    city: "Toronto",
    country: "Canada",
    method: 2,
  },

  // ── Iqama Times (24-hour HH:MM) ──────────────────────────
  // Maghrib is AUTO-CALCULATED: adhan time + maghribOffsetMinutes.
  iqamaTimes: {
    Fajr:  "6:15",
    Dhuhr: "12:45",
    Asr:   "15:45",
    Isha:  "19:30",
  },

  // Minutes after Maghrib adhan for Maghrib iqama
  maghribOffsetMinutes: 5,

  // Ramadan / community note shown under the prayer-times table.
  iqamaNote: {
    enabled: true,
    title: "Ramadan Note (UofT MSA)",
    message: [
      "Isha and Taraweeh are held by MSA in Koffler Multifaith Centre throughout Ramadan.",
      "Iqama is around 6:30 PM.",
      "For more information, check MSA:",
    ],
    links: [
      { label: "MSA Facebook", url: "https://www.facebook.com/uoftmsa/" },
      { label: "MSA Instagram", url: "https://www.instagram.com/uoftmsa/" },
      { label: "MSA Contact", url: "https://www.uoftmsa.com/contact-us.html" },
    ],
    post: {
      url: "https://www.facebook.com/share/p/1D4tutoSCi/",
      quote: [
        "Assalamualaykum wa Rahmatullahi wa Barakatuhu. Join us for Taraweeh on campus starting February 17th, in sha Allah!",
        "May Allah SWT grant us sincerity in our worship, accept from us, and forgive us of all our shortcomings. May this be a blessed Ramadan for all of us.",
        "\u0627\u064e\u0644\u0644\u0651\u0647\u064f\u0645\u064e \u0628\u064e\u0644\u0651\u0650\u063a\u0652\u0646\u064e\u0627 \u0631\u064e\u0645\u064e\u0636\u064e\u0627\u0646",
        "Allahumma ballighna Ramadan.",
        "Oh Allah, let us reach the month of Ramadan.",
        "BarakAllahu feekum.",
      ],
    },
  },

  // ── Audio ─────────────────────────────────────────────────
  // "adhan" for full adhan, "iqama" for iqama, "short" for brief notification.
  audio: {
    adhan: "./adhan.mp3",
    iqama: "./eqamah.mp3",
    short: "./short.mp3",
  },

  // ── Daily Aya ─────────────────────────────────────────────
  // Use "YYYY-MM-DD" keys for specific days, "default" as fallback.
  dailyAya: {
    "default": {
      ref: "Q 2:286",
      text: "Allah does not burden a soul beyond what it can bear.",
    },
  },

  // ── Daily Hadith ──────────────────────────────────────────
  dailyHadith: {
    "default": {
      ref: "Bukhari/Muslim (meaning)",
      text: "Be mindful of Allah, and Allah will protect you. (paraphrase)",
    },
  },

  // ── Background Images ────────────────────────────────────
  // A random one is picked each page load.
  backgrounds: [
    "./backgrounds/Background6.png",
    "./backgrounds/Background7.png",
  ],

  // ── Direction Images (slider) ─────────────────────────────
  // Shown in order in the "How to Reach the Room" slider.
  directionImages: [
    "./how_to_get_there/000.png",
    "./how_to_get_there/100.png",
    "./how_to_get_there/200.jpg",
    "./how_to_get_there/300.jpg",
    "./how_to_get_there/400.jpg",
    "./how_to_get_there/500.jpg",
    "./how_to_get_there/600.jpg",
  ],

  // ── Advanced ──────────────────────────────────────────────
  // Grace window (seconds) for late triggers due to tab throttling.
  lateGraceSeconds: 120,

  // Automatic hard refresh for kiosk screens.
  // Uses a cache-busting URL parameter (no manual Ctrl+Shift+R needed).
  autoHardRefresh: {
    enabled: true,
    intervalMinutes: 60,
    retryDelaySeconds: 15,
  },

  testMode: {
    enabled: false,
    fajrAdhanOffsetSeconds: 30,
    fajrIqamaOffsetSeconds: 45,
  },
};
