import axios from "axios";

export const BY_ID = "BY_ID";
export const BY_NAME = "BY_NAME";
export const FETCH = "FETCH";
export const DELETE = "DELETE";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const FILTER = "FILTER";
export const FILTER_ALL = "FILTER_ALL";
export const ORDER_BY = "ORDER_BY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/countries/limited");

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
      const { data } = await axios.get(
        `http://localhost:3001/countries/name?name=${name}`
      );
      dispatch({
        type: BY_NAME,
        payload: data,
      });
    } catch (error) {
      return { error: error.response.data };
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

export const filter = (continent) => {
  return {
    type: FILTER,
    payload: continent,
  };
};

export const filterAll = () => {
  return {
    type: FILTER_ALL,
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/activities");
      return dispatch({
        type: GET_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const deleteActivity = (id) => {
  return {
    type: DELETE_ACTIVITY,
    payload: id,
  };
};

export const orderCountries = (order, direction) => {
  return {
    type: ORDER_BY,
    payload: {
      order,
      direction,
    },
  };
};
