import menu from './menu.json';
import './css/styles.css';
import menuTpl from './template/menu.hbs';

const themeSwitcher = document.querySelector('input#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

setSelectedThemeOnBody();

themeSwitcher.addEventListener('change', onThemeSwitcherChange);

function onThemeSwitcherChange() {
    bodyEl.classList.toggle(Theme.DARK);

    if(bodyEl.classList.contains(Theme.DARK)) {
        bodyEl.classList.remove(Theme.LIGHT);
    } else {
        bodyEl.classList.add(Theme.LIGHT);
    }
    
    
    setThemeOnLocalStorage();
}

function setThemeOnLocalStorage() {
    const selectedTheme = bodyEl.classList.value;
    localStorage.setItem('ui-theme', selectedTheme);
}

function setSelectedThemeOnBody() {
    const selectedTheme = localStorage.getItem('ui-theme');
    if (selectedTheme === Theme.DARK) {
        bodyEl.classList.add(selectedTheme);
        bodyEl.classList.remove(Theme.LIGHT);
        themeSwitcher.checked = true;
    }
}


const menuContainerEl = document.querySelector('ul.js-menu');

function makeMenuMarkup (menu) {
    return menu.map(menuTpl).join('')
}
const markup = makeMenuMarkup(menu);
menuContainerEl.innerHTML = markup;