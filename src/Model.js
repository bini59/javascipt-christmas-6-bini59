import Validator from './modules/validate.js';

class Model {
  #date;

  #menus;

  setDate(date) {
    if (!Validator.dateValidate(date)) {
      return false;
    }
    this.#date = date;
    return true;
  } 
}

export default Model;
