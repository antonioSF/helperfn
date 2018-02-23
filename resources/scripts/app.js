import anime from 'animejs';
import morphingSVG from './core/morphingSVG';
import scrollNavigation from './core/scrollNavigation';

/**
 * check if is mobile device based on media queries
 */
const isMobile = () => window.matchMedia( "(max-width: 64rem)" ).matches;

if (!isMobile()) {
  //do something for desktop
}


/**
 * Main Navigation scroll animation
 * see ./core/scrollNavigation.js for details
 */
const navLinks = document.querySelectorAll('.nav-link');
scrollNavigation(navLinks);


/**
 * SVG Animation
 * see ./core/morphingSVG.js for details
 */
const svgClip = document.getElementById('js-svg-clip'); 
morphingSVG(svgClip);