import headBarcelona from "../assets/offers/barcelona/barcelona.webp";
import Header from "../components/Header";
import { offers } from "../utils/offers";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Offers = () => {

	const navigate = useNavigate()

	useEffect(() => {
		!localStorage.getItem("token") && navigate("/login")
	})

	return (
		<div className="page offers-page">
			<Header destination={"Barcelone"} picture={headBarcelona} />
			<main>
				<div className="flexbox-card">
					{offers.map(({ id, pictureUrl, country, location, description, establishment, promotion, timeLeft }) => (
						<Card
							key={id}
							picture={pictureUrl}
							country={country}
							location={location}
							description={description}
							establishment={establishment}
							promotion={promotion}
							time={timeLeft}
						/>
					))}
				</div>
			</main>
		</div>
	);
};
export default Offers;
