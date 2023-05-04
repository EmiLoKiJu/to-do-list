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

const addelement = (event) => {
  createlistelement(inputElement.value, arraylist);
  localStorage.setItem('ToDoList', JSON.stringify(arraylist));
  iteratearray(arraylist);
}

const inputElement = document.querySelector('.textinput');
const enterbutton = document.querySelector('.enterbutton');
inputElement.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.keyCode === 13 && inputElement.value != '') addelement(event);
});

enterbutton.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputElement.value != '') addelement(event);
});

document.addEventListener('DOMContentLoaded', () => {
  if (isStorage && JSON.parse(localStorage.getItem('ToDoList')) != null) {
    arraylist = JSON.parse(localStorage.getItem('ToDoList'));
    iteratearray(arraylist);
  }
});