import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { GET_PRODUCT_LIST_REQUEST, GET_PRODUCT_LIST_SUCCESS } from '../modules/products';

const data = [
  {
    name: 'Double effect deodorant',
    expireDate: 'Sun Jun 12 2016 19:11:03 GMT+0300',
    price: 12000,
    commentary: 'Gasdad',
    photo: 'https://robohash.org/sitsequiquia.png?size=300x300',
    validAfterOpen: 12 * 30 * 24,
    opened: 'May 12 2016 19:11:03 GMT+0300',
    producer: 'Nivea',
    categories: ['Уход', 'Для тела'],
  },
  {
    name: 'Rouge g lipstick',
    expireDate: 'Sun Jun 29 2016 19:11:03 GMT+0300',
    price: 76000,
    commentary: 'Gasdad',
    photo: 'https://robohash.org/sitsequiquia.png?size=250x300',
    validAfterOpen: 12 * 30 * 24,
    producer: 'Guerlain',
    categories: ['Декоративная косметика', 'Для губ'],
  },
];

export function* fetchProducts() {
  yield put({
    type: GET_PRODUCT_LIST_SUCCESS,
    result: data,
  });
}

export default function*() {
  yield* takeLatest(GET_PRODUCT_LIST_REQUEST, fetchProducts);
}
