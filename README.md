# Bahen Prayer Room — Prayer Reminder

A simple, self-hosted prayer reminder for the Bahen Centre prayer room at the University of Toronto. Plays the adhan at iqama times and displays a daily aya and hadith.

**Live site:** https://moh-assan.github.io/bahen_prayer_room/

---

## How to Update

All configuration lives in **`config.js`** — no need to touch `index.html`.

### Change Iqama Times

Open `config.js` and edit the `iqamaTimes` object (24-hour format):

```js
iqamaTimes: {
  Fajr:    "06:00",
  Dhuhr:   "13:30",
  Asr:     "16:30",
  Maghrib: "18:25",
  Isha:    "20:15",
},
```

### Add a Daily Aya or Hadith

Add date-specific entries using `YYYY-MM-DD` keys:

```js
dailyAya: {
  "2026-02-15": { ref: "Q 94:5-6", text: "With hardship comes ease." },
  "2026-02-16": { ref: "Q 3:139",  text: "Do not lose heart..." },
  "default":    { ref: "Q 2:286",  text: "Allah does not burden a soul beyond what it can bear." },
},
```

The site checks today's date (Toronto time) and falls back to `"default"` if no entry matches.

### Replace the Adhan Audio

1. Add your `.mp3` file to the repo (e.g., `my-adhan.mp3`).
2. In `config.js`, update the `audio.default` path:
   ```js
   audio: {
     default: "./my-adhan.mp3",
   },
   ```
3. You can also set different audio per prayer by uncommenting and editing the individual lines.

### Deploy Changes

After editing, commit and push:

```bash
git add -A
git commit -m "Update iqama times"
git push
```

GitHub Pages will automatically redeploy within a minute or two.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main page (HTML + JS logic) |
| `config.js` | All editable settings (times, content, audio) |
| `adhan.mp3` | Default adhan audio |
| `README.md` | This file |

---

## Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, Google Domains).
2. In your domain's DNS settings, add a CNAME record pointing to `YOUR_USERNAME.github.io`.
3. In the GitHub repo: Settings > Pages > Custom domain — enter your domain.
4. GitHub will create a `CNAME` file in the repo automatically.

---

## Credits

- Adhan audio: [AlAdhan.com](https://aladhan.com/download-adhans) (Mishary Rashid Alafasy)
- Timezone handling: [Luxon](https://moment.github.io/luxon/)
