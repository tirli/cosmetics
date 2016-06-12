import products from './products';

export default function* () {
  yield [
    products(),
  ];
}
