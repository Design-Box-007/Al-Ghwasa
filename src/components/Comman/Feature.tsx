import { FeatureClassName, IFeature } from '@/types'
import Image from 'next/image';
import React from 'react'

interface FeatureProps {
    feature: IFeature
    featureClassName?: FeatureClassName;
}

const defaultFeatureClassName: FeatureClassName = {
    featureClass: "bg-custom-blue-1 rounded-2xl text-white px-4 py-6",
    iconClass: "text-white",
    titleClass: "text-2xl",
    imageClass: "invert-[1]",
    contentClass: "text-lg"
}

const Feature: React.FC<FeatureProps> = ({ feature, featureClassName }) => {
    const mergedClassName: FeatureClassName = {
        ...defaultFeatureClassName,
        ...featureClassName,
    };

    const isIconComponent = typeof feature.icon !== 'string';

    return (
        <div className={`w-auto flex flex-col gap-3 justify-start text-left ${mergedClassName.featureClass}`}>
            {isIconComponent ? (
                <feature.icon className={`w-8 h-8 ${mergedClassName.iconClass}`} />
            ) : (
                <Image
                    src={feature.icon as string}
                    alt={feature.title}
                    className={`${mergedClassName.imageClass}`}
                    width={32}
                    height={29}
                />
            )}
            <h5 className={`font-medium ${mergedClassName.titleClass}`}>{feature.title}</h5>
            {feature.description && (
                <p className={`font-medium ${mergedClassName.contentClass}`}>{feature.description}</p>
            )}
        </div>
    );
};


export default Feature