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
            if (slider.classList.contains("gallery__slider")) {
                centeredSlides = true;
                autoHeight = false;
                // setWrapperSize = true;
                breakpoints = {
                    320: {
                        slidesPerView: 1.3,
                        spaceBetween: 28,
                        centeredSlides: false,
                    },
                    577: {
                        slidesPerView: 2,
                        spaceBetween: 28,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 28,
                    },
                    // 1200: {
                    //     slidesPerView: 3,
                    //     spaceBetween: 28,
                    // },
                };
            }
            if (slider.classList.contains("testimonials__slider")) {
                centeredSlides = true;
                autoHeight = false;
                // setWrapperSize = true;
                breakpoints = {
                    320: {
                        slidesPerView: 1.8,
                        spaceBetween: 0,
                    },
                    577: {
                        slidesPerView: 3,
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

    const sliderTestimonials = document.querySelector(".testimonials__slider");

    if (sliderTestimonials) {
        const slideAll = sliderTestimonials.querySelectorAll(".swiper-slide");
        const wrapper = sliderTestimonials.querySelector(".swiper-wrapper");
        let slideMaxHeight = 0;
        slideAll.forEach(function(slideItem) {
            if (slideItem.offsetHeight > slideMaxHeight) {
                slideMaxHeight = slideItem.offsetHeight;
            }
        })
        console.log(slideMaxHeight);
        wrapper.style.minHeight = `${slideMaxHeight * 2.4}px`;
    }

    sliderContainers.forEach(function (currentValue) {
        const slider = getBlockSlider(currentValue);
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
