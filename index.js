document.addEventListener('DOMContentLoaded', function () {
  const rootElement = document.querySelector('#root');
  const sections = document.querySelectorAll('section');

  document.addEventListener('mousewheel', (e) => {
    console.log(e.wheelDelta);
  });
});
