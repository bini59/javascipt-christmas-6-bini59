import InputView from './InputView.js';
import Model from './Model.js';
import errhandler from './modules/errhandler.js';

class App {

  #model = new Model();

  async inputDate() {
    let date = await InputView.readDate();
    if (!this.#model.setDate(date)) {
      errhandler.inputDateError();
      date = await this.inputDate();
    }
    return date;
  }

  async inputMenus() {
    const menus = await InputView.readMenus();
    return menus;
  }

  async run() {
    await this.inputDate();
  }
}

export default App;
