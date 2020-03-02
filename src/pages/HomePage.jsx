import React from "react";

//Imports
import { Row, Col, Image } from "react-bootstrap";

//Components
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

//Images
import Box from "../assets/images/box_méditation.png";
import Meme from "../assets/images/meme_photo.png";

//Styles
import "../styles/HomePage.scss";

export default function HomePage() {
	return (
		<div className=''>
			<Navbar />
			<Row className='mb-5'>
				<Col xs={12} sm={6} className='h-100 my-auto'>
					<Image variant='top' src={Box} className='image-product embed-responsive-item' />
				</Col>
				<Col xs={12} sm={6}>
					<div className='kit-headline my-5'>Kit du moment</div>
					<div className='kit-name'>Comment devenir plus écolo</div>
					<div className='kit-tags'>
						<span className='tag'>#ECOLOGIE </span>
						<span className='tag'>#TRANSITION </span>
						<span className='tag'>#ZERODECHET </span>
					</div>
					<div className='kit-description mt-3 mb-5'>
						Oh mon petit, tu sais de mon temps nous n’avions pas toute cette consommation de plastique sous
						les yeux. Nos mères faisaient les courses avec des paniers en osier et nous allions à l’école à
						pied. <br />
						J’ai pensé à toi, et je t’ai confectionné un ensemble d’éléments indispensables pour que tu
						apprennes à consommer mieux et moins.
					</div>
					<button className='button-kit'>Découvrir</button>
				</Col>
			</Row>

			<Row className='justify-content-center'>
				<Col xs={8} className='mt-5'>
					<div className='meme-catch mt-5 mb-2'>“TU AS VRAIMENT TOUT CE DONT J’AI BESOIN MÉMÉ ?” </div>
					<div className='meme-ecriture'>Regarde par toi-même !</div>
				</Col>
			</Row>

			<Row className='justify-content-center text-center mt-5 mx-3'>
				<Col xs={6} sm={4} md={3}>
					<div className='category'>1</div>
				</Col>
				<Col xs={6} sm={4} md={3}>
					<div className='category'>2</div>
				</Col>
				<Col xs={6} sm={4} md={3}>
					<div className='category'>3</div>
				</Col>
				<Col xs={6} sm={4} md={3}>
					<div className='category'>4</div>
				</Col>
			</Row>

			<Row className='justify-content-center mt-3 mb-5'>
				<button className='button-kit button-all-kits'>Voir tous les kits</button>
			</Row>

			<Row className='section-yellow justify-content-center h-100 pb-5'>
				<Col xs={12} className='mt-5 mb-4'>
					<div className='meme-catch'>Prochainement !</div>
				</Col>
				<Col xs={12} sm={4} className='h-100 my-auto'>
					<div className='category'>5</div>
				</Col>
				<Col xs={12} sm={7} className='h-100 my-auto'>
					<div className='kit-name text-white'>Je veux savoir bricoler !</div>
					<div className='kit-description my-3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis leo at accumsan
						dignissim. Curabitur id maximus metus. In imperdiet eleifend nulla, ac pretium lacus molestie
						in. Maecenas hendrerit, turpis vel ullamcorper dapibus. Curabitur id maximus metus.
					</div>
					<button className='button-kit button-kit-reverse mt-3'>Une carte postale ?</button>
				</Col>
			</Row>

			<Row className='justify-content-end section-slider pb-5'>
				<Col xs={12} sm={4} className='h-100 mt-auto mb-0'>
					<Image src={Meme} className='meme-photo' />
				</Col>
				<Col xs={12} sm={8} className='h-100 justify-content-center'>
					<div className='meme-text meme-text-home'>Viens suivre mon album photo !</div>

					<Slider />
				</Col>
			</Row>

			<Row className='yellow justify-content-center h-100 pb-5'></Row>

			<Footer />
		</div>
	);
}
