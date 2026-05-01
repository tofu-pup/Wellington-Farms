# Wellington Farms

A mobile-first PWA for JK and his wife to manage their home garden — tracking beds, plants, watering, and harvests.

## Project Overview

- **Type**: Vanilla HTML/CSS/JS Progressive Web App (no build tools)
- **Users**: JK (janmark@microsoft.com) + wife — Google Sign-In, Firebase Auth restricts to their emails only
- **Hosting**: GitHub Pages — `github.com/tofu-pup/Wellington-Farms` (personal repo, not gim-home)
- **Backend**: Firebase (Firestore for data, Firebase Auth for sign-in)
- **Platform**: Mobile-first, works on iPhone + Android, can be added to home screen as PWA

## Garden Layout

- **14 raised beds** arranged in a grid
- `gardenlayout.png` is the actual layout photo — it is a core UI element, overlaid with interactive bed selectors
- Bed status (planted / watered / harvested) is shown directly on top of the image

## Key UX Principles

- Large tap targets — used outdoors with possibly dirty hands
- Quick-log actions: one-tap "I watered this bed", bulk "Watered all"
- High contrast — readable in bright sunlight
- Offline-friendly: Firebase SDK caches locally, syncs when back online

## Data Model (Firestore)

```
/beds/{bedId}
  name: string              // "Bed 1", "Herb Corner", etc.
  position: {row, col}      // grid coords matching layout image
  notes: string

/beds/{bedId}/plantings/{plantingId}
  plant: string             // "Tomatoes", "Basil"
  datePlanted: timestamp
  expectedHarvest: timestamp
  status: "growing" | "harvested" | "removed"

/beds/{bedId}/wateringLogs/{logId}
  date: timestamp
  loggedBy: string          // user display name

/beds/{bedId}/harvestLogs/{logId}
  date: timestamp
  quantity: string          // "2 lbs", "handful"
  notes: string
```

## Screens

1. **Auth** — Google Sign-In splash
2. **Home / Garden Map** — `gardenlayout.png` with 14 interactive bed overlays showing status
3. **Bed Detail** — tapping a bed shows what's planted, last watered, harvest log
4. **Add/Edit Planting** — species, date planted, expected harvest
5. **Quick Log** — watering (single bed or all) and harvest entry
6. **Settings** — account info, sign out

## File Structure

```
Wellington-Farms/
  index.html          — app entry + auth screen
  style.css
  app.js              — main app logic, Firebase integration
  firebase-config.js  — Firebase credentials (gitignored)
  manifest.json       — PWA manifest
  sw.js               — service worker for offline
  gardenlayout.png    — garden map (core UI asset)
  assets/icons/
```

## Dev

- Local: open `index.html` directly in browser, or `npx serve . -p 8765`
- `firebase-config.js` must exist locally (gitignored) with real Firebase credentials
- A `firebase-config.example.js` is committed as a template

## Auth Notes

- Google Sign-In via Firebase Auth
- Firestore security rules whitelist only JK's and wife's Google email addresses
- Anyone else hitting the app gets the sign-in screen and cannot read any data
