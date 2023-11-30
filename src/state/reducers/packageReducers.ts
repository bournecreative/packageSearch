interface PackagesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchPackages {
  type: ActionType.SEARCH_PACKAGES;
}

interface SearchPackagesSuccess {
  type: ActionType.SEARCH_PACKAGES_SUCCESS;
  payload: string[];
}

interface SearchPackagesError {
  type: ActionType.SEARCH_PACKAGES_ERROR;
  payload: string;
}

type Action = SearchPackages | SearchPackagesSuccess | SearchPackagesError;

enum ActionType {
  SEARCH_PACKAGES = "search_packages",
  SEARCH_PACKAGES_SUCCESS = "search_packages_success",
  SEARCH_PACKAGES_ERROR = "search_packages_error",
}

const reducer = (state: PackagesState, action: Action): PackagesState => {
  switch (action.type) {
    case ActionType.SEARCH_PACKAGES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_PACKAGES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_PACKAGES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
