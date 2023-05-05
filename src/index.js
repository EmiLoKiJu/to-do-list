import './style.css';
import createlistelement from './modules/createlistelement.js';
import iteratearray from './modules/iteratearray.js';
import storageAvailable from './modules/isStorageValid.js';

let arraylist = [];
const isStorage = storageAvailable('localStorage');
const inputElement = document.querySelector('.textinput');
const enterbutton = document.querySelector('.enterbutton');
const clearcompleted = document.querySelector('.clearcompleted');

const addelement = () => {
  createlistelement(inputElement.value, arraylist);
  localStorage.setItem('ToDoList', JSON.stringify(arraylist));
  inputElement.value = '';
  iteratearray(arraylist);
};

clearcompleted.addEventListener('click', () => {
  arraylist = arraylist.filter((arraylist) => arraylist.completed === false);
  localStorage.setItem('ToDoList', JSON.stringify(arraylist));
  iteratearray(arraylist);
});

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