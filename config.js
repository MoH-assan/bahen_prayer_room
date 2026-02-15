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
  lastUpdated: "2026-02-14",

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
    Fajr:  "6:30",
    Dhuhr: "12:45",
    Asr:   "15:30",
    Isha:  "19:15",
  },

  // Minutes after Maghrib adhan for Maghrib iqama
  maghribOffsetMinutes: 5,

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

  testMode: {
    enabled: false,
    fajrAdhanOffsetSeconds: 30,
    fajrIqamaOffsetSeconds: 45,
  },
};
