//nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//gazeti
    const btn = document.getElementById('toggleBtn');
    const desc = document.getElementById('desc');

    btn.addEventListener('click', () => {
      const expanded = desc.classList.toggle('expanded');
      btn.textContent = expanded ? 'მოკლედ' : 'დაწვრილებით';
    });