import React from 'react'
import OurProductCarousel from './OurProductCarousel'
import OurProductVennDiagram from './OurProductVennDiagram'
import OurCollection from './OurCollection'

const OurProduct = () => {
    return (
        <section className='px-4 mt-[100px] space-y-8'>
            <OurProductCarousel />
            <OurProductVennDiagram />
            <OurCollection />
        </section>
    )
}

export default OurProduct