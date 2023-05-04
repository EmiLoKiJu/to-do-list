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
inputElement.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) { // 13 is the keycode for 'Enter' key
    event.preventDefault();
    createlistelement(inputElement.value, arraylist);
    localStorage.setItem('ToDoList', JSON.stringify(arraylist));
    iteratearray(arraylist);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (isStorage && JSON.parse(localStorage.getItem('ToDoList')) != null) {
    arraylist = JSON.parse(localStorage.getItem('ToDoList'));
    iteratearray(arraylist);
  }
});