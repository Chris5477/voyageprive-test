import picture1 from "../assets/offers/barcelona/picture1.jpg";

const Card = () => {
	return (
		<section className="card">
			<firgure className="card-picture">
				<img src={picture1} alt="establishment" />
			</firgure>

			<h2 className="destination">ESPAGE / COSTA BRAVA</h2>
			<p className="description">Détente à deux pas de la plage en demi pension</p>
			<p className="establishment">Hôtel Volga 4*</p>
			<p className="promotion-rate">Jusqu'à- 56%</p>
		</section>
	);
};
export default Card;
