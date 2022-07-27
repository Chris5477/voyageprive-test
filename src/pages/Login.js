import logoVP from "../assets/logo/VPLogo.svg";
import bgLogin from "../assets/background-image/bg-login.jpg";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import bgLogin2 from "../assets/background-image/bg-login2.jpg";
import bgLogin3 from "../assets/background-image/bg-login3.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

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

	const [indexFirstImg, setIndexFirstImg] = useState(0);
	const [indexSecondImg, setIndexSecondImg] = useState(1);
	const [userData, setUserData] = useState(loginInitialState);
	const [messageForm, setMessageForm] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { firstName, lastName, email } = userData;

	const handleChangeLogin = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const requestWaitingSimulation = async () => {
		redirectUserToOfferPage();
	};

	const redirectUserToOfferPage = () => {
		setTimeout(() => navigate("/offers"), 2000);
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
		const nextIndexFirstImg = indexFirstImg + 1;
		const nextIndexSecondImg = indexSecondImg + 1;
		if (listBgImage.at(nextIndexFirstImg) == undefined) {
			setIndexFirstImg(0);
			setIndexSecondImg(nextIndexSecondImg);
		} else if (listBgImage.at(nextIndexSecondImg) == undefined) {
			setIndexSecondImg(0);
			setIndexFirstImg(nextIndexFirstImg);
		} else {
			setIndexFirstImg(nextIndexFirstImg);
			setIndexSecondImg(nextIndexSecondImg);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			settingsIndex();
			removeClassCSS();
			setTimeout(addAnimationClass, 100);
		}, 5000);
	}, [indexFirstImg, indexSecondImg]);

	const login = (e) => {
		e.preventDefault();
		const valueState = Object.values(userData).every((value) => value);

		if (!valueState) {
			setMessageForm(true);
		} else {
			setMessageForm(false);
			setIsSubmitting(true);
			requestWaitingSimulation();
		}
	};

	return (
		<div className="page login-page">
			<figure className="bg-login">
				<img className="banner" src={listBgImage[indexFirstImg].picture} alt={listBgImage[indexFirstImg].alt} />
				<img
					className="banner absolute-pos"
					src={listBgImage[indexSecondImg].picture}
					alt={listBgImage[indexSecondImg].alt}
				/>
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
					<input
						type="submit"
						value="Se connecter"
						disabled={isSubmitting}
						style={isSubmitting ? { backgroundColor: "#712d48" } : {}}
					/>
				</form>
			</main>
		</div>
	);
};
export default Login;
