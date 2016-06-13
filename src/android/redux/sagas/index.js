import products from './products';
import categories from './categories';

export default function* () {
  yield [
    categories(),
    products(),
  ];
}
