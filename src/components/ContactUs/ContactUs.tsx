import React from 'react'
import ContactHero from './ContactHero'
import LightContactFrom from './LightContactForm';
import GoogleMapComponent from '../Comman/GoogleMapComponent';
import { address, contactUsEmail, googleMapLink, phoneNumber } from '@/data/comman';

const ContactSection = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between bg-custom-blue-1 p-4 text-white rounded-lg overflow-hidden">
            {/* Left Side - Contact Info */}
            <div className="w-full lg:w-1/2 p-10 flex flex-col gap-6">
                <h1 className="text-[48px] lg:text-[64px] font-bold">Contact Us</h1>
                <p className="text-lg">Have questions, need a quote, or just want to say hello?<br />Get in touch with us today</p>

                <hr className="border-white my-4" />

                <div>
                    <p className="text-lg font-semibold">Email</p>
                    <a href={`mailto:${contactUsEmail.toLowerCase()}`} target="_blank" className="text-lg">{contactUsEmail}</a>
                </div>

                <div>
                    <p className="text-lg font-semibold">Mobile</p>
                    <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} target="_blank" className="text-lg">{phoneNumber}</a>
                </div>

                <div>
                    <p className="text-lg font-semibold">Address</p>
                    <a href={googleMapLink} target="_blank" className="text-lg leading-6">{address}</a>
                </div>
            </div>
            <LightContactFrom />
        </section>
    );
};



const ContactUs = () => {
    return (
        <main id='contact' className='px-c-20 pb-20 space-y-[56px] bg-white'>
            <ContactHero />
            <ContactSection />
            <GoogleMapComponent />
        </main>
    )
}

export default ContactUs;

