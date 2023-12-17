let menuBtn = document.querySelector('.menu-btn');
let menuBtnCls = document.querySelector('.menu-btn-cls');
let menu = document.querySelector('.topnav');

function cls() {
    menu.classList.toggle('active');
}

function closeMenu(event) {
    // Перевіряємо, чи клік був не на елементі меню чи кнопці
    if (!menu.contains(event.target) && event.target !== menuBtn && event.target !== menuBtnCls) {
        menu.classList.remove('active');
    }
}

menuBtn.addEventListener('click', cls);
menuBtnCls.addEventListener('click', cls);

// Додаємо обробник подій на документ для закриття меню при кліку за межами меню та кнопок
document.addEventListener('click', closeMenu);

let contactBtn = document.querySelector('.contact-btn');
let contactBtnCls = document.querySelector('.contact-btn-cls');
let contact = document.querySelector('.topnav2');

function cls2() {
    contact.classList.toggle('active');
}

function closecontact(event) {
    // Перевіряємо, чи клік був не на елементі меню чи кнопці
    if (!contact.contains(event.target) && event.target !== contactBtn && event.target !== contactBtnCls) {
        contact.classList.remove('active');
    }
}

contactBtn.addEventListener('click', cls2);
contactBtnCls.addEventListener('click', cls2);

// Додаємо обробник подій на документ для закриття меню при кліку за межами меню та кнопок
document.addEventListener('click', closecontact);
