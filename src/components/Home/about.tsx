import { render } from '@headlessui/react/dist/utils/render';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function About() {
  return (
    <main className="flex items-center mx-auto h-full">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-4 place-items-center">
          <div className="mx-auto">
            <StaticImage
              src="../../images/profil.jpg"
              alt="me"
              layout="constrained"
              className="rounded-lg max-w-lg"
            />
          </div>

          <div className="max-auto mx-auto bg-gray-700 p-2 lg:p-12 md:p-12 rounded-lg">
            <div className="text-center text-gray-100 hover:text-gray-300 text-3xl">
              <div className="mx:10px pt-4 flex-center text-center text-gray-100 hover:text-gray-300 text-3xl">
                <h2>
                  <span className="font-bold text-4xl">
                    Welcome to my page!
                  </span>
                </h2>
              </div>
            </div>
            <div className="text-gray-100 text-xl my-10 mx-10">
              <p>I'm Kevin a Freelance Developer based in Hamburg, Germany. </p>

              <p>
                More information is coming! Meanwhile, you can take a look at my
                tech-stack below or check up my GitHub.{' '}
                <a href="https://github.com/kevinkrs7" target="_blank">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 32.58 31.77"
                    className="w-10 m-3 mx-auto my-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.29,0C7.29,0,0,7.29,0,16.29c0,7.2,4.67,13.3,11.14,15.46,.81,.15,1.11-.35,1.11-.79,0-.39-.01-1.41-.02-2.77-4.53,.98-5.49-2.18-5.49-2.18-.74-1.88-1.81-2.38-1.81-2.38-1.48-1.01,.11-.99,.11-.99,1.63,.12,2.5,1.68,2.5,1.68,1.45,2.49,3.81,1.77,4.74,1.35,.15-1.05,.57-1.77,1.03-2.18-3.62-.41-7.42-1.81-7.42-8.05,0-1.78,.63-3.23,1.68-4.37-.17-.41-.73-2.07,.16-4.31,0,0,1.37-.44,4.48,1.67,1.3-.36,2.69-.54,4.08-.55,1.38,0,2.78,.19,4.08,.55,3.11-2.11,4.48-1.67,4.48-1.67,.89,2.24,.33,3.9,.16,4.31,1.04,1.14,1.67,2.59,1.67,4.37,0,6.26-3.81,7.63-7.44,8.04,.58,.5,1.11,1.5,1.11,3.02,0,2.18-.02,3.93-.02,4.47,0,.44,.29,.94,1.12,.78,6.47-2.16,11.13-8.26,11.13-15.45C32.58,7.29,25.29,0,16.29,0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </p>
              <ul className="list-disc">
                <li>Software Implementation</li>
                <li>Architecture Planung</li>
                <li>Feature Planing &amp; Implementation</li>
                <li>Prototyping</li>
                <li>Security Testing</li>
                <li>Illustration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
