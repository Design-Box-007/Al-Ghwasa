import React from 'react'
import ProductOverviewHero from './HeroSection'
import SectionTitle from '@/components/Comman/SectionTitle'
import GastecDetectorTubes from './GastecDetectorTubes'
import GastecSamplingPumps from './GastecSamplingPumps'
import SpecializedSamplingKits from './SpecializedSamplingKits'
import AccessoriesExtensionTools from './Accessories&ExtensionTools'
import InstructionalGuidesAndManuals from './InstructionalGuides&Manuals'
import FeatureGrid from './FeatureGrid'
import ProductOverviewCTA from './CTA'

const ProductOverview = () => {
    return (
        <main className='px-4 pt-[150px] lg:pt-[22px] bg-white space-y-10'>
            <ProductOverviewHero />
            <SectionTitle
                title="Explore Our GASTEC Product Range"
                subtitle="We offer the full range of authentic GASTEC tubes, pumps, and accessories for accurate on-site gas analysis and environmental testing."
            />
            <GastecDetectorTubes />
            <GastecSamplingPumps />
            <SpecializedSamplingKits />
            <AccessoriesExtensionTools />
            <InstructionalGuidesAndManuals />
            <FeatureGrid />
            <ProductOverviewCTA />
            {/* Add more sections here as needed */}
        </main>
    )
}

export default ProductOverview
