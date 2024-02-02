const Bicycle = require(`./bicycle.js`);

class ElectricBicycle extends Bicycle {
  constructor(
    modelName,
    year,
    price,
    style,
    frameSize,
    tireSize,
    range,
    maxSpeed,
    reviews
  ) {
    super(modelName, year, price, style, frameSize, tireSize, reviews);
    this.range = range;
    this.maxSpeed = maxSpeed;
  }
}

module.exports = ElectricBicycle;
