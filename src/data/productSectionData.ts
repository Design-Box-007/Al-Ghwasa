import { ProductSectionData } from "@/types";
import { specializedKits } from "./products/category-gastec";
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
      {
        imgSrc:
          "/images/Gastec3/gas-detection-active-sampling-tubes/Detector tube image_4.jpg",
        name: "Gas Detection Tubes",
        href: `/Detection-table`,
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-specialized-sampling-kits/TG_1_EN.jpg",
        name: specializedKits[0].name,
        href: `categories/${formatToHyphenated(specializedKits[0].name)}`
      },
      {
        imgSrc:
          "/images/Gastec3/gas-detection-accessories/380_1.jpg",
        name: "Fumigation Probe 380",
        href: `/categories/fumigation-probe-380`,
      },
    ],
  },
];

export default productsData;
