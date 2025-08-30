import React from "react";

const GoogleMapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57779.153!2d55.2170!3d25.2451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x3e5f42d641e8903b%3A0xbd079c0a70835bbd!2sAl%20Ghwasa%20Technical%20Equipment%20Trading%20L.L.C!5e1!3m2!1sen!2sin!4v1747917263204!5m2!1sen!2sin"
      width="100%"
      height="637"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default GoogleMapComponent;
