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
    <div class="3dotsicon"></div>
    `
    element.innerHTML = strelement;
    listelementcontainer.appendChild(element);
  }
}

export default iteratearray;