import React from "react";
import s from "./Modal.module.scss";
import useEventListener from "@use-it/event-listener";

/**
 * Modal Component
 *
 * Generic modal for displaying child content
 */

interface Props {
	isOpen: Boolean;
	close: () => any;
	children: any;
}

const Modal = ({ isOpen, close, children }: Props) => {
	// Close modal when esc key pressed
	useEventListener(
		"keydown",
		(e: React.KeyboardEvent) => {
			if (e.keyCode === 27 && isOpen) close();
		},
		document.body
	);

	// Render nothing if closed
	if (!isOpen) return null;

	// Render modal if open
	return (
		<div className={s.modalShade} onClick={close}>
			<div className={s.modal} onClick={e => e.stopPropagation()}>
				<span className={s.closeX} onClick={close}>
					✕
				</span>
				{children}
			</div>
		</div>
	);
};

export default Modal;
