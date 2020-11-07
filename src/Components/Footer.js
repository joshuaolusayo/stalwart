import React from "react";

const Footer = () => {
	return (
		<div className="footer container-fluid p-3 p-md-5 bg-blue text-center">
			<p className="mb-0">
				Experiencing Technical Difficulty? Call{" "}
				<a className="text-red" href="tel:0123456789">
					0123456789
				</a>{" "}
				or send an email to{" "}
				<a className="text-red" href="mailto:support@stalwartuniversityinstitute.com">
					support@stalwartuniversityinstitute.com
				</a>
			</p>
		</div>
	);
};

export default Footer;
