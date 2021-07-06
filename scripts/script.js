const headerButtonCity = document.querySelector('.header__city-button');


headerButtonCity.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?'


headerButtonCity.addEventListener('click', () => {
    const city = prompt("Введите свой город:");
    console.log('city: ', city);
    headerButtonCity.textContent = city;
    localStorage.setItem('lomoda-location', city)
});



//BLock Scroll

const disableScroll = () => {

    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY;

    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `


};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY,
    })
};




//Modal window

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');


const cartOpenModal = () => {

    cartOverlay.classList.add('cart-overlay-open');
    disableScroll();

};

const cartCloseModal = () => {

    cartOverlay.classList.remove('cart-overlay-open');
    enableScroll();
};

subheaderCart.addEventListener('click', cartOpenModal);

cartOverlay.addEventListener('click', event => {
    const target = event.target;
    console.log('target: ', target);

    if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
        cartCloseModal();
    }
});