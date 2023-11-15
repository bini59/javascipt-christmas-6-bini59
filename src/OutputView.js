import { Console } from "@woowacourse/mission-utils";
import utils from './modules/utils.js';

const OutputView = {
    printMenu(menus) {
        Console.print("<주문 메뉴>");
        for (let i = 0; i < menus.length; i += 1) {
            Console.print(`${menus[i][0]} ${menus[i][1]}개`);
        }
    },
    
    printTotalPrice(totalPrice) {
        Console.print('<할인 전 총주문 금액>');
        Console.print(`${utils.getMoneyString(totalPrice)}원`);
    }
}

export default OutputView;
