import { createElem } from '../libs/elem.js';
import { strToNumber } from '../libs/conversions.js';
import { clamp, copyExistingProperties, stepify } from '../libs/utils.js';
import EditView from './EditView.js';

export default class NumberView extends EditView {
  #to;
  #from;
  #step;
  #skipUpdate;
  #options = {
    step: 0.01,
    converters: strToNumber,
    min: Number.NEGATIVE_INFINITY,
    max: Number.POSITIVE_INFINITY,
  };

  constructor(setter, options) {
    const setValue = setter.setValue.bind(setter);
    const setFinalValue = setter.setFinalValue.bind(setter);
    super(createElem('input', {
      type: 'number',
      onInput: () => this.#handleInput(setValue, true),
      onChange: () => this.#handleInput(setFinalValue, false),
    }));
    this.setOptions(options);
  }
  #handleInput(setFn, skipUpdate) {
    const [valid, newV] = this.#from(this.domElement.value);
    let inRange;
    if (valid) {
      const {min, max} = this.#options;
      inRange = newV >= min && newV <= max;
      this.#skipUpdate = skipUpdate;
      setFn(clamp(newV, min, max));
    }
    this.domElement.style.color = (valid && inRange) ? '' : 'var(--invalid-color)';
  }
  updateDisplay(v) {
    if (!this.#skipUpdate) {
      this.domElement.value = stepify(v, this.#to, this.#step);
    }
    this.#skipUpdate = false;
  }
  setOptions(options) {
    copyExistingProperties(this.#options, options);
    const {
      step,
      converters: {to, from},
    } = this.#options;
    this.#to = to;
    this.#from = from;
    this.#step = step;
    return this;
  }
}
