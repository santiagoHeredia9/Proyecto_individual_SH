/* eslint-disable no-case-declarations */
import {
  DELETE,
  FETCH,
  BY_NAME,
  CHANGE_PAGE,
  BY_ID,
  FILTER,
  FILTER_ALL,
  GET_ACTIVITIES,
  ORDER_BY,
  DELETE_ACTIVITY,
} from "./actions";

const initialState = {
  allCountries: [],
  countries: [],
  activities: [],
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

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case BY_NAME:
      const newCountries = action.payload.filter(
        (newCountry) =>
          !state.countries.some((country) => country.id === newCountry.id)
      );
      return {
        ...state,
        countries: [ ...newCountries],
        allCountries: [ ...newCountries],
        currentPage: 1,
      };

    case BY_ID:
      return {
        ...state,
        countryDetail: action.payload,
      };
    case FILTER:
      return {
        ...state,
        countries: state.allCountries.filter(
          (country) => country.continent === action.payload
        ),
        currentPage: 1,
      };

    case FILTER_ALL:
      return {
        ...state,
        countries: state.allCountries,
        currentPage: 1,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case ORDER_BY:
      const { order, direction } = action.payload;
      const sorted = [...state.allCountries].sort((a, b) => {
        if (direction === "ASC") {
          return a[order] > b[order] ? 1 : -1;
        } else {
          return a[order] < b[order] ? 1 : -1;
        }
      });
      return {
        ...state,
        countries: sorted,
        currentPage: 1,
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter((act) => act.id !== action.payload),
      };
    default:
      return state;
  }
};
