/* ──────────────────────────────────────────
   nav.js  |  모바일 햄버거 메뉴 토글
   (index / album / travel 모든 페이지 공통)
   ────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  const setOpen = (open) => {
    toggle.classList.toggle('open', open);
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  };

  // 버튼 클릭 → 열고 닫기
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!links.classList.contains('open'));
  });

  // 메뉴 항목 클릭 → 닫기
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => setOpen(false))
  );

  // 메뉴 바깥 클릭 → 닫기
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !e.target.closest('nav')) setOpen(false);
  });

  // 화면이 넓어지면 초기화
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setOpen(false);
  });
});
