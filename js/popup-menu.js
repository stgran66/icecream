const refs = {
  openMenuBtn: document.querySelector('button.js-menu-open'),
  closeMenuBtn: document.querySelector('button.js-menu-close'),
  popupMenu: document.querySelector('div.popup-menu'),
  body: document.querySelector('body'),
};

refs.openMenuBtn.addEventListener('click', openPopupMenu);
refs.closeMenuBtn.addEventListener('click', closePopupMenu);

function openPopupMenu() {
  refs.popupMenu.classList.remove('is-hidden');

  setTimeout(setEventListnereOnBodyWhenMenuIsOpen, 200);
}

function closePopupMenu() {
  refs.popupMenu.classList.add('is-hidden');

  refs.body.removeEventListener('click', outsideMenuClickClose);
}

function outsideMenuClickClose(e) {
  if (refs.popupMenu.contains(e.target)) {
    return;
  } else {
    closePopupMenu();
  }
}

function setEventListnereOnBodyWhenMenuIsOpen() {
  refs.body.addEventListener('click', outsideMenuClickClose);
}
