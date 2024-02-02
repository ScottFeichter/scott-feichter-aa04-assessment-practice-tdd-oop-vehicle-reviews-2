class Vehicle {
  constructor(modelName, year, price, reviews = []) {
    this.modelName = modelName;
    this.year = year;
    this.price = price;
    this.reviews = reviews;
  }

  _isValidYear(year) {
    if (this.year < 1950 || this.year > 2100) {
      return false;
    } else {
      return true;
    }
  }

  _isValidMeta() {
    if (this.modelName && this.year && this.price) {
      return true;
    } else {
      return false;
    }
  }

  validate() {
    if (this._isValidYear(this.year) && this._isValidMeta()) {
      return true;
    }
    return false;
  }

  update(modelName, year, price) {}
}

module.exports = Vehicle;
