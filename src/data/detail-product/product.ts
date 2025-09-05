import { images } from "@/All-Image-Data/Data";
import { DetailProduct } from "@/types/product";
import {
  automaticAirSamplingPump,
  calibrationEquipment,
  calibrationRegulators,
  digitalMonitors,
  gasDetectionPassive,
  gasDetectionPassive2,
  gasDetectorTubeSystem,
  specializedKits,
} from "../products/category-gastec";

// data/products.ts
export const products: DetailProduct[] = [
  // Calibration and Regulators

  // GASTEC Calibration Kit
  {
    name: calibrationRegulators[0].name,
    category: "Gas Detection Monitors",
    images: [calibrationRegulators[0].imgSrc],
    description:
      "Rapid Impurity Measurement for Compressed Breathing Air The Gastec CG-1 system allows for simple, fast, and simultaneous measurement of four harmful contaminants—CO, CO₂, water vapor, and oil mist—present in compressed breathing air from cylinders or compressors.",
    overViewcategory: [
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/topics/3953_ext_14_en_0.pdf",
        catalogName: "Download Catalog",
      },
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
        title: "Prepare the Kit",
        details: [
          "Ensure the measurement kit is complete with all tubes, sensors, and the sampling pump.",
          "Check that the air source (cylinder or compressor) is ready for testing.",
        ],
        image:
          "/images/GASTEC Compressed Breathing Air Measurement KitCG-1/How to use Image 1.jpg",
      },
      {
        step: "02",
        title: "Sample the Air",
        details: [
          "Connect the sampling tube to the compressed air source.",
          "Activate the pump to draw air through the sensors.",
          "The CG-1 system simultaneously measures CO, CO₂, water vapor, and oil mist.",
        ],
        image: "/images/Gaslit/9.png",
      },
      {
        step: "03",
        title: "Read and Record Results",
        details: [
          "Observe the color change or reading on each sensor to determine contaminant levels.",
          "Record the results for safety compliance and monitoring purposes",
        ],
        image:
          "/images/GASTEC Compressed Breathing Air Measurement KitCG-1/How to use Image 3.png",
      },
    ],

    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },

    relatedProduct: [
      calibrationRegulators[2],
      calibrationRegulators[4],
      calibrationRegulators[3],
    ],
  },
  // Flow Regulator
  {
    name: calibrationRegulators[1].name,
    category: "Gas Detection Monitors",
    images: [calibrationRegulators[1].imgSrc],
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
      calibrationRegulators[0],
      calibrationRegulators[2],
      calibrationRegulators[3],
      calibrationRegulators[4],
    ],
  },
  // Pressure Regulator
  {
    name: calibrationRegulators[2].name,
    category: "Gas Detection Monitors",
    images: [calibrationRegulators[2].imgSrc],
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
      calibrationRegulators[0],
      calibrationRegulators[1],
      calibrationRegulators[3],
      calibrationRegulators[4],
    ],
  },
  // High-Precision Flow Regulator
  {
    name: calibrationRegulators[3].name,
    category: "Gas Detection Monitors",
    images: [calibrationRegulators[3].imgSrc],
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
      calibrationRegulators[0],
      calibrationRegulators[1],
      calibrationRegulators[2],
      calibrationRegulators[4],
    ],
  },
  // Adaptor / Connector
  {
    name: calibrationRegulators[4].name,
    category: "Gas Detection Monitors",
    images: [calibrationRegulators[4].imgSrc],
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
      calibrationRegulators[0],
      calibrationRegulators[1],
      calibrationRegulators[2],
      calibrationRegulators[3],
    ],
  },

  ///////////////////////////////////////////////////

  // Digital Monitors and Testers

  // GHS-8AT EX Monitor
  {
    name: digitalMonitors[0].name,
    category: "Gas Detection Monitors",
    images: [
      images.GHS8ATEX1,
      images.GHS8ATEX1,
      images.GHS8ATEX1,
      images.GHS8ATEX1,
      images.GHS8ATEX1,
    ],
    description:
      "Continuous H₂S monitoring is straightforward, convenient, and dependable. When corrosive hydrogen sulfide forms in sewer systems, it can cause corrosion, leading to rust, unpleasant odors, and, in severe cases, significant damage to buildings and infrastructure. The GHS-8AT-EX data logger enables continuous, reliable monitoring of H₂S levels within the sewer system.",
    overViewcategory: [
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/topics/2148_ext_14_en_0.pdf",
        catalogName: "Download Catalog",
      },
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
        title: "Checking Device Status",
        details: [
          "Large display shows H₂S concentration, temperature, and remaining battery.",
          "Sensor calibration alerts notify when recalibration is needed.",
        ],
        image: "/images/Specialised Sampling/H2S Data Logger/Image 1.jpg",
      },
      {
        step: "02",
        title: "Power Management & Recording",
        details: [
          "Use the power supply and recording switch to conserve energy.",
          "Freely select start and end points for recording data.",
        ],
        image: "/images/Specialised Sampling/H2S Data Logger/Image 2.jpg",
      },
      {
        step: "03",
        title: "Handling & Maintenance",
        details: [
          "Small and lightweight for easy portability.",
          "Outer case can be easily removed for replacement.",
        ],
        image: "/images/Specialised Sampling/H2S Data Logger/Image 3.jpg",
      },
      {
        step: "04",
        title: "Durability Features",
        details: [
          "Enhanced water and corrosion resistance (IP66/67).",
          "Device is designed to float on water.",
        ],
        image: "/images/Specialised Sampling/H2S Data Logger/Image 4.png",
      },
      {
        step: "05",
        title: "Data Logging Capacity",
        details: [
          "Even at 1-minute logging intervals, can store up to one month of data.",
          "Suitable for various measurement locations and applications.",
        ],
        image: "/images/Specialised Sampling/H2S Data Logger/Image 5.jpg",
      },
      {
        step: "06",
        title: "Data Transfer & Processing",
        details: [
          "Connect the GHS-8AT to a PC via USB to read logged data.",
          "Dedicated software allows graphical display and text file generation.",
        ],
        image: "/images/Specialised Sampling/H2S Data Logger/Image 6.png",
      },
    ],
    software: [
      {
        label: "ANASYS Software Download",
        link: "https://gastec-software.com/anasys",
      },
      {
        label: "ANASYS Software Troubleshooting",
        link: "https://gastec-software.com/anasys/HelpAndSupport",
      },
    ],
    packageContent: [
      "1 × GHS-8AT EX Monitor",
      "1 × Sampling Tube",
      "1 × Rechargeable Battery & Charger",
      "1 × Carrying Case",
      "1 × User Manual",
    ],
    packageContentimage:
      "/images/Specialised Sampling/Package Contents/GHS_8AT_EX_5.jpg",
    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    // relatedProduct: [
    //   {
    //     name: "GHS-8AT EX with Accessories",
    //     description: "Enhanced version with extended accessories.",
    //     imgSrc:
    //       "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
    //   },
    //   {
    //     name: "GHS-8AT EX Starter Kit",
    //     description: "Maintains consistent pressure for reliable results.",
    //     imgSrc:
    //       "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
    //   },
    //   {
    //     name: "GHS-501FT Fit Tester",
    //     description: "Fit testing unit for respiratory equipment.",
    //     imgSrc:
    //       "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_3.jpg",
    //   },
    // ],
  },

  // GHS-8AT EX with Accessories
  // {
  //   name: "GHS-8AT EX with Accessories",
  //   category: "Gas Detection Monitors",
  //   images: [
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_2.jpg",
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_3.jpg",
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
  //   ],
  //   description:
  //     "The GHS-501FT Fit Tester is a precision tool for verifying the seal and integrity of respiratory protection gear—including gas masks and respirators. Built for industrial safety, it delivers reliable, quantitative results during compliance audits or regular inspections.",

  //   overViewcategory: [
  //     { catalogUrl: "/pdf/1.pdf", catalogName: "Instruction Manuals" },
  //     { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
  //   ],

  //   features: [
  //     [
  //       "Quantitative Fit Checking",
  //       "Provides objective, numeric fit results for better accuracy.",
  //     ],
  //     [
  //       "Multi-Mask Compatibility",
  //       "Works with full-face, half-face, and disposable respirators.",
  //     ],
  //     ["Portable & Lightweight", "Compact design allows for use in the field."],
  //     ["Intuitive Interface", "Easy to operate with minimal training."],
  //     ["Data Recording", "Stores fit test results for compliance reporting."],
  //     ["Rechargeable Power", "Comes with a long-lasting rechargeable battery."],
  //   ],

  //   // specifications: [
  //   //   {
  //   //     title: "Sampling mode",
  //   //     description:
  //   //       "Timer Mode: 1 min–30 hrs (auto-stop); Volume Mode: 0.010–900 L (auto-stop)",
  //   //   },
  //   //   {
  //   //     title: "Settable instantaneous flow rate",
  //   //     description:
  //   //       "Timer Mode: 50–500 mL/min; Volume Mode: 10–500 mL/min (10–49 mL/min intermittent at 50 mL/min)",
  //   //   },
  //   //   {
  //   //     title: "Constant flow rate operating range",
  //   //     description:
  //   //       "10–49 mL/min: 0–0.5 kPa; 50 mL/min: 0–40.0 kPa; 100 mL/min: 0–37.0 kPa; 200 mL/min: 0–30.0 kPa; 300 mL/min: 0–23.0 kPa; 400 mL/min: 0–20.0 kPa; 500 mL/min: 0–10.0 kPa",
  //   //   },
  //   //   {
  //   //     title: "Display",
  //   //     description: "LCD digital (with backlight), 0–600 mL/min",
  //   //   },
  //   //   {
  //   //     title: "Structure and function",
  //   //     description:
  //   //       "Constant flow rate function, autostart function, diaphragm type air pump, program mode (5 sampling settings)",
  //   //   },
  //   //   {
  //   //     title: "Accuracy of instantaneous flow",
  //   //     description: "50–500 mL/min ±5%",
  //   //   },
  //   //   {
  //   //     title: "Accuracy of integrated flow",
  //   //     description:
  //   //       "50–500 mL/min: ±5% (Volume Mode only); 10–49 mL/min: ±(2.5 × sampling time [min]) mL",
  //   //   },
  //   //   {
  //   //     title: "Operating temperature range",
  //   //     description: "0–40°C",
  //   //   },
  //   //   {
  //   //     title: "Operating humidity range",
  //   //     description: "10–90% RH (non-condensing)",
  //   //   },
  //   //   {
  //   //     title: "Power supply",
  //   //     description:
  //   //       "2 × AA alkaline batteries (standard) or 2 × AA NiMH batteries",
  //   //   },
  //   //   {
  //   //     title: "Continuous operation time",
  //   //     description: "20 hours (200 mL/min, 2 kPa, 25°C)",
  //   //   },
  //   //   {
  //   //     title: "Dimensions & weight",
  //   //     description: "80(W) × 40(D) × 126(H) mm, 280 g (including batteries)",
  //   //   },
  //   //   {
  //   //     title: "Standard accessories",
  //   //     description:
  //   //       "2 AA alkaline batteries, detector tube adaptor, tube tip holder, dust filter (5 pcs), instruction manual, warranty & inspection certificate",
  //   //   },
  //   //   {
  //   //     title: "Directives & regulations",
  //   //     description:
  //   //       "2014/30/EU (EMC), 2011/65/EU, (EU)2015/863 (RoHS), (EU)2023/1542 (BATTERY)",
  //   //   },
  //   //   {
  //   //     title: "EMC harmonised standards",
  //   //     description: "EN 61326-1:2013",
  //   //   },
  //   //   {
  //   //     title: "RoHS designated standards",
  //   //     description: "EN IEC63000:2018",
  //   //   },
  //   // ],

  //   howToUseSteps: [
  //     {
  //       step: "01",
  //       title: "Prepare the Tube",
  //       details: [
  //         "Break off both tips of the detector tube the tip holder.",
  //         "Insert the tube into the rubber tube holder inlet.",
  //       ],
  //     },
  //     {
  //       step: "02",
  //       title: "Setup & Start Sampling",
  //       details: [
  //         "Switch Power ON.",
  //         "Adjust the flow rate and confirm the timer on the pump.",
  //         "Press the Start Button to begin sampling.",
  //       ],
  //     },

  //     {
  //       step: "03",
  //       title: "Read Results",
  //       details: [
  //         "After sampling, remove the tube.",
  //         "Read the concentration directly from the detector tube.",
  //       ],
  //     },
  //   ],
  //   packageContent: [
  //     "GHS-501FT Fit Tester",
  //     "Portable Carrying Case",
  //     "Sampling Tube Kit",
  //     "Battery & Charger",
  //     "Calibration Certificate",
  //     "User Manual",
  //   ],
  //   cta: {
  //     title: "Interested in this product?",
  //     rightDescription: "Get in touch with us to know more or request a quote.",
  //     buttonText: "Make an Enquiry",
  //     buttonHref: "/contact",
  //   },
  //   relatedProduct: [
  //     {
  //       name: "GHS-8AT EX Monitor",
  //       description: "Portable monitor for hazardous gas detection.",
  //       imgSrc:
  //         "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
  //     },
  //     {
  //       name: "GHS-8AT EX Starter Kit",
  //       description: "Maintains consistent pressure for reliable results.",
  //       imgSrc:
  //         "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
  //     },
  //     {
  //       name: "GHS-501FT Fit Tester",
  //       description: "Fit testing unit for respiratory equipment.",
  //       imgSrc:
  //         "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_3.jpg",
  //     },
  //   ],
  // },

  // GHS-8AT EX Starter Kit
  // {
  //   name: "GHS-8AT EX Starter Kit",
  //   category: "Gas Detection Monitors",
  //   images: [
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_2.jpg",
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_3.jpg",
  //     "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
  //   ],
  //   description:
  //     "The GHS-8AT EX Starter Kit provides a complete solution for gas detection and safety compliance. Designed for industrial and field applications, the kit includes the GHS-8AT EX Monitor along with essential accessories for quick setup, reliable monitoring, and long-term usability.",
  //   overViewcategory: [
  //     { catalogUrl: "/pdf/1.pdf", catalogName: "Download Catalog" },
  //   ],

  //   features: [
  //     [
  //       "Complete Package",
  //       "Includes monitor, sampling tube, rechargeable battery, and charger.",
  //     ],
  //     ["Enhanced Portability", "Convenient carrying case for field use."],
  //     ["Fast Setup", "Pre-configured components for immediate deployment."],
  //     ["Reliable Detection", "Accurate monitoring of hazardous gases."],
  //     ["Durable Accessories", "Built for rugged industrial applications."],
  //     ["User-Friendly", "Easy to assemble and operate in the field."],
  //   ],

  //   cta: {
  //     title: "Need a Complete Gas Detection Solution?",
  //     rightDescription:
  //       "Our starter kit has everything you need to get started quickly. Contact us for bulk orders, technical support, or custom requirements.",
  //     buttonText: "Make an Enquiry",
  //     buttonHref: "/contact",
  //   },
  //   columns: ["Category", "Details"],

  //   specifications: [
  //     ["Target Gas", "Hydrogen Sulphide (H₂S)"],
  //     ["Included Device", "1 × GHS-8AT EX Monitor"],
  //     [
  //       "Accessories",
  //       "Sampling tube, rechargeable battery & charger, carrying case, user manual",
  //     ],
  //     ["Power Source", "Lithium-ion rechargeable battery"],
  //     ["Battery Life", "Approx. 3 months (with normal operation)"],
  //     [
  //       "Backup Battery",
  //       "Lithium battery (5 years) – Maintains data when primary is disconnected",
  //     ],
  //     ["Communication Interface", "USB 2.0"],
  //     ["Weight (Kit)", "~1.2 kg (including case and accessories)"],
  //     ["Dimensions (Carrying Case)", "Compact design for portability"],
  //   ],

  //   software: [
  //     {
  //       label: "ANASYS Software Download",
  //       link: "https://gastec-software.com/anasys",
  //     },
  //     {
  //       label: "ANASYS Software Download",
  //       link: "https://gastec-software.com/anasys",
  //     },
  //   ],
  //   packageContent: [
  //     "1 × GHS-8AT EX Monitor",
  //     "1 × Sampling Tube",
  //     "1 × Rechargeable Battery & Charger",
  //     "1 × Carrying Case",
  //     "1 × User Manual",
  //   ],
  //   relatedProduct: [
  //     {
  //       name: "GHS-8AT EX Monitor",
  //       description: "Portable monitor for hazardous gas detection.",
  //       imgSrc:
  //         "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
  //     },
  //     {
  //       name: "GHS-8AT EX with Accessories",
  //       description: "Enhanced version with extended accessories.",
  //       imgSrc:
  //         "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
  //     },
  //     {
  //       name: "GHS-501FT Fit Tester",
  //       description: "Fit testing unit for respiratory equipment.",
  //       imgSrc:
  //         "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_501FT_3.jpg",
  //     },
  //   ],
  // },

  // GHS-501FT Fit Tester
  {
    name: automaticAirSamplingPump[0].name,
    category: "Gas Detection Monitors",
    images: [images.GSP501FT1, images.GSP501FT2, images.GSP501FT3],
    description:
      "A compact, lightweight, and reliable automatic air sampling pump designed for use with GASTEC detector tubes and sorbent tubes.",

    overViewcategory: [
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/topics/4534_ext_14_en_0.pdf",
        catalogName: "Instruction Manual",
      },
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/topics/4534_ext_14_en_1.pdf",
        catalogName: "Download Catalog",
      },
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
          "Break tips off the detector tube using the tube tip holder.",
        ],
        image: "/images/GSP 501/how to use image 1.png",
      },
      {
        step: "02",
        title: "Setup & Start Sampling",
        details: [
          "Insert the detector tube to the inlet of the rubber tube holder. Put the power switch to ON. Adjust the flow rate, confirm that the timer of the air sampling pump is set, then push the start button.",
        ],
        image: "/images/GSP 501/how to use image 2.png",
      },

      {
        step: "03",
        title: "Read Results",
        details: [
          "After sampling, remove the detector tube from the rubber tube holder and read the concentration of the tube.",
        ],
        image: "/images/GSP 501/how to use image 3.png",
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
    // relatedProduct: [
    //   {
    //     name: "GHS-8AT EX Monitor",
    //     description: "Portable monitor for hazardous gas detection.",
    //     imgSrc:
    //       "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
    //   },
    //   {
    //     name: "GHS-8AT EX with Accessories",
    //     description: "Enhanced version with extended accessories.",
    //     imgSrc:
    //       "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
    //   },
    //   {
    //     name: "GHS-8AT EX Starter Kit",
    //     description: "Maintains consistent pressure for reliable results.",
    //     imgSrc:
    //       "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
    //   },
    // ],

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
    name: gasDetectorTubeSystem[0].name,
    category: "Gas Detection Monitors",
    images: [gasDetectorTubeSystem[0].imgSrc],
    description:
      "The GV-100S Hand Pump is a manual gas sampling device specifically designed to be used with GASTEC detector tubes. Built with durability and ease of use in mind, the GV-100S ensures that air samples are drawn consistently for accurate detection and measurement of gases and vapors. Its compact design makes it ideal for on-site testing, industrial hygiene surveys, and confined space monitoring.",

    overViewcategory: [
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/user/asset/pdf/GV_100_test_report.pdf",
        catalogName: "Download Catalog",
      },
    ],

    tubeSystemTitle: "What is the GASTEC Detector Tube System?",
    tubeSystemDescription:
      "The GASTEC system is a direct-reading, colorimetric gas detector tube method designed for accurate measurement of airborne gases and vapors. By simply drawing air through a glass detector tube, users can instantly read concentration levels on a pre-calibrated scale — no additional equipment required.",
    tubeSystemImage: "/images/detector-tube-system.jpg",
    tubeSystemFeatures: [
      {
        title: "Portable & Convenient",
        description: "From common industrial gases to specialized chemicals",
      },
      {
        title: "Quick Results",
        description: "Instant on-site readings in minutes.",
      },
      {
        title: "Extensive Coverage",
        description: "Over 500 gases detectable.",
      },
      {
        title: "Trusted Worldwide",
        description:
          "Used across industries for safety, research, and compliance.",
      },
    ],

    whyChooseImage: "/images/Gastec3/gas-detection-accessories/GV500_2.jpg",
    whyChooseTitle: "Why Choose GASTEC?",
    whyChooseFeature: [
      {
        featureTitle: "Direct Onsite Readouts",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 1.png",
        description:
          "No interpretation required; results are visible on the tube itself.",
      },
      {
        featureTitle: "Wide Concentration Range",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 2.png",
        description: "Flexible measurements, adjustable with sampling volume.",
      },
      {
        featureTitle: "High Accuracy",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 3.png",
        description:
          "ach tube is individually calibrated and comes with a control number.",
      },
      {
        featureTitle: "Stable & Long-Lasting",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 4.png",
        description: "Tubes maintain accuracy with long shelf life.",
      },
      {
        featureTitle: "User-Friendly Operation",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 5.png",
        description:
          "Intuitive design makes it simple for professionals in any field.",
      },
      // {
      //   featureTitle: "Eco-Friendly Design",
      //   description:
      //     "Built with sustainability in mind, reducing environmental impact.",
      // },
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
        image:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Operating Procedure/operating procedure image 1.png",
        details: [
          "Insert the detector tube into the pump inlet.",
          "Break off both tube tips before insertion.",
        ],
      },
      {
        step: "02",
        title: "Take Sample",
        image:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Operating Procedure/operating procedure image 2.png",
        details: [
          "Pull the handle back fully to draw one stroke (100 mL).",
          "Use multiple strokes if required, depending on test conditions.",
        ],
      },
      {
        step: "03",
        title: "Read Results",
        image:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Operating Procedure/operating procedure image 3.png",
        details: [
          "After the required sampling strokes, remove the tube.",
          "Compare color change with scale markings to determine concentration.",
        ],
      },
    ],

    video: "Video Instruction",

    airTightNessCheck: "Airtightness Check",
    airTightNessCheckdes:
      "Before you begin sampling, it’s crucial to verify that your sampling pump is airtight—any leaks can compromise measurement accuracy. Here’s a simple check to ensure reliability:",
    airTightFeature: [
      {
        featureTitle: "Secure the Inlet",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 1.png",
        description: "Ensure the inlet nut is firmly tightened",
      },
      {
        featureTitle: "Insert Intact Tube",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 2.png",
        description:
          "Place a detector tube (with both tips intact) into the pump’s rubber inlet",
      },
      {
        featureTitle: "Align Marks",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 3.png",
        description:
          "Push the handle fully in, aligning the guide marks (red line on pump body and triangle on handle)",
      },
    ],

    airTightFeature2: [
      {
        featureTitle: "Lock & Hold",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 4.png",
        description:
          "Pull out in one motion until locked. Wait approximately 1 minute.",
      },
      {
        featureTitle: "Perform the Test",
        featureImage:
          "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 5.png",
        description:
          "Twist handle 90°, then release gently. The handle should smoothly return—if the red mark is fully concealed, the pump is airtight.",
      },
    ],

    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [gasDetectorTubeSystem[1]],
  },

  // GV-110S Hand Pump
  {
    name: gasDetectorTubeSystem[1].name,
    category: "Gas Detection Monitors",
    images: [gasDetectorTubeSystem[1].imgSrc],
    description:
      "The GV-110S Hand Pump is an upgraded version of the GV-100S, offering dual sampling volumes for greater flexibility in gas detection applications. With its high-precision design, the pump ensures consistent sample collection while providing a built-in stroke counter for accuracy. Compact, durable, and easy to operate, the GV-110S is ideal for industrial hygiene surveys, workplace safety monitoring, and environmental testing.",

    overViewcategory: [
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/user/asset/pdf/GV_100_test_report.pdf",
        catalogName: "Download Catalog",
      },
    ],

    tubeSystemTitle: "What is the GASTEC Detector Tube System?",
    tubeSystemDescription:
      "The GASTEC system is a direct-reading, colorimetric gas detector tube method designed for accurate measurement of airborne gases and vapors. By simply drawing air through a glass detector tube, users can instantly read concentration levels on a pre-calibrated scale — no additional equipment required.",
    tubeSystemImage: "/images/detector-tube-system.jpg",
    tubeSystemFeatures: [
      {
        title: "Portable & Convenient",
        description: "From common industrial gases to specialized chemicals",
      },
      {
        title: "Quick Results",
        description: "Instant on-site readings in minutes.",
      },
      {
        title: "Extensive Coverage",
        description: "Over 500 gases detectable.",
      },
      {
        title: "Trusted Worldwide",
        description:
          "Used across industries for safety, research, and compliance.",
      },
    ],

    whyChooseImage: "/images/Gastec3/gas-detection-accessories/GV500_2.jpg",
    whyChooseTitle: "Why Choose GASTEC?",
    whyChooseFeature: [
      {
        featureTitle: "Direct Onsite Readouts",
        description:
          "No interpretation required; results are visible on the tube itself.",
      },
      {
        featureTitle: "Wide Concentration Range",
        description: "Flexible measurements, adjustable with sampling volume.",
      },
      {
        featureTitle: "High Accuracy",
        description:
          "ach tube is individually calibrated and comes with a control number.",
      },
      {
        featureTitle: "Stable & Long-Lasting",
        description: "Tubes maintain accuracy with long shelf life.",
      },
      {
        featureTitle: "User-Friendly Operation",
        description:
          "Intuitive design makes it simple for professionals in any field.",
      },
      {
        featureTitle: "Eco-Friendly Design",
        description:
          "Built with sustainability in mind, reducing environmental impact.",
      },
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

    video: "Video Instruction",

    airTightNessCheck: "Airtightness Check",
    airTightNessCheckdes:
      "Before you begin sampling, it’s crucial to verify that your sampling pump is airtight—any leaks can compromise measurement accuracy. Here’s a simple check to ensure reliability:",
    airTightFeature: [
      {
        featureTitle: "Secure the Inlet",
        description: "Ensure the inlet nut is firmly tightened",
      },
      {
        featureTitle: "Insert Intact Tube",
        description:
          "Place a detector tube (with both tips intact) into the pump’s rubber inlet",
      },
      {
        featureTitle: "Align Marks",
        description:
          "Push the handle fully in, aligning the guide marks (red line on pump body and triangle on handle)",
      },
    ],

    airTightFeature2: [
      {
        featureTitle: "Lock & Hold",
        description:
          "Pull out in one motion until locked. Wait approximately 1 minute.",
      },
      {
        featureTitle: "Perform the Test",
        description:
          "Twist handle 90°, then release gently. The handle should smoothly return—if the red mark is fully concealed, the pump is airtight.",
      },
    ],

    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [gasDetectorTubeSystem[0]],
  },

  // GV-100LS Hand Pump
  {
    name: gasDetectorTubeSystem[2].name,
    category: "Gas Detection Monitors",
    images: [gasDetectorTubeSystem[2].imgSrc],
    description:
      "The GV-110S Hand Pump is an upgraded version of the GV-100S, offering dual sampling volumes for greater flexibility in gas detection applications. With its high-precision design, the pump ensures consistent sample collection while providing a built-in stroke counter for accuracy. Compact, durable, and easy to operate, the GV-110S is ideal for industrial hygiene surveys, workplace safety monitoring, and environmental testing.",

    overViewcategory: [
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/user/asset/pdf/GV_100_test_report.pdf",
        catalogName: "Download Catalog",
      },
    ],

    tubeSystemTitle: "What is the GASTEC Detector Tube System?",
    tubeSystemDescription:
      "The GASTEC system is a direct-reading, colorimetric gas detector tube method designed for accurate measurement of airborne gases and vapors. By simply drawing air through a glass detector tube, users can instantly read concentration levels on a pre-calibrated scale — no additional equipment required.",
    tubeSystemImage: "/images/detector-tube-system.jpg",
    tubeSystemFeatures: [
      {
        title: "Portable & Convenient",
        description: "From common industrial gases to specialized chemicals",
      },
      {
        title: "Quick Results",
        description: "Instant on-site readings in minutes.",
      },
      {
        title: "Extensive Coverage",
        description: "Over 500 gases detectable.",
      },
      {
        title: "Trusted Worldwide",
        description:
          "Used across industries for safety, research, and compliance.",
      },
    ],

    whyChooseImage: "/images/Gastec3/gas-detection-accessories/GV500_2.jpg",
    whyChooseTitle: "Why Choose GASTEC?",
    whyChooseFeature: [
      {
        featureTitle: "Direct Onsite Readouts",
        description:
          "No interpretation required; results are visible on the tube itself.",
      },
      {
        featureTitle: "Wide Concentration Range",
        description: "Flexible measurements, adjustable with sampling volume.",
      },
      {
        featureTitle: "High Accuracy",
        description:
          "ach tube is individually calibrated and comes with a control number.",
      },
      {
        featureTitle: "Stable & Long-Lasting",
        description: "Tubes maintain accuracy with long shelf life.",
      },
      {
        featureTitle: "User-Friendly Operation",
        description:
          "Intuitive design makes it simple for professionals in any field.",
      },
      {
        featureTitle: "Eco-Friendly Design",
        description:
          "Built with sustainability in mind, reducing environmental impact.",
      },
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

    video: "Video Instruction",

    airTightNessCheck: "Airtightness Check",
    airTightNessCheckdes:
      "Before you begin sampling, it’s crucial to verify that your sampling pump is airtight—any leaks can compromise measurement accuracy. Here’s a simple check to ensure reliability:",
    airTightFeature: [
      {
        featureTitle: "Secure the Inlet",
        description: "Ensure the inlet nut is firmly tightened",
      },
      {
        featureTitle: "Insert Intact Tube",
        description:
          "Place a detector tube (with both tips intact) into the pump’s rubber inlet",
      },
      {
        featureTitle: "Align Marks",
        description:
          "Push the handle fully in, aligning the guide marks (red line on pump body and triangle on handle)",
      },
    ],

    airTightFeature2: [
      {
        featureTitle: "Lock & Hold",
        description:
          "Pull out in one motion until locked. Wait approximately 1 minute.",
      },
      {
        featureTitle: "Perform the Test",
        description:
          "Twist handle 90°, then release gently. The handle should smoothly return—if the red mark is fully concealed, the pump is airtight.",
      },
    ],

    cta: {
      title: "Interested in this product?",
      rightDescription: "Get in touch with us to know more or request a quote.",
      buttonText: "Make an Enquiry",
      buttonHref: "/contact",
    },
    relatedProduct: [gasDetectorTubeSystem[0]],
  },

  /////////////////////////////////////////////////////

  // TG-1EN Gas Sampling Kit
  {
    name: specializedKits[0].name,
    category: "Gas Detection Monitors",
    images: [specializedKits[0].imgSrc],
    description:
      "A quick and effective method for identifying toxic gases is essential for preventing hazardous emissions in the workplace, contributing to occupational hygiene and pollution control. The first step is obtaining accurate data on the types of gases present and their concentration levels. Our Toxic Gas Detection Kit TG-1 is designed for this purpose and comes equipped with 12 specialized detector tubes.",

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
        title: "Initial Airstream Check",
        details: [
          "Use a smoke tester to verify the presence and flow direction of the airstream.",
        ],
      },
      {
        step: "02",
        title: "Qualitative Detection of Unknown Gas",
        details: [
          "Begin measurement with detector tube Polytec No. 107 to identify the presence of an unknown gas.",
        ],
      },
      {
        step: "03",
        title: "Targeted Gas Identification and Judgment",
        details: [
          "Conduct progressive measurements using appropriate detector tubes based on the matrix diagram. Conclude by identifying the gas, confirming its absence, or determining if it is below the detection limit.",
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
    // relatedProduct: [
    //   {
    //     imgSrc:
    //       "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
    //     name: "GHS-8AT EX Monitor",
    //     description: "Portable monitor for hazardous gas detection.",
    //   },
    //   {
    //     imgSrc:
    //       "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_5.jpg",
    //     name: "GHS-8AT EX Starter Kit",
    //     description: "Maintains consistent pressure for reliable results.",
    //   },
    // ],
  },

  /////////////////////////////////////////////////////

  // Calibration Equipment and accessories

  // 351A Extension Hoses
  {
    name: calibrationEquipment[0].name,
    category: "Gas Detection Monitors",
    images: [calibrationEquipment[0].imgSrc],
    description:
      "The 351A Extension Hoses allow gas sampling from difficult-to-access locations like manholes and storage tanks. They securely attach to the inlet of GV-100/GV-110 sampling pumps and enable accurate downward measurement at a distance. For twin-tube configurations, additional accessories such as guard rubbers (No. 358 and No. 359) are available. Note: these hoses are not compatible with Oxygen Detector Tube No. 31B.",

    overViewcategory: [
      {
        catalogUrl:
          ": https://www.gastec.co.jp/files/topics/2114_ext_14_en_0.pdf",
        catalogName: "Download Catalog",
      },
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
      calibrationEquipment[1],
      calibrationEquipment[2],
      calibrationEquipment[3],
      calibrationEquipment[4],
    ],
  },

  // Fumigation Probe 380

  {
    name: calibrationEquipment[1].name,
    category: "Gas Detection Monitors",
    images: [calibrationEquipment[1].imgSrc],
    description:
      "The Fumigation Probe 380 enables safe measurement of residual fumigants inside sealed containers. You simply connect it to a GASTEC detector tube and insert it through the container’s rubber seal, allowing accurate and efficient testing without compromising the container integrity.",

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
      calibrationEquipment[0],
      calibrationEquipment[2],
      calibrationEquipment[3],
      calibrationEquipment[4],
    ],
  },

  // Pyrotec Pyrolyzer 860

  {
    name: calibrationEquipment[2].name,
    category: "Gas Detection Monitors",
    images: [calibrationEquipment[2].imgSrc],
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
      calibrationEquipment[0],
      calibrationEquipment[1],
      calibrationEquipment[3],
      calibrationEquipment[4],
    ],
  },

  // Extension Pole 350BP-2

  {
    name: calibrationEquipment[3].name,
    category: "Gas Detection Monitors",
    images: [calibrationEquipment[3].imgSrc],
    description:
      "The Extension Pole 350BP-2, crafted from durable yet lightweight fiberglass, is designed to facilitate gas sampling in areas not easily accessed directly—such as overhead ducts, confined spaces, or across horizontal corridors. It collapses for portability and extends for reach, ensuring contactless, safe operation.",

    overViewcategory: [
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/topics/2116_ext_14_en_0.pdf",
        catalogName: "Download Catalog",
      },
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
      calibrationEquipment[0],
      calibrationEquipment[1],
      calibrationEquipment[2],
      calibrationEquipment[4],
    ],
  },

  // Twin Tube Holder GV500

  {
    name: calibrationEquipment[4].name,
    category: "Gas Detection Monitors",
    images: [calibrationEquipment[4].imgSrc],
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
      calibrationEquipment[0],
      calibrationEquipment[1],
      calibrationEquipment[2],
      calibrationEquipment[3],
    ],
  },

  ///////////////////////////////////////////////////

  // Passive Monitoring

  // Dosimeter Tubes – TWA
  {
    name: gasDetectionPassive[0].name,
    category: "Gas Detection Monitors",
    images: [gasDetectionPassive[0].imgSrc],
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

  // Dositube Holder
  {
    name: gasDetectionPassive[1].name,
    category: "Gas Detection Monitors",
    images: [gasDetectionPassive[1].imgSrc],
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

  ///////////////////////////////////////////////////

  // Gas Generator Permeater PD-1C

  {
    name: gasDetectionPassive2[0].name,
    category: "Gas Detection Monitors",
    images: [gasDetectionPassive2[0].imgSrc],
    description:
      "The Permeater Gas Generator is a high-precision calibration device that uses permeation tubes and diffusion tubes to produce accurate and stable calibration gas for gas detection and monitoring systems. By maintaining a constant temperature, the system ensures a consistent release rate of both permeating and evaporating gases. With a steady flow of dilution gas such as air or nitrogen, the Permeater provides a continuous and reliable source of calibration gas, making it ideal for gas detector calibration, industrial gas analysis, and environmental monitoring applications.",
    overViewcategory: [
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/topics/4539_ext_14_en_0.pdf",
        catalogName: "Download Catalog",
      },
      {
        catalogUrl:
          "https://www.gastec.co.jp/files/topics/4539_ext_14_en_2.pdf",
        catalogName: "Instruction Manual",
      },
      {
        catalogUrl:
          "https://www.gastec.co.jp/en/technology/knowledge/permeater/",
        catalogName: "Calculation of the preparation condition",
      },
    ],

    tableTitle: "Why Permeator Tubes?",
    features: [
      [
        "Continuous and Stable Calibration Gas Generation",
        "The Permeater ensures long-term, uninterrupted calibration gas output with stable concentrations, minimizing manual intervention and eliminating the need for high-pressure gas cylinders.",
      ],
      [
        "Wide Range of Concentration Control",
        "It enables easy generation of calibration gases across a broad concentration range, offering flexibility to meet diverse application and sensor calibration needs.",
      ],
      [
        "High Accuracy and Reliability",
        "By relying on measurable physical parameters like weight loss and dilution flow, the Permeater delivers highly accurate, repeatable, and dependable gas concentrations for precision-critical environments.",
      ],
      [
        "Versatility in Calibration Gas Types",
        "Capable of generating various low-concentration gases using permeation and diffusion tubes, the Permeater is compatible with multiple carrier gases and supports complex multi-gas calibration setups.",
      ],
      [
        "User-Friendly Automation and Interface",
        "Equipped with a touchscreen interface and automatic flow calculations, the Permeater simplifies calibration workflows through real-time control, intuitive operation, and minimal user error.",
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
        title: "Filling and Setup",
        details: [
          "A diffusion tube with a fixed inner diameter is filled with a liquid substance (usually an organic solvent) using a syringe and maintained at a constant temperature.",
        ],
      },
      {
        step: "02",
        title: "Controlled Diffusion",
        details: [
          "At the set temperature, the liquid evaporates and diffuses at a constant rate, determined by the tube’s dimensions.",
        ],
      },
      {
        step: "03",
        title: "Continuous Gas Generation",
        details: [
          "A steady flow of dilution gas (like air or nitrogen) passes through the tube, mixing with the evaporated substance to continuously generate a low, stable concentration of calibration gas.",
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
