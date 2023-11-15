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

  #calculateTotalPrice() {
    let totalPrice = 0;
    this.#menus.forEach((menu) => {
      const [menuName, count] = menu;
      if (Menu.isMenu(menuName)) {
        totalPrice += Menu.getPrice(menuName) * count;
      }
    });
    this.#totalPrice = totalPrice;
  }

}

export default Model;
