// Reserevx - Booking Page Logic

let currentCategory = 'bus';
let currentResults = [];
let selectedItem = null;

document.addEventListener('DOMContentLoaded', () => {
  currentCategory = document.body.dataset.category || 'bus';
  initBookingPage();
});

function initBookingPage() {
  setDefaultDate();
  loadResults();
  initFilters();
  initModal();
  prefillFromUrl();
}

function prefillFromUrl() {
  const params = getUrlParams();
  const fromInput = document.querySelector('[name="from"]');
  const toInput = document.querySelector('[name="to"]');
  const dateInput = document.querySelector('[name="date"]');

  if (params.from && fromInput) fromInput.value = params.from;
  if (params.to && toInput) toInput.value = params.to;
  if (params.date && dateInput) dateInput.value = params.date;

  if (params.from || params.to) {
    searchItems();
  }
}

function loadResults() {
  currentResults = [...(BOOKING_DATA[currentCategory] || [])];
  renderResults(currentResults);
}

function searchItems() {
  const from = document.querySelector('[name="from"]')?.value.toLowerCase() || '';
  const to = document.querySelector('[name="to"]')?.value.toLowerCase() || '';
  const date = document.querySelector('[name="date"]')?.value || '';

  currentResults = (BOOKING_DATA[currentCategory] || []).filter(item => {
    const matchFrom = !from || item.from.toLowerCase().includes(from);
    const matchTo = !to || (item.to && item.to.toLowerCase().includes(to));
    return matchFrom && matchTo;
  });

  applyFilters();
  showToast(`Found ${currentResults.length} results`, 'success');
}

function initFilters() {
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      searchItems();
    });
  }

  const sortSelect = document.getElementById('sort-by');
  if (sortSelect) {
    sortSelect.addEventListener('change', applyFilters);
  }

  const priceRange = document.getElementById('price-range');
  if (priceRange) {
    priceRange.addEventListener('input', () => {
      document.getElementById('price-label').textContent = formatPrice(parseInt(priceRange.value));
      applyFilters();
    });
  }

  const typeFilter = document.getElementById('type-filter');
  if (typeFilter) {
    typeFilter.addEventListener('change', applyFilters);
  }
}

function applyFilters() {
  let filtered = [...currentResults];

  const sortBy = document.getElementById('sort-by')?.value;
  const maxPrice = parseInt(document.getElementById('price-range')?.value || '999999');
  const typeFilter = document.getElementById('type-filter')?.value;

  filtered = filtered.filter(item => item.price <= maxPrice);

  if (typeFilter && typeFilter !== 'all') {
    filtered = filtered.filter(item => item.type === typeFilter);
  }

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderResults(filtered);
}

function renderResults(items) {
  const container = document.getElementById('results-list');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">🔍</div>
        <h3>No results found</h3>
        <p>Try changing your search criteria or filters</p>
      </div>
    `;
    return;
  }

  const info = CATEGORY_INFO[currentCategory];

  container.innerHTML = items.map(item => `
    <div class="result-card" data-id="${item.id}">
      <div class="result-info">
        <h3>${item.name}</h3>
        <div class="result-meta">
          <span>${info.icon} ${item.operator}</span>
          ${item.from ? `<span>📍 ${item.from}${item.to ? ' → ' + item.to : ''}</span>` : `<span>📍 ${item.from}</span>`}
          <span>🕐 ${item.departure}${item.arrival ? ' - ' + item.arrival : ''}</span>
          <span>⏱ ${item.duration}</span>
          <span>⭐ ${item.rating}</span>
          ${item.seats ? `<span class="badge badge-${item.seats > 20 ? 'success' : item.seats > 10 ? 'warning' : 'info'}">${item.seats} seats left</span>` : ''}
        </div>
        <div style="margin-top:8px">
          <span class="badge badge-info">${item.type}</span>
          ${item.genre ? `<span class="badge badge-warning">${item.genre}</span>` : ''}
          ${item.language ? `<span class="badge badge-success">${item.language}</span>` : ''}
        </div>
      </div>
      <div class="result-actions">
        <div class="result-price">
          <div class="price">${formatPrice(item.price)}</div>
          <div class="per">per person</div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openBookingModal('${item.id}')">Book Now</button>
      </div>
    </div>
  `).join('');
}

function openBookingModal(itemId) {
  selectedItem = currentResults.find(i => i.id === itemId) ||
    (BOOKING_DATA[currentCategory] || []).find(i => i.id === itemId);

  if (!selectedItem) return;

  const modal = document.getElementById('booking-modal');
  const summary = document.getElementById('booking-summary');

  summary.innerHTML = `
    <div class="row"><span>Service</span><span>${selectedItem.name}</span></div>
    <div class="row"><span>Operator</span><span>${selectedItem.operator}</span></div>
    ${selectedItem.from ? `<div class="row"><span>From</span><span>${selectedItem.from}</span></div>` : ''}
    ${selectedItem.to ? `<div class="row"><span>To</span><span>${selectedItem.to}</span></div>` : ''}
    <div class="row"><span>Time</span><span>${selectedItem.departure}</span></div>
    <div class="row"><span>Type</span><span>${selectedItem.type}</span></div>
    <div class="row"><span>Passengers</span><span id="passenger-count-display">1</span></div>
    <div class="row total"><span>Total</span><span id="total-price">${formatPrice(selectedItem.price)}</span></div>
  `;

  document.getElementById('passengers').value = 1;
  modal.classList.add('active');
}

function initModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  document.querySelector('.modal-close')?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.getElementById('passengers')?.addEventListener('change', updateTotal);

  document.getElementById('confirm-booking')?.addEventListener('click', confirmBooking);
}

function closeModal() {
  document.getElementById('booking-modal')?.classList.remove('active');
  selectedItem = null;
}

function updateTotal() {
  if (!selectedItem) return;
  const passengers = parseInt(document.getElementById('passengers').value) || 1;
  const total = selectedItem.price * passengers;

  document.getElementById('passenger-count-display').textContent = passengers;
  document.getElementById('total-price').textContent = formatPrice(total);
}

function confirmBooking() {
  if (!selectedItem) return;

  const name = document.getElementById('passenger-name').value.trim();
  const email = document.getElementById('passenger-email').value.trim();
  const phone = document.getElementById('passenger-phone').value.trim();
  const passengers = parseInt(document.getElementById('passengers').value) || 1;

  if (!name || !email || !phone) {
    showToast('Please fill in all passenger details', 'error');
    return;
  }

  if (!email.includes('@')) {
    showToast('Please enter a valid email', 'error');
    return;
  }

  const booking = {
    id: generateBookingId(),
    itemId: selectedItem.id,
    category: currentCategory,
    name: selectedItem.name,
    operator: selectedItem.operator,
    from: selectedItem.from,
    to: selectedItem.to || '',
    departure: selectedItem.departure,
    type: selectedItem.type,
    passengerName: name,
    email,
    phone,
    passengers,
    totalPrice: selectedItem.price * passengers,
    bookedAt: new Date().toISOString(),
    status: 'Confirmed',
  };

  saveBooking(booking);
  closeModal();
  showToast(`Booking confirmed! ID: ${booking.id}`, 'success');
  updateBookingCount();

  document.getElementById('passenger-name').value = '';
  document.getElementById('passenger-email').value = '';
  document.getElementById('passenger-phone').value = '';
}

function populateTypeFilter() {
  const select = document.getElementById('type-filter');
  if (!select) return;

  const types = [...new Set((BOOKING_DATA[currentCategory] || []).map(i => i.type))];
  types.forEach(type => {
    const option = document.createElement('option');
    option.value = type;
    option.textContent = type;
    select.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', populateTypeFilter);
