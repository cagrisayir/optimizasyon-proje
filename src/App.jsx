import React, { useState } from 'react';
import Door from './components/Door';
import OpenDoor from './components/OpenDoor';
import { Modal } from '@mantine/core';
import Hint from './components/Hint';

const car = Math.floor(Math.random() * 3) + 1; // araba
const App = () => {
	const [isOpenFirst, setIsOpenFirst] = useState(false);
	const [isOpenSecond, setIsOpenSecond] = useState(false);
	const [isOpenThird, setIsOpenThird] = useState(false);
	const [opened, setOpened] = useState(false);
	const [disableButton, setDisableButton] = useState(false);
	const [choosenNumber, setChoosenNumber] = useState(null);
	const [openedHint, setOpenedHint] = useState(false);
	const [disableDoor, setDisableDoor] = useState(true);

	let numbers = [1, 2, 3];

	const handleDoorClickFirst = () => {
		setIsOpenFirst(!isOpenFirst);
		setDisableDoor(true);
	};
	const handleDoorClickSecond = () => {
		setIsOpenSecond(!isOpenSecond);
		setDisableDoor(true);
	};
	const handleDoorClickThird = () => {
		setIsOpenThird(!isOpenThird);
		setDisableDoor(true);
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
			{choosenNumber && `Se??ti??in kap??: ${choosenNumber}`}
			<Modal
				opened={opened}
				centered
				onClose={() => setOpened(false)}
				title='Bir kap?? se??!'
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
			<button
				className='py-2 px-4 text-white bg-blue-400 rounded-lg disabled:bg-gray-300 disabled:text-gray-500'
				onClick={() => {
					setOpened(true);
					setDisableDoor(false);
				}}
				disabled={disableButton}
			>
				Oyuna Ba??la
			</button>
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
			<Modal
				opened={openedHint}
				title='??pucu'
				onClose={() => setOpenedHint(false)}
			>
				<Hint />
			</Modal>
			<button
				onClick={() => setOpenedHint(true)}
				className={
					!disableButton
						? 'hidden'
						: 'p-4 text-white bg-indigo-500 rounded-xl'
				}
			>
				??pucu!
			</button>
		</div>
	);
};

export default App;
