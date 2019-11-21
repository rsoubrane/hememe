import React, { useState } from "react";

import toaster from "toasted-notes";
import "toasted-notes/src/styles.css"; // optional styles

import Profile from "../assets/images/notifications.png";

import "../styles/Notifications.scss";

const Notifications = () => {
	const [messages] = useState([
		{ notification: "Bonjour mon petit" },
		{ notification: "J’espère que tu vas bien aujourd’hui ?" },
		{ notification: "Tu as besoin de quelque chose ?" },
		{ notification: "Dis moi ce que tu veux, j'ai plein " },
		{ notification: "Ils sont supers ! Tu devrais en tester un" },
		{ notification: "Allez fais moi plaisir pour une fois" },
		{ notification: "Déjà que tu ne prends jamais de mes nouvelles" },
		{ notification: "Ne repars pas si vite" },
		{ notification: "T’es sûr que tu veux pas tester un petit kit ?" },
		{ notification: "Il y a plein de choses que tu n’as pas encore découvert" },
		{ notification: "Tu peux voter pour ton kit préféré" },
		{ notification: "Et même me donner des idées de kits" },
		{ notification: "Allez reste encore un peu" }
	]);

	var count = 1000;

	return messages.map(message => {
		count += 3000;
		setTimeout(() => {
			toaster.notify(
				({ onClose }) => (
					<div className='notification' onClick={onClose}>
						<div className='notification-inner'>
							<img src={Profile} className='notification-icon' alt='Mémé' />
							<div className='notification-body'>
								<div className='notification-body-header'>Mémé</div>
								<div className='notification-body-content'>{message.notification}</div>
							</div>
						</div>
					</div>
				),
				{
					position: "top-right", // top-left, top, top-right, bottom-left, bottom, bottom-right
					duration: 8000 //null if unlimited
				}
			);
		}, count);
	});
};

export default Notifications;
