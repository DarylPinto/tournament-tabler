import React, { Fragment } from "react";
import s from "./toasts.module.scss";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Toasts = () => {
	const notifications = useSelector(state => state.notifications);
	const transitionClass = {
		enter: s.toastEnter,
		enterActive: s.toastEnterActive,
		exit: s.toastExit,
		exitActive: s.toastExitActive
	};

	return (
		<div className={s.toastContainer}>
			<TransitionGroup component="ul">
				{notifications.map(n => (
					<CSSTransition key={n.id} timeout={500} classNames={transitionClass}>
						<li className={s.toast}>{n.content}</li>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default Toasts;
