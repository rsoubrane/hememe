import React from "react";

import { Image } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import db from "../firestore.js";

import useForm from "react-hook-form";

import Logo from "../assets/images/logo.png";
import meme from "../assets/images/mémé_joyeuse.png";

import "../App.scss";
import "../styles/SectionTop.scss";
import "../styles/Chevron.scss";

export default function SectionTop() {
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = email => {
		const data = {
			...email,
			createdAt: new Date()
		};

		db.collection("emails")
			.doc()
			.set(data)
			.then(() => {
				alert("Your email has been registered");
			})
			.catch(error => {
				alert("There was an error");
			});
		console.log(email);
	};

	return (
		<div className='section section-top'>
			<Image src={Logo} className='logo' alt='Logo' fluid />
			<Image src={meme} className='meme-joyeuse' alt='Mémé joyeuse' fluid />
			<h1 className='section-title main-title'>Tu peux m'aider ?</h1>
			<p className='title-description'>
				Découvrez les kits d’essentiels que mémé a concocté pour vous avec des produits français et respectueux
				de l’environnement. Elle a testé tous les produits car le plus important pour elle est que vous alliez
				bien !
			</p>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					className='input-text-top'
					placeholder='On se donne des nouvelles bientôt ?'
					type='email'
					name='email'
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
			<a href='#vote'>
				<FontAwesomeIcon className='bounce chevron-down fa-md' icon={faChevronDown} />
			</a>
		</div>
	);
}
