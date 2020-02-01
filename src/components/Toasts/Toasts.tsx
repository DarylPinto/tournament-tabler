import React from "react";
import s from "./toasts.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ActionCreators as reduxUndoActionCreators } from "redux-undo";
import { destroyNotification } from "../../store/slices/notifications";

const Toasts = () => {
	const notifications = useSelector(state => state.notifications);
	const dispatch = useDispatch();
	const transitionClass = {
		enter: s.toastEnter,
		enterActive: s.toastEnterActive,
		exit: s.toastExit,
		exitActive: s.toastExitActive
	};

	const handleUndoClick = notificationId => {
		dispatch(reduxUndoActionCreators.undo());
		dispatch(destroyNotification({ id: notificationId }));
	};

	return (
		<div className={s.toastContainer}>
			<TransitionGroup component="ul">
				{notifications.map(n => (
					<CSSTransition key={n.id} timeout={500} classNames={transitionClass}>
						<li className={s.toast}>
							{n.content}
							{n.isUndoable && (
								<button
									className={s.undoBtn}
									onClick={() => handleUndoClick(n.id)}
								>
									Undo	
								</button>
							)}
						</li>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default Toasts;
