// ============================================================
//  IQAMA REMINDER — CONFIGURATION
//  Edit this file to update times, content, and settings.
//  No need to touch index.html!
// ============================================================

const CONFIG = {

  // Timezone (IANA format)
  timezone: "America/Toronto",

  // ── Last Updated ────────────────────────────────────────
  // Change this date whenever you update iqama times.
  lastUpdated: "2026-02-14",

  // ── Location ────────────────────────────────────────────
  location: {
    name: "Bahen Centre, 40 St. George St",
    mapsUrl: "https://maps.google.com/?q=Bahen+Centre+40+St+George+St+Toronto+ON",
  },

  // ── Iqama Times (24-hour HH:MM) ──────────────────────────
  // Update these whenever the masjid schedule changes.
  iqamaTimes: {
    Fajr:    "05:45",
    Dhuhr:   "13:30",
    Asr:     "16:45",
    Maghrib: "18:10",
    Isha:    "20:00",
  },

  // ── Audio Files ───────────────────────────────────────────
  // "default" is the full iqama/adhan audio.
  // "short" is used when "Short notification" mode is on.
  // You can also set a different audio file per prayer.
  audio: {
    // Fajr:    "./fajr.mp3",
    // Dhuhr:   "./dhuhr.mp3",
    // Asr:     "./asr.mp3",
    // Maghrib: "./maghrib.mp3",
    // Isha:    "./isha.mp3",
    default: "./eqamah.mp3",
    short:   "./short.mp3",
  },

  // ── Daily Aya ─────────────────────────────────────────────
  // Use a date key "YYYY-MM-DD" for a specific day,
  // or "default" as the fallback.
  //
  // Example:
  //   "2026-02-15": { ref: "Q 94:5-6", text: "With hardship comes ease." },
  //
  dailyAya: {
    "default": {
      ref: "Q 2:286",
      text: "Allah does not burden a soul beyond what it can bear.",
    },
  },

  // ── Daily Hadith ──────────────────────────────────────────
  // Same format as dailyAya above.
  dailyHadith: {
    "default": {
      ref: "Bukhari/Muslim (meaning)",
      text: "Be mindful of Allah, and Allah will protect you. (paraphrase)",
    },
  },

  // ── Advanced ──────────────────────────────────────────────
  // How many seconds after the scheduled time we still trigger
  // (handles browser tab throttling).
  lateGraceSeconds: 120,
};
