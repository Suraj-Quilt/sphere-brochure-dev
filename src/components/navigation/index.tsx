import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `ABOUT`,
    href: `/`,
  },
  {
    label: `TESTIMONIALS`,
    href: `/`,
  },
  {
    label: `TRY SPHERE`,
    href: `/`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {links.map((link: Link) =>
          link.label === 'Try Sphere' ? (
            <a
              key={`mobile-${link.label}`}
              href={link.href}
              className={tw(`block px-3 py-2 text-base font-medium btn primary`)}
            >
              {link.label}
            </a>
          ) : (
            <a
              key={`mobile-${link.label}`}
              href={link.href}
              className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}
            >
              {link.label}
            </a>
          ),
        )}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={tw(`bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className={tw(`h-12 w-48`)} src="/quilt_logo_black.png" alt="logo" />
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              {links.map((link: Link) =>
                link.label === 'TRY SPHERE' ? (
                  <button className={tw(`text-white bg-purple-700 py-2 px-4`)}>{link.label}</button>
                ) : (
                  <a
                    key={`mobile-${link.label}`}
                    href={link.href}
                    className={tw(`block px-4 py-2 text-base font-medium`)}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
