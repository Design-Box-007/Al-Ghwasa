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

const ProductDetailPage = () => {
  const params = useParams();
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return <NotFound />;

  return (
    <div>
      <ProductHero
        name={product.name}
        category={product.category}
        subName={product.subName}
        images={product.images}
      />
      <Overview
        description={product.description}
        catalogUrl={product.catalogUrl}
        catalogName={product.catalogName}
      />
      <Table features={product.features} />
      <Table
        features={product.specifications}
        title="Technical Specifications"
      />
      <div className="px-20 py-10">
        <CustomTable
          columns={product.columns}
          data={product.data}
          title="Sorbent tubes"
        />
      </div>

      <StepsGrid heading={product.heading} steps={product.howToUseSteps} />
      <SoftwareCard title={product.softwareName} downloads={product.software} />
      <PackageContentsCard
        title="Package Contents"
        items={product.packageContent}
      />
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
    </div>
  );
};

export default ProductDetailPage;
