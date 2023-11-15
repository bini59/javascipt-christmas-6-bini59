import { Console } from '@woowacourse/mission-utils'

const errhandler = {
  inputDateError() {
    Console.print('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  },
  inputMenuError() {
    Console.print('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  }
}

export default errhandler;
