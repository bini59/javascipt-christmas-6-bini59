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
}

export default Model;
