const Menu = {
  main:{
    '티본스테이크': 55000,
    '바비큐립': 54000,
    '해산물파스타': 35000,
    '크리스마스파스타': 25000,
  },
  appetizer:{
    '양송이수프': 6000,
    '타파스': 5000,
    '시저샐러드': 8000,
  },
  dessert:{
    '초코케이크': 15000,
    '아이스크림': 5000,
  },
  drink:{
    '제로콜라': 3000,
    '레드와인': 60000,
    '샴페인': 25000,
  },
  isMenu(menu) {
    let isMenu = false;
    Object.keys(this).forEach((key) => {
      if (this[key][menu]) {
        isMenu = true;
      }
    });
    return isMenu;
  },
  isDrink(menu) {
    if (this.drink[menu]) {
      return true;
    }
    return false;
  },
  isDessert(menu) {
    if (this.dessert[menu]) {
      return true;
    }
    return false;
  },
  isMain(menu) {
    if (this.main[menu]) {
      return true;
    }
    return false;
  },
  getPrice(menu) {
    let price = 0;
    Object.keys(this).forEach((key) => {
      if (this[key][menu]) {
        price = this[key][menu];
      }
    });
    return price;
  }
}

export default Menu;
