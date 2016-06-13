import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import categories from './categories';

export default combineReducers({
  products,
  categories,
  form: formReducer,
});
