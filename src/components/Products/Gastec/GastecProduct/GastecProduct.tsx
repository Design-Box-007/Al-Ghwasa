import React from 'react'
import ProductHero from './ProductHero'
import ProductDataTable from './ProductDataTable'

const GastecProduct = () => {
    return (
        <main className='bg-white px-5 py-4 space-y-10'>
            <ProductHero />
            <ProductDataTable/>
        </main>
    )
}

export default GastecProduct