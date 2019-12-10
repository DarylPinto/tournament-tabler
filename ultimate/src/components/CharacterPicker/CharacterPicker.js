import React, { useState } from "react";
import s from "./CharacterPicker.module.scss";
import Modal from "../Modal";
import characterData from "../../data/characters";

const CharacterPicker = ({ value, onChange }) => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div>	
			<div className={s.selectionBox} onClick={() => setModalOpen(true)}>
				{value}
			</div>
			<Modal isOpen={modalOpen} close={() => setModalOpen(false)}>
				{characterData.map(character => <p>{character}</p>)}
			</Modal>
		</div>
	);
};

export default CharacterPicker;
