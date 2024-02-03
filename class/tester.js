const Vehicle = require(`./vehicle`);
const Bicycle = require(`./bicycle`);
const ElectricBicycle = require("./electric-bicycle");
const Review = require(`./review`);
const validBicycle = require(`./main`);

class Tester {
  constructor(name, reviews = []) {
    this.name = name;
    this.reviews = reviews;
  }

  _makeNuReview(reviewedVehicle, tester, reviewedStarRating, reviewedText) {
    const nuReview = new Review(
      reviewedVehicle,
      this,
      reviewedStarRating,
      reviewedText
    );
    return nuReview;
  }

  _isVehicleEBicycle(vehicle) {
    console.log("_isVehicleEBicyle: Running", vehicle);
    if (vehicle instanceof ElectricBicycle) {
      return true;
    }
    return false;
  }

  _isVehicleBicycle(vehicle) {
    console.log("_isVehicleBicyle: Running", vehicle);
    if (vehicle instanceof Bicycle) {
      return true;
    }
    return false;
  }

  _addReview(nuReview) {
    nuReview.addReview();
  }

  submitReview(reviewedVehicle, reviewedStarRating, reviewedText) {
    let nuReview = this._makeNuReview(
      reviewedVehicle,
      this,
      reviewedStarRating,
      reviewedText
    );

    if (
      reviewedVehicle instanceof Vehicle &&
      !this._isVehicleEBicycle(reviewedVehicle) &&
      !this._isVehicleBicycle(reviewedVehicle)
    ) {
      if (reviewedVehicle.validate()) {
        nuReview.addReview();
        return nuReview;
      } else {
        throw new Error("Cannot submit review for invalid vehicle.");
      }
    }

    if (this._isVehicleEBicycle(reviewedVehicle)) {
      console.log("Yes EBike");
      nuReview.addReview();
      this.bikeTester = true;
      this.eBikeTester = true;
      return nuReview;
    } else if (this._isVehicleBicycle(reviewedVehicle)) {
      console.log("Yes Bike");
      nuReview.addReview();
      this.bikeTester = true;
      return nuReview;
    }

    return nuReview;
  }
}

let tester = new Tester("Bob Jones");

// console.log(
//   tester.submitReview(validBicycle, 5, "Great for touring and gravel")
// );
// console.log(tester.bikeTester); // true
// console.log(tester.eBikeTester); // undefined or false

let validEBike = new ElectricBicycle("Specialized", 2010, 600, "Touring", 18, 26, 30, 45);
tester.submitReview(validEBike, 1, "Terrible range");
console.log(tester.bikeTester) // true
console.log(tester.eBikeTester) // true

module.exports = Tester;
