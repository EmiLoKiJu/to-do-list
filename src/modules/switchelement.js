import editelement from './editelement.js';

const switchelement = (inputelement, elementcontainer, arr, i) => {
  const newlistelement = document.createElement('div');
  newlistelement.classList.add('listelement');
  newlistelement.innerText = inputelement.value;
  inputelement.parentNode.replaceChild(newlistelement, inputelement);
  newlistelement.addEventListener('dblclick', () => {
    editelement(newlistelement, elementcontainer, arr, i);
  });
};

export default switchelement;