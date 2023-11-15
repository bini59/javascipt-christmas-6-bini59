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
});