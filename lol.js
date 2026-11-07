const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

// Navbar shadow on scroll like Apple
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if(window.scrollY > 10) nav.style.boxShadow = '0 2px 10px rgba(0,0,0,.1)';
  else nav.style.boxShadow = 'none';
});