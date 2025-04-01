import React from 'react'
import { IconType } from 'react-icons';
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const trustedPartnersData: { icon: IconType, partnerName: string }[] = [
    {
        icon: FaApple,
        partnerName: 'Apple'
    },
    {
        icon: FaGoogle,
        partnerName: 'Google'
    },
    {
        icon: FaAmazon,
        partnerName: 'Amazon'
    },
    {
        icon: FaMicrosoft,
        partnerName: 'Microsoft'
    },
    {
        icon: FaFacebook,
        partnerName: 'Facebook'
    },
    {
        icon: FaTwitter,
        partnerName: 'Twitter'
    },
    {
        icon: FaInstagram,
        partnerName: 'Instagram'
    }
];

const TrustedPartners = () => {
    return (
        <section className='space-y-8' >
            <h5 className='text-3xl font-medium text-custom-red-light font-poppins text-center'>Trusted By</h5>
            <div className='flex flex-wrap gap-10'>
                {
                    trustedPartnersData.slice(0, 4).map(({ partnerName, icon: Icon }, index) => (
                        <div className='flex items-center w-2/10 my-4 mx-auto justify-center gap-4 text-xl font-semibold capitalize' key={index}>
                            <Icon size={24} />
                            <span>{partnerName}</span>
                        </div>
                    ))
                }
                {
                    trustedPartnersData.slice(4, 7).map(({ partnerName, icon: Icon }, index) => (
                        <div className='flex items-center w-2/10 my-4 mx-auto justify-center gap-4 text-xl font-semibold capitalize' key={index}>
                            <Icon size={24} />
                            <span>{partnerName}</span>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}

export default TrustedPartners