import toggleTheme from './JAVASCRIPT/toggler';
import renderHeader from './JAVASCRIPT/renderHeader';
import renderApp from './JAVASCRIPT/renderApp';
import handleInput from './JAVASCRIPT/handleInput.js';
import './SCSS/style.scss';
import defaultWeatherUI from './JAVASCRIPT/defaultWeatherUI.js';
import currentLocation from './JAVASCRIPT/currentLocation.js';
import digitalClock from './JAVASCRIPT/digitalClock.js';

renderHeader();
renderApp();
toggleTheme();
handleInput();
defaultWeatherUI();
currentLocation();
setInterval(() => digitalClock());
