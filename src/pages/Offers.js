import headBarcelona from "../assets/offers/barcelona/barcelona.jpg";
import Header from "../components/Header";
import { offers } from "../utils/offers";
import Card from "../components/Card";

const Offers = () => {
	return (
		<div className="page offers-page">
			<Header destination={"Barcelone"} picture={headBarcelona} />
			<main>
				<div className="flexbox-card">
					{offers.map(({ id, pictureUrl, country, location, description, establishment, promotion }) => (
						<Card
							key={id}
							picture={pictureUrl}
							country={country}
							location={location}
							description={description}
							establishment={establishment}
							promotion={promotion}
						/>
					))}
				</div>
			</main>
		</div>
	);
};
export default Offers;
