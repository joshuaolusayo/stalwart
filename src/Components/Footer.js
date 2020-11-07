import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer container-fluid p-3 p-md-5 bg-blue text-center">
			<p className="mb-0">
				Experiencing Technical Difficulty? Call{" "}
				<Link className="text-red"
					onClick={() => {
						window.location.href = `tel:0123456789`;
					}}
					to="#"
				>
					0123456789
				</Link>{" "}
				or send an email to{" "}
				<Link className="text-red"
					onClick={() => {
						window.location.href = `mailto:support@stalwartuniversityinstitute.com`;
					}}
					to="#"
				>
					support@stalwartuniversityinstitute.com
				</Link>
			</p>
		</div>
	);
};

export default Footer;
