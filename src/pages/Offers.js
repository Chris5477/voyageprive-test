import headBarcelona from "../assets/offers/barcelona/barcelona.jpg";
import logoVP from "../assets/logo/VPLogo.svg";
import Card from "../components/Card";

const Offers = () => {
	return (
		<div className="page offers-page">
			<header>
				<figure className="bg-offers">
					<img src={headBarcelona} alt="Aperçu de Barcelone" />
				</figure>
				<div className="overlay"></div>
				<h1>
					<img src={logoVP} alt="Voyage privé" />
				</h1>
				<h2 className="offers">Nos offres Barcelone</h2>
			</header>
			<main>
				<div className="grid-card">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</main>
		</div>
	);
};
export default Offers;
