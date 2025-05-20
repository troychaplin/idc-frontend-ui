document.querySelectorAll('[data-modal-open]').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const modalId = button.getAttribute('data-modal-open');
    const modal = document.querySelector(`#${modalId}`);
    if (modal) {
      modal.classList.add('opened');
      document.body.style.overflow = 'hidden';
    }
  });
});

document.querySelectorAll('.idc-modal-close').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const modal = button.closest('.idc-modal');
    if (modal) {
      modal.classList.remove('opened');
      document.body.style.overflow = '';
    }
  });
});

// Add escape key support
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.idc-modal.opened');
    if (openModal) {
      openModal.classList.remove('opened');
      document.body.style.overflow = '';
    }
  }
});
