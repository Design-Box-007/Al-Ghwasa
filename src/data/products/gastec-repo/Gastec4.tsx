import Image from "next/image";

export default function Gastec4() {
  return (
    <section className="blog-content py-6 px-4 space-y-6 text-base font-sans">
      <p className="text-justify font-bold">Permeater PD-1C</p>

      <p className="text-justify">
        The GASTEC Permeater is a highly reliable gas calibration generator designed to produce continuous, low-concentration calibration gas using permeation and diffusion tube technology. Ideal for extended calibration tasks, the Permeater allows for precise generation of calibration gas across a wide range of concentrations.
      </p>

      {/* ADD IMAGE PD1C */}

      <p className="text-justify">
        Its accuracy is ensured by measuring fundamental physical properties such as weight loss and dilution gas volume. The system features a user-friendly touch screen that automatically calculates the required dilution gas flow rate based on the desired output concentration. A built-in mass flow controller maintains consistent gas flow, delivering stable and repeatable calibration performance. This makes the GASTEC Permeater a trusted solution for laboratories, research facilities, and industrial environments requiring low-level gas calibration with confidence and control.
      </p>

      <p className="text-justify font-bold">Generating calibration gas with a permeation tube</p>
      <p className="text-justify">
        A permeation tube is a specially designed fluororesin tube filled with high-purity liquefied gas. When heated to a controlled temperature, small amounts of gas slowly pass through the tube wall over time. This process makes it possible to generate a steady and accurate flow of calibration gas. By maintaining a constant temperature and feeding in a precise amount of dilution gas, users can produce consistent low-concentration calibration gases for extended periods.
      </p>
      <p className="text-justify">
        This method is extremely reliable because the gas concentration is based on two measurable factors: the weight loss of the permeation tube and the flow rate of the dilution gas. It’s especially useful for generating reactive calibration gases like hydrogen sulfide and ammonia, which are difficult to handle using other methods.
      </p>
      <p className="text-justify">
        Permeation tubes are available in various types and are widely used in gas detection, environmental monitoring, industrial calibration, and laboratory research because they provide a stable, long-term source of calibration gas.
      </p>

      <p className="text-justify font-bold">Generating calibration gas with a diffusion tube</p>
      <p className="text-justify font-bold">What is the Diffusion Tube Method?</p>
      <p className="text-justify">
        The diffusion tube method is a reliable technique for generating low-concentration calibration gases, especially from liquids such as organic solvents at room temperature. A glass diffusion tube with a fixed inner diameter is filled with the liquid using a syringe. When the tube is kept at a constant temperature, the liquid evaporates and diffuses at a steady rate. By introducing a constant flow of dilution gas, this setup continuously produces stable calibration gas concentrations.
      </p>
      <p className="text-justify">
        Each diffusion tube consists of a liquid reservoir and a narrow glass tube. The diffusion rate is determined by the size and length of the tube—larger diameters increase the rate, while longer tubes slow it down. This makes the system easy to adjust for different calibration needs.
      </p>
      <p className="text-justify">
        While primarily used for liquids, some solid substances can also be used under certain conditions—contact your GASTEC representative for specific guidance. However, this method is not suitable for chemicals with extremely high or low vapor pressure, or those that are highly reactive, corrosive, hygroscopic, decomposable, or prone to polymerization, as they may not diffuse at a constant rate.
      </p>

      <p className="text-justify font-bold">How to use the Permeater</p>
      <p className="text-justify">
        Link to video: <a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=o2mPTzSvZPs" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=o2mPTzSvZPs</a>
      </p>

      <p className="text-justify font-bold">Set Up Procedure:</p>
      <p className="text-justify">
        Video link: <a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=xmej0tAQofw" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=xmej0tAQofw</a>
      </p>
    </section>
  );
}