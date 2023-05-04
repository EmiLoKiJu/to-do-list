const listelementcontainer = document.querySelector('.listelementcontainer');

const iteratearray = (arr) => {
  listelementcontainer.innerHTML = ' ';
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('div');
    element.classList.add('dflex');
    element.classList.add('spacebetween');
    const strelement = `
    <div class="dflex">
      <input type="checkbox" class="iscompleted">
      <div class="listelement">${arr[i].description}</div>
    </div>
    <div class="3dotsicon"><img class="icon" src="./img/3dotsicon.png" alt="grabme"></div>
    <div class="deletebutton dnone"><img class="icon" src="./img/deleteicon.png" alt="delete"></div>
    `;
    element.innerHTML = strelement;
    listelementcontainer.appendChild(element);
    const textdiv = document.querySelector('.listelement');
    textdiv.classList.add('yellowbg');
    textdiv.addEventListener('dblclick', () => {
      const newinput = document.createElement('input');
      newinput.type = 'text';
      newinput.classList.add('yellowbg');
      newinput.value = textdiv.innerText;
      textdiv.parentNode.replaceChild(newinput, textdiv);
      newinput.focus();
      newinput.select();
      newinput.addEventListener('blur', () => {
        const newtextdiv = document.createElement('div');
        newtextdiv.classList.add('listelement');
        newtextdiv.innerText = newinput.value;
        newinput.parentNode.replaceChild(newtextdiv, newinput);
      });
    });
  }
};

export default iteratearray;