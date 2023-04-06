import ElementView from '../views/ElementView.js';
import ValueController from './ValueController.js';
import CheckboxView from '../views/CheckboxView.js';
import { copyExistingProperties } from '../libs/utils.js';
import { createElem } from '../libs/elem.js';
/*

holder = new TabHolder
tab = holder.add(new Tab("name"))
tab.add(...)


pc = new PopdownController
top = pc.add(new Row())
top.add(new Button());
values = topRow.add(new Div())
bottom = pc.add(new Row());



pc = new PopdownController
pc.addTop
pc.addTop

pc.addBottom


*/

function makeSetter(object, property) {
  return {
    setValue(v) {
      object[property] = v;
    },
    setFinalValue(v) {
      this.setValue(v);
    },
  };
}

export default class PopDownController extends ValueController {
  #top;
  #valuesView;
  #bottom;
  #options = {open: false};

  constructor(object, property, options = {}) {
    super(object, property, 'muigui-pop-down-controller');
    /*
    [ValueView
      [[B][values]]   upper row
      [[  visual ]]   lower row
    ]
    */
    this.#top = this.add(new ElementView('div', 'muigui-pop-down-top'));
//    this.#top.add(new CheckboxView(makeSetter(this.#options, 'open')));
    const checkboxElem = this.#top.addElem(createElem('input', {
      type: 'checkbox',
      onChange: () => {
        this.#options.open = checkboxElem.checked;
      },
    }));
    this.#valuesView = this.#top.add(new ElementView('div', 'muigui-pop-down-values'));
    this.#bottom = this.add(new ElementView('div', 'muigui-pop-down-bottom'));
    this.setOptions(options);
  }
  updateDisplay() {
    super.updateDisplay();
    const {open} = this.#options;
    this.domElement.children[1].classList.toggle('muigui-open', open);
    this.domElement.children[1].classList.toggle('muigui-closed', !open);
  }
  setOptions(options) {
    copyExistingProperties(this.#options, options);
    super.setOptions(options);
    this.updateDisplay();
  }
  addTop(view) {
    return this.#valuesView.add(view);
  }
  addBottom(view) {
    return this.#bottom.add(view);
  }
}