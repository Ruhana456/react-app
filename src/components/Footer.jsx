import React from 'react';

// Footer Component
export const Footer = () => {
	return (
			<footer className="footer-section">
					<div className="container relative">
							<div className="sofa-img">
									<img src="images/sofa.png" alt="Sofa" className="img-fluid" />
							</div>

							{/* Footer content */}
							<div className="row">
									<div className="col-lg-8">
											<div className="subscription-form">
													<h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Envelope" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>

													<form action="#" className="row g-3">
															<div className="col-auto">
																	<input type="text" className="form-control" placeholder="Enter your name" />
															</div>
															<div className="col-auto">
																	<input type="email" className="form-control" placeholder="Enter your email" />
															</div>
															<div className="col-auto">
																	<button className="btn btn-primary">
																			<span className="fa fa-paper-plane"></span>
																	</button>
															</div>
													</form>

											</div>
									</div>
							</div>

							<div className="row g-5 mb-5">
									<div className="col-lg-4">
											<div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
											<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

											<ul className="list-unstyled custom-social">
													<li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
													<li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
													<li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
													<li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
											</ul>
									</div>

									<div className="col-lg-8">
											<div className="row links-wrap">
													{/* Links go here */}
											</div>
									</div>
							</div>

							<div className="border-top copyright">
									<div className="row pt-4">
											<div className="col-lg-6">
													<p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
															{/* <!-- License information: https://untree.co/license/ --> */}
													</p>
											</div>

											<div className="col-lg-6 text-center text-lg-end">
													<ul className="list-unstyled d-inline-flex ms-auto">
															<li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
															<li><a href="#">Privacy Policy</a></li>
													</ul>
											</div>
									</div>
							</div>
					</div>
			</footer>
	);
};

