/***** Youtube popup modal ******/
class Modal {
  constructor(overlay) {
    this.overlay = overlay;
    const closeButton = overlay.querySelector('.lightbox-close')
    closeButton.addEventListener('click', this.close.bind(this));
    overlay.addEventListener('click', e => {
      if (e.srcElement.id === this.overlay.id) {
        this.close();
        // document.getElementById('youtube').pauseVideo();
      }
    });
  }
  open() {
    this.overlay.classList.remove('is-hidden');
  }

  close() {
    this.overlay.classList.add('is-hidden');
  }
}

const modal = new Modal(document.querySelector('.modal-overlay'));
window.openModal = modal.open.bind(modal);
