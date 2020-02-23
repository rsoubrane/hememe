import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

//Styles
import "./App.scss";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route path='/home' component={HomePage} />
			</Switch>
		</Router>
	);
}

export default App;
