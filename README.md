# Bahen Prayer Room — Iqama Reminder

A self-hosted iqama reminder for the Bahen Centre prayer room at the University of Toronto.

> **Note:** This is not an official page. It is not affiliated with the MSA or the University of Toronto. Currently in **beta**.
>
> **Compatibility:** Tested only on Microsoft Edge on Windows 11.

**Live site:** https://moh-assan.github.io/bahen_prayer_room/

**Feedback:** [GitHub Issues](https://github.com/MoH-assan/bahen_prayer_room/issues) · [Pull Requests](https://github.com/MoH-assan/bahen_prayer_room/pulls) · [m.abobaker@live.com](mailto:m.abobaker@live.com)

---

## How to Update

Everything is configured in **`config.js`** — no need to edit `index.html`.

### Iqama Times

```js
lastUpdated: "2026-02-15",

iqamaTimes: {
  Fajr:  "06:30",
  Dhuhr: "12:45",
  Asr:   "15:30",
  Isha:  "19:15",
},

maghribOffsetMinutes: 5,
```

Maghrib iqama is auto-calculated (ISNA adhan time + 5 min). Update `lastUpdated` whenever you change times.

### Daily Aya / Hadith

```js
dailyAya: {
  "2026-02-15": { ref: "Q 94:5-6", text: "With hardship comes ease." },
  "default":    { ref: "Q 2:286",  text: "Allah does not burden a soul..." },
},
```

Uses today's date (Toronto time), falls back to `"default"`. Same format for `dailyHadith`.

### Audio

```js
audio: {
  default: "./eqamah.mp3",   // full iqama
  short:   "./short.mp3",    // short notification
},
```

### Developer Test Mode

Use this when testing scheduled playback without waiting for real prayer times.

```js
testMode: {
  enabled: true,
  fajrAdhanOffsetSeconds: 30,
  fajrIqamaOffsetSeconds: 45,
},
```

When `enabled: true`:
- Fajr adhan is set to now + `fajrAdhanOffsetSeconds`
- Fajr iqama is set to now + `fajrIqamaOffsetSeconds`
- All other prayer adhan/iqama times are forced to `00:00`
- A large UI banner appears: `Test Mode Active: Website is being tested`

Developer notes:
- Keep this `false` in production.
- In test mode, times are recalculated from the current moment on page load and when you tap `Enable Audio & Start`.

### Background Images

```js
backgrounds: [
  "./backgrounds/Background6.png",
  "./backgrounds/Background7.png",
],
```

A random one is picked on each page load.

### Direction Images

```js
directionImages: [
  "./how_to_get_there/000.png",
  "./how_to_get_there/100.png",
  // ...
],
```

Shown in order in the "How to Reach the Room" slider.

### Deploy

```bash
git add -A && git commit -m "Update iqama times" && git push
```

GitHub Pages redeploys automatically in ~1 minute.

---

## Features

- ISNA adhan times fetched daily from [AlAdhan.com](https://aladhan.com)
- Maghrib iqama auto-calculated (sunset + 5 min)
- Full iqama or short notification audio
- Skip button to stop audio early
- Short notification toggle (persisted)
- Test sound button
- Daily aya and hadith
- Direction photo slider with swipe support
- Random background image
- Facilities info
- Location link to Google Maps

---

## Project Structure

```
├── index.html              Main page
├── config.js               All settings (edit this)
├── eqamah.mp3              Full iqama audio
├── short.mp3               Short notification audio
├── backgrounds/            Background images
├── how_to_get_there/       Direction photos
├── .gitignore
└── README.md
```

---

## Custom Domain (Optional)

1. Buy a domain.
2. Add a CNAME DNS record pointing to `moh-assan.github.io`.
3. In the repo: Settings → Pages → Custom domain.

---

## Credits

- Adhan times: [AlAdhan.com](https://aladhan.com) (ISNA method)
- Timezone: [Luxon](https://moment.github.io/luxon/)
