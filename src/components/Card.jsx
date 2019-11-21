import React from "react";

import { Card as BootstrapCard, Button } from "react-bootstrap";

import Box from "../assets/images/box_méditation.png";

import "../styles/Card.css";

const Card = props => {
	const infos = props;

	const returnId = () => {
		infos.index ? props.cardId(props.index) : props.cardId(0);
	};

	return (
		<BootstrapCard>
			<div className='card-image embed-responsive embed-responsive-16by9'>
				<BootstrapCard.Img variant='top' src={Box} className='image-product embed-responsive-item' />
				<div className='image-overlay' />
				<div className='overlay-text'>{infos.description}</div>
			</div>
			<BootstrapCard.Body>
				<BootstrapCard.Title>{infos.title}</BootstrapCard.Title>
				<button
					className='card-button'
					onClick={() => {
						returnId();
					}}>
					Voter
				</button>
			</BootstrapCard.Body>
		</BootstrapCard>
	);
};

export default Card;
