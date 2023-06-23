import { useRef } from "react"
import Header from "../components/Header"
import ServiceCard from "../components/ServiceCard"
import WorkCard from "../components/WorkCard"
import { useIsomorphicLayoutEffect } from "../utils"
import { stagger } from "../animations"
import Footer from "../components/Footer"
import Head from "next/head"

export default function Home() {
  // Ref
  const workRef = useRef()
  const aboutRef = useRef()
  const textOne = useRef()
  const textTwo = useRef()
  const textThree = useRef()

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
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-center text-bold mob:w-full"
            >
              Sam Colebourn
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-center text-bold w-full"
            >
              Developer and Student
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-center text-bold w-full"
            >
              Based in Boston, MA
            </h1>
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:m-10 text-4xl text-bold text-center">Work</h1>
          <div className="scrolling-wrapper">
            <WorkCard
              name={"Software Developer"}
              description={
                "Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings. \nStructured a Shared Kernel to separate code into a clean architecture solution.\nImplemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses."
              }
              when={"May 2021 - August 2021"}
              onClick={() => window.open("https://www.google.com")}
            />
            <WorkCard
              name={"Software Developer"}
              description={
                "Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings. \nStructured a Shared Kernel to separate code into a clean architecture solution.\nImplemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses."
              }
              when={"May 2021 - August 2021"}
              onClick={() => window.open("https://www.google.com")}
            />
            <WorkCard
              name={"Software Developer"}
              description={
                "Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings. \nStructured a Shared Kernel to separate code into a clean architecture solution.\nImplemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses."
              }
              when={"May 2021 - August 2021"}
              onClick={() => window.open("https://www.google.com")}
            />
            <WorkCard
              name={"Software Developer"}
              description={
                "Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings. \nStructured a Shared Kernel to separate code into a clean architecture solution.\nImplemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses."
              }
              when={"May 2021 - August 2021"}
              onClick={() => window.open("https://www.google.com")}
            />
            <WorkCard
              name={"Software Developer"}
              description={
                "Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings. \nStructured a Shared Kernel to separate code into a clean architecture solution.\nImplemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses."
              }
              when={"May 2021 - August 2021"}
              onClick={() => window.open("https://www.google.com")}
            />
            <WorkCard
              name={"Software Developer"}
              description={
                "Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings. \nStructured a Shared Kernel to separate code into a clean architecture solution.\nImplemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses."
              }
              when={"May 2021 - August 2021"}
              onClick={() => window.open("https://www.google.com")}
            />
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-4xl text-bold text-center">
            Services
          </h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            <ServiceCard
              key={1}
              name={"Web Design"}
              description={"Web Design Description"}
            />
            <ServiceCard
              key={2}
              name={"Other Service"}
              description={"Other description bla bla bla bla bla bla "}
            />
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-4xl text-bold text-center">About</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            Im currently a Junior pursuing a Computer Science degree at WPI.
          </p>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            Outside of my life at WPI, I spend my breaks working for internships
            concentrated on developing Microsoft Azure solutions. In my free
            time, I like to research and learn new programming languages,
            develop my skills, and investigate/implement fun and practical IoT
            projects.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  )
}
