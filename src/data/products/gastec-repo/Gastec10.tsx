// import Image from "next/image";

export default function Gastec10() {
  return (
    <section className="blog-content py-6 px-4 space-y-6 text-base font-sans">
      <p className="text-justify font-bold">Pyrotec Pyrolyzer 860</p>
      <p className="text-justify">
        The GASTEC Pyrotec Pyrolyzer system is specially designed for the accurate and simple detection of Sulphuryl Fluoride (SO₂F₂)—a common fumigant. Through a process called thermal cracking, the Pyrotec unit breaks down Sulphuryl Fluoride into a gas that can be easily measured using GASTEC detector tubes and a gas sampling pump.
      </p>
      <p className="text-justify">
        This allows for safe, reliable, and on-site measurement, even in low concentrations.
      </p>

      {/* IMAGE Pyrotecpyrolyzer */}

      <p className="text-justify font-bold">Fumigation Probe 380</p>
      <p className="text-justify">
        The GASTEC Fumigation Probe is specially designed to measure residual fumigants inside closed containers without opening them. The probe connects directly to a GASTEC Gas Detector Tube and is inserted through the rubber seal of the container.
      </p>
      <p className="text-justify">
        This method ensures safe, accurate, and non-intrusive gas sampling—ideal for shipping containers, storage units, and fumigation chambers where gas levels need to be monitored after treatment.
      </p>
      <p className="text-justify">
        Please note that only select GASTEC detector tubes are currently compatible with the fumigation probe. Be sure to check the list of applicable tube models before use to ensure accurate results.
      </p>

      {/* IMAGE Fumigation probe */}
    </section>
  );
}
