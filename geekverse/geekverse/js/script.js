/* ===== GeekVerse — Interações ===== */

// 1) Modo claro / escuro
const temaBtn = document.getElementById("temaBtn");

if (localStorage.getItem("geekverse-tema") === "light") {
  document.body.classList.add("light");
  temaBtn.textContent = "☀️ Tema";
}

temaBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");
  const claro = document.body.classList.contains("light");
  temaBtn.textContent = claro ? "☀️ Tema" : "🌙 Tema";
  localStorage.setItem("geekverse-tema", claro ? "light" : "dark");
});

// 2) Curiosidade aleatória
const curiosidades = [
  "O Game Boy foi lançado em 1989 e vendeu mais de 118 milhões de unidades.",
  "Pac-Man foi inspirado em uma pizza com uma fatia faltando.",
  "O nome 'Nintendo' pode ser traduzido como 'deixe a sorte ao céu'.",
  "Naruto foi desenhado inicialmente como um espírito da culinária ramen.",
  "O primeiro filme da Marvel Studios foi Homem de Ferro, em 2008.",
  "A palavra 'anime' vem da abreviação japonesa da palavra inglesa 'animation'.",
  "O código Konami (↑↑↓↓←→←→BA) aparece em centenas de jogos.",
  "O primeiro e-mail da história foi enviado em 1971 por Ray Tomlinson.",
];

const randomBtn = document.getElementById("randomBtn");
const randomText = document.getElementById("randomText");
let ultimo = -1;

randomBtn.addEventListener("click", function () {
  let i = Math.floor(Math.random() * curiosidades.length);
  while (i === ultimo && curiosidades.length > 1) {
    i = Math.floor(Math.random() * curiosidades.length);
  }
  ultimo = i;
  randomText.textContent = "💡 " + curiosidades[i];
});

// 3) Menu responsivo (mobile)
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", function () {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});
