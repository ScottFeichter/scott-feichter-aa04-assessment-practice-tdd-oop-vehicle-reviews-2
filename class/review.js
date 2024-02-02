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
  }

  static filterByStars(starRatingToFilter, ...reviewsToFilter) {
    return reviewsToFilter.filter(
      (curVal) => curVal.starRating === starRatingToFilter
    );
  }
}

module.exports = Review;
