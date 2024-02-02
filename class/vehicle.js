class Vehicle {
  constructor(modelName, year, price, reviews = []) {
    this.modelName = modelName;
    this.year = year;
    this.price = price;
    this.reviews = reviews;
  }

  _isValidYear(year) {
    if (year < 1950 || year > 2100) {
      return false;
    } else {
      return true;
    }
  }

  _isValidPrice(price) {
    if (price > 0) {
      return true;
    }
    return false;
  }

  _isPresentMeta() {
    if (this.modelName && this.year && this.price) {
      return true;
    } else {
      return false;
    }
  }

  validate() {
    if (
      this._isValidYear(this.year) &&
      this._isValidPrice(this.price) &&
      this._isPresentMeta()
    ) {
      return true;
    }
    return false;
  }

  _updateModelName(nuModelName) {
    if (nuModelName) {
      this.modelName = nuModelName;
      return true;
    }
    return false;
  }

  _updateYear(nuYear) {
    if (this._isValidYear(nuYear)) {
      this.year = nuYear;
      return true;
    } else {
      throw new Error("Year must be between 1950 and 2100");
    }
  }

  _updatePrice(nuPrice) {
    if (nuPrice) {
      if (this._isValidPrice) {
        this.price = nuPrice;
        return true;
      }
    } else {
      throw new Error("Price must be greater than 0");
    }
  }

  update(nuModelName, nuYear, nuPrice) {
    if (
      this._updateModelName(nuModelName) &&
      this._updateYear(nuYear) &&
      this._updatePrice(nuPrice)
    ) {
      return true;
    } else {
      console.error("Did not update - check errors!");
      return false;
    }
  }
}

module.exports = Vehicle;
