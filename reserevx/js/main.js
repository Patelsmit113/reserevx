// Reserevx - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSearchTabs();
  initHomeSearch();
  highlightActiveNav();
});

function initNavbar() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initSearchTabs() {
  const tabs = document.querySelectorAll('.search-tab');
  const forms = document.querySelectorAll('.search-form-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      forms.forEach(form => {
        form.style.display = form.dataset.category === category ? 'grid' : 'none';
      });
    });
  });
}

function initHomeSearch() {
  const homeForm = document.getElementById('home-search-form');
  if (!homeForm) return;

  homeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const activeTab = document.querySelector('.search-tab.active');
    const category = activeTab ? activeTab.dataset.category : 'bus';
    const activePanel = document.querySelector(`.search-form-panel[data-category="${category}"]`);

    const from = activePanel.querySelector('[name="from"]')?.value || '';
    const to = activePanel.querySelector('[name="to"]')?.value || '';
    const date = activePanel.querySelector('[name="date"]')?.value || '';

    const params = new URLSearchParams({ from, to, date });
    const page = CATEGORY_INFO[category]?.page || 'bus.html';
    window.location.href = `${page}?${params.toString()}`;
  });

  setDefaultDate();
}

function setDefaultDate() {
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    if (!input.value) input.value = today;
    input.min = today;
  });
}

function showToast(message, type = 'success') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.className = `toast ${type} show`;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function generateBookingId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'RVX-';
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem('reserevx_bookings') || '[]');
  } catch {
    return [];
  }
}

function saveBooking(booking) {
  const bookings = getBookings();
  bookings.unshift(booking);
  localStorage.setItem('reserevx_bookings', JSON.stringify(bookings));
}

function getUrlParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

function updateBookingCount() {
  const count = getBookings().length;
  const badge = document.getElementById('booking-count');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
}

document.addEventListener('DOMContentLoaded', updateBookingCount);
