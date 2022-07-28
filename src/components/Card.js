import clock from "../assets/logo/clock.svg";

const Card = ({ picture, country, location, description, establishment, promotion, time }) => {
	const timeLeft = time === 1 ? `${time} jour` : `${time} jours`;
	return (
		<div tabIndex="0" role="region" aria-label="offre" className="card">
			<figure className="card-picture">
				<img src={picture} alt="establishment" />
				<p className="time-left" aria-label="délai de la fin de l'offre">
					<img src={clock} alt="horloge" />
					Reste {timeLeft}
				</p>
			</figure>
			<div tabIndex="0" role="region" aria-label="information sur la destination" className="offer">
				<div className="information">
					<p tabIndex="0" className="destination">
						{country} / {location}
					</p>
					<p tabIndex="0" className="description">
						{description}
					</p>
					<p tabIndex="0" className="establishment">
						{establishment}
					</p>
				</div>
				<div role="region" aria-label="promotion de l'offre" className="promotion">
					<p tabIndex="0" className="promotion-rate">
						Jusqu'à <span>-{promotion}%</span>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Card;
