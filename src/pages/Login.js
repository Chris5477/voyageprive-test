import logoVP from "../assets/logo/VPLogo.svg";
import bgLogin from "../assets/background-image/bg-login.jpg";
import Input from "../components/Input";
import { useState } from "react";

const Login = () => {
	const loginInitialState = {
		firstName: "",
		lastName: "",
		email: "",
	};

	const [userData, setUserData] = useState(loginInitialState);
	const [messageForm, setMessageForm] = useState(false);
	const { firstName, lastName, email } = userData;

	const handleChangeLogin = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const runAnimation = () => {
		// futur animation here
		return null;
	};

	const requestWaitingSimulation = () => {
		runAnimation();
		redirectUserToOfferPage();
	};

	const redirectUserToOfferPage = () => {
		setTimeout(() => (window.location.href = "localhost:3000/offers"), 2000);
	};

	const login = (e) => {
		e.preventDefault();
		const valueState = Object.values(userData).every((value) => value);

		if (!valueState) {
			setMessageForm(true);
		} else {
			setMessageForm(false);
			requestWaitingSimulation();
		}
	};

	return (
		<div className="page login-page">
			<figure className="bg-login">
				<img src={bgLogin} alt="paysage avec des montgolfière" />
			</figure>
			<header>
				<h1>
					<img src={logoVP} alt="Voyage privé" />
				</h1>
			</header>
			<main>
				<h2 className="title-login-page">Quel sera votre prochain voyage ?</h2>
				<form className="login-form" onSubmit={login}>
					<h2>Connectez-vous</h2>
					<Input id="nom" value={firstName} name="firstName" handleChange={handleChangeLogin} />
					<Input id="prenom" value={lastName} name="lastName" handleChange={handleChangeLogin} />
					<Input id="email" type="email" value={email} name="email" handleChange={handleChangeLogin} />
					{messageForm && <p className="error-form">Veuillez remplir tout les champs</p>}
					<input type="submit" value="Se connecter" />
				</form>
			</main>
		</div>
	);
};
export default Login;
