import picture1 from "../assets/offers/barcelona/picture1.jpg";

const Card = () => {
	return (
		<div className="card">
			<figure className="card-picture">
				<img src={picture1} alt="establishment" />
			</figure>
			<div className="information-offer">
				<div>
					<p className="destination">espage / costa brava</p>
					<p className="description">Détente à deux pas de la plage en demi pension</p>
					<p className="establishment">Hôtel Volga 4*</p>
				</div>
				<div>
					<p className="promotion-rate">Jusqu'à <span>-56%</span></p>
				</div>
			</div>
		</div>
	);
};
export default Card;
