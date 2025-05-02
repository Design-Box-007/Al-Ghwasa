import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from '../Comman/ContactForm'

const ContactUs = () => {
    return (
        <main id='contact' className='px-c-20 pb-20 space-y-[56px] bg-white'>
            <ContactHero />
            <ContactForm className='bg-custom-blue-1' />
        </main>
    )
}

export default ContactUs