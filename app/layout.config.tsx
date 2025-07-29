import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Cat, CatIcon, Circle, CircleAlert, DogIcon, Square } from 'lucide-react';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const baseOptions: BaseLayoutProps = {
  
nav: {
  title: (
    <>
    <img
      src="/sombra6.png"
      width={30}
      height={35}
      alt="Logo"
      className='mr-2 '
    />
    <span className="text-purple-700"> ABOODISEC</span>
    </>
  ),
},
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};

/*
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="https://www.svgrepo.com/show/493161/white-hacker-male.svg"
          aria-label="Logo"
        >
          <Circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        Aboodi's Notes
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
*/