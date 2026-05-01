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
  // Row 4 — D10+D11 measured; D12 extrapolated from col-3 drift (+0.5/row, top from col avg)
  { id: 'bed-10', name: 'District 10', left: 22.1, top: 57.4, w: 12.6, h: 8.7 },
  { id: 'bed-11', name: 'District 11', left: 40.3, top: 57.6, w: 12.6, h: 8.5 },
  { id: 'bed-12', name: 'District 12', left: 59.0, top: 57.7, w: 12.9, h: 8.4 },
  // Row 5 — D14 measured; D13 extrapolated from col-1 drift (-1.3/row)
  { id: 'bed-13', name: 'District 13', left: 20.8, top: 72.5, w: 13.0, h: 8.5 },
  { id: 'bed-14', name: 'District 14', left: 40.1, top: 72.5, w: 12.8, h: 8.4 },
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

    el.innerHTML = `<div class="bed-icons" id="icons-${bed.id}"></div>
                    <span class="bed-label">${bed.name}</span>`;

    el.addEventListener('click', () => openBedSheet(bed.id));
    container.appendChild(el);
  });
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

// ── EVENT LISTENERS ───────────────────────────────────────────────────────────

function setupListeners() {
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
