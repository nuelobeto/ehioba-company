/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { ImSpinner8 } from "react-icons/im";

const Insights = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const benefits = [
		{
			icon: "/assets/images/early_access.png",
			title: "Priority Access",
			text: "Joining our waitlist ensures you’ll have priority access to the EcoFarm Energy platform as soon as it launches. Don’t miss this opportunity to stay ahead of the curve.",
		},
		{
			icon: "/assets/images/exclusive_updates.png",
			title: "Exclusive Updates",
			text: "Stay informed about the latest news, features, and developments regarding our platform. Get insider insights and be the first to know about exciting advancements.",
		},
		{
			icon: "/assets/images/exclusive_opportunities.png",
			title: "Early Access Opportunities",
			text: "As a valued member of our waitlist, you’ll have the chance to participate in beta testing and provide valuable feedback. Help shape the future of EcoFarm Energy and make a real impact.",
		},
	];

	const eventsImg = [
		"/assets/images/insight_page_1.jpg",
		"/assets/images/insight_page_2.jpg",
		"/assets/images/insight_page_3.jpg",
		"/assets/images/insight_page_4.jpg",
		"/assets/images/insight_page_5.jpg",
		"/assets/images/insight_page_6.jpg",
	];

	emailjs.init("8O5VNpUZ4qhHc44MY");

	const sendEmail = (e: any) => {
		e.preventDefault();

		const emailParams = {
			sender: email,
			name: firstName,
			message: `${firstName} joined the EcoFarm Energy Waitlist.`,
		};

		setLoading(true);
		emailjs.send("service_4ddvjnh", "template_dcofa6l", emailParams).then(
			(result) => {
				console.log("Email sent successfully:", result.text);
				setLoading(false);
				toast.success("🎉 Congratulations! you have Joined the Waitlist.");
			},
			(error) => {
				console.log("Error sending email:", error);
				setLoading(false);
				toast.error("An error occured. Try again.");
			}
		);
	};

	useEffect(() => {
		scrollToTop();
	}, []);

	return (
		<>
			<Navbar />
			<header>
				<section className="bg-[url('/assets/images/insight-bg.jpg')] bg-no-repeat bg-cover bg-center pt-[112px] py-[2rem]">
					<div className="max-w-[1000px] mx-auto px-[2rem] py-[4rem] flex flex-col md:flex-row items-center justify-center gap-[4rem]">
						<div className="flex-1 text-center md:text-left">
							<h1 className="text-4xl text-white font-bold mb-[2rem]">
								Welcome to EcoFarm Energy
							</h1>
							<p className="text-neutral-400">
								Our vision is to lead the the charge in transforming the global
								food system by assisting farmers to produce sustainably and
								reducing the cost of food production through the innovative
								application of our renewable energy solutions.
							</p>
						</div>

						<div className="flex-1 max-w-[400px] w-full bg-white rounded-[20px] p-[1.5rem] flex flex-col gap-[1rem]">
							<h2 className="text-xl font-bold">Join the Waitlist</h2>
							<p className="text-sm font-medium">
								Join our waitlist today to secure your spot and become the first
								to experience our exceptional renewable energy solutions.
							</p>
							<input
								type="text"
								placeholder="First Name"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								className="border h-[44px] rounded-[8px] px-[14px] outline-none"
							/>
							<input
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="border h-[44px] rounded-[8px] px-[14px] outline-none"
							/>
							<button
								className="h-[50px] bg-[#2A7C6F] text-white rounded-[8px] mt-[8px] hover:bg-[#2e7569] flex items-center justify-center"
								onClick={sendEmail}>
								{loading ? (
									<ImSpinner8 className="spinner font-[18px]" />
								) : (
									"Join the Waitlist"
								)}
							</button>
						</div>
					</div>
				</section>
			</header>

			<main>
				<section className="">
					<div className="max-w-[1000px] mx-auto px-[2rem] py-[4rem] pb-[6rem]">
						<h2 className="text-3xl text-center font-bold mb-[4rem]">
							Benefits of Joining the Waitlist
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] gap-y-[2rem]">
							{benefits.map((item, index) => (
								<div
									key={index}
									className="flex flex-col items-center gap-[2rem]">
									<div className="w-[48px] h-[48px] flex p-[8px] items-center justify-center rounded-[8px] bg-neutral-200">
										<img src={item.icon} alt="" className="w-full h-full" />
									</div>

									<div className="flex flex-col gap-[1rem] items-center text-center">
										<h3 className="font-bold">{item.title}</h3>
										<p>{item.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="bg-gray-50">
					<div className="max-w-[1000px] mx-auto px-[2rem] py-[4rem] pb-[6rem]">
						<h2 className="text-3xl text-center font-bold mb-[4rem]">
							EcoFarm Energy Gallery
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
							{eventsImg.map((img, index) => (
								<img
									key={index}
									src={img}
									alt=""
									className="rounded-[12px] aspect-[1/1.2] object-cover"
								/>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Insights;
