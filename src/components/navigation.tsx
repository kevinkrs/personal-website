import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function GlobalNavigation() {
  return (
    <div className="ml-2 pt-4">
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
  );
}
