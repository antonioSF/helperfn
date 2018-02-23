// From https://davidwalsh.name/javascript-debounce-function.
function _debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/**
 * check scroll position
 */
function _isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight);
};

const sectionBlock = document.querySelectorAll('.block-section');
let mainHeader = document.getElementById('js-main-header');

let lastScrollTop = 0;

/*window.addEventListener('scroll', _debounce(function() {
  let st = window.pageYOffset || document.documentElement.scrollTop;

  let blockRect = document.getElementById('js-section-2').getBoundingClientRect();
  let blockRect3 = document.getElementById('js-section-3').getBoundingClientRect();
  if (blockRect.top < window.pageYOffset && blockRect.bottom > window.pageYOffset) {
    console.log('hi');
  }

  if (blockRect3.top < window.pageYOffset && blockRect3.bottom > window.pageYOffset) {
    console.log('bu');
  }


}, 200));*/