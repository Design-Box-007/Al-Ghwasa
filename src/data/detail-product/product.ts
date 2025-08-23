import { DetailProduct } from "@/types/product";

// data/products.ts
export const products: DetailProduct[] = [
  // Calibration and Regulators

  // GASTEC Calibration Kit
  {
    name: "GASTEC Calibration Kit",
    category: "Gas Detection Monitors",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_1.jpg",
    ],
    description:
      "The GASTEC CG-1 Calibration Kit enables fast, simultaneous detection of CO, CO₂, water vapor, and oil mist in breathing air—directly from a cylinder or compressor. It operates without electricity, housed in a sturdy, convenient carry case suitable for both industrial and field environments.",
    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],
    featureCard2: [
      "No power source required",
      "Compact, durable carrying case",
      "Easy to connect to compressor or cylinder",
      "Quick, accurate results on-site",
      "Detects four contaminants simultaneously: CO, CO₂, water vapor, and oil mist",
    ],

    specifications: [
      {
        title: "Measured Substances",
        description: "CO, CO₂, Water Vapor, Oil Mist",
      },
      {
        title: "Operation Method",
        description: "Manual sampling—no power source required",
      },
      {
        title: "Kit Components",
        description:
          "Measuring device, rubber shroud, GASTEC tubes (1A, 2A, 6A, 109AD), stopwatch, tube tip holder, carrying case, deep socket",
      },
      {
        title: "Contaminant Ranges (ppm or mg/m³)",
        description: "Carbon Dioxide: 250–3000 ppm (2A)",
      },
      {
        title: "Carbon Monoxide",
        description: "5–50 ppm (1A)",
      },
      {
        title: "Water Vapor",
        description: "10–80 mg/m³ (6A)",
      },
      {
        title: "Oil Mist",
        description: "0.1–5.0 mg/m³ (109AD)",
      },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Setup",
        details: [
          "Unpack the kit, select the target tube (CO, CO₂, H₂O, or Oil Mist) Mount it in the rubber shroud Place the stopwatch nearby",
        ],
      },
      {
        step: "02",
        title: "Measurement",
        details: [
          "Connect the device to the compressed air source, insert the tube, and initiate sampling manually—observe the reaction on the tube.",
        ],
      },
      {
        step: "03",
        title: "Read & Store Result",
        details: [
          "Remove the tube and interpret the concentration using the colored scale. Store results and reseal the kit for secure storage.",
        ],
      },
    ],

    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },

    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_4.jpg",
        name: "Pressure Reducer",
        description: "for adjusting calibration gas pressure",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_6.jpg",
        name: "Flow Meters & Adapters",
        description: "for precise flow and device compatibility",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_5.jpg",
        name: "Compressed Air Option",
        description: "cylinder or compressor integration kit",
      },
    ],
  },
  // Flow Regulator
  {
    name: "GASTEC Flow Regulator",
    category: "Gas Detection Monitors",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_2.jpg",
    ],
    description:
      "The GV Series Flow Regulators are engineered for field and laboratory calibration of gas detection instruments. Built for ease of use, these regulators ensure that calibration gas is dispensed at a steady, accurate rate. Available in both fixed flow and adjustable flow versions, they are suitable for a wide range of applications including industrial hygiene, confined space monitoring, and environmental safety testing.",
    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],
    featureCard2: [
      "Lightweight and easy to carry for field use",
      "Designed to fit disposable calibration gas cylinders",
      "Available in fixed flow or variable flow models",
      "Provides stable and accurate gas delivery",
      "Durable construction for long service life",
    ],
    specifications: [
      { title: "Target Gas", description: "Hydrogen Sulphide (H₂S)" },
      {
        title: "Measurement Principle",
        description: "Controlled-potential electrolysis sensors",
      },
      { title: "Sampling Method", description: "Diffusion" },
      { title: "Indicating Accuracy", description: "F.S ±5%" },
      {
        title: "Measurement Range",
        description:
          "0 – 10.0 ppm / 0 – 100 ppm / 0 – 500 ppm / 0 – 1000 ppm / 0 – 3000 ppm",
      },
      {
        title: "Minimum Resolution",
        description: "0.1 ppm / 1 ppm / 1 ppm / 10 ppm / 25 ppm",
      },
      {
        title: "Sensor",
        description: "H2S-520E, H2S-521E, H2S-522E, H2S-523E, H2S-524E",
      },
      { title: "Temperature Measurement Range", description: "0 – 40 °C" },
      {
        title: "Display",
        description:
          "LCD (Concentration, temperature, time, recording days remaining, battery capacity)",
      },
      {
        title: "Operating Temperature / Humidity",
        description: "0 – 40 °C, 30 – 95 %RH (No condensation allowed)",
      },
      {
        title: "Power Source",
        description:
          "Two AA alkaline batteries (LR6 Panasonic / MN1500 Duracell)",
      },
      {
        title: "Battery Life",
        description: "3 months (*with normal operation)",
      },
      {
        title: "Backup Battery Life",
        description:
          "Lithium battery (5 years)* – Maintains data when alkaline not connected",
      },
      {
        title: "Data Logging Capacity",
        description: "45,960 sets (≈31 days at 1-min intervals)",
      },
      {
        title: "Sampling Intervals",
        description: "1min, 5min, 10min, 15min, 30min, 60min",
      },
      { title: "Communication Interface", description: "USB 2.0" },
      { title: "Dimensions", description: "Ø89 × 148 mm" },
      { title: "Weight", description: "390 g" },
      {
        title: "EU Directives",
        description:
          "2014/34/EU (ATEX), 2014/30/EU (EMC), 2011/65/EU (RoHS), (EU)2015/863 (RoHS), (EU)2023/1542 (Battery)",
      },
      { title: "Marking (ATEX)", description: "II 2G Ex ia II B T3 Gb" },
      { title: "Marking (IEC Ex)", description: "Ex ia 2 B T3 Gb" },
      {
        title: "Certificates",
        description: "ATEX: DEKRA 14ATEX0135 / IECEx: DEX 14.0085",
      },
      {
        title: "Standards (ATEX)",
        description: "EN IEC60079-0:2018, EN60079-11:2012",
      },
      {
        title: "Standards (IEC Ex)",
        description: "IEC60079-0:2017, IEC60079-11:2011",
      },
      {
        title: "Standards (EMC)",
        description:
          "IEC60079-0:201EN50270:2015, EN55032:2015+A11:2020+A1:2020, EN55035:2017+A11:20207, IEC60079-11:2011",
      },
      { title: "Standards (RoHS)", description: "EN IEC63000:2018" },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Attach Regulator",
        details: [
          "Secure the regulator to the calibration gas cylinder valve.",
          "Ensure the connection is tight and leak-free.",
        ],
      },
      {
        step: "02",
        title: "Set Flow",
        details: [
          "For fixed-flow regulators, confirm the required flow rate.",
          "For variable models, adjust the knob to desired flow within range.",
        ],
      },
      {
        step: "03",
        title: "Begin Calibration",
        details: [
          "Connect regulator outlet to your detector or sampling equipment.",
          "Start gas flow and proceed with calibration as per equipment guidelines.",
        ],
      },
    ],

    cta: {
      title: "Need Quick Gas Analysis?",
      rightDescription:
        "Reach out now to request a quote, explore bulk pricing, or arrange a product demo.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },

    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_6.jpg",
        name: "Flow Meters & Adapters",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_1.jpg",
        name: "GASTEC Calibration Kit",
        description: "Fit testing unit for respiratory equipment.",
      },
    ],
  },
  // Pressure Regulator
  {
    name: "Pressure Regulator",
    category: "Gas Detection Monitors",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_4.jpg",
    ],
    description:
      "The CG1 Series Pressure Regulators are specifically developed to maintain stable gas flow during calibration. Designed for use with disposable calibration gas cylinders, these regulators ensure reliability, accuracy, and safety in test environments. Models are available for different flow control needs (fixed or variable), supporting applications in industrial hygiene, safety, and gas detection calibration.",

    featureCard2: [
      "Designed for disposable calibration gas cylinders",
      "Options for fixed flow and variable flow control",
      "Stable output pressure ensures precise calibration",
      "Lightweight and durable construction for field or lab use",
    ],

    specifications: [
      { title: "Target Gas", description: "Hydrogen Sulphide (H₂S)" },
      {
        title: "Measurement Principle",
        description: "Controlled-potential electrolysis sensors",
      },
      { title: "Sampling Method", description: "Diffusion" },
      { title: "Indicating Accuracy", description: "F.S ±5%" },
      {
        title: "Measurement Range",
        description:
          "0 – 10.0 ppm / 0 – 100 ppm / 0 – 500 ppm / 0 – 1000 ppm / 0 – 3000 ppm",
      },
      {
        title: "Minimum Resolution",
        description: "0.1 ppm / 1 ppm / 1 ppm / 10 ppm / 25 ppm",
      },
      {
        title: "Sensor",
        description: "H2S-520E, H2S-521E, H2S-522E, H2S-523E, H2S-524E",
      },
      { title: "Temperature Measurement Range", description: "0 – 40 °C" },
      {
        title: "Display",
        description:
          "LCD (Concentration, temperature, time, recording days remaining, battery capacity)",
      },
      {
        title: "Operating Temperature / Humidity",
        description: "0 – 40 °C, 30 – 95 %RH (No condensation allowed)",
      },
      {
        title: "Power Source",
        description:
          "Two AA alkaline batteries (LR6 Panasonic / MN1500 Duracell)",
      },
      {
        title: "Battery Life",
        description: "3 months (*with normal operation)",
      },
      {
        title: "Backup Battery Life",
        description:
          "Lithium battery (5 years)* – Maintains data when alkaline not connected",
      },
      {
        title: "Data Logging Capacity",
        description: "45,960 sets (≈31 days at 1-min intervals)",
      },
      {
        title: "Sampling Intervals",
        description: "1min, 5min, 10min, 15min, 30min, 60min",
      },
      { title: "Communication Interface", description: "USB 2.0" },
      { title: "Dimensions", description: "Ø89 × 148 mm" },
      { title: "Weight", description: "390 g" },
      {
        title: "EU Directives",
        description:
          "2014/34/EU (ATEX), 2014/30/EU (EMC), 2011/65/EU (RoHS), (EU)2015/863 (RoHS), (EU)2023/1542 (Battery)",
      },
      { title: "Marking (ATEX)", description: "II 2G Ex ia II B T3 Gb" },
      { title: "Marking (IEC Ex)", description: "Ex ia 2 B T3 Gb" },
      {
        title: "Certificates",
        description: "ATEX: DEKRA 14ATEX0135 / IECEx: DEX 14.0085",
      },
      {
        title: "Standards (ATEX)",
        description: "EN IEC60079-0:2018, EN60079-11:2012",
      },
      {
        title: "Standards (IEC Ex)",
        description: "IEC60079-0:2017, IEC60079-11:2011",
      },
      {
        title: "Standards (EMC)",
        description:
          "IEC60079-0:201EN50270:2015, EN55032:2015+A11:2020+A1:2020, EN55035:2017+A11:20207, IEC60079-11:2011",
      },
      { title: "Standards (RoHS)", description: "EN IEC63000:2018" },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Attach Regulator",
        details: [
          "Secure the regulator to the calibration gas cylinder valve.",
          "Ensure the connection is tight and leak-free.",
        ],
      },
      {
        step: "02",
        title: "Set Flow",
        details: [
          "For fixed-flow regulators, confirm the required flow rate.",
          "For variable models, adjust the knob to desired flow within range.",
        ],
      },
      {
        step: "03",
        title: "Begin Calibration",
        details: [
          "Connect regulator outlet to your detector or sampling equipment.",
          "Start gas flow and proceed with calibration as per equipment guidelines.",
        ],
      },
    ],

    cta: {
      title: "Need Quick Gas Analysis?",
      rightDescription:
        "Reach out now to request a quote, explore bulk pricing, or arrange a product demo.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },

    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_6.jpg",
        name: "Flow Meters & Adapters",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_5.jpg",
        name: "Compressed Air Option",
        description: "Fit testing unit for respiratory equipment.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_1.jpg",
        name: "GASTEC Calibration Kit",
        description: "Fit testing unit for respiratory equipment.",
      },
    ],
  },
  // High-Precision Flow Regulator
  {
    name: "High-Precision Flow Regulator",
    category: "Gas Detection Monitors",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_5.jpg",
    ],
    description:
      "The GASTEC CG-1 Calibration Kit enables fast, simultaneous detection of CO, CO₂, water vapor, and oil mist in breathing air—directly from a cylinder or compressor. It operates without electricity, housed in a sturdy, convenient carry case suitable for both industrial and field environments.",

    features: [
      {
        title: "Compact & Lightweight",
        description: "Easy to carry for field inspections.",
      },
      {
        title: "Multi-Gas Detection",
        description: "Monitors a variety of hazardous gases.",
      },
      {
        title: "Digital Display",
        description: "Clear, real-time concentration readings.",
      },
      {
        title: "Fast Response Time",
        description: "Ensures immediate safety alerts.",
      },
      {
        title: "Durable Design",
        description: "Built for rugged industrial use.",
      },
      {
        title: "User-Friendly Operation",
        description: "Simple interface for quick sampling.",
      },
    ],

    specifications: [
      { title: "Target Gas", description: "Hydrogen Sulphide (H₂S)" },
      {
        title: "Measurement Principle",
        description: "Controlled-potential electrolysis sensors",
      },
      { title: "Sampling Method", description: "Diffusion" },
      { title: "Indicating Accuracy", description: "F.S ±5%" },
      {
        title: "Measurement Range",
        description:
          "0 – 10.0 ppm / 0 – 100 ppm / 0 – 500 ppm / 0 – 1000 ppm / 0 – 3000 ppm",
      },
      {
        title: "Minimum Resolution",
        description: "0.1 ppm / 1 ppm / 1 ppm / 10 ppm / 25 ppm",
      },
      {
        title: "Sensor",
        description: "H2S-520E, H2S-521E, H2S-522E, H2S-523E, H2S-524E",
      },
      { title: "Temperature Measurement Range", description: "0 – 40 °C" },
      {
        title: "Display",
        description:
          "LCD (Concentration, temperature, time, recording days remaining, battery capacity)",
      },
      {
        title: "Operating Temperature / Humidity",
        description: "0 – 40 °C, 30 – 95 %RH (No condensation allowed)",
      },
      {
        title: "Power Source",
        description:
          "Two AA alkaline batteries (LR6 Panasonic / MN1500 Duracell)",
      },
      {
        title: "Battery Life",
        description: "3 months (*with normal operation)",
      },
      {
        title: "Backup Battery Life",
        description:
          "Lithium battery (5 years)* – Maintains data when alkaline not connected",
      },
      {
        title: "Data Logging Capacity",
        description: "45,960 sets (≈31 days at 1-min intervals)",
      },
      {
        title: "Sampling Intervals",
        description: "1min, 5min, 10min, 15min, 30min, 60min",
      },
      { title: "Communication Interface", description: "USB 2.0" },
      { title: "Dimensions", description: "Ø89 × 148 mm" },
      { title: "Weight", description: "390 g" },
      {
        title: "EU Directives",
        description:
          "2014/34/EU (ATEX), 2014/30/EU (EMC), 2011/65/EU (RoHS), (EU)2015/863 (RoHS), (EU)2023/1542 (Battery)",
      },
      { title: "Marking (ATEX)", description: "II 2G Ex ia II B T3 Gb" },
      { title: "Marking (IEC Ex)", description: "Ex ia 2 B T3 Gb" },
      {
        title: "Certificates",
        description: "ATEX: DEKRA 14ATEX0135 / IECEx: DEX 14.0085",
      },
      {
        title: "Standards (ATEX)",
        description: "EN IEC60079-0:2018, EN60079-11:2012",
      },
      {
        title: "Standards (IEC Ex)",
        description: "IEC60079-0:2017, IEC60079-11:2011",
      },
      {
        title: "Standards (EMC)",
        description:
          "IEC60079-0:201EN50270:2015, EN55032:2015+A11:2020+A1:2020, EN55035:2017+A11:20207, IEC60079-11:2011",
      },
      { title: "Standards (RoHS)", description: "EN IEC63000:2018" },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Preparation",
        details: [
          "Charge the device fully.",
          "Attach sampling probe/tube securely.",
          "Check sensor cover is clean.",
          "Run a quick self-check on startup.",
        ],
      },
      {
        step: "02",
        title: "Power On",
        details: [
          "Hold Power Button until startup sound.",
          "Wait for initialization sequence.",
          "Display shows battery, calibration, and sensor status.",
        ],
      },
      {
        step: "03",
        title: "Calibration Check",
        details: [
          "Ensure calibration is up-to-date.",
          "If needed, connect calibration gas.",
          "Follow on-screen calibration procedure.",
        ],
      },
      {
        step: "04",
        title: "Operation",
        details: [
          "Insert probe into environment.",
          "Monitor real-time readings on display.",
          "Alarm (sound, light, vibration) triggers if limits exceeded.",
        ],
      },
      {
        step: "05",
        title: "Data Logging (Optional)",
        details: [
          "Enable logging from menu.",
          "Save results for PC review or storage card.",
        ],
      },
      {
        step: "06",
        title: "After Use",
        details: [
          "Power off with Power Button.",
          "Wipe device and probe clean.",
          "Store in protective case in safe conditions.",
        ],
      },
    ],
    software: [
      {
        label: "ANASYS Software Download",
        link: "https://gastec-software.com/anasys",
      },
      {
        label: "ANASYS Software Download",
        link: "https://gastec-software.com/anasys",
      },
    ],
    packageContent: [
      "1 × GHS-8AT EX Monitor",
      "1 × Sampling Tube",
      "1 × Rechargeable Battery & Charger",
      "1 × Carrying Case",
      "1 × User Manual",
    ],
    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },

    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
        name: "GHS-8AT EX Starter Kit",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_3.jpg",
        name: "GHS-501FT Fit Tester",
        description: "Fit testing unit for respiratory equipment.",
      },
    ],
  },
  // Adaptor / Connector
  {
    name: "Adaptor / Connector",
    category: "Gas Detection Monitors",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_6.jpg",
    ],
    description:
      "These adapters allow seamless connection between your calibration systems and gas cylinders or regulators. Models include CG1-11 through CG1-17, matching various interface standards (ISO12209, CGA346, CGA347) and compatible with extreme pressure conditions (up to 300 bar) to support accurate and secure gas calibration setups.",

    featureCard2: [
      "Multiple interface types for broad compatibility",
      "High-pressure rated—up to 300 bar",
      "Durable, precision machined construction",
      "Ideal for compressed air calibration setups",
    ],

    specifications: [
      { title: "Target Gas", description: "Hydrogen Sulphide (H₂S)" },
      {
        title: "Measurement Principle",
        description: "Controlled-potential electrolysis sensors",
      },
      { title: "Sampling Method", description: "Diffusion" },
      { title: "Indicating Accuracy", description: "F.S ±5%" },
      {
        title: "Measurement Range",
        description:
          "0 – 10.0 ppm / 0 – 100 ppm / 0 – 500 ppm / 0 – 1000 ppm / 0 – 3000 ppm",
      },
      {
        title: "Minimum Resolution",
        description: "0.1 ppm / 1 ppm / 1 ppm / 10 ppm / 25 ppm",
      },
      {
        title: "Sensor",
        description: "H2S-520E, H2S-521E, H2S-522E, H2S-523E, H2S-524E",
      },
      { title: "Temperature Measurement Range", description: "0 – 40 °C" },
      {
        title: "Display",
        description:
          "LCD (Concentration, temperature, time, recording days remaining, battery capacity)",
      },
      {
        title: "Operating Temperature / Humidity",
        description: "0 – 40 °C, 30 – 95 %RH (No condensation allowed)",
      },
      {
        title: "Power Source",
        description:
          "Two AA alkaline batteries (LR6 Panasonic / MN1500 Duracell)",
      },
      {
        title: "Battery Life",
        description: "3 months (*with normal operation)",
      },
      {
        title: "Backup Battery Life",
        description:
          "Lithium battery (5 years)* – Maintains data when alkaline not connected",
      },
      {
        title: "Data Logging Capacity",
        description: "45,960 sets (≈31 days at 1-min intervals)",
      },
      {
        title: "Sampling Intervals",
        description: "1min, 5min, 10min, 15min, 30min, 60min",
      },
      { title: "Communication Interface", description: "USB 2.0" },
      { title: "Dimensions", description: "Ø89 × 148 mm" },
      { title: "Weight", description: "390 g" },
      {
        title: "EU Directives",
        description:
          "2014/34/EU (ATEX), 2014/30/EU (EMC), 2011/65/EU (RoHS), (EU)2015/863 (RoHS), (EU)2023/1542 (Battery)",
      },
      { title: "Marking (ATEX)", description: "II 2G Ex ia II B T3 Gb" },
      { title: "Marking (IEC Ex)", description: "Ex ia 2 B T3 Gb" },
      {
        title: "Certificates",
        description: "ATEX: DEKRA 14ATEX0135 / IECEx: DEX 14.0085",
      },
      {
        title: "Standards (ATEX)",
        description: "EN IEC60079-0:2018, EN60079-11:2012",
      },
      {
        title: "Standards (IEC Ex)",
        description: "IEC60079-0:2017, IEC60079-11:2011",
      },
      {
        title: "Standards (EMC)",
        description:
          "IEC60079-0:201EN50270:2015, EN55032:2015+A11:2020+A1:2020, EN55035:2017+A11:20207, IEC60079-11:2011",
      },
      { title: "Standards (RoHS)", description: "EN IEC63000:2018" },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Select Compatible Adaptor",
        details: [
          "Identify which interface type matches your cylinder or regulator.",
          "Choose the corresponding adaptor model (e.g., CG1-11 for ISO12209 fittings at 232 bar).",
        ],
      },
      {
        step: "02",
        title: "Connect Securely",
        details: [
          "Attach the adaptor to the calibration gas source and tighten gently using appropriate tools to ensure a gas-tight connection.",
          "Check for leaks (using soapy solution or leak detector).",
        ],
      },
      {
        step: "03",
        title: "Verify & Use",
        details: ["Proceed with the calibration process once safely secured."],
      },
    ],

    cta: {
      title: "Need Quick Gas Analysis?",
      rightDescription:
        "Reach out now to request a quote, explore bulk pricing, or arrange a product demo.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },

    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_1.jpg",
        name: "GASTEC Calibration Kit",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_2.jpg",
        name: "GASTEC Flow Regulator",
        description: "Fit testing unit for respiratory equipment.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_5.jpg",
        name: "High-Precision Flow Regulator",
        description: "Fit testing unit for respiratory equipment.",
      },
    ],
  },

  ///////////////////////////////////////////////////

  // Digital Monitors and Testers

  // GHS-8AT EX Monitor
  {
    name: "GHS-8AT EX Monitor",
    category: "Gas Detection Monitors",
    subName: "GHS_8AT_EX_1",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_2.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_3.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
    ],
    description:
      "The GHS-8AT EX Monitor is a portable hazardous gas detection device designed for high precision and reliability in industrial and field environments. It ensures worker safety and compliance by detecting a wide range of gases with quick response times.",
    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    features: [
      {
        title: "Compact & Lightweight",
        description: "Easy to carry for field inspections.",
      },
      {
        title: "Multi-Gas Detection",
        description: "Monitors a variety of hazardous gases.",
      },
      {
        title: "Digital Display",
        description: "Clear, real-time concentration readings.",
      },
      {
        title: "Fast Response Time",
        description: "Ensures immediate safety alerts.",
      },
      {
        title: "Durable Design",
        description: "Built for rugged industrial use.",
      },
      {
        title: "User-Friendly Operation",
        description: "Simple interface for quick sampling.",
      },
    ],

    specifications: [
      { title: "Target Gas", description: "Hydrogen Sulphide (H₂S)" },
      {
        title: "Measurement Principle",
        description: "Controlled-potential electrolysis sensors",
      },
      { title: "Sampling Method", description: "Diffusion" },
      { title: "Indicating Accuracy", description: "F.S ±5%" },
      {
        title: "Measurement Range",
        description:
          "0 – 10.0 ppm / 0 – 100 ppm / 0 – 500 ppm / 0 – 1000 ppm / 0 – 3000 ppm",
      },
      {
        title: "Minimum Resolution",
        description: "0.1 ppm / 1 ppm / 1 ppm / 10 ppm / 25 ppm",
      },
      {
        title: "Sensor",
        description: "H2S-520E, H2S-521E, H2S-522E, H2S-523E, H2S-524E",
      },
      { title: "Temperature Measurement Range", description: "0 – 40 °C" },
      {
        title: "Display",
        description:
          "LCD (Concentration, temperature, time, recording days remaining, battery capacity)",
      },
      {
        title: "Operating Temperature / Humidity",
        description: "0 – 40 °C, 30 – 95 %RH (No condensation allowed)",
      },
      {
        title: "Power Source",
        description:
          "Two AA alkaline batteries (LR6 Panasonic / MN1500 Duracell)",
      },
      {
        title: "Battery Life",
        description: "3 months (*with normal operation)",
      },
      {
        title: "Backup Battery Life",
        description:
          "Lithium battery (5 years)* – Maintains data when alkaline not connected",
      },
      {
        title: "Data Logging Capacity",
        description: "45,960 sets (≈31 days at 1-min intervals)",
      },
      {
        title: "Sampling Intervals",
        description: "1min, 5min, 10min, 15min, 30min, 60min",
      },
      { title: "Communication Interface", description: "USB 2.0" },
      { title: "Dimensions", description: "Ø89 × 148 mm" },
      { title: "Weight", description: "390 g" },
      {
        title: "EU Directives",
        description:
          "2014/34/EU (ATEX), 2014/30/EU (EMC), 2011/65/EU (RoHS), (EU)2015/863 (RoHS), (EU)2023/1542 (Battery)",
      },
      { title: "Marking (ATEX)", description: "II 2G Ex ia II B T3 Gb" },
      { title: "Marking (IEC Ex)", description: "Ex ia 2 B T3 Gb" },
      {
        title: "Certificates",
        description: "ATEX: DEKRA 14ATEX0135 / IECEx: DEX 14.0085",
      },
      {
        title: "Standards (ATEX)",
        description: "EN IEC60079-0:2018, EN60079-11:2012",
      },
      {
        title: "Standards (IEC Ex)",
        description: "IEC60079-0:2017, IEC60079-11:2011",
      },
      {
        title: "Standards (EMC)",
        description:
          "IEC60079-0:201EN50270:2015, EN55032:2015+A11:2020+A1:2020, EN55035:2017+A11:20207, IEC60079-11:2011",
      },
      { title: "Standards (RoHS)", description: "EN IEC63000:2018" },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Preparation",
        details: [
          "Charge the device fully.",
          "Attach sampling probe/tube securely.",
          "Check sensor cover is clean.",
          "Run a quick self-check on startup.",
        ],
      },
      {
        step: "02",
        title: "Power On",
        details: [
          "Hold Power Button until startup sound.",
          "Wait for initialization sequence.",
          "Display shows battery, calibration, and sensor status.",
        ],
      },
      {
        step: "03",
        title: "Calibration Check",
        details: [
          "Ensure calibration is up-to-date.",
          "If needed, connect calibration gas.",
          "Follow on-screen calibration procedure.",
        ],
      },
      {
        step: "04",
        title: "Operation",
        details: [
          "Insert probe into environment.",
          "Monitor real-time readings on display.",
          "Alarm (sound, light, vibration) triggers if limits exceeded.",
        ],
      },
      {
        step: "05",
        title: "Data Logging (Optional)",
        details: [
          "Enable logging from menu.",
          "Save results for PC review or storage card.",
        ],
      },
      {
        step: "06",
        title: "After Use",
        details: [
          "Power off with Power Button.",
          "Wipe device and probe clean.",
          "Store in protective case in safe conditions.",
        ],
      },
    ],
    software: [
      {
        label: "ANASYS Software Download",
        link: "https://gastec-software.com/anasys",
      },
      {
        label: "ANASYS Software Download",
        link: "https://gastec-software.com/anasys",
      },
    ],
    packageContent: [
      "1 × GHS-8AT EX Monitor",
      "1 × Sampling Tube",
      "1 × Rechargeable Battery & Charger",
      "1 × Carrying Case",
      "1 × User Manual",
    ],
    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
        name: "GHS-8AT EX Starter Kit",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_3.jpg",
        name: "GHS-501FT Fit Tester",
        description: "Fit testing unit for respiratory equipment.",
      },
    ],
  },

  {
    name: "GHS-8AT EX with Accessories",
    category: "Gas Detection Monitors",
    subName: "GHS-501FT",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_2.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_3.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
    ],
    description:
      "The GHS-501FT Fit Tester is a precision tool for verifying the seal and integrity of respiratory protection gear—including gas masks and respirators. Built for industrial safety, it delivers reliable, quantitative results during compliance audits or regular inspections.",

    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Instruction Manuals" },
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    features: [
      {
        title: "Quantitative Fit Checking",
        description:
          "Provides objective, numeric fit results for better accuracy.",
      },
      {
        title: "Multi-Mask Compatibility",
        description:
          "Works with full-face, half-face, and disposable respirators.",
      },
      {
        title: "Portable & Lightweight",
        description: "Compact design allows for use in the field.",
      },
      {
        title: "Intuitive Interface",
        description: "Easy to operate with minimal training.",
      },
      {
        title: "Data Recording",
        description: "Stores fit test results for compliance reporting.",
      },
      {
        title: "Rechargeable Power",
        description: "Comes with a long-lasting rechargeable battery.",
      },
    ],
    specifications: [
      {
        title: "Sampling mode",
        description:
          "Timer Mode: 1 min–30 hrs (auto-stop); Volume Mode: 0.010–900 L (auto-stop)",
      },
      {
        title: "Settable instantaneous flow rate",
        description:
          "Timer Mode: 50–500 mL/min; Volume Mode: 10–500 mL/min (10–49 mL/min intermittent at 50 mL/min)",
      },
      {
        title: "Constant flow rate operating range",
        description:
          "10–49 mL/min: 0–0.5 kPa; 50 mL/min: 0–40.0 kPa; 100 mL/min: 0–37.0 kPa; 200 mL/min: 0–30.0 kPa; 300 mL/min: 0–23.0 kPa; 400 mL/min: 0–20.0 kPa; 500 mL/min: 0–10.0 kPa",
      },
      {
        title: "Display",
        description: "LCD digital (with backlight), 0–600 mL/min",
      },
      {
        title: "Structure and function",
        description:
          "Constant flow rate function, autostart function, diaphragm type air pump, program mode (5 sampling settings)",
      },
      {
        title: "Accuracy of instantaneous flow",
        description: "50–500 mL/min ±5%",
      },
      {
        title: "Accuracy of integrated flow",
        description:
          "50–500 mL/min: ±5% (Volume Mode only); 10–49 mL/min: ±(2.5 × sampling time [min]) mL",
      },
      {
        title: "Operating temperature range",
        description: "0–40°C",
      },
      {
        title: "Operating humidity range",
        description: "10–90% RH (non-condensing)",
      },
      {
        title: "Power supply",
        description:
          "2 × AA alkaline batteries (standard) or 2 × AA NiMH batteries",
      },
      {
        title: "Continuous operation time",
        description: "20 hours (200 mL/min, 2 kPa, 25°C)",
      },
      {
        title: "Dimensions & weight",
        description: "80(W) × 40(D) × 126(H) mm, 280 g (including batteries)",
      },
      {
        title: "Standard accessories",
        description:
          "2 AA alkaline batteries, detector tube adaptor, tube tip holder, dust filter (5 pcs), instruction manual, warranty & inspection certificate",
      },
      {
        title: "Directives & regulations",
        description:
          "2014/30/EU (EMC), 2011/65/EU, (EU)2015/863 (RoHS), (EU)2023/1542 (BATTERY)",
      },
      {
        title: "EMC harmonised standards",
        description: "EN 61326-1:2013",
      },
      {
        title: "RoHS designated standards",
        description: "EN IEC63000:2018",
      },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Prepare the Tube",
        details: [
          "Break off both tips of the detector tube the tip holder.",
          "Insert the tube into the rubber tube holder inlet.",
        ],
      },
      {
        step: "02",
        title: "Setup & Start Sampling",
        details: [
          "Switch Power ON.",
          "Adjust the flow rate and confirm the timer on the pump.",
          "Press the Start Button to begin sampling.",
        ],
      },

      {
        step: "03",
        title: "Read Results",
        details: [
          "After sampling, remove the tube.",
          "Read the concentration directly from the detector tube.",
        ],
      },
    ],
    packageContent: [
      "GHS-501FT Fit Tester",
      "Portable Carrying Case",
      "Sampling Tube Kit",
      "Battery & Charger",
      "Calibration Certificate",
      "User Manual",
    ],
    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
        name: "GHS-8AT EX Starter Kit",
        slug: "ghs-8at-ex-starter-kit",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_3.jpg",
        name: "GHS-501FT Fit Tester",
        slug: "ghs-501ft-fit-tester",
        description: "Fit testing unit for respiratory equipment.",
      },
    ],

    columns: [
      { key: "productName", header: "Product Name" },
      { key: "productCode", header: "Product Code" },
      { key: "layer", header: "Layer" },
      { key: "fillingQuantity", header: "Filling quantity" },
      { key: "dimensions", header: "Dimensions (mm)" },
      { key: "tubesPerBox", header: "Tubes/box" },
      { key: "shelfLife", header: "Shelf life (months)" },
    ],

    data: [
      {
        productName: "Activated charcoal tube",
        productCode: "2515-20",
        layer: "2",
        fillingQuantity: "100/50",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Activated charcoal tube",
        productCode: "251S2-20",
        layer: "1",
        fillingQuantity: "150",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Activated charcoal tube (Bead-shaped)",
        productCode: "258-20",
        layer: "2",
        fillingQuantity: "100/50",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Activated charcoal tube (Bead-shaped)",
        productCode: "258A-20",
        layer: "2",
        fillingQuantity: "400/200",
        dimensions: "7.0 × 105",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Activated charcoal tube (Bead-shaped)",
        productCode: "258S2-20",
        layer: "2",
        fillingQuantity: "150",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Silica-gel tube",
        productCode: "252S-20",
        layer: "2",
        fillingQuantity: "400/200",
        dimensions: "7.0 × 105",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Silica-gel tube",
        productCode: "252S2-20",
        layer: "1",
        fillingQuantity: "600",
        dimensions: "7.0 × 105",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Silica-gel tube",
        productCode: "252S3-20",
        layer: "2",
        fillingQuantity: "150/75",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Silica-gel tube",
        productCode: "252S4-20",
        layer: "1",
        fillingQuantity: "300",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
    ],
  },

  // GHS-8AT EX Starter Kit
  {
    name: "GHS-8AT EX Starter Kit",
    category: "Gas Detection Monitors",
    subName: "GHS-8AT EX",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_2.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_3.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
    ],
    description:
      "The GHS-8AT EX Starter Kit provides a complete solution for gas detection and safety compliance. Designed for industrial and field applications, the kit includes the GHS-8AT EX Monitor along with essential accessories for quick setup, reliable monitoring, and long-term usability.",
    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    features: [
      {
        title: "Complete Package",
        description:
          "Includes monitor, sampling tube, rechargeable battery, and charger.",
      },
      {
        title: "Enhanced Portability",
        description: "Convenient carrying case for field use.",
      },
      {
        title: "Fast Setup",
        description: "Pre-configured components for immediate deployment.",
      },
      {
        title: "Reliable Detection",
        description: "Accurate monitoring of hazardous gases.",
      },
      {
        title: "Durable Accessories",
        description: "Built for rugged industrial applications.",
      },
      {
        title: "User-Friendly",
        description: "Easy to assemble and operate in the field.",
      },
    ],
    cta: {
      title: "Need a Complete Gas Detection Solution?",
      rightDescription:
        "Our starter kit has everything you need to get started quickly. Contact us for bulk orders, technical support, or custom requirements.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    specifications: [
      {
        title: "Target Gas",
        description: "Hydrogen Sulphide (H₂S)",
      },
      {
        title: "Included Device",
        description: "1 × GHS-8AT EX Monitor",
      },
      {
        title: "Accessories",
        description:
          "Sampling tube, rechargeable battery & charger, carrying case, user manual",
      },
      {
        title: "Power Source",
        description: "Lithium-ion rechargeable battery",
      },
      {
        title: "Battery Life",
        description: "Approx. 3 months (with normal operation)",
      },
      {
        title: "Backup Battery",
        description:
          "Lithium battery (5 years) – Maintains data when primary is disconnected",
      },
      {
        title: "Communication Interface",
        description: "USB 2.0",
      },
      {
        title: "Weight (Kit)",
        description: "~1.2 kg (including case and accessories)",
      },
      {
        title: "Dimensions (Carrying Case)",
        description: "Compact design for portability",
      },
    ],

    software: [
      {
        label: "ANASYS Software Download",
        link: "https://gastec-software.com/anasys",
      },
      {
        label: "ANASYS Software Download",
        link: "https://gastec-software.com/anasys",
      },
    ],
    packageContent: [
      "1 × GHS-8AT EX Monitor",
      "1 × Sampling Tube",
      "1 × Rechargeable Battery & Charger",
      "1 × Carrying Case",
      "1 × User Manual",
    ],
    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
        name: "GHS-8AT EX Starter Kit",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_3.jpg",
        name: "GHS-501FT Fit Tester",
        description: "Fit testing unit for respiratory equipment.",
      },
    ],
  },

  // GHS-501FT Fit Tester
  {
    name: "GHS-501FT Fit Tester",
    category: "Gas Detection Monitors",
    subName: "GHS-501FT",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_3.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_2.jpg",
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_1.jpg",
    ],
    description:
      "The GHS-501FT Fit Tester is a precision tool for verifying the seal and integrity of respiratory protection gear—including gas masks and respirators. Built for industrial safety, it delivers reliable, quantitative results during compliance audits or regular inspections.",

    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Instruction Manuals" },
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    features: [
      {
        title: "Quantitative Fit Checking",
        description:
          "Provides objective, numeric fit results for better accuracy.",
      },
      {
        title: "Multi-Mask Compatibility",
        description:
          "Works with full-face, half-face, and disposable respirators.",
      },
      {
        title: "Portable & Lightweight",
        description: "Compact design allows for use in the field.",
      },
      {
        title: "Intuitive Interface",
        description: "Easy to operate with minimal training.",
      },
      {
        title: "Data Recording",
        description: "Stores fit test results for compliance reporting.",
      },
      {
        title: "Rechargeable Power",
        description: "Comes with a long-lasting rechargeable battery.",
      },
    ],
    specifications: [
      {
        title: "Sampling mode",
        description:
          "Timer Mode: 1 min–30 hrs (auto-stop); Volume Mode: 0.010–900 L (auto-stop)",
      },
      {
        title: "Settable instantaneous flow rate",
        description:
          "Timer Mode: 50–500 mL/min; Volume Mode: 10–500 mL/min (10–49 mL/min intermittent at 50 mL/min)",
      },
      {
        title: "Constant flow rate operating range",
        description:
          "10–49 mL/min: 0–0.5 kPa; 50 mL/min: 0–40.0 kPa; 100 mL/min: 0–37.0 kPa; 200 mL/min: 0–30.0 kPa; 300 mL/min: 0–23.0 kPa; 400 mL/min: 0–20.0 kPa; 500 mL/min: 0–10.0 kPa",
      },
      {
        title: "Display",
        description: "LCD digital (with backlight), 0–600 mL/min",
      },
      {
        title: "Structure and function",
        description:
          "Constant flow rate function, autostart function, diaphragm type air pump, program mode (5 sampling settings)",
      },
      {
        title: "Accuracy of instantaneous flow",
        description: "50–500 mL/min ±5%",
      },
      {
        title: "Accuracy of integrated flow",
        description:
          "50–500 mL/min: ±5% (Volume Mode only); 10–49 mL/min: ±(2.5 × sampling time [min]) mL",
      },
      {
        title: "Operating temperature range",
        description: "0–40°C",
      },
      {
        title: "Operating humidity range",
        description: "10–90% RH (non-condensing)",
      },
      {
        title: "Power supply",
        description:
          "2 × AA alkaline batteries (standard) or 2 × AA NiMH batteries",
      },
      {
        title: "Continuous operation time",
        description: "20 hours (200 mL/min, 2 kPa, 25°C)",
      },
      {
        title: "Dimensions & weight",
        description: "80(W) × 40(D) × 126(H) mm, 280 g (including batteries)",
      },
      {
        title: "Standard accessories",
        description:
          "2 AA alkaline batteries, detector tube adaptor, tube tip holder, dust filter (5 pcs), instruction manual, warranty & inspection certificate",
      },
      {
        title: "Directives & regulations",
        description:
          "2014/30/EU (EMC), 2011/65/EU, (EU)2015/863 (RoHS), (EU)2023/1542 (BATTERY)",
      },
      {
        title: "EMC harmonised standards",
        description: "EN 61326-1:2013",
      },
      {
        title: "RoHS designated standards",
        description: "EN IEC63000:2018",
      },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Prepare the Tube",
        details: [
          "Break off both tips of the detector tube the tip holder.",
          "Insert the tube into the rubber tube holder inlet.",
        ],
      },
      {
        step: "02",
        title: "Setup & Start Sampling",
        details: [
          "Switch Power ON.",
          "Adjust the flow rate and confirm the timer on the pump.",
          "Press the Start Button to begin sampling.",
        ],
      },

      {
        step: "03",
        title: "Read Results",
        details: [
          "After sampling, remove the tube.",
          "Read the concentration directly from the detector tube.",
        ],
      },
    ],
    packageContent: [
      "GHS-501FT Fit Tester",
      "Portable Carrying Case",
      "Sampling Tube Kit",
      "Battery & Charger",
      "Calibration Certificate",
      "User Manual",
    ],
    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
        name: "GHS-8AT EX Starter Kit",
        slug: "ghs-8at-ex-starter-kit",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_3.jpg",
        name: "GHS-501FT Fit Tester",
        slug: "ghs-501ft-fit-tester",
        description: "Fit testing unit for respiratory equipment.",
      },
    ],

    columns: [
      { key: "productName", header: "Product Name" },
      { key: "productCode", header: "Product Code" },
      { key: "layer", header: "Layer" },
      { key: "fillingQuantity", header: "Filling quantity" },
      { key: "dimensions", header: "Dimensions (mm)" },
      { key: "tubesPerBox", header: "Tubes/box" },
      { key: "shelfLife", header: "Shelf life (months)" },
    ],

    data: [
      {
        productName: "Activated charcoal tube",
        productCode: "2515-20",
        layer: "2",
        fillingQuantity: "100/50",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Activated charcoal tube",
        productCode: "251S2-20",
        layer: "1",
        fillingQuantity: "150",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Activated charcoal tube (Bead-shaped)",
        productCode: "258-20",
        layer: "2",
        fillingQuantity: "100/50",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Activated charcoal tube (Bead-shaped)",
        productCode: "258A-20",
        layer: "2",
        fillingQuantity: "400/200",
        dimensions: "7.0 × 105",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Activated charcoal tube (Bead-shaped)",
        productCode: "258S2-20",
        layer: "2",
        fillingQuantity: "150",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Silica-gel tube",
        productCode: "252S-20",
        layer: "2",
        fillingQuantity: "400/200",
        dimensions: "7.0 × 105",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Silica-gel tube",
        productCode: "252S2-20",
        layer: "1",
        fillingQuantity: "600",
        dimensions: "7.0 × 105",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Silica-gel tube",
        productCode: "252S3-20",
        layer: "2",
        fillingQuantity: "150/75",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
      {
        productName: "Silica-gel tube",
        productCode: "252S4-20",
        layer: "1",
        fillingQuantity: "300",
        dimensions: "5.6 × 100",
        tubesPerBox: "20",
        shelfLife: "60",
      },
    ],
  },

  ////////////////////////////////////////////////////

  // Gas Sampling Pumps

  // GV-100S Hand Pump
  {
    name: "GV-100S Hand Pump",
    category: "Gas Detection Monitors",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GV_100S.jpg",
    ],
    description:
      "The GV-100S Hand Pump is a manual gas sampling device specifically designed to be used with GASTEC detector tubes. Built with durability and ease of use in mind, the GV-100S ensures that air samples are drawn consistently for accurate detection and measurement of gases and vapors. Its compact design makes it ideal for on-site testing, industrial hygiene surveys, and confined space monitoring.",

    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    featureCard2: [
      "Precision-engineered for reliable gas sampling",
      "Rugged, portable, and lightweight construction",
      "Automatic stroke counter for consistent volume measurement",
      "Ergonomic design for ease of handling in field use",
      "Designed for compatibility with all GASTEC detector tubes",
    ],
    specifications: [
      {
        title: "Sampling mode",
        description:
          "Timer Mode: 1 min–30 hrs (auto-stop); Volume Mode: 0.010–900 L (auto-stop)",
      },
      {
        title: "Settable instantaneous flow rate",
        description:
          "Timer Mode: 50–500 mL/min; Volume Mode: 10–500 mL/min (10–49 mL/min intermittent at 50 mL/min)",
      },
      {
        title: "Constant flow rate operating range",
        description:
          "10–49 mL/min: 0–0.5 kPa; 50 mL/min: 0–40.0 kPa; 100 mL/min: 0–37.0 kPa; 200 mL/min: 0–30.0 kPa; 300 mL/min: 0–23.0 kPa; 400 mL/min: 0–20.0 kPa; 500 mL/min: 0–10.0 kPa",
      },
      {
        title: "Display",
        description: "LCD digital (with backlight), 0–600 mL/min",
      },
      {
        title: "Structure and function",
        description:
          "Constant flow rate function, autostart function, diaphragm type air pump, program mode (5 sampling settings)",
      },
      {
        title: "Accuracy of instantaneous flow",
        description: "50–500 mL/min ±5%",
      },
      {
        title: "Accuracy of integrated flow",
        description:
          "50–500 mL/min: ±5% (Volume Mode only); 10–49 mL/min: ±(2.5 × sampling time [min]) mL",
      },
      {
        title: "Operating temperature range",
        description: "0–40°C",
      },
      {
        title: "Operating humidity range",
        description: "10–90% RH (non-condensing)",
      },
      {
        title: "Power supply",
        description:
          "2 × AA alkaline batteries (standard) or 2 × AA NiMH batteries",
      },
      {
        title: "Continuous operation time",
        description: "20 hours (200 mL/min, 2 kPa, 25°C)",
      },
      {
        title: "Dimensions & weight",
        description: "80(W) × 40(D) × 126(H) mm, 280 g (including batteries)",
      },
      {
        title: "Standard accessories",
        description:
          "2 AA alkaline batteries, detector tube adaptor, tube tip holder, dust filter (5 pcs), instruction manual, warranty & inspection certificate",
      },
      {
        title: "Directives & regulations",
        description:
          "2014/30/EU (EMC), 2011/65/EU, (EU)2015/863 (RoHS), (EU)2023/1542 (BATTERY)",
      },
      {
        title: "EMC harmonised standards",
        description: "EN 61326-1:2013",
      },
      {
        title: "RoHS designated standards",
        description: "EN IEC63000:2018",
      },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Prepare Pump",
        details: [
          "Insert the detector tube into the pump inlet.",
          "Break off both tube tips before insertion.",
        ],
      },
      {
        step: "02",
        title: "Take Sample",
        details: [
          "Pull the handle back fully to draw one stroke (100 mL).",
          "Use multiple strokes if required, depending on test conditions.",
        ],
      },
      {
        step: "03",
        title: "Read Results",
        details: [
          "After the required sampling strokes, remove the tube.",
          "Compare color change with scale markings to determine concentration.",
        ],
      },
    ],

    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GV_110S.jpg",
        name: "GV-110S Hand Pump",
        description: "Compact gas sampling pump with carrying case.",
      },
    ],
  },

  // GV-110S Hand Pump
  {
    name: "GV-110S Hand Pump",
    category: "Gas Detection Monitors",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/GV_110S.jpg",
    ],
    description:
      "The GV-110S Hand Pump is an upgraded version of the GV-100S, offering dual sampling volumes for greater flexibility in gas detection applications. With its high-precision design, the pump ensures consistent sample collection while providing a built-in stroke counter for accuracy. Compact, durable, and easy to operate, the GV-110S is ideal for industrial hygiene surveys, workplace safety monitoring, and environmental testing.",

    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    featureCard2: [
      "Full compatibility with all GASTEC detector tubes",
      "Dual sampling volumes: 100 mL or 50 mL per stroke",
      "Ergonomic handle design for ease of use",
      "Automatic stroke counter for precision measurements",
      "Rugged and portable construction for field applications",
    ],
    specifications: [
      {
        title: "Sampling mode",
        description:
          "Timer Mode: 1 min–30 hrs (auto-stop); Volume Mode: 0.010–900 L (auto-stop)",
      },
      {
        title: "Settable instantaneous flow rate",
        description:
          "Timer Mode: 50–500 mL/min; Volume Mode: 10–500 mL/min (10–49 mL/min intermittent at 50 mL/min)",
      },
      {
        title: "Constant flow rate operating range",
        description:
          "10–49 mL/min: 0–0.5 kPa; 50 mL/min: 0–40.0 kPa; 100 mL/min: 0–37.0 kPa; 200 mL/min: 0–30.0 kPa; 300 mL/min: 0–23.0 kPa; 400 mL/min: 0–20.0 kPa; 500 mL/min: 0–10.0 kPa",
      },
      {
        title: "Display",
        description: "LCD digital (with backlight), 0–600 mL/min",
      },
      {
        title: "Structure and function",
        description:
          "Constant flow rate function, autostart function, diaphragm type air pump, program mode (5 sampling settings)",
      },
      {
        title: "Accuracy of instantaneous flow",
        description: "50–500 mL/min ±5%",
      },
      {
        title: "Accuracy of integrated flow",
        description:
          "50–500 mL/min: ±5% (Volume Mode only); 10–49 mL/min: ±(2.5 × sampling time [min]) mL",
      },
      {
        title: "Operating temperature range",
        description: "0–40°C",
      },
      {
        title: "Operating humidity range",
        description: "10–90% RH (non-condensing)",
      },
      {
        title: "Power supply",
        description:
          "2 × AA alkaline batteries (standard) or 2 × AA NiMH batteries",
      },
      {
        title: "Continuous operation time",
        description: "20 hours (200 mL/min, 2 kPa, 25°C)",
      },
      {
        title: "Dimensions & weight",
        description: "80(W) × 40(D) × 126(H) mm, 280 g (including batteries)",
      },
      {
        title: "Standard accessories",
        description:
          "2 AA alkaline batteries, detector tube adaptor, tube tip holder, dust filter (5 pcs), instruction manual, warranty & inspection certificate",
      },
      {
        title: "Directives & regulations",
        description:
          "2014/30/EU (EMC), 2011/65/EU, (EU)2015/863 (RoHS), (EU)2023/1542 (BATTERY)",
      },
      {
        title: "EMC harmonised standards",
        description: "EN 61326-1:2013",
      },
      {
        title: "RoHS designated standards",
        description: "EN IEC63000:2018",
      },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Prepare Pump",
        details: [
          "Break both tips of the detector tube.",
          "Insert the tube into the pump inlet.",
        ],
      },
      {
        step: "02",
        title: "Select Volume & Sample",
        details: [
          "Choose either 100 mL or 50 mL stroke setting.",
          "Pull back the handle fully to complete one sampling stroke.",
        ],
      },
      {
        step: "03",
        title: "Read Results",
        details: [
          "After required strokes, remove the tube.",
          "Compare the color change on the tube with the printed scale to determine gas concentration.",
        ],
      },
    ],

    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GV_100S.jpg",
        name: "GV-100S Hand Pump",
        description: "Compact gas sampling pump with carrying case.",
      },
    ],
  },

  /////////////////////////////////////////////////////
  
  // TG-1EN Gas Sampling Kit
  {
    name: "TG-1EN Gas Sampling Kit",
    category: "Gas Detection Monitors",
    images: [
      "/images/Gastec3/gas-detection-specialized-sampling-kits/TG_1_EN.jpg",
    ],
    description:
      "The TG-1EN Kit offers fast, accurate identification of toxic gases—without the need for electricity or specialized training. Its compact design makes it ideal for emergencies and field operations where time and mobility are critical. Key advantages include ease of use, low operational cost, and no maintenance required.",

    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    featureCard2: [
      "No electricity or calibration needed",
      "Simple, intuitive manual operation",
      "Rapid results—typically within 1 to 4 minutes",
      "Compact and portable—perfect for emergency field use",
      "Transparent cost structure with virtually zero running costs",
    ],
    specifications: [
      {
        title: "Sampling mode",
        description:
          "Timer Mode: 1 min–30 hrs (auto-stop); Volume Mode: 0.010–900 L (auto-stop)",
      },
      {
        title: "Settable instantaneous flow rate",
        description:
          "Timer Mode: 50–500 mL/min; Volume Mode: 10–500 mL/min (10–49 mL/min intermittent at 50 mL/min)",
      },
      {
        title: "Constant flow rate operating range",
        description:
          "10–49 mL/min: 0–0.5 kPa; 50 mL/min: 0–40.0 kPa; 100 mL/min: 0–37.0 kPa; 200 mL/min: 0–30.0 kPa; 300 mL/min: 0–23.0 kPa; 400 mL/min: 0–20.0 kPa; 500 mL/min: 0–10.0 kPa",
      },
      {
        title: "Display",
        description: "LCD digital (with backlight), 0–600 mL/min",
      },
      {
        title: "Structure and function",
        description:
          "Constant flow rate function, autostart function, diaphragm type air pump, program mode (5 sampling settings)",
      },
      {
        title: "Accuracy of instantaneous flow",
        description: "50–500 mL/min ±5%",
      },
      {
        title: "Accuracy of integrated flow",
        description:
          "50–500 mL/min: ±5% (Volume Mode only); 10–49 mL/min: ±(2.5 × sampling time [min]) mL",
      },
      {
        title: "Operating temperature range",
        description: "0–40°C",
      },
      {
        title: "Operating humidity range",
        description: "10–90% RH (non-condensing)",
      },
      {
        title: "Power supply",
        description:
          "2 × AA alkaline batteries (standard) or 2 × AA NiMH batteries",
      },
      {
        title: "Continuous operation time",
        description: "20 hours (200 mL/min, 2 kPa, 25°C)",
      },
      {
        title: "Dimensions & weight",
        description: "80(W) × 40(D) × 126(H) mm, 280 g (including batteries)",
      },
      {
        title: "Standard accessories",
        description:
          "2 AA alkaline batteries, detector tube adaptor, tube tip holder, dust filter (5 pcs), instruction manual, warranty & inspection certificate",
      },
      {
        title: "Directives & regulations",
        description:
          "2014/30/EU (EMC), 2011/65/EU, (EU)2015/863 (RoHS), (EU)2023/1542 (BATTERY)",
      },
      {
        title: "EMC harmonised standards",
        description: "EN 61326-1:2013",
      },
      {
        title: "RoHS designated standards",
        description: "EN IEC63000:2018",
      },
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Setup",
        details: [
          "Open kit and choose the appropriate detector tube.",
          "Attach the tube securely to the sampling pump or adapter.",
        ],
      },
      {
        step: "02",
        title: "Select Volume & Sample",
        details: [
          "Break off both ends of the tube using the built-in tip cutte",
          "Draw air through the tube manually—color change indicates gas reaction. Wait 1–4 minutes per test",
        ],
      },
      {
        step: "03",
        title: "Read Results",
        details: [
          "Observe where the color change stops on the tube scale",
          "Interpret the concentration using the printed scale.",
          "Record results and safely close the kit.",
        ],
      },
    ],

    cta: {
      title: "Need Quick Gas Analysis?",
      rightDescription:
        "Reach out now to request a quote, explore bulk pricing, or arrange a product demo.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
        name: "GHS-8AT EX Monitor",
        description: "Portable monitor for hazardous gas detection.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
        name: "GHS-8AT EX Starter Kit",
        description: "Maintains consistent pressure for reliable results.",
      },
    ],
  },
];
