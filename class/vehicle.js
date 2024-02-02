class Vehicle {
  constructor(modelName, year, price, reviews = []) {
    this.modelName = modelName;
    this.year = year;
    this.price = price;
    this.reviews = reviews;
  }
  validate() {
    if (this.year < 1950 || this.year > 2100) {
      return false;
    } else if (!(this.modelName) || !(this.year) || !(this.price)) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Vehicle;
