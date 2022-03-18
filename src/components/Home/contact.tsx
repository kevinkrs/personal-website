import React from 'react';

export default function Contact() {
  return (
    <div className="relative flex-row justify-around mx-auto h-full">
      <div className="bg-gray-700 rounded-lg p-12 h-84">
        <div className="mx:10px mb-24 text-center text-gray-100 hover:text-gray-300 text-3xl">
          <h2>
            <span className="font-bold text-4xl">Feel free to contact me!</span>
          </h2>
        </div>
        <div className="flex justify-center justify-around">
          <a href="mailto:hello@kevinkrs.com">
            <button className="rounded-lg bg-gray-800 px-24 py-4 hover:bg-gray-900 ">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-10 text-gray-200"
              >
                <path
                  fillRule="evenodd"
                  d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
