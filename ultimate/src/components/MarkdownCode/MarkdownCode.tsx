import React from "react";
import s from "./MarkdownCode.module.scss";
import { useSelector } from "react-redux";
import generateMarkdown from "../../util/generateMarkdown";

const MarkdownCode = ({ refContainer }) => {
	const tournament = useSelector(state => state.tournament);
	const players = useSelector(state => state.players);
	const matches = useSelector(state => state.matches);
	const markdown = generateMarkdown(tournament, players, matches);

	return (
		<>
			<h2 className={s.title}>Reddit Comment Code</h2>
			<textarea
				ref={refContainer}
				className={s.markdownCode}
				value={markdown}
				onClick={() =>
					refContainer.current ? refContainer.current.select() : null
				}
			/>
		</>
	);
};

export default MarkdownCode;
