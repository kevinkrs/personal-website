import React from 'react';

export default function Hero() {
  return (
    <main className="relative mx-auto mt-20 mx-10">
      <div className="grid grid-flow-col gap-4">
        <div className="flex justify-evenly">
          <div className="h-20 bg-gray-100 flex items-center px-20">
            <div>Full Stack Development</div>
          </div>
          <div className="h-20 bg-gray-400 flex items-center px-20">
            <div>Graphic Design</div>
          </div>
        </div>
      </div>
    </main>
  );
}
