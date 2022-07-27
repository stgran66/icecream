(() => {
  const showOnPx = 100;
  const backToTopButton = document.querySelector('.back-to-top');

  const scrollContainer = () => {
    return document.documentElement || document.body;
  };

  document.addEventListener(
    'scroll',
    _.throttle(() => {
      console.log('hi');
      if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    }, 100)
  );
  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
    });
  };
  backToTopButton.addEventListener('click', goToTop);
})();
