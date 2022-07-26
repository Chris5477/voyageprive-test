import logoVP from "../assets/logo/VPLogo.svg";
import bgLogin from "../assets/background-image/bg-login.jpg";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import bgLogin2 from "../assets/background-image/bg-login2.jpg";
import bgLogin3 from "../assets/background-image/bg-login3.jpg";

const Login = () => {
	const loginInitialState = {
		firstName: "",
		lastName: "",
		email: "",
	};

	const listBgImage = [
		{ picture: bgLogin, alt: "paysage avec des montgolfière" },
		{ picture: bgLogin2, alt: "vue sur des grattes-ciel" },
		{ picture: bgLogin3, alt: "ville au bord de la mer" },
	];

	const [a, setA] = useState(0);
	const [b, setB] = useState(1);
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

	const removeClassCSS = () => {
		document.querySelector(".bg-login img").classList.remove("fade-out");
		document.querySelector(".bg-login img:last-child").classList.remove("fade-in");
	};

	const addAnimationClass = () => {
		document.querySelector(".bg-login img").classList.add("fade-out");
		document.querySelector(".bg-login img:last-child").classList.add("fade-in");
	};

	const settingsIndex = () => {
		const c = a + 1;
		const d = b + 1;
		if (listBgImage.at(c) == undefined) {
			setA(0);
			setB(d);
		} else if (listBgImage.at(d) == undefined) {
			setB(0);
			setA(c);
		} else {
			setA(c);
			setB(d);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			settingsIndex();
			removeClassCSS();
			setTimeout(addAnimationClass, 100);
		}, 5000);
	}, [a, b]);

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
				<img className="banner" src={listBgImage[a].picture} alt={listBgImage[a].alt} />
				<img className="banner absolute-pos" src={listBgImage[b].picture} alt={listBgImage[b].alt} />
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
