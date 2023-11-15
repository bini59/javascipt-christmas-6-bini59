// 모델에 입력된 값을 넣어주는 테스트

import { MissionUtils } from "@woowacourse/mission-utils";
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

describe('입력값 테스트', () => {
  test('날짜 입력 예외 처리(문자열)', async () => {

    const INVALID_DATE_MESSAGE = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';

    const input = '문자열'
    const logspy = getLogSpy();
    mockQuestions([input, '25']);

    const app = new App();
    await app.inputDate();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  test('날짜 입력 예외 처리(숫자 범위 초과)', async () => {
      
    const INVALID_DATE_MESSAGE = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';

    const input = '32'
    const logspy = getLogSpy();
    mockQuestions([input, '25']);

    const app = new App();
    await app.inputDate();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  test('메뉴 입력 처리', async () => {
        
    const input = '타파스-1,제로콜라-1'
    const logspy = getLogSpy();
    mockQuestions([input, '타파스-1,제로콜라-1']);

    const app = new App();
    const menus = await app.inputMenus();

    expect(menus).toEqual(expect.stringContaining(input));
  })

  test('메뉴 입력 예외 처리(없는 메뉴)', async () => {
      
    const INVALID_MENU_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    const input = '타-1,제로콜라-1'
    const logspy = getLogSpy();
    mockQuestions([input, '타파스-1,제로콜라-1']);

    const app = new App();
    await app.inputMenus();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(INVALID_MENU_MESSAGE));
  });

  test('메뉴 입력 예외 처리(중복 메뉴)', async () => {
      
    const INVALID_MENU_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    const input = '타파스-1,타파스-1'
    const logspy = getLogSpy();
    mockQuestions([input, '타파스-1,제로콜라-1']);

    const app = new App();
    await app.inputMenus();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(INVALID_MENU_MESSAGE));
  });

  test('메뉴 입력 예외 처리(문자열)', async () => {
        
    const INVALID_MENU_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    const input = '타파스-a,제로콜라-1'
    const logspy = getLogSpy();
    mockQuestions([input, '타파스-1,제로콜라-1']);

    const app = new App();
    await app.inputMenus();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(INVALID_MENU_MESSAGE));
  });

  test('메뉴 입력 예외 처리(무효 숫자)', async () => {
        
    const INVALID_MENU_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    const input = '타파스-0,제로콜라-1'
    const logspy = getLogSpy();
    mockQuestions([input, '타파스-1,제로콜라-1']);

    const app = new App();
    await app.inputMenus();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(INVALID_MENU_MESSAGE));
  });

  test('메뉴 입력 예외 처리(소수점)', async () => {
      
    const INVALID_MENU_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    const input = '타파스-1.1,제로콜라-1'
    const logspy = getLogSpy();
    mockQuestions([input, '타파스-1,제로콜라-1']);

    const app = new App();
    await app.inputMenus();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(INVALID_MENU_MESSAGE));
  });

  test('메뉴 입력 예외 처리(20개 초과)', async () => {
      
    const INVALID_MENU_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    const input = '타파스-11,제로콜라-11'
    const logspy = getLogSpy();
    mockQuestions([input, '타파스-1,제로콜라-1']);

    const app = new App();
    await app.inputMenus();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(INVALID_MENU_MESSAGE));
  });

  test('메뉴 입력 예외 처리(음료만)', async () => {
      
    const INVALID_MENU_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    const input = '레드와인-1,제로콜라-1'
    const logspy = getLogSpy();
    mockQuestions([input, '타파스-1,제로콜라-1']);

    const app = new App();
    await app.inputMenus();

    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(INVALID_MENU_MESSAGE));
  });
});