import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/logo/logo";
import FavoritesCard from "../../components/favorites-card/favorites-card";

const FavoritesPage = ({offers}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities = [...new Set(favoriteOffers.map((offer) => offer.city))];


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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city, index) => {
                return (
                  <li key={index} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favoriteOffers.map((offer) => {
                        if (offer.city === city) {
                          return (
                            <FavoritesCard key={offer.id} offer={offer} />
                          );
                        }
                        return null;
                      })
                      }
                    </div>
                  </li>);
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo />
      </footer>
    </div>

  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default FavoritesPage;
