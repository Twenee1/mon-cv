const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // 1. On bascule la classe .light-mode sur le body
    body.classList.toggle('light-mode');

    // 2. On change l'icône selon le mode
    if (body.classList.contains('light-mode')) {
        themeIcon.textContent = '🌙'; // Lune pour repasser en mode sombre
    } else {
        themeIcon.textContent = '☀️'; // Soleil pour repasser en mode clair
    }
});