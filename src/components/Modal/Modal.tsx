import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import c from "classnames";
import s from "./Modal.module.scss";
import useEventListener from "@use-it/event-listener";

/**
 * Modal Component
 *
 * Generic modal for displaying child content
 */

const TRANSITION_TIME = 150;
const MINIMUM_BROWSER_TRANSITION_TIME = 25;

interface Props {
	isOpen: boolean;
	close: () => any;
	children: any;
}

const Modal = ({ isOpen, close, children }: Props) => {
	const [visible, setVisible] = useState(false);
	const [rendered, setRendered] = useState(false);

	// Close modal when esc key pressed
	useEventListener(
		"keydown",
		(e: React.KeyboardEvent) => {
			if (e.keyCode === 27 && isOpen) close();
		},
		document.body
	);

	// Side effects for when `isOpen` prop changes
	// (Adjusting whether modal should be rendered and visible, locking scroll)
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "visible";
		if (isOpen) {
			setRendered(true);
			setTimeout(() => setVisible(true), MINIMUM_BROWSER_TRANSITION_TIME);
		} else {
			setVisible(false);
			setTimeout(() => setRendered(false), TRANSITION_TIME);
		}
		return () => (document.body.style.overflow = "visible");
	}, [isOpen]);

	// Render nothing if closed
	if (!rendered) return null;

	// Render modal if open
	return createPortal(
		<div
			className={c(s.modalShade, { [s.visible]: visible })}
			style={{ transition: `${TRANSITION_TIME}ms` }}
			onClick={close}
		>
			<div className={s.modal} onClick={e => e.stopPropagation()}>
				<span className={s.closeX} onClick={close}>
					✕
				</span>
				{children}
			</div>
		</div>,
		document.getElementById("modal-root")
	);
};

export default Modal;
