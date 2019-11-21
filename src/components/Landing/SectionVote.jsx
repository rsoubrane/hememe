import React, { useState } from "react";

//Imports
import { Row, Col } from "react-bootstrap";

//Components
import Card from "./Card";
import Modal from "./Modal";

//Firebase
import db from "../../firestore.js";

//Styles
import "../../App.scss";

export default function SectionVote() {
	const [choice, setChoice] = useState();
	const [modalShow, setModalShow] = useState(false);

	const returnId = id => {
		setChoice(`${id}`);
		setModalShow(true);
	};

	return (
		<div id='vote' className='section section-vote pt-5'>
			<Modal show={modalShow} vote={choice} onHide={() => setModalShow(false)} />

			<h1 className='section-title'>Place au vote</h1>
			<p className='title-description'>
				“Hé mémé !”, te propose de découvrir des kits d’outils essentiels pour vivre au mieux tes premières
				expériences ou débuter un loisir.
			</p>
			<Row className='mx-sm-2 py-3 pb-5'>
				<Col xs={6} md={4} className='my-3'>
					<Card
						title='Devenir un éco-citoyen'
						description='Ce kit contient les essentiels pour commencer sa transition écologique. Avec mes conseils et mes astuces, tu auras tout ce qu’il te faut pour avancer vers le zéro déchet.'
						index='éco-citoyen '
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4} className='my-3'>
					<Card
						title='Je suis un peu stressé·e'
						description='Mon kit qui te rendra zen en toutes occasions. Faire de la méditation c’est un vrai challenge, mais avec moi plus d’inquiétude, j’ai tout ce qu’il te faut pour être serein.'
						index='stressé'
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4} className='my-3'>
					<Card
						title='Apprends moi la couture'
						description='Grâce à moi tu pourras réparer tous tes vêtements ! Tu aurais tort de ne pas écouter mes conseils, c’est un domaine dans lequel j’excelle ! Avec des aiguilles, des fils, et surtout toutes mes astuces !'
						index='Couture'
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4} className='my-3'>
					<Card
						title='Mon petit jardin'
						description='Rien de mieux pour avoir la main verte que mon kit jardinage ! Pots, packs de graines à semer, terreau compressé, râteau et pelle, en plus de tous mes conseils tu n’auras plus aucune excuse !'
						index='jardinier'
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4} className='my-3'>
					<Card
						title='Décorer mon premier sapin'
						description='Passe le meilleur des Noël avec mon kit composé de 6 boules, 2 guirlandes, 2 chaussettes à mettre sous ton sapin et un calendrier de l’avent.'
						index='noel'
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4} className='my-3'>
					<Card
						title='1, 2, 3, on se motive !'
						description='Commence le sport tranquillement avec un tapis de sol, un abonnement au Top Body Challenge, une serviette, une corde à sauter et un brassard'
						index='sportif'
						cardId={returnId}
					/>
				</Col>
			</Row>
		</div>
	);
}
