import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ServiceCard from "../components/ServiceCard"
import WorkCard from "../components/WorkCard"
import { useIsomorphicLayoutEffect } from "../utils"
import { stagger } from "../animations"
import Head from "next/head"
import workData from "../data/work.json"
import projectsData from "../data/projects.json"

export default function Home() {
  const workRef = useRef()
  const aboutRef = useRef()
  const textOne = useRef()
  const textTwo = useRef()
  const textThree = useRef()
  const contactRef = useRef()
  const navWordmarkRef = useRef()

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - 10,
      left: 0,
      behavior: "smooth",
    })
  }

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - 10,
      left: 0,
      behavior: "smooth",
    })
  }

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop - 10,
      left: 0,
      behavior: "smooth",
    })
  }

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current],
      { y: 16 },
      { y: 0 }
    )

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      if (navWordmarkRef.current) {
        gsap.set(navWordmarkRef.current, { opacity: 1 })
      }
      return
    }

    const ctx = gsap.context(() => {
      const hero = textOne.current
      const nav = navWordmarkRef.current

      if (!hero || !nav) return

      // Pre-set styles
      gsap.set(hero, { transformOrigin: "top left" })

      let x = 0, y = 0, scale = 1

      const calculateValues = () => {
        // Clear any existing transforms to get true initial rects
        gsap.set(hero, { clearProps: "all" })
        gsap.set(nav, { clearProps: "all" })
        gsap.set(hero, { transformOrigin: "top left" })

        const heroRect = hero.getBoundingClientRect()
        const navRect = nav.getBoundingClientRect()

        const heroTop = heroRect.top + window.scrollY
        const heroLeft = heroRect.left + window.scrollX
        const navTop = navRect.top + window.scrollY
        const navLeft = navRect.left + window.scrollX

        x = navLeft - heroLeft
        y = navTop - heroTop
        scale = navRect.height / heroRect.height
      }

      // Initial calculation
      calculateValues()

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top+=72",
          end: "+=160",
          scrub: 0.6,
          invalidateOnRefresh: true,
          onRefresh: calculateValues,
        }
      })

      // We use function-based values so invalidateOnRefresh will pick up new values
      tl.to(hero, {
        x: () => x,
        y: () => y,
        scale: () => scale,
        opacity: 0,
        ease: "none",
      }, 0)
      .to(nav, {
        opacity: 1,
        ease: "none",
      }, 0.4)

    }, textOne)

    return () => ctx.revert()
  }, [])

  return (
    <div className={`relative bg-neutral-50 min-h-screen text-neutral-900`}>
      <Head>
        <title>Sam Colebourn</title>
      </Head>
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] bg-accent text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2">
        Skip to main content
      </a>

      <div className="gradient-bloom"></div>

      <div className="container mx-auto px-4 tablet:px-6 laptop:px-8 mb-6">
        <Header
          handleAboutScroll={handleAboutScroll}
          handleWorkScroll={handleWorkScroll}
          handleContactScroll={handleContactScroll}
          navWordmarkRef={navWordmarkRef}
          isHome={true}
        />
        <main id="main-content" className="pt-16 tablet:pt-[72px]">
          <section className="py-8 laptop:py-12 flex flex-col tablet:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <h1
                ref={textOne}
                className="text-4xl tablet:text-5xl laptop:text-6xl font-semibold leading-tight tracking-tight text-neutral-900"
                style={{ willChange: 'transform, opacity' }}
              >
                Sam Colebourn
              </h1>
              <h2
                ref={textTwo}
                className="text-2xl tablet:text-3xl font-semibold leading-tight tracking-tight text-neutral-500"
              >
                Software Engineer
              </h2>
            </div>
          </section>

          <section className="py-6 laptop:py-8" ref={aboutRef}>
            <h2 className="text-xs tablet:text-sm font-medium tracking-widest uppercase text-neutral-500 mb-6">About</h2>
            <p className="text-base tablet:text-lg font-normal leading-relaxed text-neutral-700 max-w-4xl">
              I am a Software Engineer at Jahnel Group, where I develop REST APIs
              in Python that support an application with over 1B downloads and 70M
              monthly active users. I graduated from Worcester Polytechnic
              Institute with a Bachelor of Science in Computer Science. In my free
              time I enjoy exploring new programming languages, improving my
              technical skills, and creating practical IoT projects that combine
              learning with creativity.
            </p>
          </section>

          <section className="py-8 laptop:py-12 relative" ref={workRef}>
            <div className="gradient-wash"></div>
            <h2 className="text-xs tablet:text-sm font-medium tracking-widest uppercase text-neutral-500 mb-8">Work</h2>
            <div className="space-y-6">
              <div className="w-full">
                <WorkCard
                  title={workData[0].title}
                  company={workData[0].company}
                  location={workData[0].location}
                  period={workData[0].period}
                  text={workData[0].text}
                  skills={workData[0].skills}
                />
              </div>
              
              <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
                {workData.slice(1).map((work, index) => (
                  <WorkCard
                    key={index + 1}
                    title={work.title}
                    company={work.company}
                    location={work.location}
                    period={work.period}
                    text={work.text}
                    skills={work.skills}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 laptop:py-12">
            <h2 className="text-xs tablet:text-sm font-medium tracking-widest uppercase text-neutral-500 mb-8">Projects</h2>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {projectsData.map((project, index) => (
                <WorkCard
                  key={index}
                  title={project.name}
                  company=""
                  location=""
                  period={project.when}
                  text={project.description}
                  techStack={project.techStack}
                  outcomes={project.outcomes}
                  repoLink={project.repoLink}
                />
              ))}
            </div>
          </section>

          <Footer ref={contactRef} />
        </main>
      </div>
    </div>
  );
}