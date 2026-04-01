import type { JSX } from 'react';

const HomePage = (): JSX.Element => {
  return (
    <>
      <h1>Главная страница с поиском</h1>
      <div className='search'>
        <input type='text' />
      </div>
    </>
  );
};

export default HomePage;
