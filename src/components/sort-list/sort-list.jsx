import React from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {SortTypes} from "../../const/const";
import {ActionCreater} from "../../store/action";

const SortList = (props) => {
  const {currentSortType, changeCurrentSortType, isOpened, closeSortTypesList} = props;
  const isActiveSort = (sortItem) => sortItem === currentSortType;

  return (
    <ul className={`places__options  places__options--custom ${isOpened && `places__options--opened`}`}>
      {Object.keys(SortTypes)
        .map((index) => (
          <li
            key={index}
            className={`places__option ${isActiveSort(SortTypes[index]) && `places__option--active`}`}
            onClick={() => {
              changeCurrentSortType(SortTypes[index]);
              closeSortTypesList();
            }}
            tabIndex={0}>
            {SortTypes[index]}
          </li>
        ))}
    </ul>
  );
};

SortList.propTypes = {
  currentSortType: propTypes.string,
  changeCurrentSortType: propTypes.func,
  isOpened: propTypes.bool,
  closeSortTypesList: propTypes.func,
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType,
  isOpened: state.sortTypesListOpened,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSortType(sortType) {
    dispatch(ActionCreater.changeSortType(sortType));
  },
  closeSortTypesList() {
    dispatch(ActionCreater.closeSortTypesList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
