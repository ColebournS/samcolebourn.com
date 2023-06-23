import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Header from "../components/Header"
import ProjectResume from "../components/ProjectResume"
import Socials from "../components/Socials"
import Button from "../components/Button"
import { useTheme } from "next-themes"

const Resume = () => {
  const router = useRouter()
  const theme = useTheme()
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [router])
  return (
    <>
      <div className={`container mx-auto mb-10`}>
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">Sam Colebourn</h1>
              <h2 className="text-xl mt-5"> Resume Tagline</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                Resume Description
              </h2>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>
                <ProjectResume
                  key={"1"}
                  dates={"Dates"}
                  type={"Internship"}
                  position={"Software Developer at MILL5"}
                  bullets={"Job Bullets"}
                ></ProjectResume>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">Worcester Polytechnic Institute</h2>
                  <h3 className="text-sm opacity-75">WPI Date</h3>
                  <p className="text-sm mt-2 opacity-50">Education para</p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  <div className="mt-2 mob:mt-5">
                    <h2 className="text-lg">Frameworks</h2>
                    <ul className="list-disc">
                      <li className="ml-5 py-2">Framework 1</li>
                      <li className="ml-5 py-2">Framework 2</li>
                      <li className="ml-5 py-2">Framework 3</li>
                    </ul>
                  </div>
                  <div className="mt-2 mob:mt-5">
                    <h2 className="text-lg">Others</h2>
                    <ul className="list-disc">
                      <li className="ml-5 py-2">Other 1</li>
                      <li className="ml-5 py-2">Other 2</li>
                      <li className="ml-5 py-2">Other 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Socials />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Resume
