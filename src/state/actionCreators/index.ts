import axios from "axios";
import { ActionType } from "../reducer/reducer";
import { Dispatch } from "redux";
import { Action } from "../reducer/reducer";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORY,
    });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: term,
          },
        }
      );
      const result = data.objects.map((obj: any) => obj.package);
      dispatch({
        type: ActionType.SEARCH_REPOSITORY_SUCCESS,
        payload: result,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORY_ERROR,
        payload: err.message,
      });
    }
  };
};
