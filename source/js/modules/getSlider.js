'use strict';

(function () {
    var sliderContainers = document.querySelectorAll('.slider');

    var getBlockSlider = function (slider) {
        if (slider) {
            var container = slider.querySelector('.swiper-container');
            var slides = slider.querySelectorAll('.swiper-slide');
            var prev = slider.querySelector('.js-btn-next');
            var next = slider.querySelector('.js-btn-prev');
            var pagination = slider.querySelector('.swiper-pagination');
            var loop = true;
            var allowTouchMove = true;
            var direction = 'horizontal';
            var autoHeight = false;
            var centeredSlides = false;
            var setWrapperSize = false;
            var breakpoints = {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 7,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            };
            if (slider.classList.contains = ".testimonials__slider") {
                centeredSlides = true;
                autoHeight = false;
                // setWrapperSize = true;
                breakpoints = {
                    320: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                };
            }
            if (slides.length >= 2) {
                return new window.Swiper(container, {
                    direction: direction,
                    allowTouchMove: allowTouchMove,
                    loop: loop,
                    autoHeight: autoHeight,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    // updateOnWindowResize: false,
                    pagination: {
                        el: pagination,
                        clickable: true,
                    },
                    breakpoints: breakpoints,
                    centeredSlides: centeredSlides,
                    setWrapperSize: setWrapperSize,
                });
            }
        }
    };

    sliderContainers.forEach(function (currentValue) {
        const slider = getBlockSlider(currentValue);
        if (currentValue.classList.contains = ".testimonials__slider") {
            const sliderWrapper = currentValue.querySelector(".swiper-wrapper");
            console.log(slider.height);
            sliderWrapper.style.minHeight = `${slider.height * 2.4}px`;
        }
    });

    // var swiper = new Swiper(".big-gallery__min-slider", {
    //     spaceBetween: 0,
    //     loop: true,
    //     freeMode: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,

    //     breakpoints: {
    //         320: {
    //             slidesPerView: 3,
    //         },
    //         576: {
    //             slidesPerView: 4,
    //         },
    //         768: {
    //             slidesPerView: 6,
    //         },
    //     }
    //   });
    //   var swiper2 = new Swiper(".big-gallery__big-slider", {
    //     spaceBetween: 10,
    //     loop: true,
    //     navigation: {
    //       nextEl: ".js-btn-next",
    //       prevEl: ".js-btn-prev",
    //     },
    //     thumbs: {
    //       swiper: swiper,
    //     },
    //   });

})();
