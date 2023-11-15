import Menu from "../data/menus.js";

const validate = {
  dateValidate : (date) => {
    if (isNaN(date)) {
      return false;
    }
    if (date < 1 || date > 31) {
      return false;
    }
    return true;
  },
  menuValidate: (menus) => {
    const trimedMenus = menus.replace(/ /g, '');
    if (trimedMenus !== menus) {
      return false;
    }

    const menuList = trimedMenus.split(',');
    for(let i = 0; i < menuList.length; i+=1) {
      menuList[i] = menuList[i].split('-');      
    }

    
    const menuSet = new Set();
    let menuCnt = 0;
    let isDrink = true;
    for(let i = 0; i < menuList.length; i+=1) {
      // 메뉴는 중복되지 않게 입력
      if (menuSet.has(menuList[i][0])) {
        return false;
      }
      menuSet.add(menuList[i][0]);

      // 메뉴가 존재하는지 확인
      if (!Menu.isMenu(menuList[i][0])) {
        return false;
      }

      // 메뉴의 개수가 숫자인지 확인
      if (isNaN(menuList[i][1]) || menuList[i][1] < 1) {
        return false;
      }

      // 메뉴의 개수가 소수점인지 확인
      if (menuList[i][1].indexOf('.') !== -1) {
        return false;
      }
      
      // 메뉴의 개수가 20개 이하인지 확인
      menuCnt += Number(menuList[i][1]);
      
      if (!Menu.isDrink(menuList[i][0])) {
        isDrink = false;
      }
    }

    // 총 메뉴가 20개 이하인지 확인
    if (menuCnt > 20) {
      return false;
    }

    // 음료로만 주문했는지 확인
    if (isDrink) {
      return false;
    }


    return true;
  }
}

export default validate;