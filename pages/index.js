import { useRef } from "react"
import Header from "../components/Header"
import ServiceCard from "../components/ServiceCard"
import WorkCard from "../components/WorkCard"
import { useIsomorphicLayoutEffect } from "../utils"
import { stagger } from "../animations"
import Socials from "../components/Socials"
import FluidCursor from "../components/FluidCursor"
import Head from "next/head"
import Image from "next/image"
import workData from "../data/work.json"
import projectsData from "../data/projects.json"

export default function Home() {
  // Ref
  const workRef = useRef()
  const aboutRef = useRef()
  const textOne = useRef()
  const textTwo = useRef()
  const textThree = useRef()
  const contactRef = useRef()
  // Handling Scroll
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
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    )
  }, [])

  return (
    <div className={`relative`}>
      <Head>
        <title>Sam Colebourn</title>
      </Head>
      
      <FluidCursor />

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleAboutScroll={handleAboutScroll}
          handleWorkScroll={handleWorkScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5 tablet:my-10 flex flex-col tablet:flex-row gap-10">
            <div className="flex flex-col">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl tablet:mx-10 text-bold"
              >
                Sam Colebourn
              </h1>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl tablet:mx-10 text-bold"
              >
                Software Engineer
              </h1>
            </div>
            {/*            
            <div className="flex items-center justify-center">
              <Image
                src="/images/sam.JPG"
                alt="Sam Colebourn"
                width={300}
                height={300}
                priority={true}
                className="rounded-full object-contain"
              />
            </div>*/}
          </div>
        </div>
        <div className="mt-10 laptop:mt-10 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:my-10 tablet:mx-10 text-4xl text-bold">About</h1>
          <p className="tablet:mx-10 mt-2 text-xl laptop:text-xl max-w-6xl">
            I am a Software Engineer at Jahnel Group, where I develop REST APIs
            in Python that support an application with over 1B downloads and 70M
            monthly active users. I graduated from Worcester Polytechnic
            Institute with a Bachelor of Science in Computer Science. In my free
            time I enjoy exploring new programming languages, improving my
            technical skills, and creating practical IoT projects that combine
            learning with creativity.
          </p>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:my-10 tablet:mx-10 text-4xl text-bold">Work</h1>
          <div className="mt-5 tablet:m-10 space-y-6">
            {/* First item - full width */}
            <div className="w-full">
              <WorkCard
                title={workData[0].title}
                company={workData[0].company}
                location={workData[0].location}
                period={workData[0].period}
                text={workData[0].text}
              />
            </div>
            
            {/* Remaining items - 2-column grid */}
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {workData.slice(1).map((work, index) => (
                <WorkCard
                  key={index + 1}
                  title={work.title}
                  company={work.company}
                  location={work.location}
                  period={work.period}
                  text={work.text}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:my-10 tablet:mx-10 text-4xl text-bold">Projects</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <WorkCard
                key={index}
                title={project.name}
                company=""
                location=""
                period={project.when}
                text={project.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-10 p-2 laptop:p-0" ref={contactRef}>
          <h1 className="mt-20 mb-10 tablet:mx-10 text-4xl text-bold">Contact</h1>
          <p className="tablet:mx-10 mt-2 text-5xl laptop:text-5xl w-full laptop:w-3/5 my-5">
            Let&apos;s Work Together!
          </p>

          <a
            className="text-sm tablet:text-base p-1 laptop:p-2 mx-10 my-10 rounded-lg bg-slate-100 text-black dark:bg-slate-800 dark:text-white"
            href="mailto:sam.colebourn@gmail.com"
          >
            Schedule a call
          </a>
        </div>
        <div
          className="mt-10"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Socials />
        </div>
      </div>
    </div>
  );
}
