import headBarcelona from "../assets/offers/barcelona/barcelona.jpg";
import logoVP from "../assets/logo/VPLogo.svg";
import Card from "../components/Card";

const Offers = () => {
	return (
		<div className="offers-page">
			<header>
				<figure className="bg-offers">
					<img src={headBarcelona} alt="Aperçu de Barcelone" />
				</figure>
				<h1>
					<img src={logoVP} alt="Voyage privé" />
				</h1>
			</header>
            <main>
                <Card />
                <Card />
                <Card />
                <Card />
            </main>
		</div>
	);
};
export default Offers;
