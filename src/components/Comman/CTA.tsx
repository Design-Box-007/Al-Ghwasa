import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export interface CTAProps {
  title: React.ReactNode
  leftSubtitle?: React.ReactNode
  rightDescription?: React.ReactNode
  buttonText?: string
  buttonHref?: string
  sectionClassName?: string
  containerClassName?: string
}

/**
 * Reusable CTA banner
 * - Two-column responsive layout
 * - Left: headline + small subtitle
 * - Right: supporting copy + CTA button
 */
const CTA: React.FC<CTAProps> = ({
  title,
  leftSubtitle,
  rightDescription,
  buttonText = 'Get in Touch',
  buttonHref = '/contact',
  sectionClassName,
  containerClassName,
}) => {
  const sectionClasses =
    sectionClassName ?? 'w-full py-8 md:py-10'
  const containerClasses =
    containerClassName ?? 'w-full px-4 md:px-8 lg:px-10'

  return (
    <section className={sectionClasses}>
      <div className={`${containerClasses}`}>
        <div className="w-full bg-custom-blue-1 text-white rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h2>
              {leftSubtitle && (
                <p className="text-base md:text-lg text-white/80 max-w-xl">
                  {leftSubtitle}
                </p>
              )}
            </div>

            <div className="space-y-6 md:space-y-8">
              {rightDescription && (
                <p className="text-base md:text-lg text-white/90 max-w-2xl">
                  {rightDescription}
                </p>
              )}
              {buttonHref && (
                <div>
                  <Link
                    href={buttonHref}
                    className="inline-flex items-center justify-between gap-6 w-full md:w-auto rounded-full bg-white text-[#0F2F4D] px-6 md:px-8 py-3 md:h-12 font-medium shadow-sm hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-base md:text-lg">{buttonText}</span>
                    <span className="ml-2 grid place-items-center w-8 h-8 rounded-full bg-[#0F2F4D] text-white">
                      <FaArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

