import { DELETE, FETCH, BY_NAME, CHANGE_PAGE, BY_ID } from "./actions";

const initialState = {
  allCountries: [],
  countryDetail: {},
  countriesPerPage: 10,
  currentPage: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        allCountries: action.payload,
      };
    case DELETE:
      return {
        ...state,
        allCountries: state.allCountries.filter(
          (country) => country.id !== action.payload
        ),
      };

    case BY_NAME:
      return {
        ...state,
        allCountries: [...state.allCountries, ...action.payload],
      };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case BY_ID:
      return {
        ...state,
        countryDetail: action.payload,
      };

    default:
      return state;
  }
};
