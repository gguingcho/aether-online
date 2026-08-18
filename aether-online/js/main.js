// ===== Hero Carousel =====
(function(){
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if(!slides.length) return;
  let idx = 0;
  let timer;

  function show(i){
    slides.forEach(s=>s.classList.remove('active'));
    dots.forEach(d=>d.classList.remove('active'));
    idx = (i + slides.length) % slides.length;
    slides[idx].classList.add('active');
    if(dots[idx]) dots[idx].classList.add('active');
  }
  function next(){ show(idx+1); }
  function prev(){ show(idx-1); }
  function restart(){
    clearInterval(timer);
    timer = setInterval(next, 5500);
  }

  document.querySelector('.hero-next')?.addEventListener('click', ()=>{ next(); restart(); });
  document.querySelector('.hero-prev')?.addEventListener('click', ()=>{ prev(); restart(); });
  dots.forEach((d,i)=> d.addEventListener('click', ()=>{ show(i); restart(); }));

  show(0);
  restart();
})();

// ===== Mobile Nav =====
(function(){
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-nav-close');
  btn?.addEventListener('click', ()=> nav.classList.add('open'));
  closeBtn?.addEventListener('click', ()=> nav.classList.remove('open'));
  nav?.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> nav.classList.remove('open')));
})();

// ===== Home popular-post board tabs =====
(function(){
  const tabs = document.querySelectorAll('.board-tab');
  const tables = document.querySelectorAll('[data-board-panel]');
  if(!tabs.length) return;
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.board;
      tables.forEach(p=>{
        p.style.display = (p.dataset.boardPanel === key) ? 'block' : 'none';
      });
    });
  });
})();

// ===== Notice/Patch filter chips =====
(function(){
  const chips = document.querySelectorAll('.filter-chip');
  const rows = document.querySelectorAll('[data-cat]');
  if(!chips.length) return;
  chips.forEach(chip=>{
    chip.addEventListener('click', ()=>{
      chips.forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      const cat = chip.dataset.filter;
      rows.forEach(r=>{
        r.style.display = (cat === 'all' || r.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
})();
