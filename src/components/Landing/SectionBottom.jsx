import React, { useState } from "react";

//Imports
import { Row, Col, Image } from "react-bootstrap";
import useForm from "react-hook-form";

//Components
import Slider from "../Slider";
import Modal from "./Modal";

//Images
import meme from "../../assets/images/meme_pouce.png";

//Styles
import "../../styles/section-bottom.scss";

export default function SectionBottom() {
	const [modalShow, setModalShow] = useState(false);
	const [choice, setChoice] = useState();

	const { handleSubmit, register, errors } = useForm();
	const onSubmit = () => {
		const myProposition = document.getElementById("proposition").value;
		console.log("myProposition: ", myProposition);
		setChoice(myProposition);
		setModalShow(true);
	};

	return (
		<div className='section section-bottom'>
			<Modal show={modalShow} vote={choice} onHide={() => setModalShow(false)} />

			<Row className='h-100'>
				<Col xs={12} md={6}>
					<Image src={meme} className='meme-pouce' alt='Mémé pouce' fluid />
				</Col>
				<Col xs={12} md={6}>
					<Row className='my-md-5'>
						<div className='meme-text'>
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
								id='proposition'
								name='proposition'
								ref={register({
									required: "Entrez votre proposition"
								})}
							/>
							<button className='submit-button bottom' type='submit'>
								Merci
							</button>
							<br />
							{errors.proposition && errors.proposition.message}
						</form>
					</Row>
					<Row>
						<Col className='my-md-5 mt-5'>
							<div className='title-instagram mb-4'>
								Viens-voir mon album photo{" "}
								<a href='https://www.instagram.com/hememe.fr/' target='_blank' className='arobas'>
									@hememe.fr
								</a>
							</div>

							<Slider />
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}
