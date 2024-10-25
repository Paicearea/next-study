import ProductHeader from "@/components/ProductHeader";
import ProductList from "@/components/ProductList";
import BasicLayout from "@/layouts/BasicLayout";

function ProductPage() {
  const headerTitle = "상품 목록 페이지";
  return (
    <BasicLayout>
      <ProductHeader title={headerTitle} />
      <ProductList></ProductList>
    </BasicLayout>
  );
}

export default ProductPage;
