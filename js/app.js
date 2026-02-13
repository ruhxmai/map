(function () {
  'use strict';

  /* ============================
     DOM ЭЛЕМЕНТЫ
  ============================ */
  const $ = (id) => document.getElementById(id);

  const DOM = {
    map:            $('map'),
    sidebar:        $('sidebar'),
    sidebarClose:   $('sidebarClose'),
    sidebarContent: $('sidebarContent'),
    schoolPhoto:    $('schoolPhoto'),
    schoolYear:     $('schoolYear'),
    schoolLogo:     $('schoolLogo'),
    schoolName:     $('schoolName'),
    schoolFullName: $('schoolFullName'),
    schoolAddress:  $('schoolAddress'),
    schoolContacts: $('schoolContacts'),
    schoolSocials:  $('schoolSocials'),
    schoolDirector: $('schoolDirector'),
    schoolStats:    $('schoolStats'),
    schoolCounter:  $('schoolCounter'),
    prevBtn:        $('prevSchool'),
    nextBtn:        $('nextSchool'),
    // Hover preview
    hoverPreview:   $('hoverPreview'),
    previewPhoto:   $('previewPhoto'),
    previewLogo:    $('previewLogo'),
    previewName:    $('previewName'),
    previewAddress: $('previewAddress'),
    previewStudents:$('previewStudents'),
    previewTeachers:$('previewTeachers'),
  };

  /* ============================
     СОСТОЯНИЕ
  ============================ */
  let map = null;
  let placemarks = [];
  let currentIndex = -1;
  let hoveredIndex = -1;

  /* ============================
     FALLBACK ИЗОБРАЖЕНИЯ
  ============================ */
  const FALLBACK = {
    photo:    'https://via.placeholder.com/440x230/f1f5f9/64748b?text=Мектеп+фотосы',
    logo:     'https://via.placeholder.com/60/2563eb/fff?text=🏫',
    director: 'https://via.placeholder.com/64/64748b/fff?text=👤',
    pin:      'https://via.placeholder.com/48/2563eb/fff?text=🏫',
    preview:  'https://via.placeholder.com/300x120/f1f5f9/64748b?text=Мектеп',
  };

  function safeImg(el, fallback) {
    el.onerror = function () { this.src = fallback; this.onerror = null; };
  }

  /* ============================
     ИНИЦИАЛИЗАЦИЯ
  ============================ */
  ymaps.ready(initMap);

  function initMap() {
    map = new ymaps.Map(DOM.map, {
      center: MAP_CONFIG.center,
      zoom:   MAP_CONFIG.zoom,
      controls: MAP_CONFIG.controls,
    });

    // Добавляем метки
    SCHOOLS_CONFIG.forEach((school, i) => addPlacemark(school, i));

    // События
    DOM.sidebarClose.addEventListener('click', closeSidebar);
    DOM.prevBtn.addEventListener('click', () => navigate(-1));
    DOM.nextBtn.addEventListener('click', () => navigate(1));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape')     closeSidebar();
      if (e.key === 'ArrowLeft')  navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });

    // Скрываем preview при движении по карте
    DOM.map.addEventListener('mousemove', handleMapMouseMove);
  }

  /* ============================
     МЕТКИ НА КАРТЕ
  ============================ */
  function addPlacemark(school, index) {
    const layout = ymaps.templateLayoutFactory.createClass(`
      <div class="custom-pin" data-school-id="${school.id}">
        <div class="custom-pin__pulse"></div>
        <img class="custom-pin__img"
             src="${school.logo}"
             alt="${school.name}"
             onerror="this.src='${FALLBACK.pin}'">
        <div class="custom-pin__arrow"></div>
      </div>
    `);

    const placemark = new ymaps.Placemark(
      school.coordinates,
      { hintContent: '' },  // пустой — мы свой preview делаем
      {
        iconLayout: layout,
        iconShape: { type: 'Circle', coordinates: [24, 24], radius: 28 },
        hideIconOnBalloonOpen: false,
        balloonPanelMaxMapArea: 0,
      }
    );

    // КЛИК → открыть панель
    placemark.events.add('click', (e) => {
      e.preventDefault();
      hidePreview();
      selectSchool(index);
    });

    // HOVER → показать мини-preview
    placemark.events.add('mouseenter', (e) => {
      hoveredIndex = index;
      showPreview(school, e);
    });

    placemark.events.add('mouseleave', () => {
      hoveredIndex = -1;
      hidePreview();
    });

    map.geoObjects.add(placemark);
    placemarks.push(placemark);
  }

  /* ============================
     HOVER PREVIEW
  ============================ */
  function showPreview(school, event) {
    // Заполняем данные
    DOM.previewPhoto.src = school.photo;
    safeImg(DOM.previewPhoto, FALLBACK.preview);

    DOM.previewLogo.src = school.logo;
    safeImg(DOM.previewLogo, FALLBACK.logo);

    DOM.previewName.textContent    = school.name;
    DOM.previewAddress.textContent = school.address;
    DOM.previewStudents.textContent = `${school.students} оқушы`;
    DOM.previewTeachers.textContent = `${school.teachers} педагог`;

    // Позиция — привязываем к координатам метки на экране
    const coords = school.coordinates;
    const pixel = map.converter.globalToPage(
      map.options.get('projection').toGlobalPixels(coords, map.getZoom())
    );

    let left = pixel[0] + 30;
    let top  = pixel[1] - 80;

    // Не вылезаем за правый край
    if (left + 310 > window.innerWidth) {
      left = pixel[0] - 330;
    }
    // Не вылезаем сверху
    if (top < 10) top = 10;

    DOM.hoverPreview.style.left = left + 'px';
    DOM.hoverPreview.style.top  = top + 'px';

    DOM.hoverPreview.classList.remove('hover-preview--hidden');
  }

  function hidePreview() {
    DOM.hoverPreview.classList.add('hover-preview--hidden');
  }

  function handleMapMouseMove(e) {
    // Если мышь далеко от метки — скрываем
    if (hoveredIndex === -1) {
      hidePreview();
    }
  }

  /* ============================
     ВЫБОР ШКОЛЫ
  ============================ */
  function selectSchool(index) {
    currentIndex = index;
    const school = SCHOOLS_CONFIG[index];

    fillSidebar(school);
    openSidebar();

    // Центрируем карту (с учётом панели)
    const offset = window.innerWidth > 768 ? 220 : 0;
    map.setCenter(school.coordinates, 14, { duration: 500 });

    highlightPin(index);
    map.balloon.close();
  }

  /* ============================
     ЗАПОЛНЕНИЕ ПАНЕЛИ
  ============================ */
  function fillSidebar(school) {
    // Фото
    DOM.schoolPhoto.src = school.photo;
    safeImg(DOM.schoolPhoto, FALLBACK.photo);

    // Год
    DOM.schoolYear.textContent = `${school.yearBuilt} жыл`;

    // Лого
    DOM.schoolLogo.src = school.logo;
    safeImg(DOM.schoolLogo, FALLBACK.logo);

    // Название
    DOM.schoolName.textContent = school.name;

    // Полное название
    DOM.schoolFullName.textContent = school.fullName;

    // Адрес
    DOM.schoolAddress.textContent = school.address;

    // Контакты
    DOM.schoolContacts.innerHTML = `
      <div class="contact-row">
        <span class="contact-row__icon">📞</span>
        <span class="contact-row__text">
          <a href="tel:+${school.phone}">${formatPhone(school.phone)}</a>
        </span>
      </div>
      <div class="contact-row">
        <span class="contact-row__icon">📧</span>
        <span class="contact-row__text">
          <a href="mailto:${school.email}">${school.email}</a>
        </span>
      </div>
    `;

    // Соцсети
    DOM.schoolSocials.innerHTML = buildSocials(school.social);

    // Директор
    DOM.schoolDirector.innerHTML = `
      <img class="director__photo"
           src="${school.director.photo}"
           alt="${school.director.name}"
           onerror="this.src='${FALLBACK.director}'">
      <div class="director__info">
        <div class="director__role">Мектеп директоры</div>
        <div class="director__name">${school.director.name}</div>
      </div>
    `;

    // Статистика
    DOM.schoolStats.innerHTML = `
      <div class="stat-card stat-card--students">
        <div class="stat-card__emoji">👨‍🎓</div>
        <div class="stat-card__number">${school.students}</div>
        <div class="stat-card__label">Оқушылар</div>
      </div>
      <div class="stat-card stat-card--teachers">
        <div class="stat-card__emoji">👨‍🏫</div>
        <div class="stat-card__number">${school.teachers}</div>
        <div class="stat-card__label">Педагогтар</div>
      </div>
    `;

    // Счётчик
    DOM.schoolCounter.textContent =
      `${currentIndex + 1} / ${SCHOOLS_CONFIG.length}`;

    // Скролл наверх
    DOM.sidebarContent.scrollTop = 0;
  }

  /* ============================
     СОЦСЕТИ — генератор
  ============================ */
  function buildSocials(social) {
    let html = '';

    // Instagram
    if (social.instagram && social.instagram.url) {
      html += `
        <a href="${social.instagram.url}" target="_blank" class="social-btn social-btn--instagram">
          <span class="social-btn__icon">📸</span>
          @${social.instagram.username}
        </a>`;
    }

    // Facebook
    if (social.facebook && social.facebook.url) {
      html += `
        <a href="${social.facebook.url}" target="_blank" class="social-btn social-btn--facebook">
          <span class="social-btn__icon">📘</span>
          Facebook
        </a>`;
    }

    // Telegram
    if (social.telegram && social.telegram.url) {
      html += `
        <a href="${social.telegram.url}" target="_blank" class="social-btn social-btn--telegram">
          <span class="social-btn__icon">✈️</span>
          Telegram
        </a>`;
    } else {
      html += `
        <span class="social-btn social-btn--disabled">
          <span class="social-btn__icon">✈️</span>
          Telegram жоқ
        </span>`;
    }

    return html;
  }

  /* ============================
     ТЕЛЕФОН ФОРМАТТАУ
  ============================ */
  function formatPhone(phone) {
    // 87103026702 → 8 (710) 302-67-02
    const p = phone.replace(/\D/g, '');
    if (p.length === 11) {
      return `${p[0]} (${p.slice(1,4)}) ${p.slice(4,7)}-${p.slice(7,9)}-${p.slice(9)}`;
    }
    return phone;
  }

  /* ============================
     ПОДСВЕТКА МЕТКИ
  ============================ */
  function highlightPin(activeIndex) {
    document.querySelectorAll('.custom-pin').forEach(el => {
      el.classList.remove('custom-pin--active');
    });

    setTimeout(() => {
      const id = SCHOOLS_CONFIG[activeIndex].id;
      const el = document.querySelector(`.custom-pin[data-school-id="${id}"]`);
      if (el) el.classList.add('custom-pin--active');
    }, 150);
  }

  /* ============================
     НАВИГАЦИЯ
  ============================ */
  function navigate(dir) {
    if (currentIndex === -1) return;

    let next = currentIndex + dir;
    if (next < 0) next = SCHOOLS_CONFIG.length - 1;
    if (next >= SCHOOLS_CONFIG.length) next = 0;

    selectSchool(next);
  }

  /* ============================
     ПАНЕЛЬ: ОТКРЫТЬ / ЗАКРЫТЬ
  ============================ */
  function openSidebar() {
    DOM.sidebar.classList.remove('sidebar--hidden');
    DOM.map.classList.add('map--shifted');

    // Даём карте перерисоваться
    setTimeout(() => map.container.fitToViewport(), 400);
  }

  function closeSidebar() {
    DOM.sidebar.classList.add('sidebar--hidden');
    DOM.map.classList.remove('map--shifted');
    currentIndex = -1;

    document.querySelectorAll('.custom-pin').forEach(el => {
      el.classList.remove('custom-pin--active');
    });

    setTimeout(() => {
      map.setCenter(MAP_CONFIG.center, MAP_CONFIG.zoom, { duration: 500 });
      map.container.fitToViewport();
    }, 400);
  }

})();