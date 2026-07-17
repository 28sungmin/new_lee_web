/* ══════════════════════════════════════════
   travel.js  |  여행 지도
   ──────────────────────────────────────────

   ✏️  여행지를 추가하려면 아래 PLACES 배열에
       객체를 하나씩 추가하세요.

   형식:
   {
     name:    '장소 이름',          ← 필수 (예: '제주도')
     country: '나라',               ← 필수 (예: '대한민국') — 나라 수 통계에 사용
     lat:     33.4996,              ← 필수 (위도)
     lng:     126.5312,             ← 필수 (경도)
     date:    '2024.08',            ← 선택 (자유 형식)
     desc:    '한 줄 추억',          ← 선택
     img:     'img/family.jpeg',    ← 선택 (사진 경로)
     flag:    '🇰🇷',                ← 선택 (국기 이모지)
     album:   'jeolla-2022',        ← 선택 (영상 앨범 연결)
   }

   💡 위도/경도 찾는 법:
      구글 지도에서 원하는 곳을 우클릭하면 맨 위에
      숫자 두 개(위도, 경도)가 나와요. 그대로 복사!

   🔗 영상 앨범과 연결하기 (album):
      album.js에서 영상에 정한 id를 그대로 넣으면
      지도에 "영상 앨범 보기" 버튼이 생깁니다.

      • 영상이 1개일 때:
          album: 'jeolla-2022'
      • 한 장소에 영상이 여러 개일 때 (버튼마다 이름 표시):
          album: [
            { id: 'yangyang-2024', label: '2024 양양 여행' },
            { id: 'chinga-2023',   label: '2023 친가 여행' },
          ]
   ══════════════════════════════════════════ */

const PLACES = [

  /* ── 🇺🇸 미국 ── */
  { name: '샬럿',      country: '미국', flag: '🇺🇸', lat: 35.2271,  lng: -80.8431 },
  { name: '애슈빌',    country: '미국', flag: '🇺🇸', lat: 35.5951,  lng: -82.5515 },
  { name: '워싱턴',    country: '미국', flag: '🇺🇸', lat: 38.9072,  lng: -77.0369 },
  { name: '올란도',    country: '미국', flag: '🇺🇸', lat: 28.5383,  lng: -81.3792 },
  { name: '호놀룰루',  country: '미국', flag: '🇺🇸', lat: 21.3069,  lng: -157.8583 },

  /* ── 🇯🇵 일본 ── */
  { name: '교토',      country: '일본', flag: '🇯🇵', lat: 35.0116,  lng: 135.7681 },
  { name: '오사카',    country: '일본', flag: '🇯🇵', lat: 34.6937,  lng: 135.5023 },

  /* ── 🇭🇰 홍콩 / 🇲🇴 마카오 ── */
  { name: '홍콩',      country: '홍콩',   flag: '🇭🇰', lat: 22.3193,  lng: 114.1694, album: 'hongkong-macau-2026' },
  { name: '마카오',    country: '마카오', flag: '🇲🇴', lat: 22.1987,  lng: 113.5439, album: 'hongkong-macau-2026' },

  /* ── 🇸🇬 싱가포르 ── */
  { name: '싱가포르',  country: '싱가포르', flag: '🇸🇬', lat: 1.3521, lng: 103.8198 },

  /* ── 🇦🇺 호주 ── */
  { name: '브리즈번',  country: '호주', flag: '🇦🇺', lat: -27.4698, lng: 153.0251 },
  { name: '골드코스트', country: '호주', flag: '🇦🇺', lat: -28.0167, lng: 153.4000 },

  /* ── 🇩🇪 독일 ── (2023 유럽 여행) */
  { name: '프랑크푸르트', country: '독일', flag: '🇩🇪', lat: 50.1109, lng: 8.6821 },
  { name: '슈투트가르트', country: '독일', flag: '🇩🇪', lat: 48.7758, lng: 9.1829, album: 'europe-2023' },

  /* ── 🇫🇷 프랑스 / 🇬🇧 영국 / 🇦🇹 오스트리아 ── (2023 유럽 여행) */
  { name: '파리',      country: '프랑스',     flag: '🇫🇷', lat: 48.8566, lng: 2.3522 },
  { name: '런던',      country: '영국',       flag: '🇬🇧', lat: 51.5074, lng: -0.1278 },
  { name: '빈',        country: '오스트리아', flag: '🇦🇹', lat: 48.2082, lng: 16.3738, album: 'europe-2023' },

  /* ── 🇮🇹 이탈리아 / 🇻🇦 바티칸 ── (2023 유럽 여행) */
  { name: '로마',      country: '이탈리아', flag: '🇮🇹', lat: 41.9028, lng: 12.4964, album: 'europe-2023' },
  { name: '밀라노',    country: '이탈리아', flag: '🇮🇹', lat: 45.4642, lng: 9.1900,  album: 'europe-2023' },
  { name: '피렌체',    country: '이탈리아', flag: '🇮🇹', lat: 43.7696, lng: 11.2558, album: 'europe-2023' },
  { name: '아씨시',    country: '이탈리아', flag: '🇮🇹', lat: 43.0707, lng: 12.6196, album: 'europe-2023' },
  { name: '바티칸',    country: '바티칸',   flag: '🇻🇦', lat: 41.9029, lng: 12.4534, album: 'europe-2023' },

  /* ── 🇰🇷 대한민국 ── */
  { name: '서울',      country: '대한민국', flag: '🇰🇷', lat: 37.5665, lng: 126.9780 },
  { name: '용인',      country: '대한민국', flag: '🇰🇷', lat: 37.2411, lng: 127.1776 },
  { name: '춘천',      country: '대한민국', flag: '🇰🇷', lat: 37.8813, lng: 127.7300 },
  { name: '속초',      country: '대한민국', flag: '🇰🇷', lat: 38.2070, lng: 128.5918, album: 'sokcho-2026' },
  { name: '양양',      country: '대한민국', flag: '🇰🇷', lat: 38.0754, lng: 128.6190,
    album: [
      { id: 'yangyang-2024', label: '2024 양양 여행' },
      { id: 'chinga-2023',   label: '2023 친가 여행' },
    ] },
  { name: '강릉',      country: '대한민국', flag: '🇰🇷', lat: 37.7519, lng: 128.8761 },
  { name: '고성',      country: '대한민국', flag: '🇰🇷', lat: 38.3806, lng: 128.4678 },
  { name: '부산',      country: '대한민국', flag: '🇰🇷', lat: 35.1796, lng: 129.0756, album: 'busan-2023' },
  { name: '대구',      country: '대한민국', flag: '🇰🇷', lat: 35.8714, lng: 128.6014 },
  { name: '남해',      country: '대한민국', flag: '🇰🇷', lat: 34.8376, lng: 127.8925 },
  { name: '강진',      country: '대한민국', flag: '🇰🇷', lat: 34.6420, lng: 126.7672, album: 'jeolla-2022' },
  { name: '여수',      country: '대한민국', flag: '🇰🇷', lat: 34.7604, lng: 127.6622, album: 'jeolla-2022' },
  { name: '부여',      country: '대한민국', flag: '🇰🇷', lat: 36.2756, lng: 126.9098, album: 'jeolla-2022' },
  { name: '전주',      country: '대한민국', flag: '🇰🇷', lat: 35.8242, lng: 127.1480, album: 'jeolla-2022' },
  { name: '제주도',    country: '대한민국', flag: '🇰🇷', lat: 33.4996, lng: 126.5312 },

  /* ── 여기에 새로운 여행지를 추가하세요 ──
     { name: '도시', country: '나라', flag: '🏳️', lat: 0.0, lng: 0.0,
       date: '2025.06', desc: '한 줄 추억', img: 'img/사진.jpeg' },  */
];


/* ══════════════════════════════════════════
   🌍  지도에 표시할 나라 이름 (영문)
   ──────────────────────────────────────────
   지도에는 지명 라벨이 없어서, 방문한 나라 이름을
   여기서 직접 표기합니다.

   minScale: 이 확대 배율 이상에서만 보이게 함 (선택)
     · 값이 없으면 항상 표시 (멀리 떨어진 나라)
     · 서로 가까워 겹치는 나라는 값을 줘서 확대했을 때만 표시
     · 1 = 기본(세계 전체), 숫자가 클수록 더 확대해야 보임
   ══════════════════════════════════════════ */
const COUNTRY_LABELS = [
  { name: 'USA',         lat: 39.5,  lng: -98.5 },
  { name: 'Australia',   lat: -25.0, lng: 134.0 },
  { name: 'Korea',       lat: 36.2,  lng: 125.8 },
  { name: 'Japan',       lat: 39.8,  lng: 143.5 },
  { name: 'Singapore',   lat: 1.3,   lng: 104.8 },
  { name: 'UK',          lat: 54.3,  lng: -3.5,  minScale: 2.2 },
  { name: 'France',      lat: 46.6,  lng: 1.8,   minScale: 2.2 },
  { name: 'Germany',     lat: 51.3,  lng: 10.4,  minScale: 2.2 },
  { name: 'Italy',       lat: 42.6,  lng: 12.9,  minScale: 2.2 },
  { name: 'Austria',     lat: 47.6,  lng: 14.8,  minScale: 3.5 },
  { name: 'Hong Kong',   lat: 23.6,  lng: 114.2, minScale: 3.5 },
  { name: 'Macau',       lat: 21.3,  lng: 112.4, minScale: 5 },
  { name: 'Vatican',     lat: 41.6,  lng: 12.1,  minScale: 5 },
];

/* 지도에서 색을 채워 하이라이트할 방문 국가 (world-atlas 기준 영문 국가명).
   홍콩·마카오·바티칸 등은 세계 지도 데이터에 별도 국가로 없어서 핀으로만 표시됩니다. */
const VISITED_COUNTRIES = new Set([
  'United States of America', 'South Korea', 'Japan', 'Australia',
  'Singapore', 'United Kingdom', 'France', 'Germany', 'Italy', 'Austria',
]);


/* ══════════════════════════════════════════
   ⚙️  아래는 지도 동작 코드입니다 (수정 불필요)
   ══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const mapEl    = document.getElementById('map');
  const gridEl   = document.getElementById('placesGrid');
  const emptyEl  = document.getElementById('placesEmpty');

  /* ── 통계 표시 ── */
  const countries = new Set(PLACES.map(p => p.country).filter(Boolean));
  document.getElementById('statPlaces').textContent    = PLACES.length;
  document.getElementById('statCountries').textContent = countries.size;

  /* ── 빈 상태 처리 ── */
  if (!PLACES.length) {
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }

  const validPlaces = PLACES.filter(p => typeof p.lat === 'number' && typeof p.lng === 'number');

  /* ── 장소 카드 렌더 ── */
  const focusFns = [];   // 카드 클릭 시 지도를 해당 핀으로 이동시키는 함수 (지도 로딩 후 채워짐)
  validPlaces.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'place-card';
    card.innerHTML = cardHTML(p);
    card.addEventListener('click', (e) => {
      if (e.target.closest('.place-card__album')) return;   // 앨범 버튼은 페이지 이동
      document.querySelector('.map-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (focusFns[i]) focusFns[i]();
    });
    gridEl.appendChild(card);
  });

  /* ══════════════════════════════════════════
     D3 벡터 세계 지도 (외부 타일 없이 직접 그림)
     ══════════════════════════════════════════ */
  const W = 960, H = 500;

  const svg = d3.select(mapEl).append('svg')
    .attr('class', 'vmap')
    .attr('viewBox', `0 0 ${W} ${H}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  const g = svg.append('g');   // 확대/이동되는 그룹

  const projection = d3.geoNaturalEarth1();
  const path = d3.geoPath(projection);

  // 툴팁(핀 클릭 시 정보 표시)
  const tooltip = d3.select(mapEl).append('div').attr('class', 'vmap-tooltip').style('display', 'none');
  const hideTooltip = () => tooltip.style('display', 'none');
  svg.on('click', hideTooltip);   // 바다 클릭 시 닫기

  // 확대/축소 버튼
  const zc = d3.select(mapEl).append('div').attr('class', 'vmap-zoom');
  const btnIn  = zc.append('button').attr('class', 'vmap-zoom-btn').attr('type', 'button').attr('aria-label', '확대').text('+');
  const btnOut = zc.append('button').attr('class', 'vmap-zoom-btn').attr('type', 'button').attr('aria-label', '축소').text('−');

  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(world => {
    const land = topojson.feature(world, world.objects.countries);
    projection.fitSize([W, H], { type: 'Sphere' });

    // 바다(구체) + 위경도 격자
    g.append('path').datum({ type: 'Sphere' }).attr('class', 'vmap-sphere').attr('d', path);
    g.append('path').datum(d3.geoGraticule10()).attr('class', 'vmap-graticule').attr('d', path);

    // 나라 (기본 지형)
    g.append('g').selectAll('path.vmap-country')
      .data(land.features)
      .join('path')
      .attr('class', 'vmap-country')
      .attr('d', path);

    // 방문한 나라 하이라이트 (기본 지형 위에 색칠)
    //  · 프랑스 국경에는 남미의 '프랑스령 기아나'가 포함돼 있어, 방문하지 않은 그 지역은 제외
    function highlightGeometry(f) {
      if (f.properties.name === 'France' && f.geometry.type === 'MultiPolygon') {
        const coords = f.geometry.coordinates.filter(poly =>
          d3.geoCentroid({ type: 'Polygon', coordinates: poly })[0] > -25);   // 아메리카쪽(경도 -25 미만) 제외
        return { ...f, geometry: { type: 'MultiPolygon', coordinates: coords } };
      }
      return f;
    }
    const visitedFeatures = land.features
      .filter(f => VISITED_COUNTRIES.has(f.properties.name))
      .map(highlightGeometry);
    g.append('g').selectAll('path.vmap-visited')
      .data(visitedFeatures)
      .join('path')
      .attr('class', 'vmap-country vmap-country--visited')
      .attr('d', path);

    // 나라 이름 라벨(영문)
    const labelSel = g.append('g').selectAll('text.vmap-label')
      .data(COUNTRY_LABELS)
      .join('text')
      .attr('class', 'vmap-label')
      .attr('text-anchor', 'middle')
      .attr('x', c => projection([c.lng, c.lat])[0])
      .attr('y', c => projection([c.lng, c.lat])[1])
      .text(c => c.name);

    // 여행 핀
    const pinSel = g.append('g').selectAll('circle.vmap-pin')
      .data(validPlaces)
      .join('circle')
      .attr('class', 'vmap-pin')
      .attr('cx', p => projection([p.lng, p.lat])[0])
      .attr('cy', p => projection([p.lng, p.lat])[1])
      .on('click', (event, p) => { event.stopPropagation(); showPinTooltip(p, event.currentTarget); });
    const pinNodes = pinSel.nodes();

    function showPinTooltip(p, node) {
      tooltip.html(popupHTML(p)).style('display', 'block');
      const cont = mapEl.getBoundingClientRect();
      const pr = node.getBoundingClientRect();
      const tw = tooltip.node().offsetWidth, th = tooltip.node().offsetHeight;
      let left = pr.left - cont.left + pr.width / 2 - tw / 2;
      let top  = pr.top  - cont.top  - th - 12;
      left = Math.max(8, Math.min(left, cont.width - tw - 8));
      if (top < 8) top = pr.bottom - cont.top + 12;   // 위 공간 없으면 아래로
      tooltip.style('left', left + 'px').style('top', top + 'px');
    }

    // 확대에 따라 핀·글자 크기 일정하게 유지 + 라벨 겹침 방지
    function applyTransform(t) {
      g.attr('transform', t);
      const k = t.k;
      pinSel.attr('r', 4 / k).attr('stroke-width', 1.5 / k);
      labelSel.attr('font-size', (11 / k) + 'px')
              .style('display', c => k >= (c.minScale || 1) ? null : 'none');
      g.selectAll('.vmap-country').attr('stroke-width', 0.6 / k);
      g.select('.vmap-graticule').attr('stroke-width', 0.4 / k);
      g.select('.vmap-sphere').attr('stroke-width', 0.6 / k);
    }

    // 확대/이동: 마우스 휠(스크롤)로 확대·축소, 드래그로 이동, 더블클릭·핀치도 지원
    const zoom = d3.zoom()
      .scaleExtent([1, 14])
      .translateExtent([[0, 0], [W, H]])
      .on('start', hideTooltip)
      .on('zoom', ev => applyTransform(ev.transform));

    svg.call(zoom);
    applyTransform(d3.zoomIdentity);

    // 줌은 즉시 적용 (일부 환경에서 애니메이션이 멈추는 문제 방지)
    btnIn.on('click',  () => svg.call(zoom.scaleBy, 1.8));
    btnOut.on('click', () => svg.call(zoom.scaleBy, 1 / 1.8));

    // 카드 클릭 → 해당 핀으로 확대 이동 후 툴팁 표시
    validPlaces.forEach((p, i) => {
      focusFns[i] = () => {
        const [x, y] = projection([p.lng, p.lat]);
        const k = 5;
        const t = d3.zoomIdentity.translate(W / 2 - k * x, H / 2 - k * y).scale(k);
        svg.call(zoom.transform, t);
        if (pinNodes[i]) showPinTooltip(p, pinNodes[i]);
      };
    });
  }).catch(err => {
    console.error('지도 로딩 실패:', err);
    mapEl.insertAdjacentHTML('beforeend',
      '<div class="vmap-error">지도를 불러오지 못했어요.<br>인터넷 연결을 확인해 주세요.</div>');
  });

  /* ── 템플릿 함수 ── */
  /* album 값을 [{id, label}] 형태로 정규화 (문자열 하나 / 배열 / 객체 모두 지원) */
  function albumLinks(album) {
    if (!album) return [];
    const arr = Array.isArray(album) ? album : [album];
    return arr
      .map(a => typeof a === 'string' ? { id: a, label: '영상 앨범 보기' } : a)
      .filter(a => a && a.id);
  }

  function albumBtnsHTML(album, cls) {
    const links = albumLinks(album);
    if (!links.length) return '';
    const btns = links.map(a =>
      `<a class="${cls}" href="album.html#${encodeURIComponent(a.id)}">🎬 ${escapeHtml(a.label)} →</a>`
    ).join('');
    return `<div class="${cls}s">${btns}</div>`;
  }

  function popupHTML(p) {
    const img  = p.img  ? `<img class="map-popup__img" src="${p.img}" alt="${escapeHtml(p.name)}">` : '';
    const date = p.date ? `<div class="map-popup__date">${escapeHtml(p.date)}</div>` : '';
    const desc = p.desc ? `<div class="map-popup__desc">${escapeHtml(p.desc)}</div>` : '';
    const flag = p.flag ? `${p.flag} ` : '';
    const album = albumBtnsHTML(p.album, 'map-popup__album');
    return `<div class="map-popup">${img}
      <div class="map-popup__body">
        <div class="map-popup__title">${flag}${escapeHtml(p.name)}</div>
        ${date}${desc}${album}
      </div></div>`;
  }

  function cardHTML(p) {
    const media = p.img
      ? `<img class="place-card__img" src="${p.img}" alt="${escapeHtml(p.name)}">`
      : `<div class="place-card__noimg">📍</div>`;
    const date = p.date ? `<div class="place-card__date">${escapeHtml(p.date)}</div>` : '';
    const desc = p.desc ? `<div class="place-card__desc">${escapeHtml(p.desc)}</div>` : '';
    const flag = p.flag ? `<div class="place-card__flag">${p.flag} ${escapeHtml(p.country || '')}</div>` : '';
    const album = albumBtnsHTML(p.album, 'place-card__album');
    return `${media}
      <div class="place-card__body">
        ${flag}
        <div class="place-card__title">${escapeHtml(p.name)}</div>
        ${date}${desc}${album}
      </div>`;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
});
