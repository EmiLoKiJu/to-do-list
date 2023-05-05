/* eslint-disable no-use-before-define */

const listelementcontainer = document.querySelector('.listelementcontainer');

const switchelement = (inputelement, elementcontainer, arr, i) => {
  const newlistelement = document.createElement('div');
  newlistelement.classList.add('listelement');
  newlistelement.innerText = inputelement.value;
  inputelement.parentNode.replaceChild(newlistelement, inputelement);
  newlistelement.addEventListener('dblclick', () => {
    editelement(newlistelement, elementcontainer, arr, i);
  });
};

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
  const clickhandler = () => {
    if (event.target !== deletebutton && !event.target.classList.contains('yellowbg')) {
      deletebutton.classList.add('dnone');
      threedots.classList.remove('dnone');
      arr[i].description = newinput.value;
      localStorage.setItem('ToDoList', JSON.stringify(arr));
      switchelement(newinput, elementcontainer, arr, i);
      deletebutton.removeEventListener('click', deletehandler);
      document.removeEventListener('click', clickhandler);
    }
  };
  const deletehandler = () => {
    arr.splice(i, 1);
    for (let j = i; j < arr.length; j += 1) {
      arr[j].index = j + 1;
    }
    localStorage.setItem('ToDoList', JSON.stringify(arr));
    document.removeEventListener('click', clickhandler);
    iteratearray(arr);
    deletebutton.removeEventListener('click', deletehandler);
  };
  deletebutton.addEventListener('click', deletehandler);
  document.addEventListener('click', clickhandler);
};

const iteratearray = (arr) => {
  listelementcontainer.innerHTML = ' ';
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('div');
    element.classList.add('dflex');
    element.classList.add('spacebetween');
    const listelement = document.createElement('div');
    listelement.classList.add('listelement');
    listelement.innerText = arr[i].description;
    const strelement = `
    <div class="dflex">
      <input type="checkbox" class="iscompleted">
      <div class="specificcontainer">
      </div>
    </div>
    <div>
      <img class="icon threedotsicon" src="./img/threedotsicon.png" alt="grabme">
      <img class="icon deleteicon dnone" src="./img/deleteicon.png" alt="delete">
    </div>
    `;
    element.innerHTML = strelement;
    listelementcontainer.appendChild(element);
    const specificcontainer = element.querySelector('.specificcontainer');
    specificcontainer.appendChild(listelement);
    listelement.addEventListener('dblclick', () => {
      editelement(listelement, element, arr, i);
    });
  }
};

export default iteratearray;