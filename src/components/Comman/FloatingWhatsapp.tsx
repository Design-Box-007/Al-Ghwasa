
'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { phoneNumber } from '@/data/comman';

const FloatingWhatsapp = () => {
    // Clean the phone number for WhatsApp
    const cleanPhoneNumber = phoneNumber.replace(/\s+/g, '').replace(/[^\d+]/g, '');
    return (

        <FloatingWhatsApp
            phoneNumber={cleanPhoneNumber}
            accountName="Al Ghwasa"
            allowEsc
            allowClickAway
            notification
            notificationSound
            statusMessage="Typically replies instantly"
            chatMessage="Hello! How can we help you today?"
            avatar="/images/logo.png"
            darkMode={false}
            buttonClassName='left-[3rem]'
        />
    );
};

export default FloatingWhatsapp;