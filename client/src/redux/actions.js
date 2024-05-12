import axios from "axios";

export const BY_ID = "BY_ID";
export const BY_NAME = "BY_NAME";
export const FETCH = "FETCH";
export const DELETE = "DELETE";
export const CHANGE_PAGE = "CHANGE_PAGE";

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        "http://localhost:3001/countries/limited?limit=10"
      );

      return dispatch({
        type: FETCH,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const byName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/countries/name?name=${name}`
      );

      return dispatch({
        type: BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const byId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`http://localhost:3001/countries/${id}`);

      return dispatch({
        type: BY_ID,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const deleteCountry = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};
