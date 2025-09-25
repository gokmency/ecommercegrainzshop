import { cn, pressable } from '@coinbase/onchainkit/theme';
import { useCallback, useState } from 'react';
import { MenuSvg } from 'src/svg/MenuSvg';
import GrainzLogo from 'src/svg/GrainzLogo';

function NavbarLink({ link, label }: { link: string; label: string }) {
  return (
    <li
      className={cn(
        'flex cursor-pointer items-center justify-center gap-2 rounded p-1',
        pressable.default,
      )}
    >
      <a
        href={link}
        className="text-gray-700 hover:text-[#0052FF] flex items-center text-sm font-medium transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    </li>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="-mx-[50vw] fixed top-10 right-1/2 left-1/2 xs:h-11 w-screen border-gray-200 border-b bg-[white]">
      <div className="mx-auto flex h-full max-w-5xl items-center px-4 py-2 lg:px-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <GrainzLogo width={36} height={36} />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#0052FF]">GRAINZ</span>
              <span className="text-xs text-gray-500">Web3 Shop</span>
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <NavbarLink link="#products" label="Ürünler" />
              <NavbarLink link="#about" label="Hakkımızda" />
              <NavbarLink link="#contact" label="İletişim" />
              <NavbarLink link="https://twitter.com/grainzshop" label="Twitter" />
            </ul>
          </nav>
          <button
            type="button"
            className={cn('md:hidden', pressable.default)}
            onClick={toggleMenu}
          >
            <MenuSvg />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-[white] md:hidden border-t">
          <ul className="flex flex-col items-start space-y-2 px-4 py-2">
            <NavbarLink link="#products" label="Ürünler" />
            <NavbarLink link="#about" label="Hakkımızda" />
            <NavbarLink link="#contact" label="İletişim" />
            <NavbarLink link="https://twitter.com/grainzshop" label="Twitter" />
          </ul>
        </div>
      )}
    </header>
  );
}
