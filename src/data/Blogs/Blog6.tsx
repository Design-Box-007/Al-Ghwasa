import Link from "next/link";
import React from "react";

const Blog6 = () => {
  return (
    <section className="blog-content space-y-6 text-base font-sans">
      {/* Introduction */}
      <p className="font-semibold text-xl">Introduction</p>
      <p>
        Even the best gas detection devices need regular care. Proper
        maintenance keeps equipment accurate, reliable, and ready to protect
        your workplace.
      </p>

      {/* Essential Maintenance Tips */}
      <p className="font-semibold text-xl">Essential Maintenance Tips</p>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          <span className="font-semibold">Regular Calibration –</span> Calibrate
          sensors at recommended intervals to maintain accuracy.
        </li>
        <li>
          <span className="font-semibold">Battery Care –</span> Replace
          batteries promptly and monitor battery health regularly.
        </li>
        <li>
          <span className="font-semibold">Sensor Inspection –</span> Keep
          sensors clean and undamaged; replace when necessary.
        </li>
        <li>
          <span className="font-semibold">Software Updates –</span> Install
          updates on devices with digital monitoring features.
        </li>
        <li>
          <span className="font-semibold">Periodic Testing –</span> Test alarm
          systems regularly to confirm proper functionality.
        </li>
      </ol>

      {/* Tip */}
      <p className="italic">
        💡 Tip: Al Ghwasa’s service team can help you set up a maintenance
        schedule for your gas detection systems.
      </p>

      {/* Conclusion */}
      <p className="font-semibold text-xl">Conclusion</p>
      <p>
        Well-maintained gas detectors are an investment in safety and
        compliance. Following simple maintenance routines with support from Al
        Ghwasa keeps your workplace protected and your devices performing at
        their best.
      </p>

      {/* Call to Action */}
      <p className="font-semibold text-xl">Call to Action</p>
      <p>
        Learn more about our{" "}
        <Link href={"/gas-detector-tube-system"}>
          <span className="link">
            Gas Detector System
          </span>
        </Link>{" "}
        or schedule a service with our experts today.
      </p>
    </section>
  );
};

export default Blog6;
