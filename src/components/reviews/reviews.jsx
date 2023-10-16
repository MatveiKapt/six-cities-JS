import React from "react";
import propTypes from "prop-types";
import ReviewForm from "../review-form/review-form";
import Review from "./review/review";

const Reviews = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} review={review}/>)}
      </ul>
      <ReviewForm />
    </section>
  );
};

Reviews.propTypes = {
  reviews: propTypes.array.isRequired,
};

export default Reviews;
