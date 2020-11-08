import React from "react";

const Authenticate = () => {
	return (
		<div className="container-fluid px-0 auth" id="auth">
			<div className="row no-gutters px-lg-0">
				<div className="col-lg-6 box">
					<img className="w-100 h-100" loading="lazy" src="/images/student.jpg" alt="Student page" />
					<div className="overlay w-100 h-100 d-flex justify-content-center align-items-center text-center">
						<div>
							<h2 className="mb-lg-4 font-montserrat">STUDENT</h2>
							<a
								className="btn rounded p-2 px-lg-4 py-lg-2 bg-white text-red"
								href="http://portal.stalwartuniversityinstitute.com/student/login"
							>
								LOGIN
							</a>
						</div>
					</div>
				</div>
				<div className="col-lg-6 box">
					<img className="w-100 h-100" loading="lazy" src="/images/staff.jpg" alt="Staff page" />
					<div className="overlay w-100 h-100 d-flex justify-content-center align-items-center text-center">
						<div>
							<h2 className="mb-lg-4 font-montserrat">STAFF</h2>
							<a
								className="btn rounded p-2 px-lg-4 py-lg-2 bg-white text-red"
								href="http://portal.stalwartuniversityinstitute.com/staff/login"
							>
								LOGIN
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Authenticate;
