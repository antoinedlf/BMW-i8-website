/***** Youtube popup modal ******/
class Modal {
  constructor(overlay) {
    this.overlay = overlay;
    const closeButton = overlay.querySelector('.lightbox-close')
    closeButton.addEventListener('click',
    this.close.bind(this)
  );
}
  open() {
    const iframe = document.createElement('iframe')
    iframe.setAttribute('allowfullscreen', true)
    iframe.setAttribute('frameborder', 0)
    iframe.setAttribute('width', 1200)
    iframe.setAttribute('height', 675)
    iframe.setAttribute('src', 'https://www.youtube.com/embed/s6_6qzkDiJU?showinfo=0')
    document.querySelector('.video-container').appendChild(iframe)
    this.overlay.classList.remove('is-hidden')
  }

  close() {
    this.overlay.classList.add('is-hidden')
    this.overlay.querySelector('.video-container iframe').remove()
  }
}

const modal = new Modal(document.querySelector('.modal-overlay'))
window.openModal = modal.open.bind(modal)
