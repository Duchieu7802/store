import React from "react";
import { Button } from "@/components/ui/button";

import { links } from "@/utils/links";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import UserIcon from "./UserIcon";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import SignOutLink from "./SignOutLink";
import { auth } from "@clerk/nextjs/server";

async function LinksDropdown() {
	const { userId } = await auth();
	const isAdmin = userId === process.env.ADMIN_USER_ID;
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex gap-4 max-w-[100px]">
					<LuAlignLeft className="w-6 h-6" />
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-48" align="start" sideOffset={10}>
				<SignedOut>
					<DropdownMenuItem>
						<Link href="sign-in" className="w-full text-left">
							Sign In
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href="sign-up" className="w-full text-left">
							Sign Up
						</Link>
					</DropdownMenuItem>
				</SignedOut>
				<SignedIn>
					{links.map((link) => {
						if (link.label === "dashboard" && !isAdmin) return null;
						return (
							<DropdownMenuItem key={link.href}>
								<Link href={link.href} className="capitalize w-full">
									{link.label}
								</Link>
							</DropdownMenuItem>
						);
					})}
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignOutLink />
					</DropdownMenuItem>
				</SignedIn>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
export default LinksDropdown;
