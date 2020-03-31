import React, { useState } from "react";

//Imports
import { Image } from "react-bootstrap";

//Components
import Modal from "./Modal";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

//Firebase
import db from "../../firestore.js";

//Utils
import useForm from "react-hook-form";

//Images
import Logo from "../../assets/images/logo2.png";
import meme from "../../assets/images/mémé_joyeuse.png";

//Styles
import "../../styles/section-top.scss";

export default function SectionTop() {
	const [modalShow, setModalShow] = useState(false);

	const { handleSubmit, register, errors } = useForm();
	const onSubmit = email => {
		const data = {
			...email,
			vote: "",
			createdAt: new Date()
		};

		db.collection("emails")
			.doc()
			.set(data)
			.then(() => {
				setModalShow(true);
			})
			.catch(error => {
				setModalShow(true);
			});
		localStorage.setItem("email", data.email);
	};

	return (
		<div className='section section-top'>
			<Modal show={modalShow} onHide={() => setModalShow(false)} />

			<Image src={Logo} className='logo' alt='Logo' fluid />
			<Image src={meme} className='meme-joyeuse' alt='Mémé joyeuse' fluid />
			<h1 className='section-title main-title'>Tu peux m'aider ?</h1>
			<p className='title-description'>
				Découvre les kits essentiels que mémé a concocté spécialement pour t’aider à te lancer dans une nouvelle
				activité ou un nouveau challenge. Elle les a bien sûr tous testés car le plus important pour elle est
				que tu ailles bien !
			</p>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder='On se donne des nouvelles bientôt ?'
					type='email'
					name='email'
					id='email'
					ref={register({
						required: "Entrez votre email",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
						}
					})}
				/>
				<button className='submit-button top' type='submit'>
					Oui !
				</button>

				<br />
				{errors.email && errors.email.message}
			</form>

			<p className='title-call'>Ne pars pas de suite, pour une fois que tu viens me voir</p>
			<a className='chevron-down' href='#vote'>
				<FontAwesomeIcon className='bounce fa-md' icon={faChevronDown} />
			</a>
		</div>
	);
}
