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

export type Action = SearchPackages | SearchPackagesSuccess | SearchPackagesError;
