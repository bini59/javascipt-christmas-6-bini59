import InputView from './InputView.js';

class App {

  async inputDate() {
    const date = await InputView.readDate();
    return date;
  }

  async inputMenus() {
    const menus = await InputView.readMenus();
    return menus;
  }

  async run() {
    const date = await this.inputDate();
    const menus = await this.inputMenus();
    console.log(date);
    console.log(menus);
  }
}

export default App;
