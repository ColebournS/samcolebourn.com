import React from "react"

const ServiceCard = ({ name, description }) => {
  return (
    <article
      className={`w-full p-4 mob:p-6 rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-200 ease-out hover:shadow-md hover:border-neutral-200 group relative`}
    >
      <div className="gradient-surface"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-neutral-900 leading-snug">{name ? name : "Heading"}</h3>
        <p className="mt-4 text-base text-neutral-500 leading-relaxed">
          {description
            ? description
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        </p>
      </div>
    </article>
  )
}

export default ServiceCard