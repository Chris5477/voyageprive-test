import logoVP from "../assets/logo/VPLogo.svg";
import bgLogin from "../assets/background-image/bg-login.jpg";
import Input from "../components/Input";

const Login = () => {
	return (
		<div className="login-page">
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
				<form className="login-form">
					<h2>Connectez-vous</h2>
					<Input id="nom" />
					<Input id="prenom" />
					<Input id="email" />
					<input type="submit" value="Se connecter" />
				</form>
			</main>
		</div>
	);
};
export default Login;
