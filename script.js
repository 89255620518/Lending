const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination sp_1',
        // clickable: true,
        // dynamicBullets: true,

        // renderBullet: function(index, className) {
        // return '<span class"' + className + '">' + (index + 1) + '</span>';
        // },
        type: 'fraction',
        renderFraction: function(currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span';
        }
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,
    hashNavigation: {
        watchstate: true,
    },

    // управление клавиатурой
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    // управление колесом мыши
    mouseheel: {
        sensitivity: 1,
        eventsTarget: ".swiper"
    },

    // кол-во слайдов для показа
    slidesPerView: 3
});



