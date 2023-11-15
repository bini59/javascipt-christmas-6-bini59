import Model from '../src/Model.js';

describe('Model 테스트', () => {

  test('총 주문 금액 테스트', () => {

    const model = new Model();
    model.setMenus('타파스-1,제로콜라-1');

    expect(model.getTotalPrice()).toBe(8000);
  });

});