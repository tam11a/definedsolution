"use client";
import Image from "next/image";
import services from "@/util/services";
import Link from "next/link";
import React from "react";
import Showcase from "./Showcase";
import Contact from "./Contact";
import { gsap } from "gsap";
import SplitType from "split-type";
import AOS from "aos";

import "aos/dist/aos.css";

import dynamic from "next/dynamic";
import HaloEffect from "./HaloEffect";
// const HaloEffect = dynamic(() => import("./HaloEffect"), {
// 	ssr: false,
// });
// import Head from "next/head";

export default function Home() {
	React.useEffect(() => {
		AOS.init({
			duration: 1500,
		});
		// desired effect, but needs to be seamless
		// splash animation
		gsap.from(".hero-logo", {
			scale: 0,
			opacity: 0,
			duration: 3,
			ease: "power4.inOut",
			// delay: 7,
		});
		new SplitType(".hero-letters");
		gsap.from(".hero-letters .char", {
			y: "100%",
			opacity: 0,
			duration: 1,
			stagger: 0.1,
			ease: "power4.inOut",
			delay: 2,
		});
		gsap.from(".hero-image", {
			scale: 0,
			opacity: 0,
			duration: 4,
			ease: "power4.inOut",
			delay: 7,
		});
		gsap.from(".hero-marquee", {
			scale: 0,
			opacity: 0,
			duration: 3,
			ease: "power4.inOut",
			delay: 6,
		});
		// marquee timeline animation
		const tl1 = gsap.timeline({
			// repeat: -1,
			defaults: {
				ease: "none",
			},
		});
		const tl2 = gsap.timeline({
			// repeat: -1,
			defaults: {
				ease: "none",
			},
		});
		const tl3 = gsap.timeline({
			// repeat: -1,
			defaults: {
				ease: "none",
			},
		});
		tl1.fromTo(
			".card-1",
			{
				x: 0,
				duration: 40,
			},
			{
				duration: 40,
				x: document.getElementById("mrq-1")?.scrollWidth || 0,
				onComplete: () => {
					if (tl1.reversed()) {
						tl1.play(0);
					} else {
						tl1.reverse(40);
					}
				},
				onReverseComplete: () => {
					if (tl1.reversed()) {
						tl1.play(0);
					} else {
						tl1.reverse(40);
					}
				},
			}
		);
		tl2.fromTo(
			".card-2",
			{
				x: document.getElementById("mrq-2")?.scrollWidth || 0,
				duration: 45,
			},
			{
				x: 0,
				duration: 45,
				onComplete: () => {
					if (tl2.reversed()) {
						tl2.play(0);
					} else {
						tl2.reverse(45);
					}
				},
				onReverseComplete: () => {
					if (tl2.reversed()) {
						tl2.play(0);
					} else {
						tl2.reverse(45);
					}
				},
			}
		);
		tl3.fromTo(
			".card-3",
			{
				x: 0,
				duration: 50,
			},
			{
				x: document.getElementById("mrq-3")?.scrollWidth || 0,
				duration: 50,
				onComplete: () => {
					if (tl3.reversed()) {
						tl3.play(0);
					} else {
						tl3.reverse(50);
					}
				},
				onReverseComplete: () => {
					if (tl3.reversed()) {
						tl3.play(0);
					} else {
						tl3.reverse(50);
					}
				},
			}
		);
	}, []);

	return (
		<>
			{/* <Head>
				<script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.halo.min.js"></script>
			</Head> */}
			<main className="relative">
				{/* Splash */}
				<h1 className="hero-letters relative text-2xl sm:text-4xl md:text-5xl max-w-lg md:max-w-3xl text-center mx-auto mt-[15vh] !leading-snug px-3">
					<Image
						src={"/title.svg"}
						height={200}
						width={130}
						alt="defined solution"
						className="hero-logo mx-auto mb-6"
					/>
					<span className="z-10 leading-snug">
						From Pixels to{" "}
						<span className="font-semibold text-secondary">Perfection</span>:{" "}
						<br /> Crafting Captivating{" "}
						<span className="font-semibold text-primary">Websites</span> and{" "}
						<span className="font-semibold text-primary">Digital</span>{" "}
						Solutions
					</span>

					<HaloEffect />
				</h1>
				{/* Marqueee */}
				<div className="hero-marquee flex flex-col overflow-hidden relative mt-32 py-14 mix-blend-lighten">
					<div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-background to-background via-transparent from-10% to-90%" />
					<div
						id="mrq-1"
						className="flex flex-row justify-end overflow-hidden gap-3 py-[6px] font-serif tracking-widest text-xs sm:text-sm"
					>
						{services?.services?.slice?.(0, 20)?.map?.((service) => (
							<p
								key={service}
								className={`card-1 whitespace-nowrap px-4 font-bold py-2 ${
									service.at(-1) === "y"
										? "bg-primary text-background font-bold"
										: service.at(-1) === "y" || service.at(-1) === "e"
										? "bg-secondary text-background font-bold"
										: "bg-[#202730]"
								}  rounded shadow shadow-black`}
							>
								{service}
							</p>
						))}
					</div>
					<div
						id="mrq-2"
						className=" flex flex-row justify-end overflow-hidden gap-3 py-[6px] font-serif tracking-widest text-xs sm:text-sm"
					>
						{services?.services?.slice?.(20, 50)?.map?.((service) => (
							<p
								key={service}
								className={`card-2 whitespace-nowrap px-4 font-bold py-2 ${
									service.at(-1) === "t"
										? "bg-primary text-background font-bold"
										: service.at(-1) === "y" || service.at(-1) === "e"
										? "bg-secondary text-background font-bold"
										: "bg-[#202730]"
								}  rounded shadow shadow-black`}
							>
								{service}
							</p>
						))}
					</div>
					<div
						id="mrq-3"
						className="flex flex-row justify-end overflow-hidden gap-3 py-[6px] font-serif tracking-widest text-xs sm:text-sm"
					>
						{services?.services?.slice?.(50)?.map?.((service) => (
							<p
								key={service}
								className={`card-3 whitespace-nowrap px-4 font-bold py-2 ${
									service.at(-1) === "t"
										? "bg-primary text-background font-bold"
										: service.at(-1) === "y" || service.at(-1) === "e"
										? "bg-secondary text-background font-bold"
										: "bg-[#202730]"
								}  rounded shadow shadow-black`}
							>
								{service}
							</p>
						))}
					</div>
				</div>

				{/* About */}
				<div data-aos="fade-up">
					<p className="max-w-sm text-center mx-auto mt-5 text-sm sm:text-base">
						At Defined Solution, We attract & retain quality customers with a{" "}
						<span className="text-secondary font-bold">
							custom designed website
						</span>
						, that does not break the bank.
					</p>
				</div>

				{/* Reels */}
				<div className="flex flex-row items-center gap-2 max-w-6xl mx-auto mt-10 px-4 relative">
					<div
						className="bg-[url(/reels/left.jpg)] hidden sm:block h-80 lg:h-96 w-[190px] lg:w-[280px] bg-cover bg-center rounded-xl"
						data-aos="zoom-in-left"
					/>
					<div
						className="bg-[url(/reels/center.jpg)] h-80 lg:h-96 flex-1 bg-cover bg-center rounded-xl"
						data-aos="zoom-in-down"
					/>
					<div
						className="bg-[url(/reels/right.jpg)] hidden sm:block h-80 lg:h-96 w-[190px] lg:w-[280px] bg-cover bg-center rounded-xl"
						data-aos="zoom-in-right"
					/>
					<div className="absolute bottom-0 translate-y-[55%] translate-x-8 text-[6rem] md:text-[10rem] font-koulen">
						<div
							className="opacity-60"
							data-aos="fade-right"
						>
							REELS
						</div>
						<Image
							src={"/polygon.png"}
							height={30}
							width={30}
							alt=""
							className="absolute top-1/2 right-0 translate-x-14"
						/>
					</div>
				</div>

				{/* What We Do */}
				<div className="max-w-4xl mx-auto mt-32 px-4">
					<div
						className="text-2xl text-justify mb-16"
						data-aos="fade-up"
					>
						<span className="min-w-[20vw] mr-5 inline-block text-base text-secondary font-bold">
							What We Do
						</span>{" "}
						We believe that we can live a world where every product or service
						has an easy to use experience on all platforms. And our mission is
						to make it happen.
					</div>
					<div className="flex flex-col gap-6">
						<div className="w-full h-[2px] bg-slate-800 my-2" />
						{services.whatWeDo?.map?.((what, index) => (
							<React.Fragment key={index}>
								<div
									className="flex flex-col md:flex-row gap-7 justify-between"
									data-aos="fade-up"
								>
									<p className="text-2xl font-bold">
										<span className="text-secondary font-extrabold">/</span>{" "}
										{index + 1 < 10 ? <>0{index + 1}</> : index + 1}
									</p>
									<p className="font-koulen text-5xl max-w-[243px] bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text">
										{what.title}
									</p>
									<div className="max-w-lg flex flex-col justify-between gap-5">
										<p className="font-serif text-sm text-justify">
											{what.content}
										</p>
										{/* <Link
											href={what.to}
											className="text-xs text-primary tracking-[0.25rem] font-bold "
										>
											VIEW PROJECTS
										</Link> */}
									</div>
								</div>
								<div
									className="w-full h-[2px] bg-slate-800 my-2"
									data-aos="fade-down"
								/>
							</React.Fragment>
						))}
					</div>
				</div>

				{/* Showcase */}
				<div className="relative max-w-4xl mx-auto mt-24 px-3 -mb-6 md:-mb-12 z-10">
					<div className="relative w-fit text-[5rem] md:text-[8rem] font-koulen ml-6">
						<div
							className="opacity-60"
							style={{
								lineHeight: 0.9,
							}}
							data-aos="fade-right"
						>
							<p>OUR</p>
							<p>SHOWCASE</p>
						</div>
						<Image
							src={"/polygon.png"}
							height={30}
							width={30}
							alt=""
							className="absolute top-1/2 right-0 translate-x-14"
						/>
					</div>
				</div>
				<Showcase />

				{/* Contact */}
				<div className="max-w-4xl mx-auto mt-32">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-4">
						<div
							className="text-[5rem] font-koulen"
							style={{
								lineHeight: 0.9,
							}}
							data-aos="fade-right"
						>
							<p>Say</p>
							<p>HELLO,</p>
						</div>
						<div
							className="flex flex-row sm:items-end sm:justify-end"
							data-aos="fade-up"
						>
							<p className="max-w-xs">
								Feel free to contact us. We will get back to you as soon as we
								can.
							</p>
						</div>
					</div>
					<Contact />
				</div>
			</main>
		</>
	);
}
