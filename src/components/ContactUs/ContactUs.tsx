import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from '../Comman/ContactForm'
import LightContactFrom from './LightContactForm';

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
                    <p className="text-lg">Sales@alghwasa.com</p>
                </div>

                <div>
                    <p className="text-lg font-semibold">Mobile</p>
                    <p className="text-lg">+971 55 745 9985</p>
                </div>

                <div>
                    <p className="text-lg font-semibold">Address</p>
                    <p className="text-lg leading-6">Suite 756 031 Ines Riverway,<br />Rhiannonchester</p>
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
        </main>
    )
}

export default ContactUs;

