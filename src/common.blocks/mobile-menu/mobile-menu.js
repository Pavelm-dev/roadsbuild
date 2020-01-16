/* eslint-disable */

let openListButton = document.querySelector('.open-list-button'),
    burgerButton = document.querySelector('.burger-button'),
    mobileMenu = document.querySelector('.mobile-menu');

openListButton.addEventListener('click', function () {
   this.closest('.menu-item').classList.toggle('is-open');
});

burgerButton.addEventListener('click', function () {
   this.classList.toggle('is-active');
   document.body.classList.toggle('modal-opened');
   mobileMenu.classList.toggle('is-open');
});