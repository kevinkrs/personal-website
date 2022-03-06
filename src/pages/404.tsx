import * as React from 'react';
import Background from '../components/background';

// styleS
// markup
const NotFoundPage = () => {
  return (
    <>
      <Background />
      <main className="flex justify-center wrap">
        <div className="text-center flex-center text-gray-100 hover:text-gray-300 text-3xl">
          <h1 className="mt-20">
            <span className="text-bold">Page not found. </span>
            <span className="block"> Sorry for any inconvenience!</span>
          </h1>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
