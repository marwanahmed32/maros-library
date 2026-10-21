const search = document.getElementById('search');
const category = document.getElementById('category');
const cards = [...document.querySelectorAll('.card')];
const empty = document.getElementById('empty');
const count = document.getElementById('count');
function filterGames() {
  const q = search.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const ok = card.dataset.title.includes(q) && (category.value === 'all' || card.dataset.category === category.value);
    card.hidden = !ok;
    if (ok) shown++;
  });
  empty.hidden = shown !== 0;
  count.textContent = shown === 1 ? 'لعبة واحدة' : `${shown} ألعاب`;
}
search.addEventListener('input', filterGames);
category.addEventListener('change', filterGames);
document.querySelectorAll('.details').forEach(button => button.addEventListener('click', () => {
  const p = button.closest('.info').querySelector('.description');
  p.hidden = !p.hidden;
  button.textContent = p.hidden ? 'التفاصيل' : 'إخفاء التفاصيل';
}));
document.getElementById('year').textContent = new Date().getFullYear();
