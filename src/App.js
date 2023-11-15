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
    let menus = await InputView.readMenus();
    if (!this.#model.setMenus(menus)) {
      errhandler.inputMenuError();
      menus = await this.inputMenus();
    }
    return menus;
  }

  async run() {
    await this.inputDate();
    await this.inputMenus();
  }
}

export default App;
