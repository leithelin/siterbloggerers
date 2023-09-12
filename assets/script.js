$(document).ready(function () {
    new Swiper(".swiper", {
        clickable: !0,
        loop: !0,
        grabCursor: !0,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        pagination: {el: ".swiper-pagination", type: "bullets", clickable: !0}
    })
})