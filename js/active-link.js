const refs = {
  sectionsEls: document.querySelectorAll('section'),
  navLinkHeroEl: document.querySelectorAll('.site-nav__link.home-link'),
  navLinkEl: document.querySelectorAll('.site-nav__link'),
};

document.addEventListener('scroll', _.throttle(onScroll, 20));

function onScroll() {
  let current;

  refs.sectionsEls.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60 && scrollY <= sectionTop + 240) {
      current = section.id;

      refs.navLinkEl.forEach(a => {
        a.classList.remove('active');

        if (a.classList.contains(`${current}-link`)) {
          a.classList.add('active');
        } else if (scrollY <= 60) {
          refs.navLinkHeroEl.forEach(link => {
            link.classList.add('active');
          });
        }
      });
    }
  });
}
