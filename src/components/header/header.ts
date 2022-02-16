import { Language } from './language/language';
import { translate } from '../../scripts/translate/translate';
import { Theme } from './theme/theme';
import { Hamburger } from './hamburger/hamburger';
import { Offcanvas } from './offcanvas/offcanvas';

const language = new Language({
  rootClassName: '.header__language',
});
const theme = new Theme({
  rootClassName: '.header__theme',
});
const hamburger = new Hamburger({
  rootClassName: '.header__mobile-navigation',
});
const offcanvas = new Offcanvas({
  rootClassName: '.header__mobile-navigation',
});

language.onChanged = (lang): void => {
  translate(lang);
};

theme.onChanged = (themeName): void => {
  document.documentElement.classList[themeName === 'dark' ? 'remove' : 'add'](
    'theme-light'
  );
};

let isHamburgerActivator = false;

hamburger.onPressed = (isPressed): void => {
  isHamburgerActivator = true;

  offcanvas.isDisplayed = isPressed;
};

offcanvas.onDisplayed = (isDisplayed): void => {
  if (isHamburgerActivator) {
    isHamburgerActivator = false;
    return;
  }

  hamburger.isPressed = isDisplayed;
};
