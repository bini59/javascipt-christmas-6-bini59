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
    },

    printGiveaway(giveaway) {
        Console.print('<증정 메뉴>');
        if (giveaway === undefined) {
            Console.print('없음');
            return;
        }
        Console.print(`${giveaway[0]} ${giveaway[1]}개`);
    },

    printBenefit(benefits) {
        Console.print('<혜택 내역>');
        if (benefits.length === 0) {
            Console.print('없음');
            return;
        }
        for (let i = 0; i < benefits.length; i += 1) {
            Console.print(`${benefits[i][0]}: -${utils.getMoneyString(benefits[i][1])}원`);
        }
    }
}

export default OutputView;
