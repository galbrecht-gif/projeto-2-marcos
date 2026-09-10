/* ===================================================
   GEEKVERSE - SCRIPT JAVASCRIPT
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. ALTERNADOR DE TEMA (MODO CLARO / ESCURO)
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  if (themeToggleBtn) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      themeToggleBtn.textContent = '🌙 Mudar Tema';
    }

    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      themeToggleBtn.textContent = isLight ? '🌙 Mudar Tema' : '☀️ Mudar Tema';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // 2. GERADOR DE CURIOSIDADES
  const curiosityText = document.getElementById('curiosity-text');
  const newCuriosityBtn = document.getElementById('btn-new-curiosity');

  const curiosities = [
    "O nome do Mario era originalmente 'Jumpman' no jogo Donkey Kong de 1981.",
    "Em Vingadores: Ultimato, a frase 'Eu te amo 3000' foi inspirada por algo que os filhos de Robert Downey Jr. diziam a ele.",
    "O criador de Pokémon, Satoshi Tajiri, baseou o conceito do jogo na sua infância colecionando insetos.",
    "A linguagem Klingon de Star Trek é uma língua real e estruturada, criada pelo linguista Marc Okrand.",
    "O som do rugido do Godzilla foi criado esfregando uma luva de couro com resina nas cordas de um contrabaixo."
  ];

  if (curiosityText && newCuriosityBtn) {
    newCuriosityBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * curiosities.length);
      curiosityText.textContent = `"${curiosities[randomIndex]}"`;
    });
  }

  // 3. FILTRO INTERATIVO DA PÁGINA DE GAMES
  const filterBtns = document.querySelectorAll('.filter-btn');
  const gameCards = document.querySelectorAll('.game-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        gameCards.forEach(card => {
          const cardCategories = card.getAttribute('data-category');
          if (filterValue === 'all' || cardCategories.includes(filterValue)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. SUBMISSÃO DE FORMULÁRIO
  const configForm = document.getElementById('cad-form');
  if (configForm) {
    configForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cadastro efetuado localmente no Front-End!\nOs dados serão sincronizados com a VM Linux assim que o banco for fornecido.');
      configForm.reset();
    });
  }
});