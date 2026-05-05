/* ──────────────────────────────────────────
   script.js  |  우리 가족 이야기
   ────────────────────────────────────────── */

/* ────────────────────────────────
   우리의 소중한 발자취
   ──────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const tlItems = document.querySelectorAll('.timeline-list .tl-item');
  if (!tlItems.length) return;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const index = Array.from(tlItems).indexOf(el);
          el.style.transitionDelay = `${index * 120}ms`;
          el.classList.add('in-view');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    tlItems.forEach(item => io.observe(item));
  } else {
    tlItems.forEach((el, i) => {
      el.classList.add('in-view');
    });
  }
});



/* ────────────────────────────────
   스크롤 등장 애니메이션 (Intersection Observer)
   ──────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

// .reveal 클래스와 타임라인 항목을 모두 관찰
document.querySelectorAll('.reveal, .tl-item').forEach((el) => {
  revealObserver.observe(el);
});


// 붙여넣기: 브라우저 콘솔
const opens = (document.documentElement.innerHTML.match(/<section\b/gi)||[]).length;
const closes = (document.documentElement.innerHTML.match(/<\/section>/gi)||[]).length;
console.log('section opens / closes:', opens, closes);
console.log('#members 존재 여부:', !!document.getElementById('members'));
console.log('members outerHTML (처음 500문자):', document.getElementById('members')?.outerHTML.slice(0,500));