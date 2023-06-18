"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
	return (
		<header>
			<nav className="sticky top-0 z-10 bg-background backdrop-filter backdrop-blur-md border-b border-slate-800 bg-opacity-30 font-serif">
				<div className="max-w-5xl mx-auto px-4 py-3">
					<div className="flex items-center justify-between sm:justify-center text-slate-400 text-xs tracking-widest font-semibold gap-x-4">
						<button className="flex sm:hidden items-center gap-2 text-xs font-semibold tracking-widest text-white floating-nav">
							<Icon
								icon="iconamoon:menu-burger-horizontal-duotone"
								className="text-primary text-lg"
							/>
							Menu
						</button>
						<Link
							href="/about"
							className="hover:text-slate-200 hidden sm:inline floating-nav"
						>
							About
						</Link>
						<Link
							href="/service"
							className="hover:text-slate-200 hidden sm:inline floating-nav"
						>
							Service
						</Link>
						<Link
							href="/"
							className="mx-4"
						>
							<Image
								src={"/favicon.svg"}
								height={35}
								width={35}
								alt="Defined Solutions"
								priority
								className="logo-here"
							/>
						</Link>
						<Link
							href="/work"
							className="hover:text-slate-200 hidden sm:inline floating-nav"
						>
							Work
						</Link>
						<Link
							href="/contact"
							className="hover:text-slate-200 text-primary sm:text-slate-400 floating-nav"
						>
							Contact
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
