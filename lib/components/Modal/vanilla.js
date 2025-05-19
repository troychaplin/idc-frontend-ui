document.querySelectorAll('.openmodale').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.idc-modal').classList.add('opened');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('.closemodale').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.idc-modal').classList.remove('opened');
    document.body.style.overflow = '';
  });
});

// Add escape key support
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.querySelector('.idc-modal.opened')) {
    document.querySelector('.idc-modal').classList.remove('opened');
    document.body.style.overflow = '';
  }
});
