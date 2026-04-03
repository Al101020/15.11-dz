import type { JSX } from 'react';
import { useContext } from 'react';

import appStore from '../app/store';
console.log();

const Result = (): JSX.Element => {
  const store = useContext(appStore);
  console.log(store);
  return (
    <div className='result'>Результат</div>
  )
}

export default Result;
