function decorateValue(number) {
  return Number(number) < 10 ? `0${number}` : `${number}`;
}

class CalendarCard extends HTMLElement {
  static observedAttributes = ['mode', 'value'];

  mode = '';
  value = '';

  card = null;
  topHalf = null;
  bottomHalf = null;
  label = null;
  pending = true;

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

    this.card = document.createElement('div');
    this.card.classList.add('card');

    this.card.append(this.topHalf, this.bottomHalf);
    wrapper.append(this.card, this.label);

    this.append(wrapper);
  }

  updateLabel() {
    if (!this.label) return;
    this.label.textContent = this.mode;
  }

  animateValue(nextValue) {
    const topHalf = document.createElement('div');
    topHalf.classList.add('top', 'z0', 'new');
    topHalf.textContent = nextValue;

    const bottomHalf = document.createElement('div');
    bottomHalf.classList.add('bottom', 'z2', 'deg90neg', 'new');
    bottomHalf.textContent = nextValue;

    this.card.append(topHalf, bottomHalf);
    this.topHalf.classList.add('upflip');
    bottomHalf.classList.add('downflip');

    setTimeout(() => {
      this.topHalf.textContent = nextValue;
      this.bottomHalf.textContent = nextValue;
      this.topHalf.classList.remove('upflip');
      bottomHalf.classList.remove('downflip');
      this.card.removeChild(topHalf);
      this.card.removeChild(bottomHalf);
    }, 400);
  }

  updateValue() {
    if (!this.topHalf || !this.bottomHalf) return;
    const currentValue = this.topHalf.textContent;
    const nextValue = decorateValue(this.value);
    if (currentValue === nextValue) return;
    if (this.pending) {
      this.topHalf.textContent = nextValue;
      this.bottomHalf.textContent = nextValue;
      this.pending = false;
    } else {
      this.animateValue(nextValue);
    }
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