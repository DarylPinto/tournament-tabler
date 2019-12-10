import React from "react";
import s from "./Modal.module.scss";
import useEventListener from "@use-it/event-listener";

const Modal = ({isOpen, close, children}) => {
	// Close modal when esc key pressed
	useEventListener(
		"keydown",
		e => {
			if (e.keyCode === 27 && isOpen) close();
		},
		document
	);

	if(!isOpen) return null;

	return (
		<div className={s.modalShade} onClick={close}>
			<div className={s.modal} onClick={e => e.stopPropagation()}>
				<span className={s.closeX} onClick={close}>✕</span>
				{children}
			</div>
		</div>
	);
};

export default Modal;
