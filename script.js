class RandomNumberGenerator {
  constructor(formId, displayId) {
    this.form = document.getElementById(formId);
    this.display = document.getElementById(displayId);
    this.minInput = this.form.elements['min'];
    this.maxInput = this.form.elements['max'];
    this.init();
  }

  init() {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      this.updateDisplay(this.generate());
    });
  }

  generate() {
    const min = parseInt(this.minInput.value, 10);
    const max = parseInt(this.maxInput.value, 10);
    if (isNaN(min) || isNaN(max) || min > max) {
      alert('Please enter valid min and max values (min should be ≤ max).');
      return '--';
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateDisplay(value) {
    this.display.textContent = value;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new RandomNumberGenerator('rngForm', 'display');
});
