import React from "react";
import propTypes from "prop-types";
import ReviewForm from "../review-form/review-form";

const STARS_WIDTH = 20;

const Reviews = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          return (<li key={review.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={review.authorPhoto}
                  width={54}
                  height={54}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{review.authorName}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${review.grade * STARS_WIDTH}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{review.text}</p>
              <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
            </div>
          </li>
          );
        })
        }
      </ul>
      <ReviewForm />
    </section>
  );
};

Reviews.propTypes = {
  reviews: propTypes.array.isRequired,
};

export default Reviews;
