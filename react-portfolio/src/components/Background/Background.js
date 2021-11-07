import React, { useEffect, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { StyledBackground } from './Background.styled';

export default function Background() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = React.createRef();

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				NET({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 300.0,
					minWidth: 300.0,
					scale: 1,
					scaleMobile: 1.0,
					color: 0x77ff,
					points: 7.0,
					maxDistance: 80.0,
					spacing: 40.0,
				})
			);
		}

		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect, vantaRef]);

	return <StyledBackground ref={vantaRef} />;
}
