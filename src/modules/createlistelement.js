const listElement = {
  description: '',
  completed: false,
  index: 0,
}
  
const createlistelement = (str, arraylist) => {
  const newlistelement = Object.create(listElement);
  newlistelement.description = str;
  arraylist.push(newlistelement);
  newlistelement.index = arraylist.length - 1;  
}

export default createlistelement;