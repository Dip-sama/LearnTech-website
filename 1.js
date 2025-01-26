// Sidebar Toggle
function openSidebar() {
  const navbar = document.getElementById('navbar');
  const overlay = document.getElementById('overlay');
  navbar.classList.add('active');
  overlay.style.display = 'block';
  document.getElementById('open-sidebar-button').setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
  const navbar = document.getElementById('navbar');
  const overlay = document.getElementById('overlay');
  navbar.classList.remove('active');
  overlay.style.display = 'none';
  document.getElementById('open-sidebar-button').setAttribute('aria-expanded', 'false');
}
