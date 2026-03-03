/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react"
import { useRouter } from "next/router"
import React, { useEffect, useState, Fragment } from "react"
import Button from "../Button"

const Header = ({
  handleAboutScroll,
  handleWorkScroll,
  handleContactScroll,
  isBlog,
}) => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 0);
  };

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav aria-label="Main Navigation">
      <Popover className="block tablet:hidden mt-5 relative z-50">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <button
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2 rounded"
              >
                Sam Colebourn
              </button>

              <div className="flex items-center">
                <Popover.Button aria-label="Toggle Navigation" className="focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2 rounded p-2">
                  <img
                    className="h-5"
                    src={`/images/${!open ? "menu.svg" : "cancel.svg"}`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            
            <Transition
              as={Fragment}
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel
                className={`absolute right-0 z-10 w-11/12 mt-2 p-4 bg-white shadow-lg rounded-xl border border-neutral-100`}
              >
                {!isBlog ? (
                  <div className="flex flex-col gap-2">
                    <Button type="ghost" onClick={handleAboutScroll}>About</Button>
                    <Button type="ghost" onClick={handleWorkScroll}>Work</Button>
                    <Button type="ghost" onClick={handleContactScroll}>Contact</Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Button type="ghost" onClick={() => router.push("/")}>
                      Home
                    </Button>
                    <Button type="ghost" onClick={() => router.push("/resume")}>
                      Resume
                    </Button>
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        } top-0 z-50 tablet:flex py-4 rounded-b-xl transition-all duration-200`}
      >
        <button
          onClick={() => router.push("/")}
          className="ml-4 font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2 rounded px-2 py-1"
        >
          Sam Colebourn
        </button>
        {!isBlog ? (
          <div className="flex gap-2 mr-4">
            <Button type="ghost" onClick={handleAboutScroll}>About</Button>
            <Button type="ghost" onClick={handleWorkScroll}>Work</Button>
            <Button type="ghost" onClick={handleContactScroll}>Contact</Button>
          </div>
        ) : (
          <div className="flex gap-2 mr-4">
            <Button type="ghost" onClick={() => router.push("/")}>Home</Button>
            <Button type="ghost" onClick={() => router.push("/resume")}>
              Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header