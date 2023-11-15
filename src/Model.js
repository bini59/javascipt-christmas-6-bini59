import Validator from './modules/validate.js';
import Menu from './data/menus.js';

class Model {
  #date;

  #menus;

  #totalPrice;

  #giveaway;

  #benefits;

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
      this.#giveaway = ['샴페인', '1'];
    }
  }

  getGiveaway() {
    this.#checkGiveaway();
    return this.#giveaway;
  }

  // 25일 이전에 주문 시, 크리스마스 디데이 할인 적용
  #DDayEvent() {
    if (this.#date > 25) return false;
    this.#benefits.push(['크리스마스 디데이 할인', (this.#date-1)*100 + 1000])
    return true;
  }

  // 금,토를 제외한 주중에 구매시 디저트 메뉴를 개당 2023원씩 할인
  // 12월 1일은 금요일
  #weekDayEvent() {
    if (this.#date % 7 === 1 || this.#date % 7 === 2) return false;

    let dessertCount = 0;
    this.#menus.forEach((menu) => {
      const [menuName, count] = menu;
      if (Menu.isDessert(menuName)) {
        dessertCount += count;
      }
    });
    this.#benefits.push(['평일 할인', dessertCount * 2023]);
    return true;
  }

}

export default Model;
