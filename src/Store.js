import React, { useState } from "react";

const intialState = {
	taskList: [],
	currentText: "",
};

export const Context = React.createContext();

export const Store = ({ children }) => {
	const [state, setState] = useState(intialState);
	return (
		<Context.Provider value={[state, setState]}>{children}</Context.Provider>
	);
};
