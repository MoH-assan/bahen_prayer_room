## Cursor Cloud specific instructions

This is a zero-dependency static website (vanilla HTML/CSS/JS). There is no package manager, build system, linter, or test framework.

### Running the dev server

Serve files locally with any static HTTP server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in Chrome.

### Key files

- `index.html` — single-page application (all HTML, CSS, and JS)
- `config.js` — all configurable settings (iqama times, audio, daily content, etc.)
- Audio files: `adhan.mp3`, `eqamah.mp3`, `short.mp3`

### Testing

There are no automated tests or linting tools. Manual browser testing is the only verification method. The app fetches adhan times from the AlAdhan.com API at runtime, so network access is required for full functionality.

Use `config.js` → `testMode.enabled: true` to test scheduled audio playback without waiting for real prayer times (see README for details).

### Notes

- The Luxon library is loaded from CDN (`cdn.jsdelivr.net`), so network access is needed for the page to work.
- The `autoHardRefresh` feature will reload the page periodically; disable it in `config.js` if it interferes during development.
