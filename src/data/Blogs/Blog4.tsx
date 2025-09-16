import Link from "next/link";
import React from "react";

const Blog4 = () => {
  return (
    <section className="blog-content space-y-6 text-base font-sans">
      {/* Introduction */}
      <p className="font-semibold text-xl">Introduction</p>
      <p>
        Gas leaks are a hidden threat across many sectors. Reliable gas
        detection devices act as a safety net to prevent accidents, protect
        workers, and support compliance with safety standards.
      </p>

      {/* Key Industries */}
      <p className="font-semibold text-xl">Key Industries We Serve</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-semibold">Oil &amp; Gas –</span> Detect
          flammable and toxic gases on-site to prevent fires and explosions.
        </li>
        <li>
          <span className="font-semibold">Chemical Plants –</span> Monitor
          harmful emissions during production to safeguard staff and the
          environment.
        </li>
        <li>
          <span className="font-semibold">Manufacturing Facilities –</span>{" "}
          Protect workers from gas hazards in production lines and confined
          spaces.
        </li>
        <li>
          <span className="font-semibold">Laboratories –</span> Ensure safe
          handling of volatile substances and maintain strict safety protocols.
        </li>
        <li>
          <span className="font-semibold">Warehouses &amp; Storage –</span>{" "}
          Detect leaks in enclosed storage areas to prevent costly incidents.
        </li>
      </ul>

      {/* Why It Matters */}
      <p className="font-semibold text-xl">Why Gas Detection Matters</p>
      <p>
        Every industry faces unique risks. Installing advanced gas detection
        systems ensures real-time monitoring, early warning, accident
        prevention, and regulatory compliance. As the official Gastec dealer, Al
        Ghwasa brings authentic equipment and expert guidance to businesses
        across the UAE, GCC, and Africa.
      </p>

      {/* Our Commitment */}
      <p className="font-semibold text-xl">Our Commitment</p>
      <p>
        Since 1988, Al Ghwasa has specialised in delivering gas detection
        solutions tailored to diverse industrial environments. Our experience
        helps companies choose the right technology and maintain the highest
        safety standards.
      </p>

      {/* Call to Action */}
      <p className="font-semibold text-xl">Call to Action</p>
      <p>
        Discover the{" "}
        <Link href={"/Industry"}>
          <span className="link">Industries We Serve</span>
        </Link>{" "}
        and see how our expertise and Gastec solutions can protect your
        workplace.
      </p>
    </section>
  );
};

export default Blog4;
