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
const STORAGE_THEME = 'Current theme: ';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const checkBodyTheme = body.classList;
const switchBtn = document.querySelector('#theme-switch-toggle');
const btnCheck = switchBtn.checked;

currentThemeCheck();

switchBtn.addEventListener('change', (event) => {

        lightThemeSwitch();
    darkThemeSwitch();

});

function darkThemeSwitch() {
    const currentTheme = Theme.DARK;
    const statusCheck = switchBtn.checked;
    body.classList.toggle(currentTheme);

    let storage = {
        'theme': currentTheme,
    };
    
    if (body.classList.contains(currentTheme)) {
        localStorage.setItem(STORAGE_THEME, JSON.stringify(storage));
    }
}

function lightThemeSwitch() {
    const currentTheme = Theme.LIGHT;
    const statusCheck = switchBtn.checked;
    body.classList.toggle(currentTheme);

    let storage = {
        'theme': currentTheme,
    };
    
    if (body.classList.contains(currentTheme)) {
        localStorage.setItem(STORAGE_THEME, JSON.stringify(storage));
    }
}

function currentThemeCheck() {

    const savedMessage = localStorage.getItem(STORAGE_THEME);
    const storage = JSON.parse(savedMessage);

    checkBodyTheme.add(
    localStorage.getItem(STORAGE_THEME) === null
    ? Theme.LIGHT
    : storage.theme,
  );

    /*true - если в savedMessage есть значения  */
    if (savedMessage) {

        /*обновляем dom - текст остается после перезагрузки если форма не отправлена*/
        checkBodyTheme.add(storage.theme);

        if (storage.theme == "dark-theme") {
            switchBtn.checked = true;
            return;
        }
        switchBtn.checked = false;
    }
};


