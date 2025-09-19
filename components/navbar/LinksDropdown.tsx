import React from "react";
import { Button } from "@/components/ui/button";
import { FiAlignJustify } from "react-icons/fi";
import { links } from "@/utils/links";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LinksDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex gap-4 max-w-[100px]">
					<FiAlignJustify className="w-8 h-8" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40" align="start" sideOffset={10}>
				{links.map((link) => (
					<DropdownMenuItem key={link.href} asChild>
						<a href={link.href} className="capitalize w-full text-base">
							{link.label}
						</a>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LinksDropdown;
