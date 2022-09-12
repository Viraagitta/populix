import { FETCH_MOVIE } from "./actionType";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/4";

export const fetchListSuccess = (payload) => {
  return {
    type: FETCH_MOVIE,
    payload,
  };
};

export const getFetchList = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    try {
      let { data } = await axios.get(
        `${baseUrl}/list/${id}?api_key=bb71ea3279b5427b3f7d53aeaf9e980d`,
        {
          headers: {
            "Content-Type": await "application/json",
          },
        }
      );
      // console.log(data, "<<");
      dispatch(fetchListSuccess(data.results));
    } catch (err) {
      console.log(err);
    }
  };
};
