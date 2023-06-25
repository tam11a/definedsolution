"use client";
import React, { useEffect, useRef, useState } from "react";
// const HALO = require("https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.halo.min.js");
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

const HaloEffect = () => {
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const myRef = useRef(null);

	useEffect(() => {
		// const threeScript = document.createElement("script");
		if (!vantaEffect) {
			// threeScript.setAttribute("id", "threeScript");
			// threeScript.setAttribute(
			// 	"src",
			// 	"https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
			// );
			// document.getElementsByTagName("head")[0].appendChild(threeScript);
			setVantaEffect(
				HALO({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					THREE: THREE,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
			// if (threeScript) {
			// 	threeScript.remove();
			// }
		};
	}, [vantaEffect]);

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
