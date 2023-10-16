import React, {useState} from "react";
import {useParams} from "react-router-dom";
import propTypes from "prop-types";
import Reviews from "../../components/reviews/reviews";
import Logo from "../../components/logo/logo";
import Map from "../../components/map/map";
import CardsList from "../../components/cards-list/cards-list";

const OfferPage = (props) => {
  const {offers} = props;
  const {id} = useParams();
  const card = offers.find((offer) => offer.id === parseInt(id, 10));
  const IMMEDIATE_OFFERS_COUNT = 3;
  const immediateOffers = Array(IMMEDIATE_OFFERS_COUNT).fill().map((_, index) => offers[index]);

  const [focusCard, setFocusCard] = useState(null);
  const handlerCardMouseOver = (offer) => {
    setFocusCard(offer);
  };
  const handlerCardMouseOut = () => {
    setFocusCard(null);
  };

  const {
    isPremium,
    title,
    photos,
    description,
    type,
    bedroomsCount,
    adultsCount,
    price,
    isFavorite,
    masterInfo,
    reviews,
    rating,
  } = card;

  const isOne = (target) => target === 1;
  const STARS_WIDTH = 20;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photos.map((photo, index) => <div key={index} className="property__image-wrapper">
                <img
                  className="property__image"
                  src={photo}
                  alt="Photo studio"
                />
              </div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite && `property__bookmark-button--active`} button`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * STARS_WIDTH}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedroomsCount} ${isOne(bedroomsCount) ? `Bedroom` : `Bedrooms`}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${adultsCount} ${isOne(adultsCount) ? `adult` : `adults`}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">Wi-Fi</li>
                  <li className="property__inside-item">Washing machine</li>
                  <li className="property__inside-item">Towels</li>
                  <li className="property__inside-item">Heating</li>
                  <li className="property__inside-item">Coffee machine</li>
                  <li className="property__inside-item">Baby seat</li>
                  <li className="property__inside-item">Kitchen</li>
                  <li className="property__inside-item">Dishwasher</li>
                  <li className="property__inside-item">Cabel TV</li>
                  <li className="property__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${masterInfo.isPro && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                    <img
                      className="property__avatar user__avatar"
                      src={masterInfo.photo}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{masterInfo.name}</span>
                  <span className="property__user-status">{masterInfo.isPro && `Pro`}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <Reviews reviews={reviews}/>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={immediateOffers} activeItem={focusCard}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CardsList offers={immediateOffers} onMouseEnter={handlerCardMouseOver} onMouseLeave={handlerCardMouseOut}/>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
};

OfferPage.propTypes = {
  offers: propTypes.array,
  id: propTypes.string,
  card: propTypes.object,
};

export default OfferPage;
