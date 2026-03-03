import React, { useState, Fragment } from "react"
import { useTheme } from "next-themes"
import { Dialog, Transition } from "@headlessui/react"

const WorkCard = ({ title, company, location, period, text, skills, techStack, outcomes }) => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const hasExtraInfo = skills || techStack || outcomes

  return (
    <>
      <div
        onClick={openModal}
        className={`card w-full p-4 mob:p-6 rounded-lg transition-all ease-out duration-300 ${
          theme === "light" ? "bg-slate-100" : "bg-slate-800"
        } hover:scale-105 cursor-pointer h-full`}
      >
        <div className="flex flex-col space-y-3 h-full">
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
            <p className="text-sm opacity-80 leading-relaxed line-clamp-3 mb-auto">
              {text}
            </p>
          )}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full max-w-2xl transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${
                  theme === "light" ? "bg-white text-black" : "bg-slate-900 text-white"
                }`}>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 mb-2"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="flex flex-col space-y-4 mt-4">
                    <div>
                      {company && <h4 className="text-lg font-medium opacity-80">{company} {location && `- ${location}`}</h4>}
                      <h5 className="text-md opacity-60">{period}</h5>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Description</h4>
                      <p className="text-sm opacity-80 leading-relaxed">
                        {text}
                      </p>
                    </div>

                    {outcomes && (
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Outcomes</h4>
                        <p className="text-sm opacity-80 leading-relaxed">
                          {outcomes}
                        </p>
                      </div>
                    )}

                    {(skills || techStack) && (
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          {techStack ? "Tech Stack" : "Skills"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(techStack || skills).map((item, index) => (
                            <span 
                              key={index}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                theme === "light" 
                                  ? "bg-slate-200 text-slate-800" 
                                  : "bg-slate-700 text-slate-200"
                              }`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        theme === "light" 
                          ? "bg-slate-200 text-slate-900 hover:bg-slate-300" 
                          : "bg-slate-700 text-slate-100 hover:bg-slate-600"
                      }`}
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default WorkCard
