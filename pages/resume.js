import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Header from "../components/Header"
import ProjectResume from "../components/ProjectResume"
import Socials from "../components/Socials"
import Head from "next/head"

const Resume = () => {
  const router = useRouter()
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [router])
  return (
    <div className={`relative bg-neutral-50 min-h-screen text-neutral-900`}>
      <Head>
        <title>Resume - Sam Colebourn</title>
      </Head>
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-accent focus:z-[100] focus:ring-2 focus:ring-accent-ring">
        Skip to main content
      </a>

      <div className="gradient-bloom"></div>

      <div className={`container mx-auto px-4 tablet:px-6 laptop:px-8 mb-16`}>
        <Header isBlog />
        
        {mount && (
          <main id="main-content" className="mt-16 laptop:mt-24 w-full flex flex-col items-center">
            <article
              className={`w-full bg-white border border-neutral-100 max-w-4xl p-8 tablet:p-16 laptop:p-24 rounded-xl shadow-sm`}
            >
              <h1 className="text-3xl tablet:text-4xl font-semibold leading-tight tracking-tight text-neutral-900">
                Sam Colebourn
              </h1>
              <p className="text-lg tablet:text-xl font-normal leading-relaxed text-neutral-500 mt-4 max-w-2xl">
                I am a curious, tech-loving student with team skills and leadership experience seeking a challenging software engineering internship.
              </p>

              <section className="mt-16">
                <h2 className="text-xs tablet:text-sm font-medium tracking-widest uppercase text-neutral-500 mb-8 border-b border-neutral-100 pb-4">
                  Experience
                </h2>
                <div className="flex flex-col gap-12">
                  <ProjectResume
                    key={"1"}
                    dates={"May 2023 - August 2023"}
                    type={"Internship"}
                    position={"Software Developer at MILL5"}
                    bullets={[
                      "Experienced full stack developer creating a MAUI app with C# backend and Azure functions.",
                      "Developed seamless integration, optimal performance, and enhanced user experience.",
                    ]}
                  />
                  <ProjectResume
                    key={"2"}
                    dates={"May 2022 - August 2022"}
                    type={"Internship"}
                    position={"Software Developer at MILL5"}
                    bullets={[
                      "Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings.",
                      "Structured a Shared Kernel to separate code into a clean architecture solution.",
                      "Implemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses.",
                    ]}
                  />
                  <ProjectResume
                    key={"3"}
                    dates={"May 2021 - August 2021"}
                    type={"Internship"}
                    position={"Software Developer at Catalyst Acoustic Group"}
                    bullets={[
                      "Developed a Configure Price Quote System leveraging Infor Syteline and SQL Queries for customizable products",
                      "Created Automation for sales team using Power Automate and Power BI",
                      "Contributed to the development of end-to-end ERP system allowing for the automation of complex manufacturing processes",
                    ]}
                  />
                </div>
              </section>

              <section className="mt-16">
                <h2 className="text-xs tablet:text-sm font-medium tracking-widest uppercase text-neutral-500 mb-8 border-b border-neutral-100 pb-4">
                  Education
                </h2>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Bachelors of Science, Computer Science
                  </h3>
                  <div className="flex flex-col tablet:flex-row tablet:items-center gap-2 tablet:gap-4">
                    <span className="text-base text-neutral-700">
                      Worcester Polytechnic Institute
                    </span>
                    <span className="hidden tablet:inline-block w-px h-4 bg-neutral-200"></span>
                    <span className={`px-2 py-1 rounded text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200 inline-block w-fit`}>
                      GPA: 3.7/4.0
                    </span>
                  </div>
                  <span className="text-sm text-neutral-500 mt-1">December 2024</span>
                </div>
              </section>

              <section className="mt-16">
                <h2 className="text-xs tablet:text-sm font-medium tracking-widest uppercase text-neutral-500 mb-8 border-b border-neutral-100 pb-4">
                  Skills
                </h2>
                <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-4">Languages</h3>
                    <ul className="flex flex-col gap-2 text-neutral-700 text-base">
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
                    <h3 className="text-sm font-semibold text-neutral-900 mb-4">Technologies</h3>
                    <ul className="flex flex-col gap-2 text-neutral-700 text-base">
                      <li>GitHub</li>
                      <li>Azure</li>
                      <li>AWS</li>
                      <li>Docker</li>
                      <li>Jira</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-4">Certifications</h3>
                    <ul className="flex flex-col gap-2 text-neutral-700 text-base">
                      <li>Azure Fundamentals (2022)</li>
                      <li>Azure AI Fundamentals (2023)</li>
                    </ul>
                  </div>
                </div>
              </section>
            </article>
            
            <div className="mt-12">
              <Socials />
            </div>
          </main>
        )}
      </div>
    </div>
  )
}

export default Resume