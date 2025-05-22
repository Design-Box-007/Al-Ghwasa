import React from 'react';

const Blog1 = () => {
  return (
    <section className="blog-content space-y-6 text-[11pt] font-sans">

      <h2 className="text-lg font-semibold mb-2">
        {"In hazardous industrial environments, accurate gas detection is not a luxury—it’s a necessity."}
      </h2>
      <p className="mb-4 text-base leading-relaxed">
        The Gastec Gas Detection System provides reliable, portable, and precise solutions for identifying harmful gases and vapors across a range of industries. From confined spaces to offshore rigs, Gastec detector tubes and pumps are trusted globally to protect lives and ensure regulatory compliance.
      </p>

      <h2 className="text-lg font-semibold mb-2">The Importance of On-Site Gas Monitoring</h2>
      <p className="mb-4 text-base leading-relaxed">
        Industries like oil and gas, manufacturing, and marine operations deal with a wide array of potentially toxic and flammable gases. Real-time, on-the-spot gas testing is crucial to prevent accidents, illnesses, and environmental damage.
      </p>

      <h2 className="text-lg font-semibold mb-2">How Gastec Detector Tubes Work</h2>
      <p className="mb-4 text-base leading-relaxed">
        Gastec systems use a manual pump and calibrated chemical detector tubes that visibly change color upon exposure to a target gas. This low-tech yet highly accurate method offers immediate results without needing electricity or software calibration.
      </p>

      <h2 className="text-lg font-semibold mb-2">GHS-8AT-EX: Explosion-Proof Protection</h2>
      <p className="mb-4 text-base leading-relaxed">
        The GHS-8AT-EX is an explosion-proof model designed for EX zones, allowing safe gas sampling in high-risk areas. It comes equipped with an extension hose for remote or confined sampling.
      </p>

      <h2 className="text-lg font-semibold mb-2">Applications Across Industries</h2>
      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
        <li>Confined space entry</li>
        <li>Petrochemical processing</li>
        <li>Industrial hygiene inspections</li>
        <li>Marine and offshore monitoring</li>
      </ul>
    </section>
  );
};

export default Blog1;
