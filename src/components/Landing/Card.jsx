import React from "react";

import { Card as BootstrapCard } from "react-bootstrap";

const Card = props => {
	const infos = props;

	const returnId = () => {
		infos.index ? props.cardId(props.index) : props.cardId(0);
	};

	return (
		<BootstrapCard>
			<div className='card-image'>
				<BootstrapCard.Img src={infos.imgSrc} className='image-product' />
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
