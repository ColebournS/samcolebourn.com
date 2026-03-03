import React, { useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

const WorkCard = ({ title, company, location, period, text, skills, techStack, outcomes }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <article
        onClick={openModal}
        className={`group relative w-full p-6 rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-200 ease-out hover:shadow-md hover:border-neutral-200 cursor-pointer h-full`}
      >
        <div className="gradient-surface"></div>
        <div className="flex flex-col gap-4 h-full relative z-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-xs font-medium tracking-widest uppercase text-neutral-500">{period}</h2>
            <h3 className="text-xl font-semibold text-neutral-900 leading-snug">{title}</h3>
            {(company || location) && (
              <div className="flex flex-row items-center gap-2 mt-1">
                {company && <span className="text-sm font-medium text-neutral-900">{company}</span>}
                {company && location && <span className="text-neutral-200 inline-block w-px h-3"></span>}
                {location && <span className="text-sm text-neutral-500">{location}</span>}
              </div>
            )}
          </div>
          
          {text && (
            <p className="text-base text-neutral-500 leading-relaxed line-clamp-3 mb-auto">
              {text}
            </p>
          )}
        </div>
      </article>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transition duration-200 ease-out"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-150 ease-in"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-4"
              >
                <Dialog.Panel className={`w-full max-w-2xl transform overflow-hidden rounded-xl border border-neutral-100 p-8 text-left align-middle shadow-lg transition-all bg-white`}>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-snug text-neutral-900 mb-2"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="flex flex-col gap-6 mt-6">
                    <div className="flex flex-col gap-1">
                      {company && <span className="text-base font-medium text-neutral-900">{company} {location && `— ${location}`}</span>}
                      <span className="text-xs font-medium tracking-widest uppercase text-neutral-500">{period}</span>
                    </div>
                    
                    {text && (
                      <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-semibold text-neutral-900">Description</h4>
                        <p className="text-base text-neutral-700 leading-relaxed">
                          {text}
                        </p>
                      </div>
                    )}

                    {outcomes && (
                      <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-semibold text-neutral-900">Outcomes</h4>
                        <p className="text-base text-neutral-700 leading-relaxed">
                          {outcomes}
                        </p>
                      </div>
                    )}

                    {(skills || techStack) && (
                      <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold text-neutral-900">
                          {techStack ? "Tech Stack" : "Skills"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(techStack || skills).map((item, index) => (
                            <span 
                              key={index}
                              className={`px-2 py-1 rounded text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200`}
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
                      className={`inline-flex justify-center rounded-md px-6 py-3 min-h-[44px] text-sm font-medium border border-neutral-200 bg-white text-neutral-900 transition-colors duration-200 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2`}
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