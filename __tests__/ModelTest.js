import Model from '../src/Model.js';

describe('Model 테스트', () => {

  test('총 주문 금액 테스트', () => {

    const model = new Model();
    model.setMenus('타파스-1,제로콜라-1');

    expect(model.getTotalPrice()).toBe(8000);
  });

  test('증정품 지급 테스트(12만원 이하)', () => {
    
    const model = new Model();
    model.setMenus('타파스-1,제로콜라-1');

    expect(model.getGiveaway()).toBe(undefined);
  })

  test('증정품 지급 테스트(12만원 이상)', () => {
      
    const model = new Model();
    model.setMenus('타파스-1,제로콜라-1,레드와인-3');

    expect(model.getGiveaway()).toEqual(['샴페인', '1']);
  });

  test('혜택 내역 테스트(크리스마스 디데이 할인)', () => {
    
    const model = new Model();
    model.setDate('22')
    model.setMenus('타파스-1,제로콜라-1,레드와인-3');

    expect(model.getBenefit()).toContainEqual(['크리스마스 디데이 할인', 3100]);
  });

  test('혜택 내역 테스트(크리스마스 디데이 기간 외)', () => {
    const model = new Model();
    model.setDate('26')
    model.setMenus('타파스-1,제로콜라-1,레드와인-3');

    expect(model.getBenefit()).not.toContainEqual(['크리스마스 디데이 할인', 3500]);
  });

  test('혜택 내역 테스트(평일 할인)', () => {

    const model = new Model();
    model.setDate('21');
    model.setMenus('타파스-1,제로콜라-1,레드와인-3,초코케이크-1,아이스크림-1');

    expect(model.getBenefit()).toContainEqual(['평일 할인', 4046]);
  });

  test('혜택 내역 테스트(주말 할인)', () => {

    const model = new Model();
    model.setDate('23');
    model.setMenus('타파스-1,제로콜라-1,레드와인-3,초코케이크-1,아이스크림-1,티본스테이크-2,해산물파스타-3');

    expect(model.getBenefit()).toContainEqual(['주말 할인', 2023*5]);
  })

  test('혜택 내역 테스트(특별 할인)', () => {

    const model = new Model();
    model.setDate('24');
    model.setMenus('타파스-1,제로콜라-1,레드와인-3,초코케이크-1,아이스크림-1,티본스테이크-2,해산물파스타-3');

    expect(model.getBenefit()).toContainEqual(['특별 할인', 1000]);
  });

  test('혜택 내역 테스트(증정 메뉴 지급)', () => {

    const model = new Model();
    model.setDate('24');
    model.setMenus('타파스-1,제로콜라-1,레드와인-3,초코케이크-1,아이스크림-1,티본스테이크-2,해산물파스타-3');

    model.getGiveaway();

    expect(model.getBenefit()).toContainEqual(['증정 이벤트', 25000]);
  })

  

});