import React, { useState } from 'react';
import Door from './components/Door';
import OpenDoor from './components/OpenDoor';
import { Modal, Button } from '@mantine/core';

const car = Math.floor(Math.random() * 3) + 1; // araba
const App = () => {
	const [isOpenFirst, setIsOpenFirst] = useState(false);
	const [isOpenSecond, setIsOpenSecond] = useState(false);
	const [isOpenThird, setIsOpenThird] = useState(false);
	const [opened, setOpened] = useState(false);
	const [choosenNumber, setChoosenNumber] = useState(null);
	const [disableButton, setDisableButton] = useState(false);
	const [disableDoor, setDisableDoor] = useState(true);

	let numbers = [1, 2, 3];

	const handleDoorClickFirst = () => {
		setIsOpenFirst(!isOpenFirst);
	};
	const handleDoorClickSecond = () => {
		setIsOpenSecond(!isOpenSecond);
	};
	const handleDoorClickThird = () => {
		setIsOpenThird(!isOpenThird);
	};

	const handleNumberButtonClick = (e) => {
		e.preventDefault();
		setChoosenNumber(e.target.value);
		setOpened(false);
		handleOpenFirstDoor(e.target.value);
	};

	const handleOpenFirstDoor = (secilen) => {
		if (secilen === car) {
			numbers = numbers.filter((number) => number !== secilen);
			let number = numbers[Math.floor(Math.random() * 2)];
			if (number === 1) {
				setIsOpenFirst(true);
			} else if (number === 2) {
				setIsOpenSecond(true);
			} else if (number === 3) {
				setIsOpenThird(true);
			}
		} else {
			numbers = numbers.filter((number) => number !== Number(secilen));
			numbers = numbers.filter((number) => number !== car);

			let number = numbers.pop();

			if (number === 1) {
				setIsOpenFirst(true);
			} else if (number === 2) {
				setIsOpenSecond(true);
			} else if (number === 3) {
				setIsOpenThird(true);
			}
		}
		setDisableButton(true);
	};

	return (
		<div className='h-screen w-screen flex flex-col justify-center items-center'>
			{choosenNumber && `Seçtiğin kapı: ${choosenNumber}`}
			<Modal
				opened={opened}
				centered
				onClose={() => setOpened(false)}
				title='Bir kapı seç!'
			>
				<div className='flex gap-4 w-full justify-center items-center'>
					<button
						className='p-4 bg-blue-500 rounded-lg text-white'
						value={1}
						onClick={handleNumberButtonClick}
					>
						1
					</button>
					<button
						className='p-4 bg-blue-500 rounded-lg text-white'
						value={2}
						onClick={handleNumberButtonClick}
					>
						2
					</button>
					<button
						className='p-4 bg-blue-500 rounded-lg text-white'
						value={3}
						onClick={handleNumberButtonClick}
					>
						3
					</button>
				</div>
			</Modal>
			<Button
				onClick={() => {
					setOpened(true);
					setDisableDoor(false);
				}}
				disabled={disableButton}
			>
				Oyuna Başla
			</Button>
			<div className='flex flex-row'>
				<button
					disabled={disableDoor}
					className='flex flex-col justify-center items-center'
					onClick={handleDoorClickFirst}
				>
					{isOpenFirst ? (
						<OpenDoor image={car === 1 ? 'car' : 'goat'} />
					) : (
						<Door />
					)}
					<p className='text-white font-sans font-medium text-3xl'>
						1
					</p>
				</button>
				<button
					disabled={disableDoor}
					className='flex flex-col justify-center items-center'
					onClick={handleDoorClickSecond}
				>
					{isOpenSecond ? (
						<OpenDoor image={car === 2 ? 'car' : 'goat'} />
					) : (
						<Door />
					)}
					<p className='text-white font-sans font-medium text-3xl'>
						2
					</p>
				</button>
				<button
					disabled={disableDoor}
					className='flex flex-col justify-center items-center'
					onClick={handleDoorClickThird}
				>
					{isOpenThird ? (
						<OpenDoor image={car === 3 ? 'car' : 'goat'} />
					) : (
						<Door />
					)}
					<p className='text-white font-sans font-medium text-3xl'>
						3
					</p>
				</button>
			</div>
		</div>
	);
};

export default App;
