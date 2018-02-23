import anime from 'animejs';

/**
 * From https://davidwalsh.name/javascript-debounce-function.
 */
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var content = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}

/**
 * Equation of a line
 */
const lineEq = (y2, y1, x2, x1, currentVal) => {
  const m = (y2 - y1) / (x2 - x1);
  const b = y1 - m * x1;

  return m * currentVal + b;
}

/**
 * MorphingShape class
 * based on https://tympanus.net/Development/ShapeMorphIdeas
 */
class MorphingShape {
  
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.DOM.el.style.opacity = 1;
    this.DOM.el.style.transition = 'transform 2s ease-out';
    this.DOM.pathEl = this.DOM.el.querySelector('path');
    this.paths = this.DOM.pathEl.getAttribute('pathdata:id').split(';')
    this.paths.splice(this.paths.length, 0, this.DOM.pathEl.getAttribute('d'));
    this.win = {width: window.innerWidth, height: window.innerHeight};
    this.animate();
  }

  animate() {
    anime.remove(this.DOM.pathEl);
    anime({
      targets: this.DOM.pathEl,
      duration: 10000,
      easing: [0.5,0,0.5,1],
      d: this.paths,
      loop: true
    });
  }

}

export default MorphingShape;