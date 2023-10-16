import {INITIAL_CITY, SortTypes} from "../const/const";
import {offers} from "../mock/mock";
import {ActionType} from "./action";

const INITIAL_STATE = {
  currentCity: INITIAL_CITY,
  offersList: offers,
  currentSortType: SortTypes.POPULAR,
  sortTypesListOpened: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
      };
    case ActionType.OPEN_SORT_TYPES_LIST:
      return {
        ...state,
        sortTypesListOpened: true,
      };
    case ActionType.CLOSE_SORT_TYPES_LIST:
      return {
        ...state,
        sortTypesListOpened: false,
      };
    default:
      return state;
  }
};

export {reducer};
