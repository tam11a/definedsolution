"use client";
import { InlineIcon } from "@iconify/react";
import React from "react";

const Contact = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:bg-[url('/contact/map.png')] bg-center bg-cover mix-blend-lighten px-4 mt-3">
			<div
				data-aos="fade-up"
				className="relative"
			>
				We at Google map{" "}
				<InlineIcon
					icon={"guidance:up-arrow"}
					className="inline-block text-secondary text-6xl rotate-45 absolute"
				/>
			</div>
			<div className="flex flex-row justify-center sm:justify-end">
				<form
					data-aos="fade-left"
					className="relative sm:max-w-xs flex flex-col gap-5 w-full min-h-[500px] font-serif mt-7"
				>
					<div className="bg-gradient-to-r from-primary to-secondary pb-[2px]">
						<input
							className="w-full h-fit outline-none bg-background p-2 relative placeholder:font-bold placeholder:tracking-wider placeholder:opacity-50"
							placeholder="Name"
						/>
					</div>
					<div className="bg-gradient-to-r from-primary to-secondary pb-[2px]">
						<input
							className="w-full h-fit outline-none bg-background p-2 placeholder:font-bold placeholder:tracking-wider placeholder:opacity-50"
							placeholder="Company Name"
						/>
					</div>
					<div className="bg-gradient-to-r from-primary to-secondary pb-[2px]">
						<input
							className="w-full h-fit outline-none bg-background p-2 placeholder:font-bold placeholder:tracking-wider placeholder:opacity-50"
							placeholder="Email *"
						/>
					</div>
					<div className="bg-gradient-to-r from-primary to-secondary pb-[2px]">
						<input
							className="w-full h-fit outline-none bg-background p-2 placeholder:font-bold placeholder:tracking-wider placeholder:opacity-50"
							placeholder="Phone"
						/>
					</div>
					<div className="bg-gradient-to-r rounded-2xl from-primary to-secondary p-[2px]">
						<div className="bg-background p-2 rounded-2xl">
							<textarea
								placeholder="Tell us about it..."
								className="w-full outline-none bg-transparent p-2 resize-none placeholder:font-bold placeholder:tracking-wider placeholder:opacity-50"
								rows={6}
							></textarea>
							<button className="bg-gradient-to-r from-primary to-secondary text-background hover:bg-opacity-90 font-bold font-serif w-full p-2 text-lg rounded-lg">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
