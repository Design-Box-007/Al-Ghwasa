import images from '@/data/assets'
import React from 'react'

const Gastec6 = () => {
  return (
    <section className="blog-content py-6 px-4 space-y-4 text-base font-sans">
      <>
        <p className="leading-[1.08] text-left mb-4 bg-transparent font-bold">
          Gastec Polytec Tube System
        </p>
        <p className="leading-[1.08] text-left mb-4 bg-transparent">
          The Gastec Polytec tube system is the most effective way of identifying
          unknown gases present in the environment.
        </p>
        <p className="leading-[1.08] text-left mb-4 bg-transparent">
          Polytec is favored by emergency responders all around the world, as this
          clever tube rapidly gives an indication of an array of gases. This in turn
          enables efficient decision making on how to handle the hazards present.
        </p>
        <p className="leading-[1.08] text-left mb-4 bg-transparent">
          Each Polytec tube has 1 to 8 reaction layers to determine multiple unknown
          substances in the sample simultaneously. Polytec tubes offer the flexibility
          to detect a range of gases using a single pump.
        </p>
        <p className="leading-[1.08] text-left mb-4 bg-transparent font-bold">
          Gastec offers 6 types of Polytec Tubes
        </p>
        <p className="leading-[1.08] text-left mb-4 bg-transparent">
          Polytec I (No.107)
        </p>
        <p className="leading-[1.08] text-left mb-4 bg-transparent">
          The Gastec Polytec tube system is the most effective way of identifying
          unknown gases present in the environment.
        </p>
        <p className="leading-[1.08] text-left mb-4 bg-transparent">
          Polytec is favored by emergency responders all around the world, as this
          clever tube rapidly gives an indication of an array of gases. This in turn
          enables efficient decision making on how to handle the hazards present.
        </p>
        <p className="leading-[1.08] text-left mb-4 bg-transparent">
          Each Polytec tube has 1 to 8 reaction layers to determine multiple unknown
          substances in the sample simultaneously. Polytec tubes offer the flexibility
          to detect a range of gases using a single pump.
        </p>
        <div className="space-y-6">

          <div className="h-auto lg:h-[700px] overflow-hidden rounded-lg">
            <img
              src={images.Gastec_21}
              alt="Polytec-1"
              className={`rounded-lg object-cover h-full w-full brightness-90 object-center`}
            />
          </div>

          <div className="h-auto lg:h-[700px] overflow-hidden rounded-lg">
            <img
              src={images.Gastec_22}
              alt="Polytec-2"
              className={`rounded-lg object-cover h-full w-full brightness-90 object-center`}
            />
          </div>

          <div className="h-auto lg:h-[700px] overflow-hidden rounded-lg">
            <img
              src={images.Gastec_23}
              alt="Polytec-3"
              className={`rounded-lg object-cover h-full w-full brightness-90 object-center`}
            />
          </div>

          <div className="h-auto lg:h-[700px] overflow-hidden rounded-lg">
            <img
              src={images.Gastec_20}
              alt="Polytec-0"
              className={`rounded-lg object-cover h-full w-full brightness-90 object-center`}
            />
          </div>

          <div className="h-auto lg:h-[700px] overflow-hidden rounded-lg">
            <img
              src={images.Gastec_24}
              alt="Polytec-4"
              className={`rounded-lg object-cover h-full w-full brightness-90 object-center`}
            />
          </div>
          <div className="h-auto lg:h-[700px] overflow-hidden rounded-lg">
            <img
              src={images.Gastec_25}
              alt="Polytec-4"
              className={`rounded-lg object-cover h-full w-full brightness-90 object-center`}
            />
          </div>
        </div>

      </>
    </section>
  )
}

export default Gastec6
