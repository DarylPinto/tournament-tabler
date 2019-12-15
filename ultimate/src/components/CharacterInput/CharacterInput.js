import React, { useState } from "react";
import chunk from "lodash.chunk";
import s from "./CharacterInput.module.scss";
import Modal from "../Modal";
import StockIcon from "../StockIcon";
import characterData from "../../data/characters";

/**
 * CharacterInput Component
 *
 * Custom input field for selecting a smash character.
 * includes input box and modal with stock icons
 */

// Chunk the characters into rows similar to the
// in-game character select screen
const characterRows = chunk(characterData, 13);

const CharacterInput = ({ value, onChange }) => {
	const [modalOpen, setModalOpen] = useState(false);

	// When a stock icon is clicked pass the character
	// to the callback `onChange` and close the modal
	const handleStockClick = character => {
		onChange(character);
		setModalOpen(false);
	};

	return (
		<>
			{/* Input box */}
			<div className={s.selectionBox} onClick={() => setModalOpen(true)}>	
				<StockIcon smashTitle="ultimate" character={value} />
			</div>

			{/* <StockIcon smashTitle="ultimate" character="Yoshi" /> */}

			{/* Modal to select character */}
			<Modal isOpen={modalOpen} close={() => setModalOpen(false)}>
				{/* Grid of character stock icons */}
				{characterRows.map((row, i) => (
					<div key={i} className={s.stockRow}>
						{row.map(character => (
							<StockIcon
								key={character}
								smashTitle="ultimate"
								character={character}
								onClick={() => handleStockClick(character)}
							/>
						))}
					</div>
				))}

				{/* Button to clear selected character */}
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
