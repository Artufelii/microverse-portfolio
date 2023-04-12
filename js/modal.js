import { card, modal } from './components.js';
import data from './data.js';

const works = document.getElementById('works');

data.forEach((work, index) => {
  const i = index + 1;
  works.innerHTML += card(work, i);
  works.innerHTML += modal(work, index);
});

const openModal = (index) => {
  document.getElementById(`modal-${index}`).classList.add('open');
};

const closeModal = (index) => {
  document.getElementById(`modal-${index}`).classList.remove('open');
};

const openModalButtons = works.querySelectorAll('[data-button="open"]');
const closeModalButtons = works.querySelectorAll('[data-button="close"]');

closeModalButtons.forEach((button, index) => {
  button.addEventListener('click', () => closeModal(index));
});

openModalButtons.forEach((button, index) => {
  button.addEventListener('click', () => openModal(index));
});
