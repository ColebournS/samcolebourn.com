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
      <div className="gradient-circle"></div>
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
              <h2 className="text-xl mt-5">
                I am a curious, tech-loving student with team skills and
                leadership experience
              </h2>
              <h2 className="text-xl font-bold">
                seeking a challenging software engineering internship.
              </h2>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>
                <ProjectResume
                  key={"1"}
                  dates={"May 2023 - August 2023"}
                  type={"Internship"}
                  position={"Software Developer at MILL5"}
                  bullets={[
                    "Experienced full stack developer creating a MAUI app with C# backend and Azure functions.",
                    "Developed seamless integration, optimal performance, and enhanced user experience.",
                  ]}
                ></ProjectResume>
                <ProjectResume
                  key={"1"}
                  dates={"May 2022 - August 2022"}
                  type={"Internship"}
                  position={"Software Developer at MILL5"}
                  bullets={[
                    "Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings.",
                    "Structured a Shared Kernel to separate code into a clean architecture solution.",
                    "Implemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses.",
                  ]}
                ></ProjectResume>
                <ProjectResume
                  key={"1"}
                  dates={"May 2021 - August 2021"}
                  type={"Internship"}
                  position={"Software Developer at Catalyst Acoustic Group"}
                  bullets={[
                    "Developed a Configure Price Quote System leveraging Infor Syteline and SQL Queries for customizable products",
                    "Created Automation for sales team using Power Automate and Power BI",
                    "Contributed to the development of end-to-end ERP system allowing for the automation of complex manufacturing processes",
                  ]}
                ></ProjectResume>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-5">
                  <h2 className="text-lg">
                    Bachelors of Science, Computer Science
                  </h2>

                  <div className="grid grid-cols-2 inline-grid">
                    <h2 className="text inline block">
                      Worcester Polytechnic Institute
                    </h2>
                    <h3
                      className={`${
                        mount && theme.theme === "dark"
                          ? "border-slate-700"
                          : "border-gray-100"
                      } text-sm opacity-75 w-1/2 px-2 mx-2 text-center rounded-lg border-2`}
                    >
                      GPA: 3.7/4.0
                    </h3>
                  </div>
                  <h3 className="text-sm opacity-75">December 2024</h3>
                </div>
              </div>
              <div className="mt-5">
                <div className="container mx-auto py-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <h1 className="text-2xl font-bold">Languages</h1>
                      <ul className="list-disc list-inside">
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>C#</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>SQL</li>
                        <li>Python</li>
                      </ul>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Technologies</h1>
                      <ul className="list-disc list-inside">
                        <li>GitHub</li>
                        <li>Azure</li>
                        <li>AWS</li>
                        <li>Docker</li>
                        <li>Jira</li>
                      </ul>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Certifications</h1>
                      <ul className="list-disc list-inside">
                        <li>Azure Fundamentals Certification 2022</li>
                        <li>Azure AI Fundamentals Certification 2023</li>
                      </ul>
                    </div>
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
