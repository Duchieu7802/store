import React from "react";

import { SiDbt } from "react-icons/si";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
	return (
		<Button size="icon" asChild>
			<Link href="/">
				<SiDbt className="w-8 h-8" />
			</Link>
		</Button>
	);
};

export default Logo;
