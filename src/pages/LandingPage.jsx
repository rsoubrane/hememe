import React from "react";

import Notifications from "../components/Notifications";
import SectionTop from "../components/Landing/SectionTop";
import SectionVote from "../components/Landing/SectionVote";
import SectionBottom from "../components/Landing/SectionBottom";
import Footer from "../components/Footer";

import "../App.scss";

const LandingPage = () => {
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

export default LandingPage;
