// Wellington Farms — main app

// ── PLANT LIBRARY ─────────────────────────────────────────────────────────────

const PLANT_LIBRARY = [
  // Vegetables
  { name: 'Tomatoes',        icon: '🍅', cat: 'Vegetable' },
  { name: 'Cherry tomatoes', icon: '🍅', cat: 'Vegetable' },
  { name: 'Peppers',         icon: '🫑', cat: 'Vegetable' },
  { name: 'Bell peppers',    icon: '🫑', cat: 'Vegetable' },
  { name: 'Cucumbers',       icon: '🥒', cat: 'Vegetable' },
  { name: 'Zucchini',        icon: '🥒', cat: 'Vegetable' },
  { name: 'Pumpkin',         icon: '🎃', cat: 'Vegetable' },
  { name: 'Squash',          icon: '🎃', cat: 'Vegetable' },
  { name: 'Carrots',         icon: '🥕', cat: 'Vegetable' },
  { name: 'Beets',           icon: '🌱', cat: 'Vegetable' },
  { name: 'Radishes',        icon: '🌱', cat: 'Vegetable' },
  { name: 'Potatoes',        icon: '🥔', cat: 'Vegetable' },
  { name: 'Sweet potatoes',  icon: '🥔', cat: 'Vegetable' },
  { name: 'Onions',          icon: '🧅', cat: 'Vegetable' },
  { name: 'Garlic',          icon: '🧄', cat: 'Vegetable' },
  { name: 'Leeks',           icon: '🌱', cat: 'Vegetable' },
  { name: 'Shallots',        icon: '🧅', cat: 'Vegetable' },
  { name: 'Lettuce',         icon: '🥬', cat: 'Vegetable' },
  { name: 'Spinach',         icon: '🥬', cat: 'Vegetable' },
  { name: 'Arugula',         icon: '🥬', cat: 'Vegetable' },
  { name: 'Kale',            icon: '🥬', cat: 'Vegetable' },
  { name: 'Swiss chard',     icon: '🥬', cat: 'Vegetable' },
  { name: 'Cabbage',         icon: '🥬', cat: 'Vegetable' },
  { name: 'Broccoli',        icon: '🥦', cat: 'Vegetable' },
  { name: 'Cauliflower',     icon: '🥦', cat: 'Vegetable' },
  { name: 'Brussels sprouts',icon: '🥦', cat: 'Vegetable' },
  { name: 'Kohlrabi',        icon: '🥦', cat: 'Vegetable' },
  { name: 'Peas',            icon: '🫛', cat: 'Vegetable' },
  { name: 'Green beans',     icon: '🫘', cat: 'Vegetable' },
  { name: 'Broad beans',     icon: '🫘', cat: 'Vegetable' },
  { name: 'Edamame',         icon: '🫘', cat: 'Vegetable' },
  { name: 'Corn',            icon: '🌽', cat: 'Vegetable' },
  { name: 'Asparagus',       icon: '🌱', cat: 'Vegetable' },
  { name: 'Celery',          icon: '🌿', cat: 'Vegetable' },
  { name: 'Fennel',          icon: '🌿', cat: 'Vegetable' },
  { name: 'Eggplant',        icon: '🍆', cat: 'Vegetable' },
  { name: 'Artichoke',       icon: '🌱', cat: 'Vegetable' },
  // Herbs
  { name: 'Basil',           icon: '🌿', cat: 'Herb' },
  { name: 'Parsley',         icon: '🌿', cat: 'Herb' },
  { name: 'Cilantro',        icon: '🌿', cat: 'Herb' },
  { name: 'Dill',            icon: '🌿', cat: 'Herb' },
  { name: 'Mint',            icon: '🌿', cat: 'Herb' },
  { name: 'Oregano',         icon: '🌿', cat: 'Herb' },
  { name: 'Thyme',           icon: '🌿', cat: 'Herb' },
  { name: 'Rosemary',        icon: '🌿', cat: 'Herb' },
  { name: 'Sage',            icon: '🌿', cat: 'Herb' },
  { name: 'Chives',          icon: '🌿', cat: 'Herb' },
  { name: 'Tarragon',        icon: '🌿', cat: 'Herb' },
  { name: 'Lemon balm',      icon: '🌿', cat: 'Herb' },
  { name: 'Lavender',        icon: '💜', cat: 'Herb' },
  // Fruits
  { name: 'Strawberries',    icon: '🍓', cat: 'Fruit' },
  { name: 'Raspberries',     icon: '🫐', cat: 'Fruit' },
  { name: 'Blueberries',     icon: '🫐', cat: 'Fruit' },
  { name: 'Blackberries',    icon: '🫐', cat: 'Fruit' },
  { name: 'Rhubarb',         icon: '🌱', cat: 'Fruit' },
  { name: 'Melon',           icon: '🍈', cat: 'Fruit' },
  { name: 'Watermelon',      icon: '🍉', cat: 'Fruit' },
  // Flowers
  { name: 'Sunflowers',      icon: '🌻', cat: 'Flower' },
  { name: 'Marigolds',       icon: '🌼', cat: 'Flower' },
  { name: 'Nasturtiums',     icon: '🌸', cat: 'Flower' },
  { name: 'Zinnias',         icon: '🌸', cat: 'Flower' },
  { name: 'Cosmos',          icon: '🌸', cat: 'Flower' },
  { name: 'Calendula',       icon: '🌼', cat: 'Flower' },
  { name: 'Sweet peas',      icon: '🌸', cat: 'Flower' },
  { name: 'Borage',          icon: '💙', cat: 'Flower' },
  { name: 'Chamomile',       icon: '🌼', cat: 'Flower' },
  { name: 'Echinacea',       icon: '🌸', cat: 'Flower' },
  { name: 'Dahlias',         icon: '🌺', cat: 'Flower' },
  { name: 'Snapdragons',     icon: '🌷', cat: 'Flower' },
  { name: 'Tulips',          icon: '🌷', cat: 'Flower' },
  { name: 'Roses',           icon: '🌹', cat: 'Flower' },
];

// ── BED LAYOUT ────────────────────────────────────────────────────────────────
// Positions as % of image dimensions. image is zoomed 134% with -17% left offset,
// so these coords map to the ORIGINAL image dimensions and the overlay wrapper
// tracks the same coordinate space as the rendered (zoomed) image.
// Fine-tune by opening app in browser and inspecting overlay positions.

// Positions as % of image (1204×1306 px).
// All beds measured except D12 (row 4 col 3) and D13 (row 5 col 1) which are extrapolated.
const BEDS = [
  // Row 1 — measured
  { id: 'bed-1',  name: 'District 1',  left: 24.5, top: 17.2, w: 11.3, h: 7.2 },
  { id: 'bed-2',  name: 'District 2',  left: 41.9, top: 17.3, w: 10.8, h: 7.1 },
  { id: 'bed-3',  name: 'District 3',  left: 57.8, top: 17.0, w: 11.4, h: 7.1 },
  // Row 2 — measured
  { id: 'bed-4',  name: 'District 4',  left: 24.3, top: 30.3, w: 11.7, h: 7.6 },
  { id: 'bed-5',  name: 'District 5',  left: 41.1, top: 30.2, w: 11.8, h: 7.2 },
  { id: 'bed-6',  name: 'District 6',  left: 58.0, top: 30.1, w: 12.0, h: 7.7 },
  // Row 3 — measured
  { id: 'bed-7',  name: 'District 7',  left: 23.3, top: 43.8, w: 11.7, h: 8.1 },
  { id: 'bed-8',  name: 'District 8',  left: 40.8, top: 44.0, w: 12.5, h: 7.8 },
  { id: 'bed-9',  name: 'District 9',  left: 58.5, top: 43.7, w: 12.3, h: 7.9 },
  // Row 4 — all measured
  { id: 'bed-10', name: 'District 10', left: 22.1, top: 57.4, w: 12.6, h: 8.7 },
  { id: 'bed-11', name: 'District 11', left: 40.3, top: 57.6, w: 12.6, h: 8.5 },
  { id: 'bed-12', name: 'District 12', left: 58.6, top: 57.8, w: 12.9, h: 8.2 },
  // Row 5 — all measured
  { id: 'bed-13', name: 'District 13', left: 21.4, top: 73.1, w: 13.1, h: 7.9 },
  { id: 'bed-14', name: 'District 14', left: 39.9, top: 72.5, w: 13.0, h: 8.3 },
];

// ── APP STATE ─────────────────────────────────────────────────────────────────

let currentUser = null;
let currentBedId = null;
let selectedPlant = null;
let selectedFertType = 'bokashi';
let bedData = {}; // { bedId: { plants: [], fertilizations: [] } }
let unsubscribers = [];

// ── INIT ──────────────────────────────────────────────────────────────────────

export function initApp() {
  const { auth, onAuthStateChanged, getRedirectResult } = window._fb;

  // Handle redirect result first (fires after Google redirects back)
  getRedirectResult(auth).then(result => {
    if (result?.user && !isAllowed(result.user.email)) {
      signOutUser();
    }
  }).catch(() => {});

  onAuthStateChanged(auth, (user) => {
    if (user && isAllowed(user.email)) {
      currentUser = user;
      showApp(user);
    } else {
      currentUser = null;
      showAuth();
      if (user) signOutUser();
    }
  });

  setupListeners();
}

function isAllowed(email) {
  const { ALLOWED_EMAILS } = window._fb;
  if (!ALLOWED_EMAILS || ALLOWED_EMAILS.length === 0) return true; // open during dev
  return ALLOWED_EMAILS.includes(email.toLowerCase());
}

// ── AUTH ──────────────────────────────────────────────────────────────────────

function showAuth() {
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('app-screen').classList.add('hidden');
}

function showApp(user) {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-screen').classList.remove('hidden');

  // User avatar/name in menu
  const img = document.getElementById('user-avatar');
  if (user.photoURL) img.src = user.photoURL;
  document.getElementById('user-name').textContent = user.displayName || '';
  document.getElementById('user-email').textContent = user.email || '';

  renderBedOverlays();
  subscribeAllBeds();
}

async function signInUser() {
  const { auth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } = window._fb;
  const provider = new GoogleAuthProvider();
  try {
    // Popup works on desktop and iOS Safari (user-gesture triggered).
    // If blocked, fall back to redirect.
    await signInWithPopup(auth, provider);
  } catch (e) {
    if (e.code === 'auth/popup-blocked') {
      await signInWithRedirect(auth, provider);
    } else if (e.code !== 'auth/popup-closed-by-user') {
      showToast('Sign-in failed. Please try again.');
    }
  }
}

async function signOutUser() {
  const { auth, signOut } = window._fb;
  unsubscribers.forEach(u => u());
  unsubscribers = [];
  bedData = {};
  await signOut(auth);
}

// ── BED OVERLAYS ──────────────────────────────────────────────────────────────

function renderBedOverlays() {
  const container = document.getElementById('bed-overlays');
  container.innerHTML = '';

  // Debug mode (?debug in URL): overlays hidden, tap image to record coordinates.
  if (new URLSearchParams(location.search).has('debug')) {
    document.getElementById('bed-overlays').style.pointerEvents = 'none';
    document.getElementById('bed-overlays').style.opacity = '0';

    // Inject debug panel
    const panel = document.createElement('div');
    panel.id = 'debug-panel';
    panel.innerHTML = `
      <div class="debug-header">
        <span>📍 Debug — tap beds to record corners</span>
        <button id="debug-clear">Clear</button>
      </div>
      <div id="debug-log"></div>`;
    document.getElementById('app-screen').appendChild(panel);

    let tapCount = 0;
    document.getElementById('debug-clear').addEventListener('click', () => {
      tapCount = 0;
      document.getElementById('debug-log').innerHTML = '';
    });

    document.getElementById('garden-map').addEventListener('click', e => {
      const rect = e.currentTarget.querySelector('.garden-image').getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      tapCount++;
      const n = tapCount;
      const text = `[${n}] left:${x}%, top:${y}%`;

      const entry = document.createElement('div');
      entry.className = 'debug-entry';
      entry.innerHTML = `<span class="debug-coords">${text}</span>
        <button class="debug-copy-btn">Copy</button>`;
      entry.querySelector('.debug-copy-btn').addEventListener('click', e => {
        e.stopPropagation();
        navigator.clipboard.writeText(text).then(() => showToast('Copied!'));
      });

      const log = document.getElementById('debug-log');
      log.prepend(entry); // newest on top
      if (log.children.length > 10) log.lastElementChild.remove();
    });
  }

  BEDS.forEach(bed => {
    const el = document.createElement('button');
    el.className = 'bed-overlay';
    el.id = `overlay-${bed.id}`;
    el.setAttribute('aria-label', bed.name);
    el.style.cssText = `left:${bed.left}%;top:${bed.top}%;width:${bed.w}%;height:${bed.h}%`;

    el.innerHTML = `<div class="bed-icons" id="icons-${bed.id}"></div>`;

    const label = document.createElement('span');
    label.className = 'bed-label';
    label.textContent = bed.name;
    label.style.cssText = `left:${bed.left}%;top:${bed.top + bed.h}%;width:${bed.w}%`;

    el.addEventListener('click', () => openBedSheet(bed.id));
    container.appendChild(el);
    container.appendChild(label);
  });

  // Seating area easter egg tap zone (bottom-left patio)
  const seatZone = document.createElement('div');
  seatZone.className = 'seating-zone';
  seatZone.style.cssText = 'left:4%;top:78%;width:22%;height:20%';
  seatZone.addEventListener('click', triggerDogEasterEgg);
  container.appendChild(seatZone);
}

// ── EASTER EGG ────────────────────────────────────────────────────────────────

// Italian Greyhound — single unified closed path for the full body+neck+head silhouette.
// Top outline: croup → back rise → withers → neck arching steeply up → skull → muzzle
// Bottom outline: nose → jaw → throat → chest → brisket → belly → tuck → hindquarters → close
const DOG_SVG = `<svg viewBox="0 0 210 95" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="dog-body-clip">
      <path d="M50 30 C70 25,102 20,120 18 C130 16,142 10,154 8 C159 8,167 11,173 15 C178 18,184 20,188 22 L188 26 C185 29,180 32,174 34 C167 38,158 43,150 46 C142 51,133 54,122 54 C110 54,98 50,88 46 C78 43,68 44,62 46 C58 47,54 45,52 38 C50 34,50 32,50 30 Z"/>
    </clipPath>
  </defs>
  <path fill="none" stroke="white" stroke-width="2.8" stroke-linecap="round"
        d="M50 28 C38 22,28 18,22 20 C18 22,22 28,32 30"/>
  <g transform="translate(65,46)"><g class="dog-leg leg-diag-b">
    <rect x="-3" y="0" width="6" height="28" rx="3" fill="#d4d4d4"/>
    <ellipse cx="0" cy="30" rx="4.5" ry="2" fill="#d4d4d4"/>
  </g></g>
  <g transform="translate(120,52)"><g class="dog-leg leg-diag-b">
    <rect x="-3" y="0" width="6" height="22" rx="3" fill="#d4d4d4"/>
    <ellipse cx="0" cy="24" rx="4.5" ry="2" fill="#d4d4d4"/>
  </g></g>
  <path fill="white"
    d="M50 30 C70 25,102 20,120 18 C130 16,142 10,154 8 C159 8,167 11,173 15 C178 18,184 20,188 22 L188 26 C185 29,180 32,174 34 C167 38,158 43,150 46 C142 51,133 54,122 54 C110 54,98 50,88 46 C78 43,68 44,62 46 C58 47,54 45,52 38 C50 34,50 32,50 30 Z"/>
  <ellipse cx="92" cy="24" rx="24" ry="8" fill="#7a3a10" clip-path="url(#dog-body-clip)"/>
  <ellipse cx="188" cy="24" rx="2.8" ry="2.2" fill="#555"/>
  <circle cx="172" cy="19" r="1.8" fill="#333"/>
  <path fill="#e0e0e0" d="M170 10 C165 4,158 6,157 10 C161 14,167 12,170 10 Z"/>
  <g transform="translate(71,46)"><g class="dog-leg leg-diag-a">
    <rect x="-3" y="0" width="6" height="28" rx="3" fill="white"/>
    <ellipse cx="0" cy="30" rx="4.5" ry="2" fill="white"/>
  </g></g>
  <g transform="translate(126,52)"><g class="dog-leg leg-diag-a">
    <rect x="-3" y="0" width="6" height="22" rx="3" fill="white"/>
    <ellipse cx="0" cy="24" rx="4.5" ry="2" fill="white"/>
  </g></g>
</svg>`;

function triggerDogEasterEgg() {
  const inner = document.getElementById('garden-map-inner');
  if (document.getElementById('easter-dog')) return;

  const dog = document.createElement('div');
  dog.id = 'easter-dog';
  dog.className = 'easter-dog';
  dog.innerHTML = DOG_SVG;
  inner.appendChild(dog);

  // Path through the row 2–3 alley (~y=38%). Dog always faces right.
  const path = [
    [0,    -10, 38],
    [700,    5, 38],   // entered
    [2800,  37, 38],   // reached col 1-2 gap (slow trot)
    [3700,  37, 38],   // pause / sniff
    [4500,  37, 38],   // pre-bolt freeze
    [6800, 115, 38],   // BOLT off screen
    [7000, 115, 38],
  ];

  const startTime = performance.now();
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOut(t) { return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2; }

  function tick(now) {
    const elapsed = now - startTime;
    if (elapsed >= 7000) { dog.remove(); return; }

    let i = 0;
    while (i < path.length - 2 && elapsed >= path[i + 1][0]) i++;
    const [ta, xa, ya] = path[i];
    const [tb, xb, yb] = path[i + 1];
    const segT = tb > ta ? Math.min(1, (elapsed - ta) / (tb - ta)) : 1;
    const t    = easeInOut(segT);

    const x = lerp(xa, xb, t);
    const y = lerp(ya, yb, t);

    const bolting = elapsed > 4500;
    if (bolting) dog.classList.add('running');

    const bob = Math.sin(elapsed / (bolting ? 70 : 200) * Math.PI) * (bolting ? 1.5 : 0.8);
    dog.style.left      = x + '%';
    dog.style.top       = y + '%';
    dog.style.transform = `translateY(${bob}px)`;

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function updateBedOverlay(bedId) {
  const data = bedData[bedId] || { plants: [], fertilizations: [] };
  const el = document.getElementById(`overlay-${bedId}`);
  const iconsEl = document.getElementById(`icons-${bedId}`);
  if (!el || !iconsEl) return;

  const hasFert = data.fertilizations.length > 0;
  el.classList.toggle('state-fertilized', hasFert);

  // Show up to 4 plant emojis; de-duplicate same plant
  const seen = new Set();
  const unique = data.plants.filter(p => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });

  iconsEl.innerHTML = unique.slice(0, 4).map(p =>
    `<span class="bed-icon" title="${p.name}">${p.icon || '🌱'}</span>`
  ).join('');
}

// ── FIRESTORE SUBSCRIPTIONS ───────────────────────────────────────────────────

function subscribeAllBeds() {
  const { db, collection, query, orderBy, onSnapshot } = window._fb;

  BEDS.forEach(bed => {
    bedData[bed.id] = { plants: [], fertilizations: [] };

    const unsubPlants = onSnapshot(
      query(collection(db, 'beds', bed.id, 'plants'), orderBy('datePlanted', 'desc')),
      snap => {
        bedData[bed.id].plants = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        updateBedOverlay(bed.id);
        if (currentBedId === bed.id) renderBedSheetContent(bed.id);
      }
    );

    const unsubFert = onSnapshot(
      query(collection(db, 'beds', bed.id, 'fertilizations'), orderBy('dateApplied', 'desc')),
      snap => {
        bedData[bed.id].fertilizations = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        updateBedOverlay(bed.id);
        if (currentBedId === bed.id) renderBedSheetContent(bed.id);
      }
    );

    unsubscribers.push(unsubPlants, unsubFert);
  });
}

// ── BED DETAIL SHEET ──────────────────────────────────────────────────────────

function openBedSheet(bedId) {
  currentBedId = bedId;
  const bed = BEDS.find(b => b.id === bedId);
  document.getElementById('sheet-bed-name').textContent = bed.name;
  renderBedSheetContent(bedId);
  showSheet('bed-sheet');
}

function renderBedSheetContent(bedId) {
  const data = bedData[bedId] || { plants: [], fertilizations: [] };
  renderPlantsList(data.plants);
  renderFertilizerList(data.fertilizations);
}

function renderPlantsList(plants) {
  const el = document.getElementById('plants-list');
  if (plants.length === 0) {
    el.innerHTML = '<p class="empty-hint">Nothing planted here yet.</p>';
    return;
  }
  el.innerHTML = plants.map(p => `
    <div class="plant-chip">
      <span>${p.icon || '🌱'} ${p.name}</span>
      <span class="plant-chip-date">${formatDate(p.datePlanted?.toDate?.() || p.datePlanted)}</span>
      <button class="plant-chip-remove" data-id="${p.id}" aria-label="Remove ${p.name}">×</button>
    </div>
  `).join('');

  el.querySelectorAll('.plant-chip-remove').forEach(btn => {
    btn.addEventListener('click', () => removePlant(currentBedId, btn.dataset.id));
  });
}

function renderFertilizerList(fertilizations) {
  const el = document.getElementById('fertilizer-list');
  if (fertilizations.length === 0) {
    el.innerHTML = '<p class="empty-hint">No fertilization logged yet.</p>';
    return;
  }
  el.innerHTML = fertilizations.map(f => `
    <div class="fert-entry">
      <div class="fert-entry-left">
        <span class="fert-entry-type">${fertLabel(f.type)}</span>
        <span class="fert-entry-date">${formatDate(f.dateApplied?.toDate?.() || f.dateApplied)}</span>
      </div>
      <button class="fert-remove" data-id="${f.id}" aria-label="Remove">×</button>
    </div>
  `).join('');

  el.querySelectorAll('.fert-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFertilizer(currentBedId, btn.dataset.id));
  });
}

// ── ADD PLANT PANEL ───────────────────────────────────────────────────────────

function openPlantPanel() {
  const bed = BEDS.find(b => b.id === currentBedId);
  document.getElementById('plant-panel-bed').textContent = bed.name;
  selectedPlant = null;
  document.getElementById('plant-search').value = '';
  document.getElementById('plant-date-input').value = todayString();
  document.getElementById('plant-save-btn').disabled = true;
  renderPlantPicker('');
  showSheet('plant-panel');
}

function renderPlantPicker(query) {
  const q = query.toLowerCase().trim();
  const list = document.getElementById('plant-picker-list');

  const filtered = q
    ? PLANT_LIBRARY.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q))
    : PLANT_LIBRARY;

  // If typed text doesn't match any plant exactly, offer a custom entry
  const customEntry = q && !PLANT_LIBRARY.find(p => p.name.toLowerCase() === q)
    ? [{ name: q.charAt(0).toUpperCase() + q.slice(1), icon: '🌱', cat: 'Custom', custom: true }]
    : [];

  const items = [...customEntry, ...filtered];

  list.innerHTML = items.map(p => `
    <button class="plant-option ${selectedPlant?.name === p.name ? 'selected' : ''}"
            data-name="${p.name}" data-icon="${p.icon}" data-cat="${p.cat}">
      <span class="plant-option-icon">${p.icon}</span>
      <span class="plant-option-name">
        ${p.name}
        <span class="plant-option-cat">${p.cat}</span>
      </span>
    </button>
  `).join('');

  list.querySelectorAll('.plant-option').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedPlant = { name: btn.dataset.name, icon: btn.dataset.icon, cat: btn.dataset.cat };
      document.getElementById('plant-save-btn').disabled = false;
      renderPlantPicker(document.getElementById('plant-search').value);
    });
  });
}

async function savePlant() {
  if (!selectedPlant || !currentBedId) return;
  const { db, collection, addDoc, serverTimestamp } = window._fb;
  const dateVal = document.getElementById('plant-date-input').value;

  try {
    await addDoc(collection(db, 'beds', currentBedId, 'plants'), {
      name: selectedPlant.name,
      icon: selectedPlant.icon,
      cat: selectedPlant.cat,
      datePlanted: dateVal ? new Date(dateVal + 'T12:00:00') : new Date(),
      addedAt: serverTimestamp(),
      addedBy: currentUser.email,
    });
    closePlantPanel();
    showToast(`${selectedPlant.name} added!`);
  } catch (e) {
    showToast('Could not save. Try again.');
    console.error(e);
  }
}

async function removePlant(bedId, plantDocId) {
  const { db, doc, deleteDoc } = window._fb;
  try {
    await deleteDoc(doc(db, 'beds', bedId, 'plants', plantDocId));
  } catch (e) {
    showToast('Could not remove plant.');
  }
}

// ── ADD FERTILIZER PANEL ──────────────────────────────────────────────────────

function openFertilizerPanel() {
  selectedFertType = 'bokashi';
  document.querySelectorAll('.fert-type-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === 'bokashi');
  });
  document.getElementById('fert-date-input').value = todayString();
  document.getElementById('fert-other-input').value = '';
  document.getElementById('fert-other-wrap').classList.add('hidden');
  showSheet('fertilizer-panel');
}

async function saveFertilizer() {
  const { db, collection, addDoc, serverTimestamp } = window._fb;
  const dateVal = document.getElementById('fert-date-input').value;
  const otherText = document.getElementById('fert-other-input').value.trim();
  const type = selectedFertType === 'other' && otherText ? otherText : selectedFertType;

  try {
    await addDoc(collection(db, 'beds', currentBedId, 'fertilizations'), {
      type,
      dateApplied: dateVal ? new Date(dateVal + 'T12:00:00') : new Date(),
      loggedAt: serverTimestamp(),
      loggedBy: currentUser.email,
    });
    closeFertPanel();
    showToast('Fertilization logged!');
  } catch (e) {
    showToast('Could not save. Try again.');
    console.error(e);
  }
}

async function removeFertilizer(bedId, fertDocId) {
  const { db, doc, deleteDoc } = window._fb;
  try {
    await deleteDoc(doc(db, 'beds', bedId, 'fertilizations', fertDocId));
  } catch (e) {
    showToast('Could not remove entry.');
  }
}

// ── SHEET MANAGEMENT ──────────────────────────────────────────────────────────

function showSheet(id) {
  document.getElementById(id).classList.remove('hidden');
}

function hideSheet(id) {
  document.getElementById(id).classList.add('hidden');
}

function closeBedSheet() {
  hideSheet('bed-sheet');
  closePlantPanel();
  closeFertPanel();
  currentBedId = null;
}

function closePlantPanel() {
  hideSheet('plant-panel');
  selectedPlant = null;
}

function closeFertPanel() {
  hideSheet('fertilizer-panel');
}

// ── UTILITY ───────────────────────────────────────────────────────────────────

function fertLabel(type) {
  const labels = {
    bokashi: '🪣 Bokashi manure',
    compost: '🌱 Compost',
    liquid: '💧 Liquid fertilizer',
    other: '📦 Other',
  };
  return labels[type] || `📦 ${type}`;
}

function formatDate(d) {
  if (!d) return '';
  const date = d instanceof Date ? d : new Date(d);
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function todayString() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  el.classList.add('visible');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove('visible');
    el.classList.add('hidden');
  }, 2500);
}

// ── MAP ZOOM / PAN ────────────────────────────────────────────────────────────

function initMapZoom() {
  const wrapper = document.getElementById('garden-map');
  const inner   = document.getElementById('garden-map-inner');

  let scale = 1, tx = 0, ty = 0;
  let startScale, startTx, startTy, startMid, startDist;
  let isDragging = false, dragDidHappen = false;

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function applyTransform() {
    const ww = wrapper.offsetWidth,  wh = wrapper.offsetHeight;
    const iw = inner.offsetWidth,    ih = inner.offsetHeight;
    // When image is smaller than wrapper, lock to origin; otherwise allow pan to edge
    tx = clamp(tx, Math.min(0, ww - iw * scale), 0);
    ty = clamp(ty, Math.min(0, wh - ih * scale), 0);
    inner.style.transform = `translate(${tx}px,${ty}px) scale(${scale})`;
  }

  function touchDist(a, b) {
    const dx = a.clientX - b.clientX, dy = a.clientY - b.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function touchMid(a, b) {
    return { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };
  }

  // Safari fires GestureEvents for pinch; prevent them so our touch handlers take over
  wrapper.addEventListener('gesturestart',  e => e.preventDefault(), { passive: false });
  wrapper.addEventListener('gesturechange', e => e.preventDefault(), { passive: false });

  wrapper.addEventListener('touchstart', e => {
    startScale = scale; startTx = tx; startTy = ty;
    isDragging = false; dragDidHappen = false;
    if (e.touches.length === 2) {
      e.preventDefault(); // stop Safari from doing its own page zoom
      startMid  = touchMid(e.touches[0], e.touches[1]);
      startDist = touchDist(e.touches[0], e.touches[1]);
    } else {
      startMid = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, { passive: false });

  wrapper.addEventListener('touchmove', e => {
    if (e.touches.length === 2) {
      e.preventDefault();
      isDragging = true; dragDidHappen = true;
      const newDist = touchDist(e.touches[0], e.touches[1]);
      const newMid  = touchMid(e.touches[0], e.touches[1]);
      const newScale = clamp(startScale * (newDist / startDist), 1, 5);
      const ratio = newScale / startScale;
      const rect = wrapper.getBoundingClientRect();
      const px = startMid.x - rect.left, py = startMid.y - rect.top;
      tx = px - ratio * (px - startTx) + (newMid.x - startMid.x);
      ty = py - ratio * (py - startTy) + (newMid.y - startMid.y);
      scale = newScale;
      applyTransform();
    } else if (e.touches.length === 1) {
      const dx = e.touches[0].clientX - startMid.x;
      const dy = e.touches[0].clientY - startMid.y;
      if (!isDragging && dx * dx + dy * dy < 36) return; // 6px threshold
      e.preventDefault();
      isDragging = true; dragDidHappen = true;
      tx = startTx + dx; ty = startTy + dy;
      applyTransform();
    }
  }, { passive: false });

  wrapper.addEventListener('touchend', e => {
    if (e.touches.length === 1) {
      // Lifted one finger mid-pinch — restart pan from current position
      startScale = scale; startTx = tx; startTy = ty;
      startMid = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      isDragging = false;
    }
  }, { passive: true });

  // Block bed-button clicks that were actually part of a drag
  wrapper.addEventListener('click', e => {
    if (dragDidHappen) { e.stopPropagation(); dragDidHappen = false; }
  }, true);
}

// ── EVENT LISTENERS ───────────────────────────────────────────────────────────

function setupListeners() {
  initMapZoom();

  // Auth
  document.getElementById('sign-in-btn').addEventListener('click', signInUser);

  // Menu
  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('menu-overlay').classList.remove('hidden');
  });
  document.getElementById('menu-backdrop').addEventListener('click', () => {
    document.getElementById('menu-overlay').classList.add('hidden');
  });
  document.getElementById('sign-out-btn').addEventListener('click', async () => {
    document.getElementById('menu-overlay').classList.add('hidden');
    await signOutUser();
  });

  // Bed sheet
  document.getElementById('sheet-close').addEventListener('click', closeBedSheet);
  document.getElementById('add-plant-btn').addEventListener('click', openPlantPanel);
  document.getElementById('add-fertilizer-btn').addEventListener('click', openFertilizerPanel);

  // Plant panel
  document.getElementById('plant-panel-close').addEventListener('click', closePlantPanel);
  document.getElementById('plant-search').addEventListener('input', e => {
    selectedPlant = null;
    document.getElementById('plant-save-btn').disabled = true;
    renderPlantPicker(e.target.value);
  });
  document.getElementById('plant-save-btn').addEventListener('click', savePlant);

  // Fertilizer panel
  document.getElementById('fert-panel-close').addEventListener('click', closeFertPanel);
  document.querySelectorAll('.fert-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedFertType = btn.dataset.type;
      document.querySelectorAll('.fert-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('fert-other-wrap').classList.toggle('hidden', selectedFertType !== 'other');
    });
  });
  document.getElementById('fert-save-btn').addEventListener('click', saveFertilizer);

  // Close sheets on outside tap (bed sheet backdrop)
  document.addEventListener('click', e => {
    if (e.target === document.getElementById('app-screen')) closeBedSheet();
  });
}
