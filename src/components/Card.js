const Card = ({ picture, country, location, description, establishment, promotion }) => {
	return (
		<div className="card">
			<figure className="card-picture">
				<img src={picture} alt="establishment" />
			</figure>
			<div className="information-offer">
				<div>
					<p className="destination">
						{country} / {location}
					</p>
					<p className="description">{description}</p>
					<p className="establishment">{establishment}</p>
				</div>
				<div>
					<p className="promotion-rate">
						Jusqu'à <span>-{promotion}%</span>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Card;
