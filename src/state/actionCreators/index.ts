import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../reducers/repositoryReducers";
import { Action } from "../reducers/repositoryReducers";

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
      const result = data.objects.map((obj: any) => obj.package.name);
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
