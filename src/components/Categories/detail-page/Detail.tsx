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
import CustomTable from "@/components/Comman/CustomTable";
import ProductGrid from "@/components/Comman/ProductGrid";
import { products } from "@/data/detail-product/product";
import formatToHyphenated from "@/utils/formatPathName";
import KeyFeatureCard2 from "./KeyFeaturesCard2";

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

      {/* Features Table */}
      {!!product.features?.length && <Table features={product.features} />}

      {!!product.featureCard2?.length && <KeyFeatureCard2 title="Key Features" items={product.featureCard2} />}

      {/* Technical Specs */}
      {!!product.specifications?.length && (
        <Table
          features={product.specifications}
          title="Technical Specifications"
          showHeader={true}
        />
      )}

      {/* Custom Table */}
      {!!product.columns?.length && !!product.data?.length && (
        <div className="px-20 py-10">
          <CustomTable
            columns={product.columns}
            data={product.data}
            title="Sorbent tubes"
          />
        </div>
      )}

      {/* Steps Grid */}
      {!!product.howToUseSteps?.length && (
        <StepsGrid
          heading={`How to Use ${product.name}`}
          steps={product.howToUseSteps}
        />
      )}

      {/* Software Card */}
      { !!product.software?.length && (
        <SoftwareCard
          title="Software"
          downloads={product.software}
        />
      )}

      {/* Package Contents */}
      {!!product.packageContent?.length && (
        <PackageContentsCard
          title="Package Contents"
          items={product.packageContent}
        />
      )}

      {/* CTA Section */}
      {product.cta && (
        <CTA
          title={
            <span className="text-7xl font-light leading-[80px]">
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
          className="px-10"
        />
      )}
    </div>
  );
};

export default ProductDetailPage;
