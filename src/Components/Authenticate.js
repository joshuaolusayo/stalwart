import React from "react";
import { Link } from "react-router-dom";

const Authenticate = () => {
	return (
		<div className="container-fluid px-0 auth">
			<div className="row no-gutters px-sm-0">
				<div className="col-sm-6 box">
					<img className="w-100 h-100" src="/images/student.jpg" alt="" />
					<div className="overlay w-100 h-100 d-flex justify-content-center align-items-center text-center">
						<div>
							<h2 className="mb-sm-4">STUDENT</h2>
							<Link className="btn rounded p-2 px-sm-4 py-sm-3" to="/">LOGIN</Link>
						</div>
					</div>
				</div>
				<div className="col-sm-6 box">
					<img className="w-100 h-100" src="/images/staff.jpg" alt="" />
                    <div className="overlay w-100 h-100 d-flex justify-content-center align-items-center text-center">
						<div>
							<h2 className="mb-sm-4">STAFF</h2>
							<Link className="btn rounded p-2 px-sm-4 py-sm-3" to="/">LOGIN</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Authenticate;
