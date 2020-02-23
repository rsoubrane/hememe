import React from "react";

//Components
import Notifications from "../components/Notifications";
import SectionTop from "../components/Landing/SectionTop";
import SectionVote from "../components/Landing/SectionVote";
import SectionBottom from "../components/Landing/SectionBottom";
import Footer from "../components/Footer";

//Styles
import "../styles/footer.scss";
import "../styles/form.scss";
import "../styles/modal.scss";
import "../styles/chevron.scss";
import "../styles/notifications.scss";
import "../styles/slider.scss";

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
