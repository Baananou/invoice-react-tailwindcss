import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StateContext from "./context/stateContext";

ReactDOM.render(
	<React.StrictMode>
		<StateContext>
			<App />
		</StateContext>
	</React.StrictMode>,
	document.getElementById("root")
);
