import React from "react";
import s from "./MarkdownCode.module.scss";
import { useSelector } from "react-redux";

const MarkdownCode = () => {
	const { tournament, players, matches } = useSelector(state => state);

	let markdown = `
	---
	#${tournament.round}

	[](#MeleeFox) [](#MeleeFalco) Mango  | | 1 - 0 | |  Armada [](#MeleePeach) [](#MeleeFox)
	---:|:--:|:--:|:--:|:---
	[](#MeleeFalco)[](#MeleeFalco) | \` = \`  [](#MeleeFalco) | Battlefield | [](#MeleeFox)  \` = \` | ---
	*^^Generated ^^by [^^Tournament ^^Tabler](http://tournament-tabler.com/)*

	---
	`;

	markdown = markdown.trim().replace(/\t/g, "");

	return <textarea className={s.markdownCode} value={markdown}></textarea>;
};

export default MarkdownCode;
