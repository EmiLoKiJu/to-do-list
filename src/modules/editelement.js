import switchelement from './switchelement.js';
import iteratearray from './iteratearray.js';

const editelement = (listelement, elementcontainer, arr, i) => {
  const threedots = elementcontainer.querySelector('.threedotsicon');
  const deletebutton = elementcontainer.querySelector('.deleteicon');
  deletebutton.classList.remove('dnone');
  threedots.classList.add('dnone');
  const newinput = document.createElement('input');
  newinput.type = 'text';
  newinput.classList.add('yellowbg');
  newinput.value = listelement.innerText;
  listelement.parentNode.replaceChild(newinput, listelement);
  newinput.focus();
  newinput.select();
  deletebutton.addEventListener('click', () => {
  arr.splice(i, 1);
    for (let j = i; j < arr.length; j += 1) {
      arr[j].index = j + 1;
      console.log('arr[j] is: ', arr[j]);
    }
    localStorage.setItem('ToDoList', JSON.stringify(arr));
    console.log('arr: ', arr);
    iteratearray(arr);
  });
  newinput.addEventListener('blur', () => {
    setTimeout(() => {
      deletebutton.classList.add('dnone');
      threedots.classList.remove('dnone');
      switchelement(newinput, elementcontainer);
    }, 100);
  });
};

export default editelement;