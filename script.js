const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

function openDrawer(){
  drawer.classList.add('open'); overlay.classList.add('open');
  drawer.setAttribute('aria-hidden','false'); menuBtn.setAttribute('aria-expanded','true');
}
function closeDrawer(){
  drawer.classList.remove('open'); overlay.classList.remove('open');
  drawer.setAttribute('aria-hidden','true'); menuBtn.setAttribute('aria-expanded','false');
}
menuBtn.addEventListener('click', openDrawer);
closeBtn.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);

const views = {
  home: document.getElementById('homeView'),
  catalog: document.getElementById('catalogView'),
  about: document.getElementById('aboutView')
};
const navItems = document.querySelectorAll('.nav-item');

function showView(name){
  Object.values(views).forEach(v => v.classList.remove('active'));
  (views[name] || views.home).classList.add('active');
  navItems.forEach(n => n.classList.toggle('active', n.dataset.view === name));
  closeDrawer();
  window.scrollTo({top:0, behavior:'smooth'});
}
document.querySelectorAll('[data-view]').forEach(el => {
  el.addEventListener('click', () => showView(el.dataset.view));
});

const modal = document.getElementById('categoryModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalEyebrow = document.getElementById('modalEyebrow');
const fringeOptions = document.getElementById('fringeOptions');

const categories = {
  fringe: {
    title:'Бахрома', eyebrow:'01 · отделка', image:'assets/fringe.jpg',
    text:'Большой выбор декоративной бахромы разных цветов и фактур. Подходит для платьев, костюмов, штор, скатертей, аксессуаров и другой отделки.',
    options:true
  },
  ribbons: {
    title:'Ленты', eyebrow:'02 · тесьма', image:'assets/ribbons.jpg',
    text:'Декоративные ленты, бархатные ленты, узорчатая тесьма и другие варианты отделки. Есть разные цвета, ширины и фактуры.',
  },
  elastic: {
    title:'Резины', eyebrow:'03 · фурнитура', image:'assets/elastic.jpg',
    text:'Резины и эластичные материалы разных цветов и размеров. Подходят для пошива и декоративной отделки.',
  },
  feathers: {
    title:'Перья', eyebrow:'04 · декор', image:'assets/feathers.jpg',
    text:'Декоративные перья разных цветов и фактур. В ассортименте есть варианты для одежды, костюмов и декоративных работ.',
  },
  decorative: {
    title:'Декоративная тесьма', eyebrow:'05 · отделка', image:'assets/decorative-tape.jpg',
    text:'Орнаментальная и декоративная тесьма: геометрические узоры, этнические мотивы, золотистые и серебристые варианты и многое другое.',
  }
};

function openCategory(key){
  const c = categories[key];
  if(!c) return;
  modalImage.src = c.image;
  modalImage.alt = c.title;
  modalEyebrow.textContent = c.eyebrow;
  modalTitle.textContent = c.title;
  modalText.textContent = c.text;
  fringeOptions.classList.toggle('hidden', !c.options);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}
document.querySelectorAll('[data-category]').forEach(el => {
  el.addEventListener('click', () => openCategory(el.dataset.category));
});
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeModal(); closeDrawer(); }
});
