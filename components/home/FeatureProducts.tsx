import { fetchFeturedProducts } from "@/utils/actions";
import React from "react";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

const FeatureProducts = async () => {
	const products = await fetchFeturedProducts();
	if (!products.length) return <EmptyList />;
	return (
		<section className="my-8">
			<SectionTitle text="Featured Products"></SectionTitle>
			<ProductsGrid products={products}></ProductsGrid>
		</section>
	);
};

export default FeatureProducts;
