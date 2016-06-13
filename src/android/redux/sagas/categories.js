import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from '../modules/categories';

const data = [
  'Уходовая косметика',
  'Декоративная косметика',
  'Укладка',
  'Для ванной и душа',
  'Для волос',
  'Для лица',
  'Для губ',
  'Для глаз',
  'Для тела',
  'Другое',
];

export function* fetchCategories() {
  yield put({
    type: GET_CATEGORIES_SUCCESS,
    result: data,
  });
}

export default function*() {
  yield* takeLatest(GET_CATEGORIES_REQUEST, fetchCategories);
}
