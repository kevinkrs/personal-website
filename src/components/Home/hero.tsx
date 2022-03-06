import React from 'react';
import Background from '../background';
import { StaticImage } from 'gatsby-plugin-image';
export default function Hero() {
  return (
    <>
      <Background />
      <main className="relative mx-auto mt-20 mx-10">
        <div className="grid grid-cols-2 gap-4 h-20">
          <div>
            <StaticImage
              src="../../src/images/profil.jpg"
              alt="profile picture of me"
              layout="constrained"
            />
          </div>
        </div>
      </main>
    </>
  );
}
