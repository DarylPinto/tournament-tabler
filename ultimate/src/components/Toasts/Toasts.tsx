import React, { useMemo } from "react";
import s from "./toasts.module.scss";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Toasts = () => {
	const notifications = useSelector(state => state.notifications);

	return (
		<TransitionGroup component="ul">
			{notifications.map(n => (
				<CSSTransition timeout={300} classNames={{ ...s }} key={n.id}>
					<li>{n.content}</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default Toasts;
