import Image from "next/image";

export default function Gastec6() {
  return (
    <section className="blog-content py-6 px-4 space-y-6 text-base font-sans">
      <p className="text-justify font-bold">CG-1 System</p>
      <p className="text-justify">
        The GASTEC CG-1 System allows you to quickly and accurately measure four key impurities—carbon monoxide (CO), carbon dioxide (CO₂), water vapor, and oil mist—present in compressed breathing air from cylinders or compressors.
      </p>

      {/* ADD IMAGE CG1IMAGE 1 */}

      <ul className="list-disc list-inside space-y-2 text-justify">
        <li>Simultaneous detection of all 4 contaminants with a single connection</li>
        <li>No electricity or power required – fully manual operation for use anywhere</li>
        <li>Comes with a compact carrying case for easy transport and convenient storage</li>
      </ul>

      <p className="text-justify">
        Ideal for safety checks in industrial breathing air systems, the CG-1 offers reliable performance in a simple, portable format.
      </p>
    </section>
  );
}