document.addEventListener('DOMContentLoaded', function () {
  const scroller = new Scroller('#root');

  document.addEventListener('wheel', (event) => scroller.listenScroll(event));
  document.addEventListener('swipeUp', () => scroller.scrollDirection(1));
  document.addEventListener('swipeDown', () => scroller.scrollDirection(-1));
});
