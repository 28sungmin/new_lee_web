/* ══════════════════════════════════════════
   album.js  |  영상 앨범
   ──────────────────────────────────────────

   ✏️  영상을 추가하려면 아래 VIDEOS 배열에
       객체를 하나씩 추가하세요.

   형식:
   {
     url:   '유튜브 링크',          ← 필수
     title: '영상 제목',            ← 필수
     date:  '날짜 (자유 형식)',     ← 선택
     desc:  '한 줄 설명',           ← 선택
   }

   지원 URL 형식:
     • youtube.com/watch?v=...
     • youtube.com/playlist?list=...
     • youtu.be/...
   ══════════════════════════════════════════ */

const VIDEOS = [
  /* ── 여기에 영상을 추가하세요 ── */

  // {
  //   url:   'https://www.youtube.com/watch?v=xxxxxxx',
  //   title: '2024 제주도 가족 여행',
  //   date:  '2024.08',
  //   desc:  '여름 바다와 함께한 소중한 추억 🌊',
  // },
  // {
  //   url:   'https://youtube.com/playlist?list=PLxxxxxxx',
  //   title: '우리 가족 플레이리스트',
  //   date:  '2025',
  // },

  {
    url: 'https://youtube.com/playlist?list=PL61NwzsZqrLTptXnBQ09CirW3abeBklWj&si=KbsGHne0pUssif0x',
    title: '2022년 전라도 여행',
    date: '2022',
    desc: '엄마, 아빠와 함께한 전라도 여행 🚘',
  },
  {
    url: 'https://youtube.com/playlist?list=PL61NwzsZqrLQ8cpBPNO2Wbt5OyBCTpyYm&si=LH8QpkgxvycqNkht',
    title: '2023년 유럽 여행',
    date: '2023',
    desc: '오빠를 만나러 가봐요~ ✨',
  },
  {
    url: 'https://youtube.com/playlist?list=PL61NwzsZqrLQBx5HB5MbRVk7FBe5u1tfW&si=ctycTjs2kxGVi89s',
    title: '2023년 부산 여행',
    date: '2023',
    desc: '엄빠와 함께 부산 여행 🌊',
  },
  {
    url: 'https://youtube.com/playlist?list=PL61NwzsZqrLTDZw6fzHrigHFnYNi5Vjr6&si=ALQRlhDDcuFYDevo',
    title: '2023년 친가 여행',
    date: '2023',
    desc: '친가 가족들과 함께한 즐거운 시간 🏡',
  },
  {
    url: 'https://youtube.com/playlist?list=PL61NwzsZqrLQhRdUuoEIY0VpW75uHZow3&si=P31SF1EawsDGqFfq',
    title: '2024년 양양 여행',
    date: '2024',
    desc: '외할머니와 함께 양양 여행 🌊',
  },
  {
    url: 'https://youtube.com/playlist?list=PL61NwzsZqrLTZsnM0daI4lb1E7_c6ZnFt&si=J7kPJ81jsgEfvrdD',
    title: '2026년 홍콩·마카오 여행',
    date: '2026',
    desc: '온 가족이 다녀온 홍콩·마카오 여행 ✈️',
  }
];

/* ══════════════════════════════════════════
   아래는 수정하지 않아도 됩니다
   ══════════════════════════════════════════ */

/* ── URL 파싱 ── */
function parseYouTubeUrl(url) {
  try {
    const u = new URL(url);
    const isYT = u.hostname.includes('youtube.com') || u.hostname === 'youtu.be';
    if (!isYT) return null;

    const listId  = u.searchParams.get('list');
    const videoId = u.searchParams.get('v');

    if (listId && !videoId) return { type: 'playlist', id: listId };
    if (videoId)            return { type: 'video',    id: videoId };

    if (u.hostname === 'youtu.be') {
      const id = u.pathname.slice(1).split('?')[0];
      if (id) return { type: 'video', id };
    }

    const m = u.pathname.match(/\/embed\/([^/?]+)/);
    if (m) return { type: 'video', id: m[1] };
  } catch (_) {}
  return null;
}

function getEmbedUrl({ type, id }) {
  return type === 'playlist'
    ? `https://www.youtube.com/embed/videoseries?list=${id}&rel=0&modestbranding=1&autoplay=1`
    : `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`;
}

function getThumbnailUrl(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

/**
 * oEmbed API로 플레이리스트 실제 썸네일을 비동기로 가져와
 * 카드의 <img>에 주입합니다.
 * @param {string} playlistUrl  원본 유튜브 플레이리스트 URL
 * @param {HTMLElement} thumb   .video-thumb 요소
 */
async function injectPlaylistThumbnail(playlistUrl, thumb) {
  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(playlistUrl)}&format=json`;
    const res  = await fetch(oembedUrl);
    if (!res.ok) return;
    const data = await res.json();
    if (!data.thumbnail_url) return;

    const img = thumb.querySelector('.playlist-thumb-img');
    if (!img) return;

    img.src = data.thumbnail_url;
    img.style.display = 'block';
    // 썸네일 로드 성공 → 아이콘 플레이스홀더 숨기기
    img.onload = () => {
      const ph = thumb.querySelector('.playlist-thumb-placeholder');
      if (ph) ph.style.display = 'none';
    };
  } catch (_) {
    // 로드 실패 시 아이콘 플레이스홀더 그대로 유지
  }
}

/* ── 썸네일 HTML ── */
function buildVideoThumb(id) {
  return `
    <img class="video-thumb-img" src="${getThumbnailUrl(id)}" alt="썸네일"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
    <div class="video-thumb-placeholder" style="display:none">
      <span class="play-icon">▶️</span>
    </div>`;
}

function buildPlaylistThumb() {
  /* img는 처음엔 숨김 → oEmbed 성공 시 표시 */
  return `
    <img class="playlist-thumb-img video-thumb-img" src="" alt="플레이리스트 썸네일" style="display:none"/>
    <div class="playlist-thumb-placeholder">
      <div class="playlist-thumb-icon-wrap">
        <span class="playlist-thumb-icon">📋</span>
      </div>
      <div class="playlist-thumb-text">
        <span class="playlist-thumb-label">플레이리스트</span>
        <span class="playlist-thumb-sub">클릭하여 재생</span>
      </div>
    </div>`;
}

/* ── 카드 생성 ── */
function buildCard({ url, title, date, desc }) {
  const parsed = parseYouTubeUrl(url);
  if (!parsed) return null;

  const embedUrl   = getEmbedUrl(parsed);
  const thumbInner = parsed.type === 'playlist'
    ? buildPlaylistThumb()
    : buildVideoThumb(parsed.id);

  const card = document.createElement('div');
  card.className = 'video-card';
  card.innerHTML = `
    <div class="video-thumb">
      ${thumbInner}
      <iframe src="" data-embed="${embedUrl}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen loading="lazy" style="display:none"></iframe>
    </div>
    <div class="video-body">
      ${date ? `<div class="video-date">${date}</div>` : ''}
      <div class="video-title">${title}</div>
      ${desc ? `<div class="video-desc">${desc}</div>` : ''}
      <div class="video-card-footer">
        <a class="video-link" href="${url}" target="_blank" rel="noopener">유튜브에서 보기 ↗</a>
      </div>
    </div>`;

  /* 클릭 → 인라인 재생 */
  card.querySelector('.video-thumb').addEventListener('click', () => {
    const thumb  = card.querySelector('.video-thumb');
    const iframe = thumb.querySelector('iframe');
    thumb.querySelectorAll('img, .video-thumb-placeholder, .video-thumb-img, .playlist-thumb-placeholder')
      .forEach(el => el.style.display = 'none');
    iframe.src = iframe.dataset.embed;
    iframe.style.display = 'block';
  });

  /* 플레이리스트: oEmbed로 실제 썸네일 주입 */
  if (parsed.type === 'playlist') {
    injectPlaylistThumbnail(url, card.querySelector('.video-thumb'));
  }

  return card;
}

/* ── 렌더링 ── */
function render() {
  const grid  = document.getElementById('albumGrid');
  const empty = document.getElementById('albumEmpty');
  const valid = VIDEOS.map(buildCard).filter(Boolean);

  if (valid.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  valid.forEach(card => grid.appendChild(card));
}

render();