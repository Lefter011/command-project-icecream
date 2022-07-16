// .............one............

(() => {
  const refs = {
    openTextOneBtn: document.querySelector('.btn-cream'),
    closeTextOneBtn: document.querySelector('.btn-cream'),
    textOne: document.querySelector('.text-btn-cream'),
    body: document.querySelector('body'),
  };

  refs.openTextOneBtn.addEventListener('click', toggleTextOne);

  function toggleTextOne() {
    refs.textOne.classList.toggle('is-hidden');
    refs.closeTextOneBtn.classList.toggle('active__cream');
    refs.body.classList.toggle('no-scroll');
  }
})();

// .............two............

(() => {
  const refs = {
    openTextTwoBtn: document.querySelector('.btn-coffee'),
    closeTextTwoBtn: document.querySelector('.btn-coffee'),
    textTwo: document.querySelector('.text-btn-coffee'),
    body: document.querySelector('body'),
  };

  refs.openTextTwoBtn.addEventListener('click', toggleTextTwo);

  function toggleTextTwo() {
    refs.textTwo.classList.toggle('is-hidden');
    refs.closeTextTwoBtn.classList.toggle('active__coffee');
    refs.body.classList.toggle('no-scroll');
  }
})();

// ............three...........

(() => {
  const refs = {
    openTextThreeBtn: document.querySelector('.btn-milkshakes'),
    closeTextThreeBtn: document.querySelector('.btn-milkshakes'),
    textThree: document.querySelector('.text-btn-milkshakes'),
    body: document.querySelector('body'),
  };

  refs.openTextThreeBtn.addEventListener('click', toggleTextThree);

  function toggleTextThree() {
    refs.textThree.classList.toggle('is-hidden');
    refs.closeTextThreeBtn.classList.toggle('active__milkshakes');
    refs.body.classList.toggle('no-scroll');
  }
})();
