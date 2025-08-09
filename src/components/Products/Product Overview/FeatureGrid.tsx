import React from 'react'
import FeatureGridSection from '@/components/Comman/FeatureGridSection'

const FeatureGrid = () => {
  return (
    <FeatureGridSection
      heading={<span>Why Professionals Rely on Al Ghwasa</span>}
      subheading={
        <span>
          With decades of experience in industrial safety and environmental monitoring, Al Ghwasa provides certified GASTEC solutions backed by expert support and localized service.
        </span>
      }
      columns={2}
      features={[
        {
          icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="8" height="8" rx="1" fill="#1e3a8a" />
              <rect x="20" y="4" width="8" height="8" rx="1" fill="#1e3a8a" />
              <rect x="4" y="20" width="8" height="8" rx="1" fill="#1e3a8a" />
              <rect x="20" y="20" width="8" height="8" rx="1" fill="#1e3a8a" />
              <line x1="12" y1="8" x2="20" y2="8" stroke="#1e3a8a" strokeWidth="2" />
              <line x1="12" y1="24" x2="20" y2="24" stroke="#1e3a8a" strokeWidth="2" />
              <line x1="8" y1="12" x2="8" y2="20" stroke="#1e3a8a" strokeWidth="2" />
              <line x1="24" y1="12" x2="24" y2="20" stroke="#1e3a8a" strokeWidth="2" />
            </svg>
          ),
          title: (
            <span className="text-2xl md:text-3xl font-bold text-blue-900">Authorized GASTEC Distributor</span>
          ),
          description: (
            <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
              Get 100% genuine GASTEC products with complete warranty and technical documentation.
            </span>
          ),
        },
        {
          icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="12" r="6" fill="#1e3a8a" />
              <path d="M8 28C8 22.4772 11.5817 18 16 18C20.4183 18 24 22.4772 24 28" stroke="#1e3a8a" strokeWidth="2" />
              <circle cx="22" cy="8" r="3" fill="#1e3a8a" />
              <path d="M26 8L28 6" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ),
          title: (
            <span className="text-2xl md:text-3xl font-bold text-blue-900">Product & Industry Expertise</span>
          ),
          description: (
            <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
              Our team understands your industry's needs — from lab safety to field detection.
            </span>
          ),
        },
        {
          icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="16" width="20" height="8" rx="2" fill="#1e3a8a" />
              <rect x="6" y="18" width="4" height="4" fill="white" />
              <rect x="12" y="18" width="4" height="4" fill="white" />
              <circle cx="8" cy="22" r="2" fill="#1e3a8a" />
              <circle cx="24" cy="22" r="2" fill="#1e3a8a" />
              <path d="M24 20L28 18" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
              <path d="M28 18L26 16" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
              <path d="M28 18L26 20" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ),
          title: (
            <span className="text-2xl md:text-3xl font-bold text-blue-900">Fast Regional Delivery</span>
          ),
          description: (
            <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
              Stocked and shipped locally for faster turnaround and minimal downtime.
            </span>
          ),
        },
        {
          icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4L20 8L16 12" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8H20" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 20L12 24L16 28" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 24H12" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="16" r="3" fill="#1e3a8a" />
              <path d="M16 13V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M13 16H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
          title: (
            <span className="text-2xl md:text-3xl font-bold text-blue-900">Technical Support & Training</span>
          ),
          description: (
            <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
              Get expert setup guidance, calibration support, and usage training when you need it.
            </span>
          ),
        },
      ]}
    />
  )
}

export default FeatureGrid

