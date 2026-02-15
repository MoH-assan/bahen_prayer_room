# Bahen Prayer Room — Iqama Reminder

A self-hosted iqama reminder for the Bahen Centre prayer room at the University of Toronto. Plays the iqama (or a short notification) at scheduled times, shows ISNA adhan times, and displays a daily aya and hadith.

> **Note:** This page is not official. It is not affiliated with, endorsed by, or representative of the MSA, the University of Toronto, or any official university body. This site is currently in **beta**.

**Live site:** https://moh-assan.github.io/bahen_prayer_room/

**Feedback:** Submit a [GitHub issue](https://github.com/MoH-assan/bahen_prayer_room/issues), [pull request](https://github.com/MoH-assan/bahen_prayer_room/pulls), or email [m.abobaker@live.com](mailto:m.abobaker@live.com).

---

## How to Update

All configuration lives in **`config.js`** — no need to touch `index.html`.

### Change Iqama Times

Open `config.js` and edit the `iqamaTimes` object (24-hour format).
**Remember to update `lastUpdated` too** so visitors know the times are current:

```js
lastUpdated: "2026-02-15",

iqamaTimes: {
  Fajr:    "06:30",
  Dhuhr:   "12:45",
  Asr:     "15:30",
  // Maghrib: auto-calculated (adhan + 5 min)
  Isha:    "19:15",
},

// To change the Maghrib offset (default is 5 minutes after adhan):
maghribOffsetMinutes: 5,
```

> **Note:** Maghrib iqama is automatically calculated as the ISNA Maghrib adhan time + 5 minutes. You don't need to set it manually — it updates daily with sunset.

### Add a Daily Aya or Hadith

Add date-specific entries using `YYYY-MM-DD` keys:

```js
dailyAya: {
  "2026-02-15": { ref: "Q 94:5-6", text: "With hardship comes ease." },
  "2026-02-16": { ref: "Q 3:139",  text: "Do not lose heart..." },
  "default":    { ref: "Q 2:286",  text: "Allah does not burden a soul beyond what it can bear." },
},
```

The site checks today's date (Toronto time) and falls back to `"default"` if no entry matches. Same format for `dailyHadith`.

### Replace the Audio Files

There are two audio modes:
- **Full iqama** — plays `eqamah.mp3` (default)
- **Short notification** — plays `short.mp3` (toggled by the user on the page)

To replace either:
1. Add your `.mp3` file to the repo.
2. In `config.js`, update the path:

```js
audio: {
  default: "./my-iqama.mp3",
  short:   "./my-beep.mp3",
},
```

You can also set different audio per prayer by uncommenting individual lines (e.g., `Fajr: "./fajr.mp3"`).

### Change Background Images

Background images are listed in `config.js`. A random one is picked each time the page loads:

```js
backgrounds: [
  "./backrgounds/Background6.png",
  "./backrgounds/Background7.png",
],
```

To add a new background: drop the image in the `backrgounds/` folder and add its path to the array.

### Change Direction Images

The "How to Reach the Room" slider reads from `config.js`. Images are shown in the listed order:

```js
directionImages: [
  "./how_to_get_there/000.png",
  "./how_to_get_there/100.png",
  "./how_to_get_there/200.jpg",
  "./how_to_get_there/300.jpg",
  "./how_to_get_there/400.jpg",
],
```

To add/remove steps: update the files in `how_to_get_there/` and edit the array.

### Change the Location

Edit the `location` object in `config.js`:

```js
location: {
  name: "Bahen Centre, 40 St. George St",
  mapsUrl: "https://maps.google.com/?q=...",
},
```

### Deploy Changes

After editing, commit and push:

```bash
git add -A
git commit -m "Update iqama times"
git push
```

GitHub Pages will automatically redeploy within a minute or two.

---

## Features

- **ISNA adhan times** fetched daily from [AlAdhan.com](https://aladhan.com) API
- **Maghrib iqama auto-calculated** (adhan + 5 min, follows sunset daily)
- Plays full iqama or short notification at each prayer time
- **Skip** button to stop audio once it starts playing
- **Short notification** toggle (remembered across sessions)
- **Test Sound** button to preview the short notification
- Daily aya and hadith (date-specific or default)
- **Directions slider** with step-by-step photos to find the room
- Random background image on each page load (configurable)
- Facilities info (washroom, sisters' prayer area)
- Location link to Google Maps
- "Last updated" date for iqama times
- How-to-use instructions for visitors
- All times shown in Toronto timezone
- Beta notice with feedback links

---

## Files

| File / Folder | Purpose |
|---------------|---------|
| `index.html` | Main page (HTML + CSS + JS logic) |
| `config.js` | **All editable settings** (times, content, audio, images, location) |
| `eqamah.mp3` | Full iqama audio |
| `short.mp3` | Short notification audio |
| `adhan.mp3` | Backup adhan audio |
| `backrgounds/` | Background images (random on each load) |
| `how_to_get_there/` | Direction photos shown in the slider |
| `not_used_backgrounds/` | Unused background images (not displayed) |
| `README.md` | This file |

---

## Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, Google Domains).
2. In your domain's DNS settings, add a CNAME record pointing to `moh-assan.github.io`.
3. In the GitHub repo: Settings > Pages > Custom domain — enter your domain.
4. GitHub will create a `CNAME` file in the repo automatically.

---

## Credits

- Adhan times API: [AlAdhan.com](https://aladhan.com) (ISNA method)
- Timezone handling: [Luxon](https://moment.github.io/luxon/)
- Adhan audio: [AlAdhan.com](https://aladhan.com/download-adhans)
