import React from 'react';

const navigation = {
  main: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Imprint', href: '/legal/imprint' },
  ],
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

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex justify-center space-x-6">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  target={'_blank'}
                  className="text-base text-gray-400 hover:text-gray-50"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-400"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Kevin Kraus | Hamburg, Germany
        </p>
      </div>
    </footer>
  );
}
