import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/images/logo.png";

export default function Header() {
	return (
		<Navbar className='navbar'>
			<Navbar.Brand href='/' className='navbar-brand'>
				<img alt='' src={Logo} width='70' height='50' className='d-inline-block align-top' />
			</Navbar.Brand>
			<Nav className='ml-auto nav-lnav-links'>
				<Nav.Link href='#'>Les Kits</Nav.Link>
				<Nav.Link href='#'>A Propos</Nav.Link>
				<Nav.Link href='#'>Connexion</Nav.Link>
				<Nav.Link href='#'>
					<FontAwesomeIcon className='fa-md' icon={faShoppingBasket} />
				</Nav.Link>
				<Nav.Link href='#'>
					<FontAwesomeIcon className='fa-md' icon={faUser} />
				</Nav.Link>
			</Nav>
		</Navbar>
	);
}
