import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsGrid = ({ products }: { products: Product[] }) => {
	return (
		<div className="grid pt-12 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => {
				const dollarsAmount = formatCurrency(product.price);
				return (
					<article key={product.id} className="group relative">
						<Link href={`/products/${product.id}`}>
							<Card className="transform group-hover:shadow-xl transition-shadow duration-500  py-0">
								<CardContent className="p-4">
									<div className="relative h-64 md:h-48 rounded overflow-hidden ">
										<Image
											src={product.image}
											alt={product.name}
											fill
											sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
											priority
											className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
										/>
									</div>
									<div className="mt-4 text-center">
										<h2 className="text-lg capitalize">{product.name}</h2>
										<p className="text-muted-foreground mt-2">
											{dollarsAmount}
										</p>
									</div>
								</CardContent>
							</Card>
						</Link>
						<div className="absolute top-8 right-8">
							<FavoriteToggleButton
								productId={product.id}
							></FavoriteToggleButton>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default ProductsGrid;
