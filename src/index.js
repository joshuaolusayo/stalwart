import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./Components";

import "./styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route exact path="/" component={LandingPage}></Route>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
