import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function About() {
  return (
    <main className="relative mx-auto h-screen mx-10">
      <div className="grid lg:grid-cols-2 gap-4 place-content-center">
        <div>
          <StaticImage
            src="../../images/profil.jpg"
            alt="me"
            layout="constrained"
            className="rounded-lg max-w-lg"
          />
        </div>

        <div>
          <div className="text-center flex-center text-gray-100 hover:text-gray-300 text-3xl">
            Welcome to my page!
          </div>
          <div className="text-gray-100 text-xl my-10 mx-10">
            I'm Kevin a freelance Developer and Graphic Designer based in
            Hamburg, Germany
          </div>
        </div>
      </div>
    </main>
  );
}
