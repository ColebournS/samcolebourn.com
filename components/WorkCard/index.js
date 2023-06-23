import React from "react"

const WorkCard = ({ name, role, when, description }) => {
  return (
    <div className="overflow-hidden card rounded-lg p-2 laptop:p-4 first:ml-0 link w-1/3">
      <h2 className="text-xl opacity-50">{when}</h2>
      <h1 className="mt-5 text-3xl font-medium">{name}</h1>
      <h2 className="text-2xl mb-2 opacity-50">{role}</h2>
      <h2 className="text-xl opacity-50">{description}</h2>
    </div>
  )
}

export default WorkCard
