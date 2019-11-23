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
				<Col xs={6} md={4}>
					<Card
						title='Devenir un éco-citoyen'
						description='Ce kit contient les essentiels pour commencer sa transition écologique. Avec mes conseils et mes astuces, tu auras tout ce qu’il te faut pour avancer vers le zéro déchet.'
						index='éco-citoyen'
						cardId={returnId}
						imgSrc='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/kits%2Fe%CC%81co.png?alt=media&token=7a235d04-02a8-43d2-b2b4-e1bca5f33060'
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='Je suis un peu stressé·e'
						description='Mon kit qui te rendra zen en toutes occasions. Faire de la méditation c’est un vrai challenge, mais avec moi plus d’inquiétude, j’ai tout ce qu’il te faut pour être serein.'
						index='stressé'
						cardId={returnId}
						imgSrc='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/kits%2Fme%CC%81ditation.png?alt=media&token=98bb69cc-abb5-40ee-9987-9c6e226ea794'
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='Apprends moi la couture'
						description='Grâce à moi tu pourras réparer tous tes vêtements ! Tu aurais tort de ne pas écouter mes conseils, c’est un domaine dans lequel j’excelle ! Avec des aiguilles, des fils, et surtout toutes mes astuces !'
						index='couture'
						cardId={returnId}
						imgSrc='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/kits%2Fcouture.png?alt=media&token=6b3a44a4-846c-44d6-98c0-b0605780225b'
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='Mon petit jardin'
						description='Rien de mieux pour avoir la main verte que mon kit jardinage ! Pots, packs de graines à semer, terreau compressé, râteau et pelle, en plus de tous mes conseils tu n’auras plus aucune excuse !'
						index='jardinier'
						cardId={returnId}
						imgSrc='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/kits%2Fjardinage.png?alt=media&token=a6ce3636-4d62-4aea-9e6e-9ac9521cfe05'
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='Décorer mon sapin'
						description='Passe le meilleur des Noël avec mon kit composé de 6 boules, 2 guirlandes, 2 chaussettes à mettre sous ton sapin et un calendrier de l’avent.'
						index='noel'
						cardId={returnId}
						imgSrc='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/kits%2Fsapin.png?alt=media&token=0e6b3b85-80ad-407c-b320-99625f108023'
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='1, 2, 3, on se motive !'
						description='Tu ne sais pas comment comment débuter une activité sportive ? Mon kit t’aide en t’apportant les outils essentiels pour débuter le sport en extérieur ou en intérieur.'
						index='sportif'
						cardId={returnId}
						imgSrc='https://firebasestorage.googleapis.com/v0/b/hememe-0000.appspot.com/o/kits%2Fmotivation.png?alt=media&token=951bbd06-f7d5-4b11-95f6-414932736ca1'
					/>
				</Col>
			</Row>
		</div>
	);
}
