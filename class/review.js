// const Vehicle = require(`./vehicle`);
// const Tester = require(`./tester`);

class Review {
  constructor(vehicle, tester, starRating, text) {
    this.vehicle = vehicle;
    this.tester = tester;
    this.starRating = starRating;
    this.text = text;
  }
  addReview() {
    this.vehicle.reviews.push(this);
    this.tester.reviews.push(this);
    return true;
  }

  static filterByStars(starRatingToFilter, ...reviewsToFilter) {
    return reviewsToFilter.filter(
      (curVal) => curVal.starRating === starRatingToFilter
    );
  }
}

module.exports = Review;
