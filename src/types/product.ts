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
  features?: Array<{ title: string; description: string }>;
  specifications?: Array<{ title: string; description: string }>;
  columns?: any[];
  data?: any[];
  howToUseSteps?: HowToUseStep[];
  softwareName?: string;
  software?: Array<{ label: string; link: string }>;
  packageContent?: string[];
  featureCard2?: string[];
  relatedProduct?: RelatedProduct[];
  /** If provided -> show CTA. If omitted -> hide CTA for this product */
  cta?: CTAData;

  /** Optional per-product “extra sections” to inject */
  extraSections?: ExtraSection[];
}
