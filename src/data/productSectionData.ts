import { ProductSectionData } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";

const productsData: ProductSectionData[] = [
  // {
  //     number: "01",
  //     title: "Hospitality Equipment",
  //     link: "/frying-oil-tester",
  //     images: [
  //         { imgSrc: images.oilTesterHp, name: "Digital Food Oil Tester" },
  //         { imgSrc: images.oilTesterStraws, name: "Straws" },
  //         { imgSrc: images.oilTesterKit, name: "Device Kit" },
  //     ]
  // },
  // {
  //     number: "02",
  //     title: "Hydration Measurement",
  //     link: "/mx-3",
  //     images: [
  //         { imgSrc: images.mx3DeviceHp, name: "Hydration device" },
  //         { imgSrc: images.mx3Device2, name: "Hydration Kit" },
  //         { imgSrc: images.mx3DeviceKit, name: "Hydration Test Strip" },
  //     ]
  // },
//   {
//     number: "01",
//     title: "Explore the Full Range of Gastec Gas Detection Devices and Tubes",
//     link: "/gastec",
//     images: [
//       { imgSrc: images.gastec860_2, name: "GHS_8AT_EX" },
//       { imgSrc: images.gastecGHS_501FT_1, name: "GHS_501FT" },
//       { imgSrc: images.gastecGHS_8AT_EX_1, name: "GHS_8AT_EX_1" },
//     ],
//   },

  {
    number: "01",
    title: "Explore the Full Range of Gastec Gas Detection Devices and Tubes",
    link: "/categories",
    images: [
      { imgSrc: "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg", name: "GASTEC Compressed Breathing Air Measurement KitCG-1", href:`/categories/${formatToHyphenated("GASTEC Calibration Kit")}`},
      { imgSrc: "/images/Gastec3/gas-detection-passive-monitoring/passive_dt.jpg", name: "Permeater PD-1C", href:`/categories/${formatToHyphenated("Permeater PD-1C")}` },
      { imgSrc: "/images/Gastec3/gas-detection-specialized-sampling-kits/TG_1_EN.jpg", name: "Gastec Tube", href:`/categories/${formatToHyphenated("TG-1EN Gas Sampling Kit")}` },
    ],
  },
];

export default productsData;
