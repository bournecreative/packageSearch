export enum ActionType {
  SEARCH_REPOSITORY = "search_packages",
  SEARCH_REPOSITORY_SUCCESS = "search_packages_success",
  SEARCH_REPOSITORY_ERROR = "search_packages_error",
}

// using pure redux, no redux toolkit
interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchPackages {
  type: ActionType.SEARCH_REPOSITORY;
}

interface SearchPackagesSuccess {
  type: ActionType.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}

interface SearchPackagesError {
  type: ActionType.SEARCH_REPOSITORY_ERROR;
  payload: string;
}

export type Action =
  | SearchPackages
  | SearchPackagesSuccess
  | SearchPackagesError;

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORY:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORY_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORY_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
