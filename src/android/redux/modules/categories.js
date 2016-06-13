export const GET_CATEGORIES_REQUEST = 'cosmetics/products/GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCESS = 'cosmetics/products/GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'cosmetics/products/GET_CATEGORIES_FAILURE';

const initialState = {
  loading: true,
  entities: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        entities: action.result,
      };
    default:
      return state;
  }
}


export function load() {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
}
