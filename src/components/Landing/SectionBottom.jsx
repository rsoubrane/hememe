import React, { useState } from "react";

//Imports
import { Image } from "react-bootstrap";
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
		setChoice(myProposition);
		setModalShow(true);
	};

	return (
		<div className='section section-bottom'>
			<Modal show={modalShow} vote={choice} onHide={() => setModalShow(false)} />

			<div className='left-side'>
				<Image src={meme} className='meme-pouce' alt='Mémé pouce' fluid />
			</div>

			<div className='right-side'>
				<div className='meme-text'>
					Mon petit, si tu as envie que je fasse d’autres kits spécialement pour toi, dis le moi et je m’en
					occupe pour ta prochaine visite.
				</div>

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

				<div className='container-slider mb-5'>
					<div className='title-instagram'>
						Viens-voir mon album photo :{" "}
						<a
							href='https://www.instagram.com/hememe.fr/'
							target='_blank'
							rel='noopener noreferrer'
							className='arobas'>
							@hememe.fr
						</a>
					</div>

					<div className='slider'>
						<Slider />
					</div>
				</div>
			</div>
		</div>
	);
}
