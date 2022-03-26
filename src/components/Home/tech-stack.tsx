import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function TechStack() {
  return (
    <div className="mx-auto h-full mx-10 my-36">
      <div>
        <div className="mx:10px mb-24 text-center text-gray-100 hover:text-gray-300 text-3xl">
          <h2>
            <span className="font-bold text-4xl">Tech Stack</span>
          </h2>
        </div>
        <div className="grid mb-24 gap-24 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-4">
          <div className="h-52 lg:border-r-2 border-gray-200 md:border-r-2 border-gray-200">
            {' '}
            <div className="flex justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-react-native"
                width="70"
                height="70"
                viewBox="0 0 24 24"
                stroke-width="1.0"
                stroke="#f3f4f6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>React with GatsbyJS</title>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
                <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
                <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
                <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
                <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
                <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
                <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
              </svg>
            </div>
            <div className="h-20 p-5 text-center text-gray-100 hover:text-gray-300 text-xl">
              Frontend Development with <br /> React and GatsbyJS
            </div>
          </div>
          <div className="h-52 lg:border-r-2 border-gray-200 ">
            <div className="flex justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-python"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                stroke-width="1.0"
                stroke="#f3f4f6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Python</title>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
                <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
                <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
                <line x1="11" y1="6" x2="11" y2="6.01" />
                <line x1="13" y1="18" x2="13" y2="18.01" />
              </svg>
            </div>
            <div className="h-20 p-5 text-center text-gray-100 hover:text-gray-300 text-xl">
              Python - Jack of all Trades
            </div>
          </div>

          <div className="h-52 lg:border-none md:border-r-2 border-gray-200">
            <div className="flex justify-center mb-3">
              <StaticImage
                src="../../images/techstack/java.png"
                alt="Java logo"
                className="w-16"
              />
            </div>
            <div className="h-20 p-5 text-center  text-gray-100 hover:text-gray-300 text-xl">
              Java Development
            </div>
          </div>
          <div className="h-52 lg:border-r-2 border-gray-200">
            <div className="flex justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-angular"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                stroke-width="1.0"
                stroke="#f3f4f6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Angular</title>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" />
                <path d="M9 15l3 -8l3 8" />
                <path d="M10 13h4" />
              </svg>
            </div>
            <div className="h-20 p-4 text-center text-gray-100 hover:text-gray-300 text-xl">
              Angular - Web Apps
            </div>
          </div>
          <div className="h-52 lg:border-r-2 border-gray-200 md:border-r-2 border-gray-200">
            {' '}
            <div className="flex justify-center mb-5 text-center text-gray-100 hover:text-gray-300 text-4xl">
              <div className="border-4 px-4 py-3 border-white rounded-lg">
                <title>Adobe Illustrator</title> Ai
              </div>
            </div>
            <div className="p-5 text-center text-gray-100 hover:text-gray-300 text-xl">
              Adobe Illustrator - Logos,
              <br /> Illustrations and more
            </div>
          </div>

          <div className="h-52">
            <div className="flex justify-center mb-3">
              <StaticImage
                src="../../images/techstack/brain.png"
                alt="Brain"
                className="w-16 mb-4"
              />
            </div>
            <div className="h-20 p-5 text-center text-gray-100 hover:text-gray-300 text-xl">
              Machine Learning and <br />
              Neural Networks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
