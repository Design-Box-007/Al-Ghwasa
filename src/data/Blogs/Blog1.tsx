import Link from "next/link";
import React from "react";

const Blog1 = () => {
  return (
    <section className="blog-content space-y-6 text-base font-sans">
      {/* Introduction */}
      <p className="font-semibold text-xl">Introduction</p>
      <p>
        Founded in 1988, Ghwasa has grown from a small safety supplier in Dubai
        into one of the region’s most trusted names in industrial safety and gas
        detection solutions. As the official dealer of Gastec gas detection
        devices, we supply authentic, reliable tools that help businesses across
        the UAE, GCC, and Africa protect their people and meet stringent safety
        standards.
      </p>

      {/* Our Story */}
      <p className="font-semibold text-xl">Our Story</p>
      <p>
        With over three decades of experience, Ghwasa has established a legacy
        of quality, trust, and service in gas detection and safety solutions. We
        combine cutting-edge equipment with deep regional expertise to help
        industries anticipate and control hazards before they escalate. This
        long-standing commitment has earned us enduring partnerships with
        clients across oil &amp; gas, manufacturing, and laboratory sectors.
      </p>

      {/* Partnership with Gastec */}
      <p className="font-semibold text-xl">
        Why Our Partnership With Gastec Matters
      </p>
      <p>
        Gastec gas detectors are renowned for their accuracy, durability, and
        ease of use. Through our official dealership, companies gain direct
        access to these proven technologies, backed by Ghwasa’s decades of
        regional knowledge and hands-on support — a combination that has set the
        benchmark for gas detection in the Middle East since 1988.
      </p>

      {/* Commitment */}
      <p className="font-semibold text-xl">Our Commitment to Safety</p>
      <p>
        At Ghwasa, safety is more than a priority — it’s our promise. Our legacy
        of over 35 years reflects a dedication to protecting workers, enhancing
        operational safety, and building lasting trust with our clients
        throughout the Middle East and Africa.
      </p>

      {/* Learn More */}
      <p className="font-semibold text-xl">Learn More</p>
      <p>
        Discover more about our story, values, and leadership in gas detection
        solutions on our{" "}
        <Link href={"/about"}>
          <span className="link">About Us</span>
        </Link>{" "}
        page.
      </p>
    </section>
  );
};

export default Blog1;
