class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = document.querySelectorAll('section');
    const sectionsArr = [...this.sections];

    const currentSectionIndex = sectionsArr.findIndex((element) =>
      this.isScrolledIntoView(element)
    );
    this.currentSectionIndex =
      currentSectionIndex < 0 ? 0 : currentSectionIndex;

    this.isThrottled = false; //czy funkcja jest wstrzymana, potrzebne do 'wielkosci' scrolla
    this.isScrolledIntoView(this.sections[0]);
  }
  //sprawdzenie na ktorej sekcji jestesmy
  isScrolledIntoView(element) {
    const rect = element.getBoundingClientRect();
    const elementTop = Math.floor(rect.top);
    const elementBottom = rect.bottom;

    const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;
    return isVisible;
  }

  listenScroll = (event) => {
    if (this.isThrottled) return;
    this.isThrottled = true;

    setTimeout(() => {
      this.isThrottled = false;
    }, 600);

    const direction = event.wheelDelta < 0 ? 1 : -1;

    this.scrollDirection(direction);
  };

  scrollDirection = (direction) => {
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = this.currentSectionIndex === 0;
      if (firstSection) return;
    }
    this.currentSectionIndex += direction;
    this.scrollToCurrentSection();
  };

  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
}
