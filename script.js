document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-btn');
    const signinForm = document.getElementById('signinForm');
    const usernameInput = document.getElementById('username');
    const displayName = document.getElementById('user');
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();
        displayName.textContent = usernameInput.value;
        modal.style.display = 'none';

    });
});
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  }