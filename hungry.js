document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('#menu-bars');
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header .navbar a');
  const searchIcon = document.querySelector('#search-icon');
  const searchForm = document.querySelector('#search-form');
  const closeIcon = document.querySelector('#close');
  const popupBox = document.querySelector('.pop-up-overlay');
  const buyBtns = document.querySelectorAll('.btn');
  const okBtn = document.querySelector('.ok-btn');
  const loaderContainer = document.querySelector('.loader-container');

  // Menu toggle
  menu.addEventListener('click', function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });

  // Close menu on scroll
  window.addEventListener('scroll', function () {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  });

  // Highlight active section
  window.addEventListener('scroll', function () {
    let fromTop = window.scrollY + 150;
    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  // Search form toggle
  searchIcon.addEventListener('click', function () {
    searchForm.classList.toggle('active');
  });

  closeIcon.addEventListener('click', function () {
    searchForm.classList.remove('active');
  });

  // Popup functionality
  function openPopup() {
    popupBox.classList.add('active');
  }

  function closePopup() {
    popupBox.classList.remove('active');
  }

  buyBtns.forEach(btn => {
    btn.addEventListener('click', openPopup);
  });

  okBtn.addEventListener('click', closePopup);

  // Loader fadeout
  function fadeOut() {
    loaderContainer.classList.add('fade-out');
  }

  window.onload = function () {
    setTimeout(fadeOut, 3000); // 3000ms = 3s
  };
});
