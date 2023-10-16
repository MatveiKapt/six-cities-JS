import React from 'react';
import PropTypes from 'prop-types';
import {Link, useLocation} from 'react-router-dom';
import {Pages} from '../../const/const';

const Card = (props) => {
  const {offer, onMouseEnter, onMouseLeave} = props;
  const {isPremium, previewImage, price, isFavorite, title, type, id, rating} = offer;

  const handlerMouseEnter = () => onMouseEnter(offer);
  const handlerMouseLeave = () => onMouseLeave();

  const STARS_WIDTH = 20;
  const {pathname} = useLocation();
  const isMainPage = () => pathname === (Pages.MAIN);

  return (
    <article className={`${isMainPage ? `cities__place-card` : `near-places__card`} place-card`} onMouseOver={handlerMouseEnter} onMouseOut={handlerMouseLeave}>
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className={`${isMainPage ? `cities` : `near-places`}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * STARS_WIDTH}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.object,
  isPremium: PropTypes.bool,
  previewImage: PropTypes.string,
  price: PropTypes.number,
  isFavorite: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  props: PropTypes.object,
  id: PropTypes.number,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};


export default Card;
