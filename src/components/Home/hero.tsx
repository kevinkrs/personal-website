import React from 'react';
import TypeWriter from 'typewriter-effect';
export default function Hero() {
  const navigation = {
    social: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kraus-kevin/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 50 512 512" {...props}>
            <path
              fillRule="evenodd"
              d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
          C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
          M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
          c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
          s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Mail',
        href: 'mailto:hello@kevinkrs.com',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };
  return (
    <>
      <main className="relative mx-auto mt-20 mx-10">
        <div className="text-center flex-center text-gray-100 hover:text-gray-300 text-3xl">
          <h1>
            <span className="font-bold text-4xl">
              Hi! I`m Kevin, a freelance Developer &amp; Graphic Designer
            </span>{' '}
            <span className="block mt-2">
              Site currently under construction
            </span>
          </h1>
          <div className="font-bold text-5xl mt-20 text-gray-400">
            <TypeWriter
              options={{
                strings: [
                  'Frontend Development',
                  'Graphic Design',
                  'Backend Development',
                  'Data Science',
                  'Tech',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="pt-10 pb-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-200 hover:text-gray-400"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
