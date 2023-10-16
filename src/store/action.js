export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CREATE_OFFERS_LIST: `main/createOffersList`,
  CHANGE_SORT_TYPE: `main/changeSortType`,
  OPEN_SORT_TYPES_LIST: `main/openSortTypesList`,
  CLOSE_SORT_TYPES_LIST: `main/closeSortTypesList`
};

export const ActionCreater = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  createOffersList: () => ({
    type: ActionType.CREATE_OFFERS_LIST,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
  openSortTypesList: () => ({
    type: ActionType.OPEN_SORT_TYPES_LIST,
  }),
  closeSortTypesList: () => ({
    type: ActionType.CLOSE_SORT_TYPES_LIST,
  }),
};
