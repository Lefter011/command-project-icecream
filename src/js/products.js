(() => {
  const refs = {
    openTextBtn: document.querySelector('.products__btn-box'),
    closeTextBtn: document.querySelector('.products__btn-box'),
    text: document.querySelector('.products__text-btn'),
    body: document.querySelector('body'),
  };

  refs.openTextBtn.addEventListener('click', toggleText);

  function toggleText() {
    refs.text.classList.toggle('is-hidden');
    refs.closeTextBtn.classList.toggle('active');
    refs.body.classList.toggle('no-scroll');
  }
})();
