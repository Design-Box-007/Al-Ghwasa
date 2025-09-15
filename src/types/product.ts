// types/product.ts
export type SectionType =
  | "ProductHero"
  | "Overview"
  | "FeaturesTable"
  | "SpecsTable"
  | "CustomTable"
  | "StepsGrid"
  | "SoftwareCard"
  | "PackageContentsCard"
  | "CTA"
  | "ProductGrid"
  | "Hero2";

export interface CTAData {
  title: string;
  rightDescription: string;
  buttonText: string;
  buttonHref: string;
}

export interface HowToUseStep {
  step: string; // e.g. "01"
  title: string; // e.g. "Preparation"
  details: string[]; // e.g. ["Charge fully", "Attach probe", ...]
  image?: string;
}

export interface RelatedProduct {
  imgSrc: string;
  name: string;
  description?: string;
  href?: string; // optional if you want to link to the detail page
  slug?: string; // optional if you want to reuse the slug system
}

export interface OverviewCategory {
  catalogUrl: string;
  catalogName: string;
}

export type ExtraSection = {
  type: "Hero2";
  props: { name: string; images?: string; category?: string };
};
export interface DetailProduct {
  name: string;
  category?: string;
  subName?: string;
  images: string[];
  description?: string;
  overViewcategory?: OverviewCategory[];
  features?: Array<(string | number)[]>;
  specifications?: Array<(string | number)[]>;
  columns?: string[];
  specifications2?: Array<(string | number)[]>;
  columns2?: string[];
  data?: string[];
  data2?: Array<(string | number)[]>;
  tableTitle?: string;
  howToUseSteps?: HowToUseStep[];
  softwareName?: string;
  software?: Array<{ label: string; link: string }>;
  packageContent?: string[];
  featureCard2?: string[];
  KeyFeatureCard2Heading?: string;
  featureCard3?: string[];
  featureCard3_2?: string[];
  relatedProduct?: RelatedProduct[];
  tubeSystemTitle?: string;
  tubeSystemDescription?: string;
  tubeSystemImage?: string;
  tubeSystemFeatures?: Array<{ title: string; description: string }>;
  whyChooseImage?: string;
  whyChooseTitle?: string;
  whyChooseFeature?: Array<{featureImage?: string; featureTitle: string; description: string}>
  video?: string;
  airTightNessCheck?: string;
  airTightFeature?: Array<{featureImage?: string; featureTitle: string; description: string}>
  airTightNessCheckdes?: string;
  airTightFeature2?: Array<{featureImage?: string; featureTitle: string; description: string}>
  packageContentimage?: string;
  howToUseTitle?: string;
  videoTitle?: string[];


  /** If provided -> show CTA. If omitted -> hide CTA for this product */
  cta?: CTAData;

  /** Optional per-product “extra sections” to inject */
  extraSections?: ExtraSection[];
}
