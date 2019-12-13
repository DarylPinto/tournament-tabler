import React from "react";
import s from "./MarkdownCode.module.scss";

const MarkdownCode = ({ round, streamLink, players, matches }) => {
	let markdown = `
	---
	#${round}

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
