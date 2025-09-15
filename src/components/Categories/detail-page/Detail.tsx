"use client";
import { useParams } from "next/navigation";
import NotFound from "@/app/not-found";
import Table from "@/components/Categories/detail-page/FeaturesCard";
import ProductHero from "@/components/Categories/detail-page/HeroCard";
import StepsGrid from "@/components/Categories/detail-page/HowToUseCard";
import Overview from "@/components/Categories/detail-page/OverViewCard";
import PackageContentsCard from "@/components/Categories/detail-page/PackageContentsCard";
import SoftwareCard from "@/components/Categories/detail-page/SoftwareCard";
import CTA from "@/components/Comman/CTA";
import ProductGrid from "@/components/Comman/ProductGrid";
import { products } from "@/data/detail-product/product";
import formatToHyphenated from "@/utils/formatPathName";
import KeyFeatureCard2 from "./KeyFeaturesCard2";
import KeyFeaturesCard3 from "./KeyFeaturesCard3";
import WhyChooseGastec from "./WhyChooseGastec";
// import ResponsiveYouTube from "@/components/Gallery/GalleryVideo";
import VideoTitle from "./VideoTitle";

const ProductDetailPage = () => {
  const params = useParams();
  const product = products.find(
    (p) => formatToHyphenated(p.name) === params.slug
  );

  if (!product) return <NotFound />;

  return (
    <div>
      {/* Hero Section */}
      <ProductHero
        name={product.name}
        category={product.category}
        subName={product.subName}
        images={product.images}
      />

      {/* Overview */}
      {(product.description || product.overViewcategory?.length) && (
        <Overview
          description={product.description}
          overViewcategory={product.overViewcategory}
        />
      )}

      {(product.tubeSystemTitle || product.tubeSystemDescription?.length) && (
        <Overview
          title={product.tubeSystemTitle}
          description={product.tubeSystemDescription}
          showImage={true}
          imageUrl={product.tubeSystemImage}
          features={product.tubeSystemFeatures}
        />
      )}

      {(product.whyChooseImage || product.whyChooseTitle?.length) && (
        <WhyChooseGastec
          imageUrl={product.whyChooseImage}
          title={product.whyChooseTitle}
          features={product.whyChooseFeature}
        />
      )}

      {/* Features Table */}
      {!!product.features?.length && (
        <Table
          title={product.tableTitle || "Key Features"}
          data={product.features}
        />
      )}

      {!!product.featureCard2?.length && (
        <KeyFeatureCard2
          title={product.KeyFeatureCard2Heading || "Key Feature"}
          items={product.featureCard2}
        />
      )}

      {!!product.featureCard3?.length && (
        <KeyFeaturesCard3
          title="Key Features"
          features={product.featureCard3}
        />
      )}

      {/* Technical Specs */}
      {!!product.specifications?.length && (
        <Table
          title="Technical Specifications"
          showHeader={true}
          columns={product.columns}
          data={product.specifications}
        />
      )}

      {/* Applicable tubes */}
      {!!product.specifications2?.length && (
        <Table
          title="Applicable Detector Tubes"
          showHeader={true}
          columns={product.columns2}
          data={product.specifications2}
        />
      )}

      {/* Notes */}
      {!!product.featureCard3_2?.length && (
        <KeyFeaturesCard3 title="Notes" features={product.featureCard3_2} />
      )}

      {/* Sorbent tubes */}
      {!!product.data2?.length && (
        <Table
          title="Sorbent tubes"
          showHeader={true}
          columns={product.columns2}
          data={product.data2}
        />
      )}

      {/* Steps Grid */}
      {!!product.howToUseSteps?.length && (
        <StepsGrid
          heading={`How to Use ${product.name}`}
          steps={product.howToUseSteps}
        />
      )}

      {/* {!!product.video?.length && (
        <div className="overflow-x-hidden relative md:px-4 px-4 lg:px-10 py-10">
          <hr className="mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
            {product.video}
          </h1>

          <ResponsiveYouTube
            videoURL={
              "https://www.youtube.com/embed/D0UnqGm_miA?si=35W6STzM9tPG7nSI"
            }
          />
          <hr className="mt-6" />
        </div>
      )} */}

      {(product.videoTitle?.length) &&(
        <VideoTitle titles={product.videoTitle}/>
      )}

      

      {(product.airTightNessCheck || product.airTightFeature?.length) && (
        <WhyChooseGastec
          title2={product.airTightNessCheck}
          description={product.airTightNessCheckdes}
          features={product.airTightFeature}
        />
      )}

      {(product.airTightNessCheck || product.airTightFeature?.length) && (
        <WhyChooseGastec
          features={product.airTightFeature2}
          className="grid md:grid-cols-2 grid-cols-1 gap-5"
        />
      )}

      {/* Software Card */}
      {!!product.software?.length && (
        <SoftwareCard title="Software" downloads={product.software} />
      )}

      {/* Package Contents */}
      {!!product.packageContent?.length && (
        <PackageContentsCard
          title="Package Contents"
          items={product.packageContent}
          image={product.packageContentimage}
        />
      )}

      {/* CTA Section */}
      {product.cta && (
        <CTA
          title={
            <span className="lg:text-7xl text-5xl font-light lg:leading-[80px] md:leading-[50px]">
              {product.cta.title}
            </span>
          }
          rightDescription={
            <span className="text-3xl">{product.cta.rightDescription}</span>
          }
          buttonText={product.cta.buttonText}
          buttonHref={product.cta.buttonHref}
        />
      )}

      {/* Related Products */}
      {!!product.relatedProduct?.length && (
        <ProductGrid
          title="Related Products"
          items={product.relatedProduct}
          ctaLabel="View Accessories"
          ctaHref="#"
          actionVariant="arrow"
          topDivider
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          className="lg:px-10 px-5"
        />
      )}
    </div>
  );
};

export default ProductDetailPage;
