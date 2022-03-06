import { GatsbyImage } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser';
import React from 'react';
import Background from '../background';

export default function Hero() {
  return (
    <>
      <Background />
      <main className="relative mx-auto mt-20 mx-10">
        <div className="grid grid-flow-col gap-4 h-20">
          <div className="flex justify-evenly">
            <div className="h-20 bg-gray-100 flex items-center px-20">
              <GatsbyImage></GatsbyImage>
            </div>
            <div className="h-20 bg-gray-400 flex items-center px-20">
              <div>Graphic Design</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
