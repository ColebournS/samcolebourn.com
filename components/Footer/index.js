import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import socialData from "../Socials/socialData.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = React.forwardRef((props, ref) => {
  const footerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  const setRefs = (node) => {
    footerRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      tl.fromTo(
        leftColRef.current.children,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
      ).fromTo(
        rightColRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socials = socialData.socials.filter(
    (s) => s.title.toLowerCase() !== "email"
  );
  const emailObj = socialData.socials.find(
    (s) => s.title.toLowerCase() === "email"
  ) || { link: "mailto:sam.colebourn@gmail.com" };

  return (
    <footer
      ref={setRefs}
      className="bg-white border-t border-neutral-100 pt-16 pb-12 laptop:pt-24 laptop:pb-16 mt-16 laptop:mt-24 w-full rounded-t-xl"
    >
      <div className="max-w-desktop mx-auto px-6 tablet:px-8 laptop:px-12">
        <div className="flex flex-col laptop:flex-row gap-12 laptop:gap-24 laptop:items-start">

          {/* Left Column */}
          <div ref={leftColRef} className="flex-1 flex flex-col items-start gap-8">

            {/* Headline */}
            <h2 className="text-3xl tablet:text-4xl laptop:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Let&apos;s Work<br />Together.
            </h2>

            <p className="text-neutral-400 text-base leading-relaxed font-normal">
              Have a project in mind or want to talk?<br />
              Reach out directly.
            </p>

            {/* Email */}
            <a
              href={emailObj.link}
              className="
                text-xl tablet:text-2xl font-semibold tracking-tight
                text-neutral-900
                underline underline-offset-4 decoration-1 decoration-neutral-300
                transition-colors duration-200
                hover:decoration-accent
                focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2
                rounded
              "
            >
              sam.colebourn@gmail.com
            </a>

            {/* Social Links */}
            <nav aria-label="Social links" className="flex flex-col gap-2">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm font-medium
                    text-neutral-500
                    transition-colors duration-150
                    hover:text-neutral-900
                    focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2
                    rounded w-fit
                  "
                >
                  {social.title}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="mt-auto pt-8 laptop:pt-16 text-xs font-medium text-neutral-500">
              &copy; {new Date().getFullYear()} Sam Colebourn. All rights reserved.
            </p>
          </div>

          {/* Right Column — Testimonial */}
          <div ref={rightColRef} className="laptop:w-[45%] flex-shrink-0">
            <figure className="
              bg-white border border-neutral-100 shadow-sm
              rounded-xl
              p-6 tablet:p-8
              flex flex-col gap-6
            ">
              <div className="flex items-start">
                <span className="text-4xl font-semibold leading-none text-accent select-none" aria-hidden="true">
                  &ldquo;
                </span>
              </div>

              {/* Quote body */}
              <blockquote className="flex-1 text-base tablet:text-lg font-normal leading-relaxed text-neutral-700 flex flex-col gap-4">
                <p>
                  Sam picked up on all the technologies we gave him quickly. So much so that he passed his Azure certification the first time he took it.
                </p>
                <p>
                  He truly is not limited in what he can accomplish. Anyone that he works for will be better with Sam on their team.
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-3 flex-shrink-0 border-t border-white/10 pt-4">
                <div className="
                  w-10 h-10 rounded-full flex-shrink-0
                  bg-neutral-200 ring-1 ring-neutral-200
                  flex items-center justify-center
                  text-neutral-600 text-sm font-semibold
                ">
                  RC
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-neutral-900">Richard Crane</span>
                  <span className="text-xs font-medium text-neutral-500">
                    Founder / Chief AI Officer · MILL5
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;