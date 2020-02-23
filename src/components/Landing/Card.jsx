import React from "react";

import { Card } from "react-bootstrap";

const VoteCard = props => {
	const infos = props;

	const returnId = () => {
		infos.index ? props.cardId(props.index) : props.cardId(0);
	};

	return (
		<Card>
			<div className='card-image'>
				<Card.Img src={infos.imgSrc} className='image-product' />
				<div className='image-overlay'></div>
				<div className='overlay-text'>{infos.description}</div>
			</div>
			<Card.Body>
				<Card.Title>
					Kit <span className='yellow'>{infos.title}</span>
				</Card.Title>
				<button
					className='card-button'
					onClick={() => {
						returnId();
					}}>
					Voter
				</button>
			</Card.Body>
		</Card>
	);
};

export default VoteCard;
