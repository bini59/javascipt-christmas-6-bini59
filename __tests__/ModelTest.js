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

});