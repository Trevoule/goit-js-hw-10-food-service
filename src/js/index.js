import markUpCardsMenu from '../templates/markUpCardsMenu.hbs';
// import themeChange from './index.js';
import "../css/styles.css";
import menuItems from './menu.json';

/*разметка Handlebars */
const menuRef = document.querySelector('.js-menu');

const menuList = menuMarkUp(menuItems);
menuRef.insertAdjacentHTML('beforeend', menuList);

function menuMarkUp(menuItems) {
    return markUpCardsMenu(menuItems);
};

/*Тема body */
const STORAGE_THEME = 'theme';

const refs = {
    body: document.querySelector('body'),
    switchBtn: document.querySelector('#theme-switch-toggle'),
}

refs.switchBtn.addEventListener('click', (event) => {
    event.target.setAttribute('checked', true);
})


refs.switchBtn.addEventListener('change', (event) => {

    darkTheme();
    
    lightTheme();

});
currentTheme();

function darkTheme() {
    refs.body.classList.toggle('dark-theme');
    const theme = 'dark-theme';
    if (refs.body.classList.contains('dark-theme')) {

    localStorage.setItem(STORAGE_THEME,theme)
    }
}


function lightTheme() {
    refs.body.classList.toggle('light-theme');
    const theme = 'light-theme';
    
    if (refs.body.classList.contains('light-theme')) {
    localStorage.setItem(STORAGE_THEME,theme)
    }
}


function currentTheme() {
    const savedMessage = localStorage.getItem(STORAGE_THEME);

    /*true - если в savedMessage есть значения  */
    if (savedMessage) {
        console.log(savedMessage)

        /*обновляем dom - текст остается после перезагрузки если форма не отправлена*/
        refs.body.classList.add(savedMessage);
    }
};