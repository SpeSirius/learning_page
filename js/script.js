var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 1000,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});


// Modal Open
document.addEventListener('DOMContentLoaded', function() {
  var openModalButton = document.getElementById('openModal');
  var modal = document.getElementById('myModal');
  var closeBtn = document.querySelector('.closeBtn');
  var backBtn = document.querySelector('.backBtn');

  openModalButton.addEventListener('click', function() {
      modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  backBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });
});