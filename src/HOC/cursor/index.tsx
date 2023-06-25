"use client";
import React from "react";

const Cursor: React.FC = () => {
	const [position, setPosition] = React.useState({ x: 0, y: 0 });
	const [mobile, setMobile] = React.useState(true);

	const isMobile = () =>
		typeof window !== "undefined" &&
		Boolean(
			window?.navigator?.userAgent?.match?.(/Android/i) ||
				window?.navigator?.userAgent?.match?.(/webOS/i) ||
				window?.navigator?.userAgent?.match?.(/iPhone/i) ||
				window?.navigator?.userAgent?.match?.(/iPad/i) ||
				window?.navigator?.userAgent?.match?.(/iPod/i) ||
				window?.navigator?.userAgent?.match?.(/BlackBerry/i) ||
				window?.navigator?.userAgent?.match?.(/Windows Phone/i)
		);

	const handleMouseMove = (event: any) => {
		const pos = { x: event.clientX, y: event.clientY };
		const whiteOne = document.getElementById("white-cursor");
		whiteOne!.style.top = `${pos.y - 48}px`;
		whiteOne!.style.left = `${pos.x - 48}px`;
		const blueOne = document.getElementById("blue-cursor");
		blueOne!.style.top = `${pos.y - 6}px`;
		blueOne!.style.left = `${pos.x + 23}px`;
		const pinkOne = document.getElementById("pink-cursor");
		pinkOne!.style.top = `${pos.y - 50}px`;
		pinkOne!.style.left = `${pos.x + 25}px`;
		setPosition(pos);
	};

	React.useEffect(() => {
		setMobile(isMobile());
	}, [position]);

	React.useEffect(() => {
		// document.addEventListener("mousemove", (e) =>
		// 	setTimeout(() => handleMouseMove(e), 100)
		// );
		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<>
			<div
				className={`blur-2xl ${
					mobile ? "hidden" : "fixed"
				} h-screen w-screen opacity-40 overflow-hidden`}
			>
				<div
					id="white-cursor"
					className="bg-white rounded-full h-24 w-24"
					style={{
						position: "absolute",
						top: position.y - 48,
						left: position.x - 48,
						transition: "ease-out 0.6s",
					}}
				/>
				<div
					id="blue-cursor"
					className="bg-primary rounded-full h-24 w-24"
					style={{
						position: "absolute",
						top: position.y - 6,
						left: position.x + 23,
						transition: "ease-out 0.8s",
					}}
				/>
				<div
					id="pink-cursor"
					className="bg-secondary rounded-full h-24 w-24"
					style={{
						position: "absolute",
						top: position.y - 50,
						left: position.x + 25,
						transition: "ease-out 1s",
					}}
				/>
			</div>
			<div
				className={`${
					mobile ? "hidden" : "fixed"
				} h-full w-full blur-[0.7px] bg-[url('/grid-here.svg')] backdrop-blur-3xl bg-repeat bg-center overflow-hidden`}
				style={{
					backgroundSize: "250px 125px",
				}}
			/>
		</>
	);
};

export default Cursor;
