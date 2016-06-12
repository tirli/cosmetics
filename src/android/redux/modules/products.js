export const GET_PRODUCT_LIST_REQUEST = 'cosmetics/products/GET_PRODUCT_LIST_REQUEST';
export const GET_PRODUCT_LIST_SUCCESS = 'cosmetics/products/GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAILURE = 'cosmetics/products/GET_PRODUCT_LIST_FAILURE';

const initialState = {
  loading: true,
  entities: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST_SUCCESS:
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
    type: GET_PRODUCT_LIST_REQUEST,
  };
}
