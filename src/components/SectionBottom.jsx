import React from "react";

import { Row, Col, Image } from "react-bootstrap";
import Slider from "./Slider";

import db from "../firestore.js";

import useForm from "react-hook-form";

import meme from "../assets/images/meme_pouce.png";

import "../App.scss";

export default function SectionBottom() {
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = proposition => {
		const data = {
			...proposition,
			createdAt: new Date()
		};

		db.collection("propositions")
			.doc()
			.set(data)
			.then(() => {
				alert("Your poroposition has been registered");
			})
			.catch(error => {
				alert("There was an error");
			});
		console.log(proposition);
	};

	return (
		<div className='section section-bottom'>
			<Row className='h-100'>
				<Col xs={12} md={6}>
					<Image src={meme} className='meme-pouce' alt='Mémé pouce' fluid />
				</Col>
				<Col xs={12} md={6}>
					<Row className='my-5'>
						<div className='meme-texte'>
							Mon petit, si tu as envie que je fasse d’autres kits spécialement pour toi, dis le moi et je
							m’en occupe pour ta prochaine visite.
						</div>
					</Row>
					<Row>
						<form onSubmit={handleSubmit(onSubmit)} className='form-bottom'>
							<input
								className='input-text-bottom'
								placeholder='Mémé, j’ai besoin d’un kit qui permet de :'
								type='text'
								name='proposition'
								ref={register({
									required: "Entrez votre proposition"
								})}
							/>
							<button className='submit-button bottom' type='submit'>
								Merci
							</button>
							<br />
							{errors.email && errors.email.message}
						</form>
					</Row>
					<Row>
						<Col className='my-5'>
							<div className='title-instagram mb-3'>Viens-voir mon album photo @hememe.fr</div>

							<Slider />
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}
