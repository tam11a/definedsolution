import { useEffect, useRef, useState } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
// import styles from "./Halo.module.css";

const Halo = () => {
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const vantaContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				HALO({
					el: vantaContainerRef.current,
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: true,
					minHeight: 200.0,
					minWidth: 200.0,
					backgroundColor: 0x111111,
					baseColor: 0x111111,
					amplitudeFactor: 1.3,
					xOffset: 0,
					yOffset: 0,
					size: 0.75,
				})
			);
		}

		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div
			// className={styles.vanta}
			ref={vantaContainerRef}
		/>
	);
};

export default Halo;
