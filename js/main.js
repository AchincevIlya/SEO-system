const burger = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.mobile-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
});

// ===== Таймер акции =====
const endDate = new Date("2025-10-30T23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = endDate - now;

  if (diff <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== Hover-анимация карточек =====
document.querySelectorAll('.rail-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    document.querySelectorAll('.rail-card').forEach(c => c.classList.remove('is-active'));
    card.classList.add('is-active');
  });
});

// ===== Swiper для мобильных карточек (features-carousel) =====
const featuresSwiper = new Swiper('.features-carousel .swiper', {
  slidesPerView: 1.1,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // адаптация для разных экранов
  breakpoints: {
    480: { slidesPerView: 1.2 },
    640: { slidesPerView: 1.3 },
  },
});

// ===== Swiper для advantages =====
const advSwiper = new Swiper('.advantages__carousel .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  centeredSlides: false,
  pagination: {
    el: '.advantages__carousel .swiper-pagination',
    clickable: true,
  },
  watchOverflow: true,
  speed: 500,
  initialSlide: 0, // первый кружок — первый слайд
});

// Services slider
const servicesSwiper = new Swiper('.services__carousel .swiper', {
  slidesPerView: 1.1,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: '.services__carousel .swiper-pagination',
    clickable: true,
  },
  speed: 500,
});







