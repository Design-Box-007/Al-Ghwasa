import Image from "next/image";

export default function Gastec9() {
  return (
    <section className="blog-content py-6 px-4 space-y-6 text-base font-sans">
      <p className="text-justify font-bold">Types of Detector Tubes</p>

      <p className="text-justify font-semibold">Short-term Measurement Detector Tubes</p>
      {/* IMAGE Shortterm1 */}
      <p className="text-justify">
        The detector tube system uses the GV-100 or GV-110 gas sampling pump to draw gas samples through the detector tube. By fully pulling back the pump handle, a vacuum is created inside the cylinder, pulling the gas sample in for testing.
      </p>
      <p className="text-justify">
        This easy-to-use system allows anyone to quickly and accurately measure gas concentrations anywhere, anytime—making it ideal for fast and reliable gas detection in the field.
      </p>

      <p className="text-justify font-semibold">Passive Dositubes for Time-Weighted Measurements</p>
      {/* IMAGE Dositube holder */}
      <p className="text-justify">
        Passive dositubes measure time-weighted average (TWA) gas concentrations over extended periods by using the natural diffusion of gases. Each dositube is a glass tube with a specific inner diameter, containing a diffuser and chemical reagent that allow gas to enter at a steady rate.
      </p>
      <p className="text-justify">
        These dositubes can be worn in the worker’s breathing zone using a holder and collar clip (sold separately, Art.No.710) to measure individual exposure or used in fixed locations to monitor gas concentration changes.
      </p>

      <p className="text-justify font-semibold">Detector Tubes for Automatic Air Sampling Pump</p>
      <p className="text-justify">
        This detector tube works with an automatic air sampling pump that draws air at a controlled speed and set time through the tube. It enables precise measurement of odorous gases and contaminants in workplace and indoor environments.
      </p>

      <p className="text-justify font-semibold">Airtec Tubes</p>
      <p className="text-justify">
        Airtec tubes offer a simple and reliable solution for testing gas cylinders, compressed breathing air, and air lines. These are essential for ensuring the quality of breathing air when using self-contained breathing apparatus or other respiratory protection devices.
      </p>

      <p className="text-justify font-semibold">Polytec Tubes</p>
      {/* IMAGE Polytec Tubes */}
      <p className="text-justify">
        The GASTEC Polytec system features the Model GV-100S gas sampling pump combined with Polytec detector tubes that contain 1 to 8 reaction layers. These identify multiple unknown substances in a single gas sample.
      </p>
      <p className="text-justify">
        Six types of Polytec tubes are available:
      </p>
      <ul className="list-disc list-inside text-justify">
        <li>Polytec I (No.107)</li>
        <li>Polytec II (No.25)</li>
        <li>Polytec III (No.26)</li>
        <li>Polytec IV (No.27)</li>
        <li>Polytec V (No.28)</li>
        <li>Qualitative Analysis Tube for Fire Investigation (No.108)</li>
      </ul>
      <p className="text-justify">
        If you already own the GV-100S pump, you only need to purchase the specific Polytec tubes for your testing needs.
      </p>

      <p className="text-justify font-semibold">PYROTEC Detector Tubes</p>
      {/* IMAGE pyrotec */}
      <p className="text-justify">
        The PYROTEC system pyrolytically breaks down CFC gases, halogenated hydrocarbons, and other gases into measurable components using a pyro tube and the PYROTEC unit.
      </p>
      <p className="text-justify">
        Two models are available: No.840 and No.860.
      </p>

      <p className="text-justify font-semibold">Detector Tubes for Dissolved Substances in Solution</p>
      {/* IMAGE dissolved solution */}
      <p className="text-justify">
        To measure, simply immerse the detector tube in a liquid sample. Anyone can measure concentrations quickly and accurately on-site.
      </p>
      <p className="text-justify">
        <span className="font-semibold">Using the injection method:</span> 
      </p>
      {/* ADD small STEP image */}
      <ol className="list-decimal list-inside space-y-1 text-justify">
        <li>Break off both ends of a detector tube using the tube tip cutter.</li>
        <li>Attach the syringe inlet and collect 20ml of sample using the syringe.</li>
        <li>Insert the tube into the syringe and inject the sample over 2 minutes (No.100B) or 20 seconds (No.2HT).</li>
        <li>Refer to the product manual for full details.</li>
      </ol>
    </section>
  );
}