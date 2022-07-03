import { createElem } from '../libs/elem.js';
import Color from './color.js';
import { createWidget } from './createWidget.js';
import LabelWidget from './labelwidget.js';


// Clicking should only be first child
export default class Menu extends LabelWidget {
  constructor(parent, className = 'muigui-menu', name = 'Controls') {
    super(className, name);
    parent.appendChild(this.elem);
    this._labelElem = this.elem.querySelector('label');
    this._labelElem.addEventListener('click', () => {
      this.toggleOpen();
    });
    this._widgetsElem = createElem('div');
    this.elem.appendChild(this._widgetsElem);
    this.open();
  }
  open(open = true) {
    this.elem.classList.toggle('muigui-closed', !open);
    this.elem.classList.toggle('muigui-open', open);
  }
  close() {
    this.open(false);
  }
  toggleOpen() {
    this.open(!this.elem.classList.contains('muigui-open'));
  }
  add(object, property, ...args) {
    const widget = createWidget(object, property, ...args);
    this._widgetsElem.appendChild(widget.elem);
    return widget;
  }
  addColor(object, property, ...args) {
    const widget = new Color(object, property, ...args);
    this._widgetsElem.appendChild(widget.elem);
    return widget;
  }
}
