import { useRef } from "react"
import Header from "../components/Header"
import ServiceCard from "../components/ServiceCard"
import WorkCard from "../components/WorkCard"
import { useIsomorphicLayoutEffect } from "../utils"
import { stagger } from "../animations"
import Socials from "../components/Socials"
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
  }, [])

  return (
    <div className={`relative bg-neutral-50 min-h-screen text-neutral-900`}>
      <Head>
        <title>Sam Colebourn</title>
      </Head>
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-accent focus:z-[100] focus:ring-2 focus:ring-accent-ring">
        Skip to main content
      </a>

      <div className="gradient-bloom"></div>

      <div className="container mx-auto px-4 tablet:px-6 laptop:px-8 mb-6">
        <Header
          handleAboutScroll={handleAboutScroll}
          handleWorkScroll={handleWorkScroll}
          handleContactScroll={handleContactScroll}
        />
        <main id="main-content">
          <section className="py-8 laptop:py-12 flex flex-col tablet:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <h1
                ref={textOne}
                className="text-4xl tablet:text-5xl laptop:text-6xl font-semibold leading-tight tracking-tight text-neutral-900"
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
                />
              ))}
            </div>
          </section>

          <section className="py-8 laptop:py-12" ref={contactRef}>
            <h2 className="text-xs tablet:text-sm font-medium tracking-widest uppercase text-neutral-500 mb-6">Contact</h2>
            <p className="text-3xl tablet:text-4xl font-semibold leading-tight tracking-tight text-neutral-900 w-full laptop:w-3/5 mb-8">
              Let&apos;s Work Together!
            </p>

            <a
              className="inline-flex items-center justify-center bg-accent text-white font-medium px-6 py-3 rounded-md min-h-[44px] transition-colors duration-200 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2"
              href="mailto:sam.colebourn@gmail.com"
            >
              Schedule a call
            </a>
          </section>

          <div className="pt-8 pb-4 flex justify-center">
            <Socials />
          </div>
        </main>
      </div>
    </div>
  );
}