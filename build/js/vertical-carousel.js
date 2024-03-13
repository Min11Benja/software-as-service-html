class VerticalCarousel {
  constructor() {
    this.sections = document.querySelectorAll(".section");
    this.body = document.querySelector("body");
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const scroll = window.scrollY + window.innerHeight / 3;

    this.sections.forEach(function (section) {
      section.classList.remove("active");
      if (
        section.offsetTop <= scroll &&
        section.offsetTop + section.offsetHeight > scroll
      ) {
        section.classList.add("active");
      }
    });
  }

  init() {
    window.addEventListener("scroll", this.handleScroll);
    window.dispatchEvent(new Event("scroll"));
  }
}

const verticalCarousel = new VerticalCarousel();
verticalCarousel.init();
