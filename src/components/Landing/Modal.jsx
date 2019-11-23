import React from "react";

import { Modal, Button } from "react-bootstrap";

//Firebase
import db from "../../firestore.js";

//Utils
import useForm from "react-hook-form";

function MyModal(props) {
	console.log(props);

	const { handleSubmit, register, errors } = useForm();

	const onSubmit = email => {
		const data = {
			...email,
			vote: props.vote,
			createdAt: new Date()
		};

		db.collection("emails")
			.doc()
			.set(data)
			.then(() => {
				console.log(data);
				window.location.href = "/";
			});
	};
	console.log(localStorage.getItem("email"));

	return (
		<Modal {...props} size='md' aria-labelledby='contained-modal-title-center' centered>
			{props.vote ? (
				<>
					<Modal.Header closeButton>
						{localStorage.getItem("email") ? (
							<Modal.Title id='contained-modal-title-center'>Valides ton email ...</Modal.Title>
						) : (
							<Modal.Title id='contained-modal-title-center'>
								J'ai besoin de ton email pour valider ...
							</Modal.Title>
						)}
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={handleSubmit(onSubmit)} className='mt-4 mb-md-5'>
							{localStorage.getItem("email") ? (
								<input
									className='modal-input'
									placeholder='Renseigne ton email !'
									type='email'
									name='email'
									id='email'
									value={localStorage.getItem("email")}
									ref={register({
										required: "J'ai besoin de ton email",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
										}
									})}
								/>
							) : (
								<input
									className='modal-input'
									placeholder='Renseigne ton email !'
									type='email'
									name='email'
									id='email'
									ref={register({
										required: "J'ai besoin de ton email",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
										}
									})}
								/>
							)}
							<button className='modal-submit' type='submit'>
								Valider
							</button>
							<br />
							{errors.email && errors.email.message}
						</form>
					</Modal.Body>
				</>
			) : (
				<>
					<Modal.Header closeButton>
						<Modal.Title id='contained-modal-title-center'>Merci de ton aide !</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h5>Je te recontacte rapidement ...</h5>
					</Modal.Body>
				</>
			)}
		</Modal>
	);
}

export default MyModal;
