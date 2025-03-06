class CalendarCard extends HTMLElement {
  static observedAttributes = ['mode', 'value'];

  mode = '';
  value = '';

  topHalf = null;
  bottomHalf = null;
  label = null;

  constructor() {
    super();
    this.init();
  }

  init() {
    console.log('init', this);
    const wrapper = document.createElement('div');
    wrapper.classList.add('calendar-card');

    this.topHalf = document.createElement('div');
    this.topHalf.classList.add('top');

    this.bottomHalf = document.createElement('div');
    this.bottomHalf.classList.add('bottom');

    this.label = document.createElement('p');
    this.label.classList.add('label');

    const card = document.createElement('div');
    card.classList.add('card');

    card.append(this.topHalf, this.bottomHalf);
    wrapper.append(card, this.label);

    this.append(wrapper);
  }

  updateLabel() {
    if (!this.label) return;
    this.label.textContent = this.mode;
  }

  updateValue() {
    if (!this.topHalf || !this.bottomHalf) return;
    this.topHalf.textContent = this.value;
    this.bottomHalf.textContent = this.value;
  }

  connectedCallback() {
    console.log('connectedCallback');
  }

  disconnectedCallback() {
    console.log('disconnectedCallback');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback', name, oldValue, newValue);
    if (oldValue !== newValue) {
      this[name] = newValue;
      if (name === 'mode') {
        this.updateLabel();
      } else {
        this.updateValue();
      }
    }
  }
}

customElements.define('calendar-card', CalendarCard);