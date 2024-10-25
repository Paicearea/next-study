// 동적 라우팅 하는 파일

import { fetchProductById } from "@/api";
import ProductDetail from "@/components/ProductDetail";
import ProductHeader from "@/components/ProductHeader";
import BasicLayout from "@/layouts/BasicLayout";
import React from "react";

function ProductDetailPage({ product }) {
  const detail = product[0];
  const headerDetail = "상품 상세 정보 페이지";

  return (
    <BasicLayout>
      <ProductHeader title={headerDetail} />
      <ProductDetail product={detail}></ProductDetail>
    </BasicLayout>
  );
}

export async function getServerSideProps(context) {
  try {
    const { data } = await fetchProductById(context.params.id);
    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    return {
      props: {
        product: {},
      },
    };
  }
}

export default ProductDetailPage;
