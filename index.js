// =====================================NAVBAR-JS=======================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("YOU ARE GOING TO LEAVE THIS PAGE!");
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());


// =================================COURSE-DIVISION-JS===================================
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

//========================Javascript_for_hide_navbar_onScroll==========================
var lastScrollTop = 0;
header = document.getElementById("header1");
window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-80px";
    }
    else {
        header.style.top = "0"
    }
    lastScrollTop = scrollTop;
})

//===================javascript_for_ANNOUNCEMENT_SHOW_&_HIDE_button===================
const showBtnA = document.getElementById('showBtn');
const hideBtnA = document.getElementById('hideBtn');
const container = document.getElementById('hidden_announcement');

showBtnA.addEventListener('click', () => {
    container.style.display = 'block';
    showBtn.style.display = 'none';
});

hideBtnA.addEventListener('click', () => {
    container.style.display = 'none';
    showBtn.style.display = 'inline-block';
});

//======================javascript_for_EVENT_SHOW_&_HIDE_button=======================
const showBtnE = document.getElementById('showBtnE');
const hideBtnE = document.getElementById('hideBtnE');
const containerE = document.getElementById('hidden_event');

showBtnE.addEventListener('click', () => {
    containerE.style.display = 'block';
    showBtnE.style.display = 'none';
});

hideBtnE.addEventListener('click', () => {
    containerE.style.display = 'none';
    showBtnE.style.display = 'inline-block';
});

//===================================top_logo_slider====================================
var images = ['./images/cc_l.jpg', './images/abt_principal.jpeg', './gallery/5.jpg', './images/abt_history.jpg', './gallery/8.jpg'];
var x = 0;
var imgs = document.getElementById('img');
setInterval(slider, 2000);

function slider() {

    if (x < images.length) {
        x = x + 1;
    } else {
        x = 1;
    }

    imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}

//===================================scroll_animation===========================
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 800,
    delay: 200
});

ScrollReveal().reveal('.ticker_container', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.announcement', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.event', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.division-hr-lines', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.division_content', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.hr-lines', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.abt_content', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.abt2', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.simple_division_heading', { delay: 300, origin: 'left' });

