import Input from "../components/Input";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { listBgImage } from "../utils/listPicturesBg";

const Login = () => {
	const loginInitialState = {
		firstName: "",
		lastName: "",
		email: "",
	};

	//SET TOKEN TO DENY ACCESS TO USER OFFER PAGE IF NO COMPLETE FORM

	const token = "1055gosmzsfsdsdrngisolel12pf";

	// SETTINGS HOOKS **********************************************************

	const navigate = useNavigate();
	const [indexFirstImg, setIndexFirstImg] = useState(2);
	const [indexSecondImg, setIndexSecondImg] = useState(0);
	const [userData, setUserData] = useState(loginInitialState);
	const [messageForm, setMessageForm] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const inputRef = useRef()


	// GET ALL KEY OF INITIALSTATE **********************************************

	const { firstName, lastName, email } = userData;

	// FUNCTIONS FORMS ***********************************************************

	const handleChangeLogin = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const redirectUserToOfferPage = () => {
		setTimeout(() => navigate("/offers"), 2000);
	};

	const login = (e) => {
		e.preventDefault();
		const valueState = Object.values(userData).every((value) => value);

		if (!valueState) {
			setMessageForm(true);
		} else {
			setMessageForm(false);
			setIsSubmitting(true);
			localStorage.setItem("token", token);
			redirectUserToOfferPage();
		}
	};

	// MANAGEMENT ANIMATION CLASS CSS FOR LOGIN PAGE ************************************

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

	// ALLOWS TO CHANGES INDEX OF PICTURE BACKGROUND ALL THE 5 SECONDES ***************

	useEffect(() => inputRef.current.focus(), [])

	useEffect(() => {
		setTimeout(() => {
			settingsIndex();
			removeClassCSS();
			setTimeout(addAnimationClass, 100);
		}, 5000);
	}, [indexFirstImg, indexSecondImg]);

	return (
		<div className="page login-page">
			<figure className="bg-login">
				<img
					className="banner fade-out"
					src={listBgImage[indexFirstImg].picture}
					alt={listBgImage[indexFirstImg].alt}
				/>
				<img
					className="banner absolute-pos fade-in"
					src={listBgImage[indexSecondImg].picture}
					alt={listBgImage[indexSecondImg].alt}
				/>
			</figure>
			<Header />
			<main>
				<form tabIndex="0" aria-label="formulaire de connexion"  className="login-form" onSubmit={login}>
					<h2 tabIndex="0">Connectez-vous</h2>
					<Input ref={inputRef} id="nom" value={firstName} label="Nom" name="firstName" handleChange={handleChangeLogin} />
					<Input id="prenom" value={lastName} label="Prénom" name="lastName" handleChange={handleChangeLogin} />
					<Input id="email" type="email" label="Email" value={email} name="email" handleChange={handleChangeLogin} />
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
