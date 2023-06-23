import React from "react"
import Socials from "../Socials"
import Link from "next/link"
import Button from "../Button"

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <button
              type="button"
              className="text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg bg-white text-black  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link cursor-none  undefined"
            >
              Schedule a call
            </button>
            <div
              className="mt-10"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
