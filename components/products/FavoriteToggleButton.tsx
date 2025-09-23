import React from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
const FavoriteToggleButton = ({ productId }: { productId: string }) => {
	return (
		<Button variant="outline" className="p-2 cursor-pointer">
			<FaHeart></FaHeart>
		</Button>
	);
};

export default FavoriteToggleButton;
