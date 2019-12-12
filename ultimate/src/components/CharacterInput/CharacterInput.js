import React, { useState } from "react";
import chunk from "lodash.chunk";
import s from "./CharacterInput.module.scss";
import Modal from "../Modal";
import characterData from "../../data/characters";

const characterRows = chunk(characterData, 12);

const CharacterInput = ({ value, onChange }) => {
	const [modalOpen, setModalOpen] = useState(false);

	// When a stock icon is clicked pass the character
	// to the callback and close the modal
	const handleStockClick = character => {
		onChange(character);
		setModalOpen(false);
	};

	return (
		<>
			{/* Input box */}
			<div
				className={s.selectionBox}
				onClick={() => setModalOpen(true)}
				style={{
					backgroundImage: value
						? `url(images/stocks/ultimate/${value}.png)`
						: ""
				}}
			/>

			{/* Modal to select character */}
			<Modal isOpen={modalOpen} close={() => setModalOpen(false)}>
				{/* Characters are in rows of 12, similar to in-game CSS */}
				{characterRows.map(row => (
					<div className={s.stockRow}>
						{row.map(character => (
							<img
								src={`images/stocks/ultimate/${character}.png`}
								alt={character}
								className={s.stockIcon}
								onClick={() => handleStockClick(character)}
							/>
						))}
					</div>
				))}

				{/* Button to clear character */}
				<div
					className={s.removeCharacterBtn}
					onClick={() => handleStockClick(null)}
				>
					Remove Character
				</div>
			</Modal>
		</>
	);
};

export default CharacterInput;
