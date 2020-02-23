import React, { useState } from "react";

//Imports
import { Row, Col } from "react-bootstrap";

//Components
import Card from "./Card";
import Modal from "./Modal";

//Firebase
import cards from "./data.json";

//Styles
import "../../styles/section-vote.scss";

export default function SectionVote() {
	const [choice, setChoice] = useState();
	const [modalShow, setModalShow] = useState(false);

	const returnId = id => {
		setChoice(`${id}`);
		setModalShow(true);
	};

	return (
		<div id='vote' className='section section-vote'>
			<Modal show={modalShow} vote={choice} onHide={() => setModalShow(false)} />

			<div className='vote-details'>
				<h1 className='details-title'>Place au vote</h1>
				<p className='details-description'>
					“Hé mémé !”, te propose de découvrir des kits d’outils essentiels pour vivre au mieux tes premières
					expériences ou débuter un loisir.
				</p>

				<div className='details-products'>
					<Row className='mx-sm-2 py-3 pb-5'>
						{cards.map((card, index) => (
							<Col key={index} xs={4} className='product-card'>
								<Card
									title={card.title}
									description={card.description}
									index={card.index}
									cardId={returnId}
									imgSrc={card.imgSrc}
								/>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</div>
	);
}
