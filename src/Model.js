import Validator from './modules/validate.js';
import Menu from './data/menus.js';

class Model {
  #date;

  #menus;

  #totalPrice;

  #giveaway;

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

  getTotalPrice() {
    this.#calculateTotalPrice();
    return this.#totalPrice;
  }


  // 할인 전 총 주문 금액이 12만원 이상일 경우, 샴페인 1개를 증정품으로 지급
  #checkGiveaway() {
    if (!this.#totalPrice) {
      this.#calculateTotalPrice();
    }

    if (this.#totalPrice >= 120000) {
      this.#giveaway = ['샴페인', '1개'];
    }
  }

  getGiveaway() {
    this.#checkGiveaway();
    return this.#giveaway;
  }

}

export default Model;
