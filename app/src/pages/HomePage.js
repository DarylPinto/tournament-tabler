import React, { useState } from "react";
import { connect } from "react-redux";

const HomePage = ({ user, updateUser }) => {
	const [newName, setNewName] = useState("");

	return (
		<h1>Tournament Tabler</h1>	
	);
};

// const mapState = ({ user }) => ({ user });
// const mapDispatch = { updateUser };
export default connect(
	null,
	null	
)(HomePage);
