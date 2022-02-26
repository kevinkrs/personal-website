import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function GlobalNavigation() {
  return (
    <Popover>
      <div className="flex w-full items-center justify-between md:w-auto pl-7">
        <Link to="/">
          <StaticImage
            alt="kevinkrs"
            src="../images/logos/logo.png"
            width={100}
            loading="eager"
            placeholder="none"
          />
        </Link>
      </div>
    </Popover>
  );
}
