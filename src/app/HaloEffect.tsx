"use client";
import React, { useEffect, useRef, useState } from "react";
// const HALO = require("https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.halo.min.js");
import HALO from "vanta/dist/vanta.halo.min";

const HaloEffect = () => {
	// const [vantaEffect, setVantaEffect] = useState<any>(null);
	// const myRef = useRef(null);

	// useEffect(() => {
	// 	if (!vantaEffect) {
	// 		setVantaEffect(
	// 			HALO({
	// 				el: myRef.current,
	// 				mouseControls: true,
	// 				touchControls: true,
	// 				gyroControls: false,
	// 				minHeight: 200.0,
	// 				minWidth: 200.0,
	// 			})
	// 		);
	// 	}
	// 	return () => {
	// 		if (vantaEffect) vantaEffect.destroy();
	// 	};
	// }, [vantaEffect]);

	useEffect(() => {
		if (typeof window == undefined) return;
		try {
			HALO({
				el: "#halo-effect",
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
			});
		} catch (err) {
			console.error(err);
		}
	}, []);

	return <div id="halo-effect" />;
};

export default HaloEffect;
