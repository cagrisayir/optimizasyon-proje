import React from 'react';
import openDoor from '../images/open-door.png';
import goat from '../images/goat.png';
import car from '../images/car.png';
import { Image } from '@mantine/core';

const OpenDoor = ({ image }) => {
	return (
		<div>
			<Image src={openDoor} alt='open door' fit='contain' height={240} />
			<Image
				src={image === 'car' ? car : goat}
				fit='contain'
				alt='inside'
				height={30}
			/>
		</div>
	);
};

export default OpenDoor;
