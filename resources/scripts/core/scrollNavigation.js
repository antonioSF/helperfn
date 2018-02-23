import anime from 'animejs';

/**
 * Scroll to section
 */
const scrollToSection = (el) => {
  let {top} = el.getBoundingClientRect();
  let mainHeaderHeight = document.getElementById('js-main-header').scrollHeight;
  
  const scroll = {
    y: window.pageYOffset
  };

  anime({
    targets: scroll,
    y: ((top + window.pageYOffset) - mainHeaderHeight),
    duration: 850,
    easing: 'easeInOutExpo',
    update: () => window.scroll(0, scroll.y)
  })
}

const navigate = (el) => {
	el.addEventListener('click', () => {
  		let anchorSection = el.dataset.anchor;
  		scrollToSection(document.getElementById(anchorSection));
	}, false);
}

/**
 * Add click event to links 
 * and attach scroll function
 */
const scrollNavigation = (navLinks) => {
	navLinks.forEach((link) => {
		navigate(link);
	});
}

export default scrollNavigation;
