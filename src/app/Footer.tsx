"use client";
import { InlineIcon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gradient-to-b from-transparent to-35% to-[#0d141cc4] py-20">
			<div className="grid grid-cols-2 divide-x-2 divide-slate-700 font-serif tracking-[0.17rem]">
				<div className="flex flex-col items-end mr-3 py-3 gap-2 text-xs [&>a]:text-slate-300 [&>a:hover]:text-white">
					<Link href={"#"}>LinkedIn</Link>
					<Link href={"#"}>Facebook</Link>
					<Link href={"#"}>YouTube</Link>
				</div>
				<div className="flex flex-col pl-4 py-3 gap-2 text-xs [&>a]:text-slate-300 [&>a:hover]:text-white">
					<Link href={"#"}>Dribble</Link>
					<Link href={"#"}>Instagram</Link>
					<Link href={"#"}>Behance</Link>
				</div>
			</div>
			<p className="w-fit mx-auto text-center text-sm sm:pl-10 mt-16 flex flex-col items-center gap-3 sm:block">
				Designed By{" "}
				<InlineIcon
					icon={"pixelarticons:heart"}
					className="text-pink-600 inline mx-1"
				/>{" "}
				<span className="font-extrabold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
					Defined Solution
				</span>
			</p>
		</footer>
	);
};

export default Footer;
