import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Customers() {
  return (
    <div className="flex-row mx-auto h-screen mt-64">
      <div className="justify-center">
        {' '}
        <div className="mx:10px mb-36 text-center text-gray-100 hover:text-gray-300 text-3xl">
          <h2>
            <span className="font-bold text-4xl">Customers</span>
          </h2>
        </div>
        <div className="flex justify-center justify-around">
          <div>
            <a href="https://www.elbwalker.com" target="_blank">
              <StaticImage
                src="../../../static/customers/elbwalker.png"
                alt="elbwalker"
                layout="constrained"
                className="max-w-sm"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
