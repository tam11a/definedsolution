"use client";
import { InlineIcon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Showcase: React.FC = () => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 max-w-3xl gap-3 mx-auto px-3 [&>a:hover>img]:opacity-50 [&>a:hover>img]:scale-110 [&>a>img]:transition-all [&>a>img]:duration-700">
			<Link
				href="#"
				className="rounded-md sm:rounded-xl overflow-hidden relative"
			>
				<Image
					src={"/showcase/1.jpg"}
					height={500}
					width={500}
					alt="showcase 1"
					className="h-full relative w-full object-cover"
				/>
				<div className="shadow absolute bg-background bottom-1 sm:bottom-2 left-1 sm:left-2 rounded-full text-xs sm:text-sm bg-opacity-60 font-bold px-2 py-1">
					<InlineIcon
						icon={"icon-park-outline:dribble"}
						className="inline-block mr-1"
					/>
					dribble
				</div>
			</Link>
			<Link
				href="#"
				className="rounded-md sm:rounded-xl sm:col-span-2 sm:row-span-2 overflow-hidden relative"
			>
				<Image
					src={"/showcase/2.jpg"}
					height={500}
					width={500}
					alt="showcase 2"
					className="h-full relative w-full object-cover"
				/>
				<div className="shadow absolute bg-background bottom-1 sm:bottom-2 left-1 sm:left-2 rounded-full text-xs sm:text-sm bg-opacity-60 font-bold px-2 py-1">
					<InlineIcon
						icon={"icon-park-outline:dribble"}
						className="inline-block mr-1"
					/>
					dribble
				</div>
			</Link>
			<Link
				href="#"
				className="rounded-md sm:rounded-xl row-span-2 sm:row-span-4 overflow-hidden relative"
			>
				<Image
					src={"/showcase/3.jpg"}
					height={500}
					width={500}
					alt="showcase 3"
					className="h-full relative w-full object-cover"
				/>
				<div className="shadow absolute bg-background bottom-1 sm:bottom-2 left-1 sm:left-2 rounded-full text-xs sm:text-sm bg-opacity-60 font-bold px-2 py-1">
					<InlineIcon
						icon={"ph:behance-logo-bold"}
						className="inline-block mr-1"
					/>
					behance
				</div>
			</Link>
			<Link
				href="#"
				className="rounded-md sm:rounded-xl overflow-hidden relative"
			>
				<Image
					src={"/showcase/4.jpg"}
					height={500}
					width={500}
					alt="showcase 4"
					className="h-full relative w-full object-cover"
				/>
				<div className="shadow absolute bg-background bottom-1 sm:bottom-2 left-1 sm:left-2 rounded-full text-xs sm:text-sm bg-opacity-60 font-bold px-2 py-1">
					<InlineIcon
						icon={"icon-park-outline:dribble"}
						className="inline-block mr-1"
					/>
					dribble
				</div>
			</Link>
			<Link
				href="#"
				className="rounded-md sm:rounded-xl overflow-hidden relative"
			>
				<Image
					src={"/showcase/5.jpg"}
					height={500}
					width={500}
					alt="showcase 5"
					className="h-full relative w-full object-cover"
				/>
				<div className="shadow absolute bg-background bottom-1 sm:bottom-2 left-1 sm:left-2 rounded-full text-xs sm:text-sm bg-opacity-60 font-bold px-2 py-1">
					<InlineIcon
						icon={"icon-park-outline:dribble"}
						className="inline-block mr-1"
					/>
					dribble
				</div>
			</Link>
			<Link
				href="#"
				className="rounded-md sm:rounded-xl col-span-2 row-span-2 overflow-hidden relative"
			>
				<Image
					src={"/showcase/6.jpg"}
					height={500}
					width={500}
					alt="showcase 6"
					className="h-full relative w-full object-cover"
				/>
				<div className="shadow absolute bg-background bottom-1 sm:bottom-2 left-1 sm:left-2 rounded-full text-xs sm:text-sm bg-opacity-60 font-bold px-2 py-1">
					<InlineIcon
						icon={"pixelarticons:external-link"}
						className="inline-block mr-1"
					/>
					website
				</div>
			</Link>
		</div>
	);
};

export default Showcase;
