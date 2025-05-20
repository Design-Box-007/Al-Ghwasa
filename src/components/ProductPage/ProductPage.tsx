import React from 'react'

import ProductMain from './ProductMain'
import ProductHero from './ProductHero'
import ProuductGrid from './ProuductGrid'

const ProductPage = () => {
    return (
        <main className='bg-white px-5 py-4 space-y-10'>
            <ProductHero />
            <ProuductGrid />
            <ProductMain />
        </main>
    )
}

export default ProductPage