// select castomisation
const selectBoxes = document.querySelectorAll('.receiver-form__wrapper');
for (let selectBox of selectBoxes) {
  const selectForm = selectBox.querySelector('.receiver-form__select');
  const bigText = selectBox.querySelector('.receiver-form__current-option');
  bigText.innerHTML = selectForm.value; 
  bigText.style.zIndex = '10';
  bigText.style.position = 'absolute';
  bigText.style.top = '28px';
  bigText.style.left = '13px';
  bigText.style.fontWeight = '700';
  bigText.style.display = 'block';
  bigText.style.backgroundColor = '#ffffff';
  bigText.style.letterSpacing = '0.25px';
  bigText.style.cursor = 'pointer';
}

// open popup
const moreButton = document.querySelector('.footer__more-button');
const closeButton = document.querySelector('.cart__close-button');
const popup = document.querySelector('.cart');

function openPopup () {
  if (popup.classList.contains('popup-close')) {
    popup.classList.remove('popup-close');
    popup.classList.add('popup-open');
    closeButton.addEventListener('touchstart', () => {
      closePopup();
    })
  }
}

function closePopup () {
  if (popup.classList.contains('popup-open')) {
    popup.classList.remove('popup-open');
    popup.classList.add('popup-close');
  }
}

moreButton.addEventListener('touchstart', () => {
  openPopup();
})