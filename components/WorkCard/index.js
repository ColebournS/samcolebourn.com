import React from "react"
import { useTheme } from "next-themes"

const WorkCard = ({ title, company, location, period, text }) => {
  const { theme } = useTheme()

  return (
    <div
      className={`card w-full p-4 mob:p-6 rounded-lg transition-all ease-out duration-300 ${
        theme === "light" ? "bg-slate-100" : "bg-slate-800"
      } hover:scale-105`}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col">
          <h2 className="text-lg opacity-60 font-medium">{period}</h2>
          <h1 className="text-2xl font-semibold">{title}</h1>
          {(company && company.trim() !== "") || (location && location.trim() !== "") ? (
            <div className="flex flex-row items-center space-x-2">
              {company && company.trim() !== "" && <h3 className="text-lg font-medium">{company}</h3>}
              {location && location.trim() !== "" && <h4 className="text-sm opacity-70">{location}</h4>}
            </div>
          ) : null}
        </div>
        
        {text && (
          <p className="text-sm opacity-80 leading-relaxed">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default WorkCard
