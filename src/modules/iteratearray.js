import editelement from './editelement.js';

const listelementcontainer = document.querySelector('.listelementcontainer');

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