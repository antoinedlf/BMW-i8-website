/**** Slider cars ****/

class Slider {
  constructor(el) {
    this.el = el;
    this.init();
    this.addEventListeners();
    this.update();
  }

  init() {
    this.ui = {};
    this.ui.action = this.el.querySelector(".slider__action");
    this.ui.prev = this.el.querySelector(".slider__prev");
    this.ui.next = this.el.querySelector(".slider__next");
		this.ui.previcon = this.el.querySelector(".svg-icon-prev");
		this.ui.nexticon = this.el.querySelector(".svg-icon-next");

    this.ui.tracker = this.el.querySelector(".slider__tracker");
    this.ui.contents = this.el.querySelectorAll(".slider__content");

    this.currentIndex = 0;
    this.maxIndex = this.ui.contents.length - 1;
  }

  update() {
    this.setDefaultSlide();
    this.buttonRename();
  }

  buttonRename() {
    const prevIndex = this.currentIndex - 1;
    const nextIndex = this.currentIndex + 1;
		const previconIndex = this.currentIndex - 1;
		const nexticonIndex = this.currentIndex + 1;

    if (prevIndex >= 0) {
      this.ui.prev.textContent = this.ui.contents[prevIndex].querySelector(
        ".slider__title"
      ).textContent;
			this.ui.previcon.style.opacity = "1";
    }
    else {
      this.ui.next.textContent = " ";
      this.ui.previcon.style.opacity = "0.4";
    }

    if (nextIndex <= this.maxIndex) {
      this.ui.next.textContent = this.ui.contents[nextIndex].querySelector(
        ".slider__title"
      ).textContent;
      this.ui.nexticon.style.opacity = "1";
    }
    else {
      this.ui.next.textContent = "";
      this.ui.nexticon.style.opacity = "0.4";
    }
  }

  addEventListeners() {
    this.ui.prev.addEventListener("click", () => this.prev());
    this.ui.next.addEventListener("click", () => this.next());
		this.ui.previcon.addEventListener("click", () => this.prev());
		this.ui.nexticon.addEventListener("click", () => this.next());
  }

  setDefaultSlide() {
    const modIndex = this.el.getAttribute("data-current-index");
    if (modIndex) {
      if (modIndex > this.maxIndex) {
        this.currentIndex = this.maxIndex;
      } else if (modIndex <= 0) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = modIndex;
      }
      this.changeSlide();
    }
  }

  prev() {
    if (this.currentIndex <= 0) {
      this.currentIndex = 0;
    } else {
      this.currentIndex -= 1;
      this.changeSlide();
    }
  }

  next() {
    if (this.currentIndex >= this.maxIndex) {
      this.currentIndex = this.maxIndex;
    } else {
      this.currentIndex += 1;
      this.changeSlide();
    }
  }

  changeSlide() {
    if (this.currentIndex === 0) {
      this.ui.tracker.style.transform = "translateX(0vw)";
    } else {
      this.ui.tracker.style.transform = `translateX(-${this.currentIndex}00vw)`;
    }
    this.buttonRename();
  }

}


const sliders = document.querySelectorAll(".slider");

sliders.forEach(function(el) {
  new Slider(el);
});
