// import _ from 'lodash';
import './style.css';
import createlistelement from './modules/createlistelement.js';
import iteratearray from './modules/iteratearray.js';
import storageAvailable from './modules/isStorageValid.js';
// function component(thiscomponent,str) {
//   // Lodash, now imported by this script
// thiscomponent.innerHTML = _.join([str], ' ');

// return thiscomponent;
// }

let arraylist = [];
const isStorage = storageAvailable('localStorage');
const inputElement = document.querySelector('.textinput');
const enterbutton = document.querySelector('.enterbutton');

const addelement = () => {
  createlistelement(inputElement.value, arraylist);
  localStorage.setItem('ToDoList', JSON.stringify(arraylist));
  inputElement.value = '';
  iteratearray(arraylist);
};

inputElement.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.keyCode === 13 && inputElement.value !== '') addelement();
});

enterbutton.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputElement.value !== '') addelement();
});

document.addEventListener('DOMContentLoaded', () => {
  if (isStorage && JSON.parse(localStorage.getItem('ToDoList')) != null) {
    arraylist = JSON.parse(localStorage.getItem('ToDoList'));
    iteratearray(arraylist);
  }
});