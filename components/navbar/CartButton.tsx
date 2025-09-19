import React from "react";
import { Button } from "../ui/button";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";
const CartButton = () => {
	const itemsInCart = 10; // Replace with actual cart logic
	return (
		<Button size="icon" variant="outline" asChild className="relative ">
			<Link href="/cart">
				<PiShoppingCartLight />
				<span className="absolute -top-3 -right-3 bg-primary text-white rounded-lg flex items-center justify-center p-1 text-xs">
					{itemsInCart}
				</span>
			</Link>
		</Button>
	);
};

export default CartButton;
