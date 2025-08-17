import React from 'react'

export type FeatureGridItem = {
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
}

export interface FeatureGridSectionProps {
  heading?: React.ReactNode
  subheading?: React.ReactNode
  features: FeatureGridItem[]
  columns?: 1 | 2 | 3 | 4
  sectionClassName?: string
  containerClassName?: string
  gridClassName?: string
  cardClassName?: string
  iconWrapperClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

const getGridColsClass = (columns: 1 | 2 | 3 | 4 | undefined): string => {
  switch (columns) {
    case 1:
      return 'grid-cols-1'
    case 2:
      return 'grid-cols-1 md:grid-cols-2'
    case 3:
      return 'grid-cols-1 md:grid-cols-3'
    case 4:
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    default:
      return 'grid-cols-1 md:grid-cols-2'
  }
}

const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({
  heading,
  subheading,
  features,
  columns = 2,
  sectionClassName,
  containerClassName,
  gridClassName,
  cardClassName,
  iconWrapperClassName,
  titleClassName,
  descriptionClassName,
}) => {
  const sectionClasses = sectionClassName ?? 'py-16 w-full'
  const containerClasses = containerClassName ?? 'w-full px-4 md:px-8 lg:px-16'
  const gridClasses = gridClassName ?? `grid ${getGridColsClass(columns)} gap-8 w-full`
  const cardClasses =
    cardClassName ??
    'bg-gray-100 p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 min-h-[320px] md:min-h-[360px] flex flex-col justify-center'
  const iconClasses = iconWrapperClassName ?? 'w-16 h-16 flex items-center justify-center'
  const titleClasses = titleClassName ?? 'text-xl font-bold text-blue-900 mb-3'
  const descriptionClasses = descriptionClassName ?? 'text-gray-600 leading-relaxed'

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && (
              <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">{heading}</h2>
            )}
            {subheading && <p className="text-xl text-gray-600 max-w-5xl mx-auto">{subheading}</p>}
          </div>
        )}

        <div className={gridClasses}>
          {features.map((feature, index) => (
            <div key={index} className={cardClasses}>
              <div className="text-center space-y-4">
                {(feature.icon ?? null) && (
                  <div className="flex justify-center">
                    <div className={iconClasses}>{feature.icon}</div>
                  </div>
                )}
                <div>
                  <h3 className={titleClasses}>{feature.title}</h3>
                  {feature.description && (
                    <p className={descriptionClasses}>{feature.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGridSection

