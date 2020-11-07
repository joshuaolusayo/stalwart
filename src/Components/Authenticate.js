import React from "react";
import { Link } from "react-router-dom";

const Authenticate = () => {
	return (
		<div className="container-fluid px-0 auth" id="auth">
			<div className="main d-flex justify-content-center align-items-center w-100">
				<a
					className="btn bg-red text-white px-md-5 py-md-2 shadow-lg"
					href="http://stalwartuniversityinstitute.com/"
					rel="noreferrer"
					target="_blank"
				>
					Visit the main website
				</a>
			</div>

			<div className="row no-gutters px-sm-0">
				<div className="col-sm-6 box">
					<img className="w-100 h-100" loading="lazy" src="/images/student.jpg" alt="" />
					<div className="overlay w-100 h-100 d-flex justify-content-center align-items-center text-center">
						<div>
							<h2 className="mb-sm-4 font-montserrat">STUDENT</h2>
							<Link className="btn rounded p-2 px-sm-4 py-sm-2 bg-white text-red" to="/">
								LOGIN
							</Link>
						</div>
					</div>
				</div>
				<div className="col-sm-6 box">
					<img className="w-100 h-100" loading="lazy" src="/images/staff.jpg" alt="" />
					<div className="overlay w-100 h-100 d-flex justify-content-center align-items-center text-center">
						<div>
							<h2 className="mb-sm-4 font-montserrat">STAFF</h2>
							<Link className="btn rounded p-2 px-sm-4 py-sm-2 bg-white text-red" to="/">
								LOGIN
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Authenticate;
