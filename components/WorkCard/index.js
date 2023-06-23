import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const WorkCard = ({ name, role, when, description }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState()

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div
      className={`card w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "bg-slate-800" : "bg-slate-100"
      } hover:scale-105 link`}
    >
      <h2 className="mt-5 text-xl opacity-50">{when}</h2>
      <h1 className="text-3xl font-medium">{name}</h1>
      <h2 className="text-2xl mb-2 opacity-50">{role}</h2>
      <h2 className="text-xl opacity-50">{description}</h2>
    </div>
  )
}

export default WorkCard
