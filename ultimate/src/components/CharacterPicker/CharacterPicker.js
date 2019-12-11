import React, { useState } from "react";
import s from "./CharacterPicker.module.scss";
import Modal from "../Modal";
import characterData from "../../data/characters";

const CharacterPicker = ({ value, onChange }) => {
	const [modalOpen, setModalOpen] = useState(true);

	return (
		<div>
			<div className={s.selectionBox} onClick={() => setModalOpen(true)}>
				{value}
			</div>
			<img src="images/stocks/ultimate/Yoshi.png" alt="" />
			<Modal isOpen={modalOpen} close={() => setModalOpen(false)}>
				{characterData.map(character => (
					<img
						src={`images/stocks/ultimate/${character}.png`}
						alt={character}
						className={s.stockIcon}
					/>
				))}
			</Modal>
		</div>
	);
};

export default CharacterPicker;
