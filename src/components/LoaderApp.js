import logo from "../assets/logo/V.svg";
import cover from "../assets/background-image/cover.jpg";

const LoaderApp = () => {
	return (
		<div className="loader-page">
			<div className="content-cover"></div>
			<img src={logo} alt="company" />
			<h1>oyage privé</h1>
		</div>
	);
};
export default LoaderApp;
