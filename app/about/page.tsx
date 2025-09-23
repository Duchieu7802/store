import { HiSparkles } from "react-icons/hi";

const AboutPage = () => {
	return (
		<section className="py-4 lg:py-10 px-4">
			{/* Title */}
			<h1 className="flex items-center justify-center gap-2 text-4xl font-bold mb-12">
				<HiSparkles className="text-yellow-400" />
				<span>About Us</span>
			</h1>

			{/* Content */}
			<div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
				<h3 className="font-bold text-xl">
					We believe shopping is more than just a transaction – it’s an
					experience.
				</h3>

				<p>
					Store was created with the mission to bring high-quality products,
					fair prices, and attentive service to every customer.
				</p>

				<p>From the very beginning, our vision has been simple:</p>

				<ul className="list-disc list-outside pl-6 space-y-3 marker:text-yellow-500 marker:text-xl">
					<li className="font-semibold">
						Make shopping easier and more enjoyable.
					</li>
					<li className="font-semibold">Provide products you can trust.</li>
					<li className="font-semibold">
						Build a community that values quality and connection.
					</li>
				</ul>

				<p>
					With a passionate team behind the scenes, we’re committed to putting
					our customers at the heart of everything we do. Whether you’re here
					for everyday essentials or something truly unique, we want every visit
					to feel simple, secure, and inspiring.
				</p>

				<p>
					Join us on this journey – and let’s make shopping an experience worth
					remembering.
				</p>
			</div>
		</section>
	);
};

export default AboutPage;
