import React from 'react'
import ProductHero from './ProductHero'
import ProductDataTable from './ProductDataTable'
import GastecContactForm from './GastecContactForm'
import { GastecDataProvider } from '@/context/GastecDataContext'
import ScrollToTopButton from '@/components/Comman/ScrollToTop'

const GastecProduct = () => {
    return (
        <main className='bg-white px-5 py-4 space-y-10'>

            <ProductHero />
            <GastecDataProvider>
                <ProductDataTable />
                <GastecContactForm className='bg-[#00897B]' btnClassName='text-[#00897B]' />
            </GastecDataProvider>
            <ScrollToTopButton/>
        </main>
    )
}

export default GastecProduct