import { IFeature } from '@/types'
import Image from 'next/image';
import React from 'react'

interface FeatureProps {
    feature: IFeature
}

const Feature: React.FC<FeatureProps> = ({ feature }) => {
    const isIconComponent = typeof feature.icon !== 'string';

    return (
        <div className="bg-custom-blue-2 w-auto space-y-3 px-4 py-6 rounded-2xl text-white">
            {isIconComponent ? (
                // If it's an IconType, render it as a component
                <feature.icon className="w-8 h-8 text-white" />
            ) : (
                // Otherwise, assume it's an image URL
                <Image src={feature.icon as string} alt={feature.title} className="invert-[1] w-auto h-auto" width={32} height={29} />
            )}
            <h5 className='font-medium text-2xl'>{feature.title}</h5>
            <p className='font-medium text-lg'>{feature.description}</p>
        </div>
    );
};

export default Feature