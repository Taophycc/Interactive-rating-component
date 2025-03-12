'use strict';
// DOM elements
const submitButton = document.getElementById('submit-button');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const numberRating = document.querySelectorAll('.number-rating *');
const selected = document.querySelector('.selected');
const mainContainer = document.querySelector('.main-container');
let buttonText = '';

// Looping through the numberRating array(nodelist) and adding an event listener to each element
for (let i = 0; i < numberRating.length; i++) {
  numberRating[i].addEventListener('click', function () {
    for (let j = 0; j < numberRating.length; j++)
      numberRating[j].classList.remove('active');

    numberRating[i].classList.add('active');
    buttonText = numberRating[i].textContent;
  });
}

// interacting with the submit button and adding an event listener
submitButton.addEventListener('click', function () {
  if (buttonText) {
    selected.textContent = `You selected ${buttonText} out of 5.`;
    modal.classList.remove('hidden');
    mainContainer.classList.add('hidden');
  } else {
    alert('Please select a rating before submitting.');
  }
});

// interacting with the close button and adding an event listener
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  mainContainer.classList.remove('hidden');
  buttonText = '';
});
