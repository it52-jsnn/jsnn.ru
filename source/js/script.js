'use strict';

var MENU_BTN_TEXT_CLOSED = 'Меню';
var MENU_BTN_TEXT_OPENED = 'Закрыть';

var CLOSED_MENU_PADDING = '89px';
var OPEN_MENU_PADDING = '304px';

var menuBtn = document.querySelector('.menu__button');
var menuContent = document.querySelector('.menu__content');
var pageBody = document.querySelector('body');

if (menuBtn && menuContent) {
  var onMenuOpen = function () {
    menuContent.classList.remove('menu__content--hidden');
    menuBtn.textContent = MENU_BTN_TEXT_OPENED;
    menuBtn.removeEventListener('click', onMenuOpen);
    menuBtn.addEventListener('click', onMenuClose);

    pageBody.style.paddingBottom = OPEN_MENU_PADDING;
  };

  var onMenuClose = function () {
    menuContent.classList.add('menu__content--hidden');
    menuBtn.textContent = MENU_BTN_TEXT_CLOSED;
    menuBtn.removeEventListener('click', onMenuClose);
    menuBtn.addEventListener('click', onMenuOpen);

    pageBody.style.paddingBottom = CLOSED_MENU_PADDING;
  };


  menuBtn.addEventListener('click', onMenuOpen);
}
