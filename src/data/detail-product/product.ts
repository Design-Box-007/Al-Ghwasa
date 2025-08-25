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
      { catalogUrl: "https://www.gastec.co.jp/files/topics/3953_ext_14_en_0.pdf", catalogName: "Download Catalog" },
    ],
    featureCard2: [
      "No power source required",
      "Compact, durable carrying case",
      "Easy to connect to compressor or cylinder",
      "Quick, accurate results on-site",
      "Detects four contaminants simultaneously: CO, CO₂, water vapor, and oil mist",
    ],

    columns: ["Category", "Details"],
    specifications: [
      ["Measured Substances", "CO, CO₂, Water Vapor, Oil Mist"],
      ["Operation Method", "Manual sampling—no power source required"],
      [
        "Kit Components",
        "Measuring device, rubber shroud, GASTEC tubes (1A, 2A, 6A, 109AD), stopwatch, tube tip holder, carrying case, deep socket",
      ],
      [
        "Contaminant Ranges (ppm or mg/m³)",
        "Carbon Dioxide: 250–3000 ppm (2A)",
      ],
      ["Carbon Monoxide", "5–50 ppm (1A)"],
      ["Water Vapor", "10–80 mg/m³ (6A)"],
      ["Oil Mist", "0.1–5.0 mg/m³ (109AD)"],
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
        name: "Pressure Regulator",
        description: "for adjusting calibration gas pressure",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_6.jpg",
        name: "Adaptor / Connector",
        description: "for precise flow and device compatibility",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_5.jpg",
        name: "High-Precision Flow Regulator",
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

    columns: ["Model", "Flow Type", "Flow Range", "Cylinder Compatibility"],

    specifications: [
      ["GV-100", "Fixed Flow", "0.5 L/min", "Calibration cylinders"],
      ["GV-110", "Fixed Flow", "1.0 L/min", "Calibration cylinders"],
      ["GV-200", "Variable Flow", "0.1 – 1.0 L/min", "Calibration cylinders"],
      ["GV-210", "Variable Flow", "0.2 – 2.5 L/min", "Calibration cylinders"],
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
        name: "Adaptor / Connector",
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

    columns: ["Model", "Flow Type", "Flow Range", "Cylinder Compatibility"],

    specifications: [
      ["CG1-21", "Fixed Flow", "0.5 L/min", "Calibration cylinders"],
      ["CG1-22", "Fixed Flow", "1.0 L/min", "Calibration cylinders"],
      ["CG1-23", "Variable Flow", "0.1 – 1.0 L/min", "Calibration cylinders"],
      ["CG1-24", "Variable Flow", "0.2 – 2.5 L/min", "Calibration cylinders"],
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
        name: "Adaptor / Connector",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/CG_1_5.jpg",
        name: "High-Precision Flow Regulator",
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
      ["Compact & Lightweight", "Easy to carry for field inspections."],
      ["Multi-Gas Detection", "Monitors a variety of hazardous gases."],
      ["Digital Display", "Clear, real-time concentration readings."],
      ["Fast Response Time", "Ensures immediate safety alerts."],
      ["Durable Design", "Built for rugged industrial use."],
      ["User-Friendly Operation", "Simple interface for quick sampling."],
    ],

    // specifications: [
    //   { title: "Target Gas", description: "Hydrogen Sulphide (H₂S)" },
    //   {
    //     title: "Measurement Principle",
    //     description: "Controlled-potential electrolysis sensors",
    //   },
    //   { title: "Sampling Method", description: "Diffusion" },
    //   { title: "Indicating Accuracy", description: "F.S ±5%" },
    //   {
    //     title: "Measurement Range",
    //     description:
    //       "0 – 10.0 ppm / 0 – 100 ppm / 0 – 500 ppm / 0 – 1000 ppm / 0 – 3000 ppm",
    //   },
    //   {
    //     title: "Minimum Resolution",
    //     description: "0.1 ppm / 1 ppm / 1 ppm / 10 ppm / 25 ppm",
    //   },
    //   {
    //     title: "Sensor",
    //     description: "H2S-520E, H2S-521E, H2S-522E, H2S-523E, H2S-524E",
    //   },
    //   { title: "Temperature Measurement Range", description: "0 – 40 °C" },
    //   {
    //     title: "Display",
    //     description:
    //       "LCD (Concentration, temperature, time, recording days remaining, battery capacity)",
    //   },
    //   {
    //     title: "Operating Temperature / Humidity",
    //     description: "0 – 40 °C, 30 – 95 %RH (No condensation allowed)",
    //   },
    //   {
    //     title: "Power Source",
    //     description:
    //       "Two AA alkaline batteries (LR6 Panasonic / MN1500 Duracell)",
    //   },
    //   {
    //     title: "Battery Life",
    //     description: "3 months (*with normal operation)",
    //   },
    //   {
    //     title: "Backup Battery Life",
    //     description:
    //       "Lithium battery (5 years)* – Maintains data when alkaline not connected",
    //   },
    //   {
    //     title: "Data Logging Capacity",
    //     description: "45,960 sets (≈31 days at 1-min intervals)",
    //   },
    //   {
    //     title: "Sampling Intervals",
    //     description: "1min, 5min, 10min, 15min, 30min, 60min",
    //   },
    //   { title: "Communication Interface", description: "USB 2.0" },
    //   { title: "Dimensions", description: "Ø89 × 148 mm" },
    //   { title: "Weight", description: "390 g" },
    //   {
    //     title: "EU Directives",
    //     description:
    //       "2014/34/EU (ATEX), 2014/30/EU (EMC), 2011/65/EU (RoHS), (EU)2015/863 (RoHS), (EU)2023/1542 (Battery)",
    //   },
    //   { title: "Marking (ATEX)", description: "II 2G Ex ia II B T3 Gb" },
    //   { title: "Marking (IEC Ex)", description: "Ex ia 2 B T3 Gb" },
    //   {
    //     title: "Certificates",
    //     description: "ATEX: DEKRA 14ATEX0135 / IECEx: DEX 14.0085",
    //   },
    //   {
    //     title: "Standards (ATEX)",
    //     description: "EN IEC60079-0:2018, EN60079-11:2012",
    //   },
    //   {
    //     title: "Standards (IEC Ex)",
    //     description: "IEC60079-0:2017, IEC60079-11:2011",
    //   },
    //   {
    //     title: "Standards (EMC)",
    //     description:
    //       "IEC60079-0:201EN50270:2015, EN55032:2015+A11:2020+A1:2020, EN55035:2017+A11:20207, IEC60079-11:2011",
    //   },
    //   { title: "Standards (RoHS)", description: "EN IEC63000:2018" },
    // ],

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

    columns: ["Adaptor Model", "Connector Type", "Pressure Rating"],

    specifications: [
      ["CG1-11", "ISO12209 Female → ISO12209 Female", "232 bar"],
      ["CG1-12", "ISO12209 Female → ISO12209 Female", "300 bar"],
      ["CG1-14", "CGA347 Female → ISO12209 Female", "Standard"],
      ["CG1-15", "CGA347 Male → ISO12209 Female", "Standard"],
      ["CG1-16", "CGA346 Female → ISO12209 Female", "Standard"],
      ["CG1-17", "CGA346 Male → ISO12209 Female", "Standard"],
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
      { catalogUrl: "https://www.gastec.co.jp/files/topics/2148_ext_14_en_0.pdf", catalogName: "Download Catalog" },
    ],

    features: [
      ["Compact & Lightweight", "Easy to carry for field inspections"],
      ["Multi-Gas Detection", "Monitors a variety of hazardous gases."],
      ["Digital Display", "Clear, real-time concentration readings."],
      ["Fast Response Time", "Ensures immediate safety alerts."],
      ["Durable Design", "Built for rugged industrial use."],
      ["User-Friendly Operation", "Simple interface for quick sampling."],
    ],
    columns: ["Category", "Details"],

    specifications: [
      ["Target Gas", "Hydrogen Sulphide (H₂S)"],
      ["Measurement Principle", "Controlled-potential electrolysis sensors"],
      ["Sampling Method", "Diffusion"],
      ["Indicating Accuracy", "F.S ±5%"],
      [
        "Measurement Range",
        "0 – 10.0 ppm / 0 – 100 ppm / 0 – 500 ppm / 0 – 1000 ppm / 0 – 3000 ppm",
      ],
      ["Minimum Resolution", "0.1 ppm / 1 ppm / 1 ppm / 10 ppm / 25 ppm"],
      ["Sensor", "H2S-520E, H2S-521E, H2S-522E, H2S-523E, H2S-524E"],
      ["Temperature Measurement Range", "0 – 40 °C"],
      [
        "Display",
        "LCD (Concentration, temperature, time, recording days remaining, battery capacity)",
      ],
      [
        "Operating Temperature / Humidity",
        "0 – 40 °C, 30 – 95 %RH (No condensation allowed)",
      ],
      [
        "Power Source",
        "Two AA alkaline batteries (LR6 Panasonic / MN1500 Duracell)",
      ],
      ["Battery Life", "3 months (*with normal operation)"],
      [
        "Backup Battery Life",
        "Lithium battery (5 years)* – Maintains data when alkaline not connected",
      ],
      ["Data Logging Capacity", "45,960 sets (≈31 days at 1-min intervals)"],
      ["Sampling Intervals", "1min, 5min, 10min, 15min, 30min, 60min"],
      ["Communication Interface", "USB 2.0"],
      ["Dimensions", "Ø89 × 148 mm"],
      ["Weight", "390 g"],
      [
        "EU Directives",
        "2014/34/EU (ATEX), 2014/30/EU (EMC), 2011/65/EU (RoHS), (EU)2015/863 (RoHS), (EU)2023/1542 (Battery)",
      ],
      ["Marking (ATEX)", "II 2G Ex ia II B T3 Gb"],
      ["Marking (IEC Ex)", "Ex ia 2 B T3 Gb"],
      ["Certificates", "ATEX: DEKRA 14ATEX0135 / IECEx: DEX 14.0085"],
      ["Standards (ATEX)", "EN IEC60079-0:2018, EN60079-11:2012"],
      ["Standards (IEC Ex)", "IEC60079-0:2017, IEC60079-11:2011"],
      [
        "Standards (EMC)",
        "IEC60079-0:201EN50270:2015, EN55032:2015+A11:2020+A1:2020, EN55035:2017+A11:20207, IEC60079-11:2011",
      ],
      ["Standards (RoHS)", "EN IEC63000:2018"],
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

  // GHS-8AT EX with Accessories
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
      [
        "Quantitative Fit Checking",
        "Provides objective, numeric fit results for better accuracy.",
      ],
      [
        "Multi-Mask Compatibility",
        "Works with full-face, half-face, and disposable respirators.",
      ],
      ["Portable & Lightweight", "Compact design allows for use in the field."],
      ["Intuitive Interface", "Easy to operate with minimal training."],
      ["Data Recording", "Stores fit test results for compliance reporting."],
      ["Rechargeable Power", "Comes with a long-lasting rechargeable battery."],
    ],

    // specifications: [
    //   {
    //     title: "Sampling mode",
    //     description:
    //       "Timer Mode: 1 min–30 hrs (auto-stop); Volume Mode: 0.010–900 L (auto-stop)",
    //   },
    //   {
    //     title: "Settable instantaneous flow rate",
    //     description:
    //       "Timer Mode: 50–500 mL/min; Volume Mode: 10–500 mL/min (10–49 mL/min intermittent at 50 mL/min)",
    //   },
    //   {
    //     title: "Constant flow rate operating range",
    //     description:
    //       "10–49 mL/min: 0–0.5 kPa; 50 mL/min: 0–40.0 kPa; 100 mL/min: 0–37.0 kPa; 200 mL/min: 0–30.0 kPa; 300 mL/min: 0–23.0 kPa; 400 mL/min: 0–20.0 kPa; 500 mL/min: 0–10.0 kPa",
    //   },
    //   {
    //     title: "Display",
    //     description: "LCD digital (with backlight), 0–600 mL/min",
    //   },
    //   {
    //     title: "Structure and function",
    //     description:
    //       "Constant flow rate function, autostart function, diaphragm type air pump, program mode (5 sampling settings)",
    //   },
    //   {
    //     title: "Accuracy of instantaneous flow",
    //     description: "50–500 mL/min ±5%",
    //   },
    //   {
    //     title: "Accuracy of integrated flow",
    //     description:
    //       "50–500 mL/min: ±5% (Volume Mode only); 10–49 mL/min: ±(2.5 × sampling time [min]) mL",
    //   },
    //   {
    //     title: "Operating temperature range",
    //     description: "0–40°C",
    //   },
    //   {
    //     title: "Operating humidity range",
    //     description: "10–90% RH (non-condensing)",
    //   },
    //   {
    //     title: "Power supply",
    //     description:
    //       "2 × AA alkaline batteries (standard) or 2 × AA NiMH batteries",
    //   },
    //   {
    //     title: "Continuous operation time",
    //     description: "20 hours (200 mL/min, 2 kPa, 25°C)",
    //   },
    //   {
    //     title: "Dimensions & weight",
    //     description: "80(W) × 40(D) × 126(H) mm, 280 g (including batteries)",
    //   },
    //   {
    //     title: "Standard accessories",
    //     description:
    //       "2 AA alkaline batteries, detector tube adaptor, tube tip holder, dust filter (5 pcs), instruction manual, warranty & inspection certificate",
    //   },
    //   {
    //     title: "Directives & regulations",
    //     description:
    //       "2014/30/EU (EMC), 2011/65/EU, (EU)2015/863 (RoHS), (EU)2023/1542 (BATTERY)",
    //   },
    //   {
    //     title: "EMC harmonised standards",
    //     description: "EN 61326-1:2013",
    //   },
    //   {
    //     title: "RoHS designated standards",
    //     description: "EN IEC63000:2018",
    //   },
    // ],

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
      [
        "Complete Package",
        "Includes monitor, sampling tube, rechargeable battery, and charger.",
      ],
      ["Enhanced Portability", "Convenient carrying case for field use."],
      ["Fast Setup", "Pre-configured components for immediate deployment."],
      ["Reliable Detection", "Accurate monitoring of hazardous gases."],
      ["Durable Accessories", "Built for rugged industrial applications."],
      ["User-Friendly", "Easy to assemble and operate in the field."],
    ],

    cta: {
      title: "Need a Complete Gas Detection Solution?",
      rightDescription:
        "Our starter kit has everything you need to get started quickly. Contact us for bulk orders, technical support, or custom requirements.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    columns: ["Category", "Details"],

    specifications: [
      ["Target Gas", "Hydrogen Sulphide (H₂S)"],
      ["Included Device", "1 × GHS-8AT EX Monitor"],
      [
        "Accessories",
        "Sampling tube, rechargeable battery & charger, carrying case, user manual",
      ],
      ["Power Source", "Lithium-ion rechargeable battery"],
      ["Battery Life", "Approx. 3 months (with normal operation)"],
      [
        "Backup Battery",
        "Lithium battery (5 years) – Maintains data when primary is disconnected",
      ],
      ["Communication Interface", "USB 2.0"],
      ["Weight (Kit)", "~1.2 kg (including case and accessories)"],
      ["Dimensions (Carrying Case)", "Compact design for portability"],
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
      { catalogUrl: "https://www.gastec.co.jp/files/topics/4534_ext_14_en_0.pdf", catalogName: "Instruction Manuals" },
      { catalogUrl: "https://www.gastec.co.jp/files/topics/4534_ext_14_en_1.pdf", catalogName: "Download Catalog" },
    ],

    features: [
      [
        "Quantitative Fit Checking",
        "Provides objective, numeric fit results for better accuracy.",
      ],
      [
        "Multi-Mask Compatibility",
        "Works with full-face, half-face, and disposable respirators.",
      ],
      ["Portable & Lightweight", "Compact design allows for use in the field."],
      ["Intuitive Interface", "Easy to operate with minimal training."],
      ["Data Recording", "Stores fit test results for compliance reporting."],
      ["Rechargeable Power", "Comes with a long-lasting rechargeable battery."],
    ],
    columns: ["Category", "Details"],

    specifications: [
      [
        "Sampling mode",
        "Timer Mode: 1 min–30 hrs (auto-stop); Volume Mode: 0.010–900 L (auto-stop)",
      ],
      [
        "Settable instantaneous flow rate",
        "Timer Mode: 50–500 mL/min; Volume Mode: 10–500 mL/min (10–49 mL/min intermittent at 50 mL/min)",
      ],
      [
        "Constant flow rate operating range",
        "10–49 mL/min: 0–0.5 kPa; 50 mL/min: 0–40.0 kPa; 100 mL/min: 0–37.0 kPa; 200 mL/min: 0–30.0 kPa; 300 mL/min: 0–23.0 kPa; 400 mL/min: 0–20.0 kPa; 500 mL/min: 0–10.0 kPa",
      ],
      ["Display", "LCD digital (with backlight), 0–600 mL/min"],
      [
        "Structure and function",
        "Constant flow rate function, autostart function, diaphragm type air pump, program mode (5 sampling settings)",
      ],
      ["Accuracy of instantaneous flow", "50–500 mL/min ±5%"],
      [
        "Accuracy of integrated flow",
        "50–500 mL/min: ±5% (Volume Mode only); 10–49 mL/min: ±(2.5 × sampling time [min]) mL",
      ],
      ["Operating temperature range", "0–40°C"],
      ["Operating humidity range", "10–90% RH (non-condensing)"],
      [
        "Power supply",
        "2 × AA alkaline batteries (standard) or 2 × AA NiMH batteries",
      ],
      ["Continuous operation time", "20 hours (200 mL/min, 2 kPa, 25°C)"],
      [
        "Dimensions & weight",
        "80(W) × 40(D) × 126(H) mm, 280 g (including batteries)",
      ],
      [
        "Standard accessories",
        "2 AA alkaline batteries, detector tube adaptor, tube tip holder, dust filter (5 pcs), instruction manual, warranty & inspection certificate",
      ],
      [
        "Directives & regulations",
        "2014/30/EU (EMC), 2011/65/EU, (EU)2015/863 (RoHS), (EU)2023/1542 (BATTERY)",
      ],
      ["EMC harmonised standards", "EN 61326-1:2013"],
      ["RoHS designated standards", "EN IEC63000:2018"],
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

    columns2: [
      "Product Name",
      "Product Code",
      "Layer",
      "Filling quantity",
      "Dimensions (mm)",
      "Tubes/box",
      "Shelf life (months)",
    ],

    data2: [
      [
        "Activated charcoal tube",
        "251S-20",
        "2",
        "100/50",
        "5.6 × 100",
        "20",
        "60",
      ],
      [
        "Activated charcoal tube",
        "251S2-20",
        "1",
        "150",
        "5.6 × 100",
        "20",
        "60",
      ],
      [
        "Activated charcoal tube (Bead-shaped)",
        "258-20",
        "2",
        "100/50",
        "5.6 × 100",
        "20",
        "60",
      ],
      [
        "Activated charcoal tube (Bead-shaped)",
        "258A-20",
        "2",
        "400/200",
        "7.0 × 105",
        "20",
        "60",
      ],
      [
        "Activated charcoal tube (Bead-shaped)",
        "258S2-20",
        "2",
        "150",
        "5.6 × 100",
        "20",
        "60",
      ],
      ["Silica-gel tube", "252S-20", "2", "400/200", "7.0 × 105", "20", "60"],
      ["Silica-gel tube", "252S2-20", "1", "600", "7.0 × 105", "20", "60"],
      ["Silica-gel tube", "252S3-20", "2", "150/75", "5.6 × 100", "20", "60"],
      ["Silica-gel tube", "252S4-20", "1", "300", "5.6 × 100", "20", "60"],
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
      { catalogUrl: "https://www.gastec.co.jp/files/user/asset/pdf/GV_100_test_report.pdf", catalogName: "Download Catalog" },
    ],

    featureCard2: [
      "Precision-engineered for reliable gas sampling",
      "Rugged, portable, and lightweight construction",
      "Automatic stroke counter for consistent volume measurement",
      "Ergonomic design for ease of handling in field use",
      "Designed for compatibility with all GASTEC detector tubes",
    ],
    columns: ["Parameter", "Details"],

    specifications: [
      ["Sample Volume", "100 mL per stroke"],
      ["Pump Type", "Piston-type hand pump"],
      ["Material", "Durable plastic and metal components"],
      ["Dimensions", "Compact and portable for field use"],
      [
        "Applications",
        "Industrial hygiene, confined spaces, on-site air quality testing",
      ],
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
      { catalogUrl: "https://www.gastec.co.jp/files/user/asset/pdf/GV_100_test_report.pdf", catalogName: "Download Catalog" },
    ],

    featureCard2: [
      "Full compatibility with all GASTEC detector tubes",
      "Dual sampling volumes: 100 mL or 50 mL per stroke",
      "Ergonomic handle design for ease of use",
      "Automatic stroke counter for precision measurements",
      "Rugged and portable construction for field applications",
    ],
    columns: ["Parameter", "Details"],

    specifications: [
      ["Sample Volume", "100 mL or 50 mL per stroke"],
      ["Pump Type", "Piston-type dual-volume hand pump"],
      ["Material", "High-durability plastic and metal"],
      ["Dimensions", "Compact and portable"],
      [
        "Applications",
        "Gas monitoring, confined space safety, on-site testing",
      ],
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
    columns: ["Specification", "Details"],

    specifications: [
      ["Kit Type", "Toxic Gas Detection Kit"],
      ["Tube Count", "12 Detector Tubes"],
      ["Power Required", "None (manual operation)"],
      ["Measurement Speed", "1–4 minutes per test"],
      ["Maintenance Needs", "Minimal to none"],
      ["Training", "None required for use"],
      ["Ideal Use Cases", "Emergency response, field analysis"],
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

  /////////////////////////////////////////////////////

  // Calibration Equipment and accessories

  // 351A Extension Hoses
  {
    name: "351A Extension Hoses",
    category: "Gas Detection Monitors",
    images: ["/images/Gastec3/gas-detection-accessories/351A_5.jpg"],
    description:
      "The 351A Extension Hoses allow gas sampling from difficult-to-access locations like manholes and storage tanks. They securely attach to the inlet of GV-100/GV-110 sampling pumps and enable accurate downward measurement at a distance. For twin-tube configurations, additional accessories such as guard rubbers (No. 358 and No. 359) are available. Note: these hoses are not compatible with Oxygen Detector Tube No. 31B.",

    overViewcategory: [
      { catalogUrl: ": https://www.gastec.co.jp/files/topics/2114_ext_14_en_0.pdf", catalogName: "Download Catalog" },
    ],

    featureCard3: [
      "Remote sampling up to 30 m via 5 m, 10 m, and 30 m options.",
      "Easily connects to GV-100 / GV-110 pumps—no tools required.",
      "Flexible synthetic rubber construction allows maneuvering through tight spaces.",
      "Supports twin-tube use with optional hose guard rubber (No. 358/359).",
    ],
    columns: ["Model", "Details"],

    specifications: [
      ["351A-5", "5 meters"],
      ["351A-10", "10 meters"],
      ["351A-30", "30 meters"],
    ],

    featureCard3_2: [
      "Suitable for remote downward sampling in confined settings.",
      "Not compatible with Oxygen Detector Tube No. 31B.",
      "For twin-tube operation, use guard rubbers No. 358 (existing tip) or No. 359 (replacement).",
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Attach Hose",
        details: [
          "Securely attach the extension hose to your GV-100 or GV-110 sampling pump's inlet.",
        ],
      },
      {
        step: "02",
        title: "Sample Remotely",
        details: [
          "Position the hose tip into the targeted confined space (e.g., manhole, tank) for sampling.",
        ],
      },
      {
        step: "03",
        title: "Monitor & Replace",
        details: [
          "After sampling, inspect the hose tip.",
          "If needed (for twin-tube setups), replace the rubber guard using accessory No. 359.",
        ],
      },
    ],

    cta: {
      title: "Need extension hoses for hard-to-reach areas?",
      rightDescription:
        "Contact us to request pricing, replacement tips, or additional supplies.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        imgSrc: "/images/Gastec3/gas-detection-accessories/380_1.jpg",
        name: "Fumigation Probe 380",
        description: "Portable monitor for hazardous gas detection.",
      },
      {
        imgSrc: "/images/Gastec3/gas-detection-accessories/860_1.jpg",
        name: "Pyrotec Pyrolyzer 860",
        description: "Maintains consistent pressure for reliable results.",
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-accessories/Extension Pole 350BP-2.jpeg",
        name: "Extension Pole 350BP-2",
        description: "Portable monitor for hazardous gas detection.",
      },
      {
        imgSrc: "/images/Gastec3/gas-detection-accessories/GV500_1.jpg",
        name: "Twin Tube Holder GV500",
        description: "Maintains consistent pressure for reliable results.",
      },
    ],
  },

  // Fumigation Probe 380

  {
    name: "Fumigation Probe 380",
    category: "Gas Detection Monitors",
    images: ["/images/Gastec3/gas-detection-accessories/380_1.jpg"],
    description:
      "The Fumigation Probe 380 enables safe measurement of residual fumigants inside sealed containers. You simply connect it to a GASTEC detector tube and insert it through the container’s rubber seal, allowing accurate and efficient testing without compromising the container integrity.",

    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    columns: ["Attribute", "Details"],

    specifications: [
      ["Probe Length", "44 cm"],
      ["Hose Length", "100 cm"],
      ["Weight", "Approximately 240 g"],
    ],

    columns2: ["Gas/Substance", "Tube No. & Name", "Range (ppm)", "Type"],

    specifications2: [
      ["Ethylene Oxide", "163LL", "0.1–10", "Short-term tube"],
      ["Formaldehyde", "91L", "0.1–45 (0.1~5)", "Short-term tube"],
      ["Methyl Bromide", "136LL", "0.1–3", "Short-term tube"],
      ["Phosphine", "7LA", "0.05–9.8 (0.1~1.5)", "Short-term tube"],
      [
        "Sulphuryl Fluoride¹",
        "231",
        "1–20",
        "Pyrotec-compatible via Pyrolyzer No. 860",
      ],
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Setup",
        details: ["Attach a compatible detector tube to the probe."],
      },
      {
        step: "02",
        title: "Insert & Sample",
        details: [
          "Insert the probe through the rubber seal of the sealed container and draw air into the tube as per tube instructions.",
        ],
      },
      {
        step: "03",
        title: "Read Result",
        details: [
          "Remove the tube and read the concentration directly from the printed scale after color change.",
        ],
      },
    ],

    cta: {
      title: "Need extension hoses for hard-to-reach areas?",
      rightDescription:
        "Contact us to request pricing, replacement tips, or additional supplies.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        name: "351A Extension Hoses",
        description:
          "For remote sampling in confined spaces, connects to GV-100 / GV-110 pumps.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/351A_5.jpg",
      },
      {
        name: "Pyrotec Pyrolyzer 860",
        description: "Converts sulfuryl fluoride for detection with tubes.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/860_1.jpg",
      },
      {
        name: "Extension Pole 350BP-2",
        description: "Lightweight 2.8 m pole for extended reach sampling.",
        imgSrc:
          "/images/Gastec3/gas-detection-accessories/Extension Pole 350BP-2.jpeg",
      },
      {
        name: "Twin Tube Holder GV500",
        description: "Protects twin tubes during sampling.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/GV500_1.jpg",
      },
    ],
  },

  // Pyrotec Pyrolyzer 860

  {
    name: "Pyrotec Pyrolyzer 860",
    category: "Gas Detection Monitors",
    images: ["/images/Gastec3/gas-detection-accessories/860_1.jpg"],
    description:
      "The Pyrotec Pyrolyzer 860 enables precise measurement of Sulphuryl Fluoride by thermally breaking it down into a detectable gas. This compact unit attaches directly to a GASTEC sampling pump and uses pyrolysis to deliver accurate readings through specialized tubes, ensuring reliability in demanding environments.",

    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    featureCard3: [
      "Converts Sulphuryl Fluoride using thermal cracking (pyrolysis)",
      "Works seamlessly with GASTEC Pyrotec detector tubes (No. 231)",
      "Simple, no-tools-required operation—just attach to pump and sample",
      "Lightweight and compact—150 mm × 68 mm, lightweight",
      "Durable, corrosion-resistant construction",
    ],
    columns: ["Specification", "Details"],

    specifications: [
      ["Power Source", "4 × AA batteries (not included)"],
      ["Continuous Operation", "~2 hours per set of batteries"],
      [
        "Filament Life",
        "Up to 1,000 measurements (based on 20 mm Sulphuryl Fluoride usage)",
      ],
      ["Operating Temperature", "0–40 °C"],
      ["Dimensions", "Diameter: 68 mm; Height: 150 mm"],
      ["Weight", "Approx. 290 g"],
    ],

    featureCard3_2: [
      "Tube No. 231 – Sulphuryl Fluoride",
      "Measuring Range: 1–20 ppm",
      "Direct-read scale within that range",
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Setup",
        details: [
          "Insert the Pyrolyzer between your GASTEC sampling pump and the Pyrotec detector tube.",
        ],
      },
      {
        step: "02",
        title: "Power & Sample",
        details: [
          "Install 4 AA batteries, switch on, and begin sampling as per tube instructions.",
        ],
      },
      {
        step: "03",
        title: "Read Result",
        details: [
          "After sampling, read gas concentration directly from the tube.",
          "Replace filament after extended use (up to 1,000 samples).",
        ],
      },
    ],

    cta: {
      title: "Need extension hoses for hard-to-reach areas?",
      rightDescription:
        "Contact us to request pricing, replacement tips, or additional supplies.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        name: "351A Extension Hoses",
        description:
          "For remote sampling in confined spaces, connects to GV-100 / GV-110 pumps.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/351A_5.jpg",
      },
      {
        name: "Fumigation Probe 380",
        description: "For sampling residual fumigants through container seals.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/380_1.jpg",
      },
      {
        name: "Extension Pole 350BP-2",
        description: "Lightweight 2.8 m pole for extended reach sampling.",
        imgSrc:
          "/images/Gastec3/gas-detection-accessories/Extension Pole 350BP-2.jpeg",
      },
      {
        name: "Twin Tube Holder GV500",
        description: "Protects twin tubes during sampling.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/GV500_1.jpg",
      },
    ],
  },

  // Extension Pole 350BP-2

  {
    name: "Extension Pole 350BP-2",
    category: "Gas Detection Monitors",
    images: [
      "/images/Gastec3/gas-detection-accessories/Extension Pole 350BP-2.jpeg",
    ],
    description:
      "The Extension Pole 350BP-2, crafted from durable yet lightweight fiberglass, is designed to facilitate gas sampling in areas not easily accessed directly—such as overhead ducts, confined spaces, or across horizontal corridors. It collapses for portability and extends for reach, ensuring contactless, safe operation.",

    overViewcategory: [
      { catalogUrl: "i.	https://www.gastec.co.jp/files/topics/2116_ext_14_en_0.pdf", catalogName: "Download Catalog" },
    ],

    featureCard3: [
      "Extends up to 2.8 m for both horizontal and vertical sampling.",
      "Compact 62.5 cm collapsed form and ultra-light 590 g design facilitate portability.",
      "Ideal for confined or elevated sampling where reaching directly isn't safe.",
    ],
    columns: ["Specification", "Details"],

    specifications: [
      ["Collapsed Length", "62.5 cm"],
      ["Maximum Extended Length", "2.8 m"],
      ["Weight", "590 g"],
      ["Material", "Lightweight fiberglass"],
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Attach Pump or Tube",
        details: [
          "Secure the sampling pump or detector tube holder onto the pole using the built-in bracket and clamp mechanism",
        ],
      },
      {
        step: "02",
        title: "Extend & Position",
        details: [
          "Unfold the pole to the required length—up to 2.8 m—and maneuver the sampling endpoint into the measurement area safely.",
        ],
      },
      {
        step: "03",
        title: "Sample Safely",
        details: [
          "Gather your gas sample with the detector tube or pump. Retract and store the pole before review.",
        ],
      },
    ],

    cta: {
      title: "Need extension hoses for hard-to-reach areas?",
      rightDescription:
        "Contact us to request pricing, replacement tips, or additional supplies.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        name: "351A Extension Hoses",
        description:
          "For remote sampling in confined spaces, connects to GV-100 / GV-110 pumps.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/351A_5.jpg",
      },
      {
        name: "Fumigation Probe 380",
        description: "For sampling residual fumigants through container seals.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/380_1.jpg",
      },
      {
        name: "Pyrotec Pyrolyzer 860",
        description: "Converts sulfuryl fluoride for detection with tubes.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/860_1.jpg",
      },
      {
        name: "Twin Tube Holder GV500",
        description: "Protects twin tubes during sampling.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/GV500_1.jpg",
      },
    ],
  },

  // Twin Tube Holder GV500

  {
    name: "Twin Tube Holder GV500",
    category: "Gas Detection Monitors",
    images: ["/images/Gastec3/gas-detection-accessories/GV500_1.jpg"],
    description:
      "The GV500 Twin Tube Holder is a safety accessory designed to stabilize two detector tubes during measurements. It reduces the risk of tube breakage or user injury by securely holding the tubes in place during handling or accidental impact. Ideal for field use, it enhances operational safety and reliability.",

    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    featureCard3: [
      "Prevents breakage of connected twin tubes.",
      "Helps avoid user injury through reinforced handling.",
      "Compatible with standard GASTEC sampling configurations.",
    ],
    columns: ["Attribute", "Details"],

    specifications: [
      ["Functionality", "Damage protection for twin detector tubes"],
      ["Primary Benefit", "Prevents drop damage and user accidents"],
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Attach Pump or Tube",
        details: [
          "Fit the Twin Tube Holder onto the sampling pump when using two tubes simultaneously.",
        ],
      },
      {
        step: "02",
        title: "Stabilize Tubes",
        details: [
          "Insert detector tubes into the holder; it secures them during movement or accidental bumping.",
        ],
      },
      {
        step: "03",
        title: "Remove Safely",
        details: [
          "After sampling, gently extract tubes from the holder for reading or replacement.",
        ],
      },
    ],

    cta: {
      title: "Need extension hoses for hard-to-reach areas?",
      rightDescription:
        "Contact us to request pricing, replacement tips, or additional supplies.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [
      {
        name: "351A Extension Hoses",
        description:
          "For remote sampling in confined spaces, connects to GV-100 / GV-110 pumps.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/351A_5.jpg",
      },
      {
        name: "Fumigation Probe 380",
        description: "For sampling residual fumigants through container seals.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/380_1.jpg",
      },
      {
        name: "Pyrotec Pyrolyzer 860",
        description: "Converts sulfuryl fluoride for detection with tubes.",
        imgSrc: "/images/Gastec3/gas-detection-accessories/860_1.jpg",
      },
      {
        name: "Extension Pole 350BP-2",
        description: "Lightweight 2.8 m pole for extended reach sampling.",
        imgSrc:
          "/images/Gastec3/gas-detection-accessories/Extension Pole 350BP-2.jpeg",
      },
    ],
  },

  ///////////////////////////////////////////////////

  // Passive Monitoring
  {
    name: "Dosimeter Tubes – TWA",
    category: "Gas Detection Monitors",
    images: ["/images/Gastec3/gas-detection-passive-monitoring/passive_dt.jpg"],
    description:
      "Dosimeter (Dosi) tubes provide a user-friendly and economical way to monitor long-term exposure to airborne contaminants. Designed for either personal or area monitoring, these tubes require only passive exposure and visual reading—no additional equipment, calibration, or analysis required. Each tube includes a colorimetric scale for direct, on-the-spot concentration readings.",

    overViewcategory: [
      { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
    ],

    tableTitle: "Why Dosimeter Tubes?",
    features: [
      [
        "Ready to Use",
        "Pre-calibrated, direct-read design eliminates extra equipment and training needs.",
      ],
      [
        "Cost-Effective & Versatile",
        "No need for repeated site visits or complex setups; great for various time periods (from minutes to 48 hours).",
      ],
      [
        "Accurate & Reliable",
        "Each tube is labeled with production-specific calibration for traceability and precision.",
      ],
      [
        "Flexible Monitoring Modes",
        "Use them as wearable personal monitors or install within work areas for area-level TWA readings.",
      ],
      [
        "Practical Applications",
        "For example, in winemaking environments where SO₂ is used, these tubes verify safe dosages to both the product and workers.",
      ],
    ],

    KeyFeatureCard2Heading: "Application",
    featureCard2: [
      "Worker exposure monitoring",
      "Industrial hygiene compliance",
      "Long-term gas monitoring with Passive Dositubes",
    ],

    columns: ["Feature", "Details"],

    specifications: [
      ["Method", "Passive diffusion of ambient air"],
      ["Readout", "Length of stain, read directly against printed scale"],
      [
        "Sampling Duration",
        "From minutes to 48 hours depending on application",
      ],
      ["Applications", "Personal exposure, area monitoring, workplace safety"],
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Activate Tube",
        details: [
          "Snap off the scored end of the dosimeter tube and place it into the tube holder.",
        ],
      },
      {
        step: "02",
        title: "Deploy for Monitoring",
        details: [
          "Clip the tube holder to the worker’s breathing zone or area of interest. The tube samples passively over time.",
        ],
      },
      {
        step: "03",
        title: "Read & Calculate",
        details: [
          "Read where the color change stops on the tube scale (ppm·hours). Divide by the exposure time (hours) to convert to ppm TWA concentration.",
        ],
      },
    ],

    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
  },

  // Gas Generator
  ///////////////////////////////////////////////////

  {
    name: "Permeater PD-1C",
    category: "Gas Detection Monitors",
    images: ["/images/Gastec3/gas-generator-solutions/PD_1C_2.jpg"],
    description:
      "Dosimeter (Dosi) tubes provide a user-friendly and economical way to monitor long-term exposure to airborne contaminants. Designed for either personal or area monitoring, these tubes require only passive exposure and visual reading—no additional equipment, calibration, or analysis required. Each tube includes a colorimetric scale for direct, on-the-spot concentration readings.",

    overViewcategory: [
      { catalogUrl: "https://www.gastec.co.jp/files/topics/4539_ext_14_en_0.pdf", catalogName: "Download Catalog" },
      { catalogUrl: "ii.	https://www.gastec.co.jp/files/topics/4539_ext_14_en_2.pdf", catalogName: "Download Catalog" },
    ],

    tableTitle: "Why Dosimeter Tubes?",
    features: [
      [
        "Ready to Use",
        "Pre-calibrated, direct-read design eliminates extra equipment and training needs.",
      ],
      [
        "Cost-Effective & Versatile",
        "No need for repeated site visits or complex setups; great for various time periods (from minutes to 48 hours).",
      ],
      [
        "Accurate & Reliable",
        "Each tube is labeled with production-specific calibration for traceability and precision.",
      ],
      [
        "Flexible Monitoring Modes",
        "Use them as wearable personal monitors or install within work areas for area-level TWA readings.",
      ],
      [
        "Practical Applications",
        "For example, in winemaking environments where SO₂ is used, these tubes verify safe dosages to both the product and workers.",
      ],
    ],

    featureCard2: [
      "Delivers calibration gas continuously over extended periods",
      "Offers a wide concentration range for diverse calibration needs",
      "High accuracy is achieved through calculations based on permeation weight loss and controlled dilution flow",
    ],

    columns2: ["Parameter", "Details"],

    specifications2: [
      ["Gas Generation Methods", "Permeation tube & Diffusion tube"],
      ["Dilution Gas Options", "Nitrogen or Air"],
      ["Flow Rate Range", "0.2 – 10 L/min"],
      [
        "Flow Accuracy",
        "±13.2% (0.2–0.4 L/min), ±7% (0.4–1 L/min), ±3.7% (1–10 L/min)",
      ],
      ["Temperature Control", "Range: (Room Temp + 5°C) to 50°C ± 0.15°C"],
      [
        "Tube Holder Capacity",
        "Standard tubes: 10 pcs. / H-size: 5 pcs.\nDiffusion tubes: D-10/D-20/D-30 – 1 pc; Multi-type – 4 pcs",
      ],
      ["Power Supply", "100–240 V AC, 50/60 Hz; Power Consumption: 160 W"],
      ["Dimensions (W×H×D)", "250 × 340 × 315 mm (approx.)"],
      ["Weight", "~14 kg (without water)"],
      [
        "Accessories Included",
        "Calibration tubing, dilution line, power cord, adapters, stopper, tube holder, funnel, spanner",
      ],
      [
        "Compliance Standards",
        "EN61010-1, EN61326-1 (industrial), EN IEC63000 (RoHS)",
      ],
    ],

    howToUseSteps: [
      {
        step: "01",
        title: "Set Up Tubes",
        details: [
          "Load the chosen permeation or diffusion tubes into the holder. Adjust temperature and connect the appropriate dilution gas line (N₂ or air).",
        ],
      },
      {
        step: "02",
        title: "Configure Output",
        details: [
          "Use the touch screen to enter your desired gas concentration. The device will calculate and set the correct dilution flow automatically via the mass flow controller.",
        ],
      },
      {
        step: "03",
        title: "Begin Calibration",
        details: [
          "Start the unit to begin generating calibration gas. Monitor output and proceed with instrument calibration as required.",
        ],
      },
    ],

    cta: {
      title: "Need custom calibration gas solutions?",
      rightDescription:
        "Contact us now to discuss applications—or request quotes, demonstrations, or delivery options.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
  },
];
