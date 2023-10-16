import React from "react";
import propTypes from "prop-types";

const STARS_WIDTH = 20;

const Review = ({review}) => {
  const {authorPhoto, authorName, grade, text, date} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={authorPhoto}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{authorName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${grade * STARS_WIDTH}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: propTypes.object.isRequired,
};

export default Review;
