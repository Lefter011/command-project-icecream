// .............one............

(() => {
  const refs = {
    openTextOneBtn: document.querySelector('.btn-cream'),
    closeTextOneBtn: document.querySelector('.btn-cream'),
    textOne: document.querySelector('.text-btn-cream'),
  };

  refs.openTextOneBtn.addEventListener('click', toggleTextOne);

  function toggleTextOne() {
    refs.textOne.classList.toggle('is-hidden');
    refs.closeTextOneBtn.classList.toggle('active__cream');
  }
})();

// .............two............

(() => {
  const refs = {
    openTextTwoBtn: document.querySelector('.btn-coffee'),
    closeTextTwoBtn: document.querySelector('.btn-coffee'),
    textTwo: document.querySelector('.text-btn-coffee'),
  };

  refs.openTextTwoBtn.addEventListener('click', toggleTextTwo);

  function toggleTextTwo() {
    refs.textTwo.classList.toggle('is-hidden');
    refs.closeTextTwoBtn.classList.toggle('active__coffee');
  }
})();

// ............three...........

(() => {
  const refs = {
    openTextThreeBtn: document.querySelector('.btn-milkshakes'),
    closeTextThreeBtn: document.querySelector('.btn-milkshakes'),
    textThree: document.querySelector('.text-btn-milkshakes'),
  };

  refs.openTextThreeBtn.addEventListener('click', toggleTextThree);

  function toggleTextThree() {
    refs.textThree.classList.toggle('is-hidden');
    refs.closeTextThreeBtn.classList.toggle('active__milkshakes');
  }
})();
