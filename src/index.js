import _ from 'lodash';
import './style.css';
// function component(thiscomponent,str) {
//   // Lodash, now imported by this script
// thiscomponent.innerHTML = _.join([str], ' ');

// return thiscomponent;
// }

const listelementcontainer = document.querySelector('.listelementcontainer');
let arraylist = [];
const listElement = {
  description: '',
  completed: false,
  index: 0,
}

const createlistelement = (str) => {
  const newlistelement = Object.create(listElement);
  newlistelement.description = str;
  newlistelement.index = arraylist.length;
  arraylist.push(newlistelement);
  listelementcontainer.innerHTML = ' ';
}

const iteratearray = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('div');
    element.classList.add('dflex');
    element.classList.add('spacebetween');
    const strelement = `
    <div class="dflex">
      <input type="checkbox" class="iscompleted">
      <div class="listelement">${arr[i].description}</div>
    </div>
    <div class="3dotsicon"></div>
    `
    element.innerHTML = strelement;
    listelementcontainer.appendChild(element);
  }
}

const inputElement = document.querySelector(".textinput");
inputElement.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) { // 13 is the keycode for 'Enter' key
    event.preventDefault();
    console.log("Enter pressed!");
    console.log(inputElement.value);
    createlistelement(inputElement.value);
    iteratearray(arraylist);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  createlistelement('Wash the dishes'); 
  createlistelement('Take out the clothes');
  iteratearray(arraylist);
});

