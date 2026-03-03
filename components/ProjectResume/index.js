import React from "react"

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets)

  return (
    <div className="w-full flex flex-col desktop:flex-row gap-4 desktop:gap-8 justify-between">
      <div className="desktop:w-1/3 flex flex-col gap-1">
        <h3 className="text-base font-semibold text-neutral-900">{dates}</h3>
        <span className="text-sm text-neutral-500">{type}</span>
      </div>
      <div className="desktop:w-2/3 flex flex-col gap-3">
        <h4 className="text-lg font-semibold text-neutral-900">{position}</h4>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="flex flex-col gap-2 list-disc ml-5 text-neutral-700 text-base leading-relaxed">
            {bulletsLocal.map((bullet, index) => (
              <li key={index}>
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ProjectResume