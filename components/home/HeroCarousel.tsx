import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
const carouselImages = [hero1, hero2, hero3, hero4];
const HeroCarousel = () => {
	return (
		<Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
			<CarouselContent>
				{carouselImages.map((image, index) => (
					<CarouselItem key={index}>
						<Card key={index} className="py-2">
							<CardContent className="p-4 ">
								<Image
									src={image}
									alt="hero"
									className="w-full h-[24rem] rounded-md object-cover"
								></Image>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default HeroCarousel;
