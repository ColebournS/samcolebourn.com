/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Disclosure, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState, Fragment } from "react";
import Link from "next/link";

const useNavScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
};

const Header = ({
  handleAboutScroll,
  handleWorkScroll,
  handleContactScroll,
  isBlog,
  isHome,
  navWordmarkRef,
}) => {
  const router = useRouter();
  const scrolled = useNavScroll();

  const navLinks = isBlog
    ? [
        { name: "Home", action: () => router.push("/") },
        { name: "Resume", action: () => router.push("/resume") },
      ]
    : [
        { name: "About", action: handleAboutScroll },
        { name: "Work", action: handleWorkScroll },
        { name: "Contact", action: handleContactScroll },
      ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "nav-scrolled" : "bg-transparent border-transparent"}`}>
      <Disclosure as="nav" aria-label="Main navigation" className="mx-auto max-w-desktop h-16 tablet:h-[72px] px-6 tablet:px-8 laptop:px-12 flex items-center justify-between">
        {({ open, close }) => (
          <>
            {/* Wordmark */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" passHref>
                <a 
                  ref={navWordmarkRef}
                  className={`font-medium text-neutral-900 hover:opacity-70 transition-opacity focus:outline-none rounded px-2 py-1 -ml-2 ${isHome ? 'opacity-0' : ''}`}
                >
                  <span className="tablet:hidden">SC</span>
                  <span className="hidden tablet:block">Sam Colebourn</span>
                </a>
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden tablet:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors focus:outline-none"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="flex tablet:hidden items-center">
              <Disclosure.Button aria-label="Toggle Navigation" className="p-2 -mr-2 text-neutral-500 hover:text-neutral-900 focus:outline-none rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center">
                <img
                  className="h-5 w-5"
                  src={`/images/${!open ? "menu.svg" : "cancel.svg"}`}
                  alt={open ? "Close menu" : "Open menu"}
                />
              </Disclosure.Button>
            </div>

            {/* Mobile Panel */}
            <Transition
              as={Fragment}
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-2"
            >
              <Disclosure.Panel className="absolute top-[100%] left-0 w-full bg-neutral-50 border-t border-neutral-100 shadow-sm tablet:hidden z-[60]">
                <div className="px-4 pt-2 pb-4 space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        if(link.action) link.action();
                        close();
                      }}
                      className="block w-full text-left px-4 py-3 text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md focus:outline-none"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
