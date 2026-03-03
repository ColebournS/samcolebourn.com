import React from "react"
import Button from "../Button"

import yourData from "./socialData.json"

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap gap-4`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} type="secondary" onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  )
}

export default Socials
