import logo from "../assets/logo/V.svg";

const LoaderApp = () => {
	return (
		<div className="page loader-page">
			<div className="content-cover"></div>
			<img src={logo} alt="company" />
			<h1>oyage privé</h1>
		</div>
	);
};
export default LoaderApp;
