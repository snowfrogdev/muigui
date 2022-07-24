import { createElem } from '../libs/elem.js';
import Controller from './Controller.js';

export default class Folder extends Controller {
  constructor(name = 'Controls', className = 'muigui-menu') {
    super(className);
    this._labelElem = createElem('label');
    this.addElem(createElem('button', {
      type: 'button',
      onClick: () => this.toggleOpen(),
    }, [this._labelElem]));
    this._controllerElem = this.addElem(createElem('div'));
    this._controllers = [];
    this.name(name);
    this.open();
  }
  get children() {
    return this._controllers; // should we return a copy?
  }
  get controllers() {
    return this._controllers.filter(c => !(c instanceof Folder));
  }
  get folders() {
    return this._controllers.filter(c => c instanceof Folder);
  }
  reset(recursive = true) {
    for (const controller of this._controllers) {
      if (!(controller instanceof Folder) || recursive) {
        controller.reset(recursive);
      }
    }
    return this;
  }
  open(open = true) {
    this.domElement.classList.toggle('muigui-closed', !open);
    this.domElement.classList.toggle('muigui-open', open);
    return this;
  }
  close() {
    return this.open(false);
  }
  name(name) {
    this._labelElem.textContent = name;
    return this;
  }
  title(title) {
    return this.name(title);
  }
  toggleOpen() {
    this.open(!this.domElement.classList.contains('muigui-open'));
    return this;
  }
  remove(controller) {
    const ndx = this._controllers.indexOf(controller);
    if (ndx >= 0) {
      const c = this._controllers.splice(ndx, 1);
      const c0 = c[0];
      const elem = c0.domElement;
      elem.remove();
      c0.setParent(null);
    }
  }
  addController(controller) {
    this._controllerElem.appendChild(controller.domElement);
    this._controllers.push(controller);
    controller.setParent(this);
    return controller;
  }
}
