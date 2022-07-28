import Offers from "./pages/Offers";
import Login from "./pages/Login";
import LoaderApp from "./components/LoaderApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
	const [redirect, setRedirect] = useState(false);
	useEffect(() => {
		setTimeout(() => setRedirect(true), 3000);
	}, [redirect]);

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route exact path="/" element={redirect ? <Login /> : <LoaderApp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/offers" element={<Offers />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
