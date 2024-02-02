const Review = require(`./review`);

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

    if (reviewedVehicle.validate()) {
      nuReview.addReview();
    } else {
      throw new Error("Cannot submit review for invalid vehicle.");
    }

    return nuReview;
  }
}

module.exports = Tester;
