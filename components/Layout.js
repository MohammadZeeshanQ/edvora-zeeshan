import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children, props }) {
	return (
		<div>
			<Navbar props={props} />
			{children}
		</div>
	);
}
