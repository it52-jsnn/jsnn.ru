'use strict';

var MENU_BTN_TEXT_CLOSED = 'Меню';
var MENU_BTN_TEXT_OPENED = 'Закрыть';

var CLOSED_MENU_PADDING = '89px';
var OPEN_MENU_PADDING = '304px';

var menuBtn = document.querySelector('.menu__button');
var menuContent = document.querySelector('.menu__content');
var pageWrapper = document.querySelector('.content-wrapper');

if (menuBtn && menuContent) {
  var onMenuOpen = function () {
    pageWrapper.classList.add('overlay');
    menuContent.classList.remove('menu__content--hidden');
    menuBtn.textContent = MENU_BTN_TEXT_OPENED;
    menuBtn.removeEventListener('click', onMenuOpen);
    menuBtn.addEventListener('click', onMenuClose);
    pageWrapper.addEventListener('click', onOverlayClick);

    pageWrapper.style.paddingBottom = OPEN_MENU_PADDING;
  };

  var onMenuClose = function () {
    pageWrapper.classList.remove('overlay');
    menuContent.classList.add('menu__content--hidden');
    menuBtn.textContent = MENU_BTN_TEXT_CLOSED;
    menuBtn.removeEventListener('click', onMenuClose);
    menuBtn.addEventListener('click', onMenuOpen);
    pageWrapper.removeEventListener('click', onOverlayClick);

    pageWrapper.style.paddingBottom = CLOSED_MENU_PADDING;
  };

  var onOverlayClick = function (evt) {
    if (!menuContent.contains(evt.target) && evt.target !== menuBtn) {
      onMenuClose();
    }
  };

  menuBtn.addEventListener('click', onMenuOpen);
}
