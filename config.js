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

  // ── Adhan Times API ──────────────────────────────────────
  // Adhan times are fetched daily from AlAdhan.com using the ISNA method.
  // City/country are used for the API call.
  adhanApi: {
    city: "Toronto",
    country: "Canada",
    method: 2,   // 2 = ISNA (Islamic Society of North America)
  },

  // ── Iqama Times (24-hour HH:MM) ──────────────────────────
  // Update these whenever the prayer room schedule changes.
  // Maghrib is AUTO-CALCULATED: adhan time + maghribOffsetMinutes.
  // (So no need to set Maghrib here — it changes daily with sunset.)
  iqamaTimes: {
    Fajr:    "6:30",
    Dhuhr:   "12:45",
    Asr:     "15:30",
    // Maghrib: auto-calculated (see maghribOffsetMinutes below)
    Isha:    "19:15",
  },

  // Minutes after Maghrib adhan for Maghrib iqama
  maghribOffsetMinutes: 5,

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

  // ── Background Images ────────────────────────────────────
  // A random one is picked each time the page loads.
  // Add or remove paths as needed.
  backgrounds: [
    "./backrgounds/Background6.png",
    "./backrgounds/Background7.png",
  ],

  // ── How to Get There (direction images) ─────────────────
  // Shown in a slider, in this exact order.
  directionImages: [
    "./how_to_get_there/000.png",
    "./how_to_get_there/100.png",
    "./how_to_get_there/200.jpg",
    "./how_to_get_there/300.jpg",
    "./how_to_get_there/400.jpg",
  ],

  // ── Advanced ──────────────────────────────────────────────
  // How many seconds after the scheduled time we still trigger
  // (handles browser tab throttling).
  lateGraceSeconds: 120,
};
