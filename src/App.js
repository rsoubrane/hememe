import React from "react";

import Notifications from "./components/Notifications";
import SectionTop from "./components/SectionTop";
import SectionVote from "./components/SectionVote";
import SectionBottom from "./components/SectionBottom";
import Footer from "./components/Footer";

import "./App.scss";

const App = () => {
	return (
		<div className='App'>
			<Notifications />
			<SectionTop />
			<SectionVote />
			<SectionBottom />

			<Footer />
		</div>
	);
};

export default App;
