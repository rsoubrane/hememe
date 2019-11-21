import React from "react";

import { Row, Col, Image } from "react-bootstrap";

import db from "../firestore.js";

import Card from "./Card";

import "../App.scss";

export default function SectionVote() {
	const returnId = id => {
		const data = {
			vote: id,
			createdAt: new Date()
		};

		db.collection("votes")
			.doc()
			.set(data)
			.then(() => {
				alert("Your vote have been registered");
			})
			.catch(error => {
				alert("There was an error");
			});
	};

	return (
		<div id='vote' className='section section-vote'>
			<h1 className='section-title'>Place au vote</h1>
			<p className='title-description'>
				Hé mémé ! vous propose de découvrir des kits d’outils essentiels pour vivre au mieux vos premières
				expériences ou débuter un loisir.
			</p>
			<Row className='mx-2 pb-5 h-25'>
				<Col xs={6} md={4}>
					<Card
						title='Devenir un éco-citoyen'
						description='Un kit pour devenir un super éco citoyen avec une brosse à dents en bambou, une gourde en inox, un  savon zéro déchet , des sacs réutilisables et des bocaux (taille moyenne + grande)'
						index='éco-citoyen '
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='Je suis un peu stressé·e'
						description='Un kit pour apprendre à devenir zen en toutes occasions avec un coussin de méditation, un bol chantant tibétain, un bouddha décoratif et un assortiment d’encens'
						index='stressé'
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='Apprends moi la couture'
						description='Un kit comprenant des aiguilles de différentes tailles, des fils de couleurs primaires, 1 ciseau à tissu, des dés à coudre et chutes de tissus colorés'
						index='Couture'
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='Créer mon jardin botanique'
						description='Un kit pour commencer le jardinage “clé en main” avec des pots, des packs de graines à semer, du terreau compressé, un râteau et une pelle'
						index='jardinier'
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='Décorer mon premier sapin'
						description='Pour Noël,  un super kit pour décorer votre sapin avec 6 boules de Noel, 2 guirlandes, 2 chaussettes de Noel à mettre sous ton sapin et 1 calendrier de l’avent'
						index='noel'
						cardId={returnId}
					/>
				</Col>
				<Col xs={6} md={4}>
					<Card
						title='Je veux faire du sport'
						description='Commence le sport tranquillement avec un tapis de sol, un abonnement au Top Body Challenge, une serviette, une corde à sauter et un brassard'
						index='sportif'
						cardId={returnId}
					/>
				</Col>
			</Row>
		</div>
	);
}
