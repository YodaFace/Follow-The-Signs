import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Private = props => {
	const { actions, store } = useContext(Context);
	const history = useHistory();
	if (!localStorage.getItem("jwt-token") || localStorage.getItem("jwt-token") == undefined) history.push("/login");
	console.log("This is the local storage: ", localStorage.getItem("jwt-token"));
	return <>{props.children}</>;
};

Private.propTypes = {
	children: PropTypes.node
};

Private.defaultProps = {
	children: null
};