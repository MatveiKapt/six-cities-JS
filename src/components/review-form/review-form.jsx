import React, {useState} from "react";

const ReviewForm = () => {
  const [formState, setFormState] = useState({
    grade: null,
    text: null,
  });

  const handlerTextAreaChange = (evt) => {
    setFormState({
      ...formState,
      text: evt.target.value,
    });
  };

  const handlerGradeChange = (evt) => {
    setFormState({
      ...formState,
      grade: evt.target.defaultValue,
    });
  };

  const STARS_COUNT = 5;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Array.from({length: STARS_COUNT}).map((_, index) => <>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={STARS_COUNT - index}
            id={`${STARS_COUNT - index}-stars`}
            type="radio"
            onChange={handlerGradeChange}
          />
          <label
            htmlFor={`${STARS_COUNT - index}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </>)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={``}
        onChange={handlerTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{` `}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{` `}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
