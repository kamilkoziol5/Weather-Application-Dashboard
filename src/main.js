import toggleTheme from './JAVASCRIPT/toggler';
import renderHeader from './JAVASCRIPT/renderHeader';
import renderApp from './JAVASCRIPT/renderApp';
import handleInput from './JAVASCRIPT/handleInput.js';
import './SCSS/style.scss';
import defaultWeatherUI from './JAVASCRIPT/defaultWeatherUI.js';
import currentLocation from './JAVASCRIPT/currentLocation.js';
import digitalClock from './JAVASCRIPT/digitalClock.js';
import { gsap } from 'gsap';
import { animateSections } from './JAVASCRIPT/animations.js';

renderHeader();
renderApp();
toggleTheme();
handleInput();
defaultWeatherUI();
currentLocation();
setInterval(() => digitalClock());
animateSections();
