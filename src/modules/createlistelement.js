const listElement = {
  description: '',
  completed: false,
  index: 0,
};

const createlistelement = (str, arraylist) => {
  const newlistelement = Object.create(listElement);
  newlistelement.description = str;
  newlistelement.index = arraylist.length;
  arraylist.push(newlistelement);
};

export default createlistelement;