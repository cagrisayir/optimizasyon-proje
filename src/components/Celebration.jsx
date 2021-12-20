import { Fireworks } from 'fireworks/lib/react';

import React from 'react';

const Celebration = () => {
	let fxProps = {
		count: 3,
		interval: 200,
		colors: ['#cc3333', '#4CAF50', '#81C784'],
		calc: (props, i) => ({
			...props,
			x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
			y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
		}),
	};

	return (
		<div>
			<Fireworks {...fxProps} />
			<h1 className='text-green-300 text-3xl'>TEBRİKLEEEERRRR!</h1>
		</div>
	);
};

export default Celebration;
