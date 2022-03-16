import React, { useState, useEffect } from "react";

// components
import Layout from "../components/Layout";
// global css
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	// state
	const [ride, setRide] = useState([]);
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(true);

	// Api URL entrypoint
	const rideApiUrl = "https://assessment.api.vweb.app/rides";
	const userApiUrl = "https://assessment.api.vweb.app/user";

	// Fetch Ride
	const handleFetchRide = async () => {
		fetch(rideApiUrl)
			.then((response) => response.json())
			.then((response) => {
				setRide(response);
				console.log(response);
			});
	};

	// Fetch User
	const handleFetchUser = async () => {
		fetch(userApiUrl)
			.then((response) => response.json())
			.then((response) => {
				setUser(response);
				console.log(response);
			});
	};

	// useEffect Hook
	useEffect(() => {
		handleFetchRide();
		handleFetchUser();
	}, []);

	return (
		<Layout props={user}>
			<Component props={ride} {...pageProps} />
		</Layout>
	);
}

export default MyApp;
