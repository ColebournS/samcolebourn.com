import { useRef } from "react"
import Header from "../components/Header"
import ServiceCard from "../components/ServiceCard"
import WorkCard from "../components/WorkCard"
import { useIsomorphicLayoutEffect } from "../utils"
import { stagger } from "../animations"
import Socials from "../components/Socials"
import Head from "next/head"

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

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold mob:w-full"
            >
              Sam Colebourn
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2  text-bold w-full"
            >
              Developer and Student
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2  text-bold w-full"
            >
              Based in Boston, MA
            </h1>
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:my-10 text-4xl text-bold">Work</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-3 gap-6">
            <WorkCard
              name={"Software Developer at MILL5"}
              description={
                "Experienced full stack developer creating a MAUI app with C# backend and Azure functions. Developed seamless integration, optimal performance, and enhanced user experience."
              }
              role={"Intern"}
              when={"May 2021 - August 2021"}
            />
            <WorkCard
              name={"Software Developer at MILL5"}
              description={
                "Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings. Structured a Shared Kernel to separate code into a clean architecture solution. Implemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses."
              }
              role={"Intern"}
              when={"May 2021 - August 2021"}
            />
            <WorkCard
              name={"Software Developer at Catalyst Acoustics Group"}
              description={
                "Developed a Configure Price Quote System leveraging Infor Syteline and SQL Queries for customizable products. Created Automation for sales team using Power Automate and Power BI. Contributed to the development of end-to-end ERP system allowing for the automation of complex manufacturing processes"
              }
              role={"Intern"}
              when={"May 2021 - August 2021"}
            />
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:my-10 text-4xl text-bold">Services</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            <ServiceCard
              key={1}
              name={"Web Development"}
              description={
                "Building immersive and responsive web applications with modern technologies for enhanced user experiences and seamless functionality."
              }
            />
            <ServiceCard
              key={1}
              name={"Custom Software Solutions"}
              description={
                "Building immersive and responsive web applications with modern technologies for enhanced user experiences and seamless functionality."
              }
            />
            <ServiceCard
              key={1}
              name={"Automation Solutions"}
              description={
                "Building immersive and responsive web applications with modern technologies for enhanced user experiences and seamless functionality."
              }
            />
            <ServiceCard
              key={1}
              name={"AI as a Service"}
              description={
                "Harnessing the power of artificial intelligence to develop intelligent software systems that automate tasks, provide data-driven insights, and enhance decision-making capabilities."
              }
            />
          </div>
        </div>
        <div className="mt-10 laptop:mt-10 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:my-10 text-4xl text-bold">About</h1>
          <p className="tablet:mx-10 mt-2 text-xl laptop:text-xl w-full laptop:w-3/5">
            Im currently a Junior pursuing a Computer Science degree at WPI.
          </p>
          <p className="tablet:mx-10 mt-2 text-xl laptop:text-xl w-full laptop:w-3/5">
            Outside of my life at WPI, I spend my breaks working for internships
            concentrated on developing Microsoft Azure solutions. In my free
            time, I like to research and learn new programming languages,
            develop my skills, and investigate/implement fun and practical IoT
            projects.
          </p>
        </div>
        <div className="mt-10 laptop:mt-10 p-2 laptop:p-0" ref={contactRef}>
          <h1 className="mt-20 mb-10 text-4xl text-bold">Contact</h1>
          <p className="tablet:mx-10 mt-2 text-5xl laptop:text-5xl w-full laptop:w-3/5">
            Let&apos;s Work Together!
          </p>
          <button
            type="button"
            className="text-sm tablet:text-base p-1 laptop:p-2 mx-10 mt-5 mb-20 laptop:mx-10 rounded-lg bg-white text-black transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link cursor-none  undefined"
          >
            Schedule a call
          </button>
        </div>
        <div
          className="mt-10"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Socials />
        </div>
      </div>
    </div>
  )
}
