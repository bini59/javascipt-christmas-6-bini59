import Validator from './modules/validate.js';
import Menu from './data/menus.js';

class Model {
  #date;

  #menus;

  #totalPrice;

  setDate(date) {
    if (!Validator.dateValidate(date)) {
      return false;
    }
    this.#date = date;
    return true;
  } 

  setMenus(menus) {
    if (!Validator.menuValidate(menus)) {
      return false;
    }
    const menuList = menus.split(',');
    for(let i = 0; i < menuList.length; i+=1) {
      menuList[i] = menuList[i].split('-');      
    }
    this.#menus = menuList;
    return true;
  }

  getMenus() {
    return this.#menus;
  }

}

export default Model;
