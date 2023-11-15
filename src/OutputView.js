import { Console } from "@woowacourse/mission-utils";

const OutputView = {
    printMenu(menus) {
        Console.print("<주문 메뉴>");
        for (let i = 0; i < menus.length; i += 1) {
            Console.print(`${menus[i][0]} ${menus[i][1]}개`);
        }
    }
    // ...
}

export default OutputView;
