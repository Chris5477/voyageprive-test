import logoVP from "../assets/logo/VPLogo.svg";

const Header = ({ destination, picture }) => {
	return (
		<header className="head-page">
			<h1 tabIndex="0">
				<img src={logoVP} alt="Voyage privé" />
			</h1>
			{destination ? (
				<>
					<h2 tabIndex="0" className="offers">
						Nos offres {destination}
					</h2>
					<figure className="bg-offers">
						<img src={picture} alt="Aperçu de Barcelone" />
					</figure>
					<div role="dialog" className="overlay"></div>
				</>
			) : (
				<h2 tabIndex="0" className="title-login-page">
					Quel sera votre prochain voyage ?
				</h2>
			)}
		</header>
	);
};

export default Header;
