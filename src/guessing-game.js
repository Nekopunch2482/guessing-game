class GuessingGame {
  constructor() {
    this.left = 0;
    this.right = 0;
    this.prev_guess = 0;
  }

  setRange(min, max) {
    this.left = min;
    this.right = max;
  }

  guess() {
    this.prev_guess = Math.ceil((this.left + this.right) / 2);
    return this.prev_guess;
  }

  lower() {
    this.right = this.prev_guess;
  }

  greater() {
    this.left = this.prev_guess;
  }
}

module.exports = GuessingGame;
