'use strict';

(function () {
    const popup = document.querySelector('.popup');
    const popupContentOne = document.querySelector('.popup__content-1');
    const popupContentTwo = document.querySelector('.popup__content-2');
    const popupSucces = document.querySelector('.popup__succes');
    const nextBtn = document.querySelector('.popup__content-1 button');
    const openBtnPopup = document.querySelector('.one-price__card button');
    const closeBtnPopup = document.querySelector('.popup__close');

    const getOpen = function () {
        popup.classList.remove('hidden');
    }

    const getClose = function () {
        popup.classList.add('hidden');
        popupContentOne.classList.remove('hidden');
        popupContentTwo.classList.add('hidden');
        popupSucces.classList.add('hidden');
    }
    
    openBtnPopup.addEventListener('click' , function () {
        getOpen();
    })
    
    popup.addEventListener('click' , function (evt) {
        if (evt.target === this) {
            getClose();
        }
    })
    
    closeBtnPopup.addEventListener('click' , function () {
        getClose();
    })
    
    nextBtn.addEventListener('click' , function () {
        popupContentOne.classList.add('hidden');
        popupContentTwo.classList.remove('hidden');
    })
})();