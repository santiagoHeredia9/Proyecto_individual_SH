import {
  DELETE,
  FETCH,
  BY_NAME,
  CHANGE_PAGE,
  BY_ID,
  FILTER,
  FILTER_ALL,
} from "./actions";

const initialState = {
  allCountries: [],
  countries: [],
  countryDetail: {},
  countriesPerPage: 10,
  currentPage: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case DELETE:
      return {
        ...state,
        countries: state.countries.filter(
          (country) => country.id !== action.payload
        ),
      };

    case BY_NAME:
      // eslint-disable-next-line no-case-declarations
      const newCountries = action.payload.filter(
        (newCountry) =>
          !state.countries.some((country) => country.id === newCountry.id)
      );
      return {
        ...state,
        countries: [...state.countries, ...newCountries],
        allCountries: [...state.allCountries, ...newCountries],
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
    case FILTER:
      return {
        ...state,
        countries: action.payload,
        currentPage: 1,
      };

    case FILTER_ALL:
      return {
        ...state,
        countries: state.allCountries,
      };
    default:
      return state;
  }
};
