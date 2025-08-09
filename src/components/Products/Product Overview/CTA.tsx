import React from 'react'
import CTA from '@/components/Comman/CTA'

const ProductOverviewCTA = () => {
  return (
    <CTA
      title={<span>Ready to Improve Your Gas Detection Accuracy?</span>}
      leftSubtitle={
        <span>
          From product guidance to pricing — we’re just one message away.
        </span>
      }
      rightDescription={
        <span>
          Our team is here to help you select the right tubes, pumps, or kits for
          your environment. Get expert advice, fast delivery, and reliable
          support.
        </span>
      }
      buttonText="Get in Touch"
      buttonHref="/contact"
    />
  )
}

export default ProductOverviewCTA


