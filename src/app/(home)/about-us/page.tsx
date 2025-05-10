import React from 'react';
import Image from 'next/image';
const AboutUsPage = () => {
	return (
		<>
			<section className='breadcrumb-section'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xxl-8 col-xl-8 text-center section-space-y'>
							<div className='d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1'>
								<a
									href='index.html'
									className='link fs-12 clr-white'
								>
									Home
								</a>
								<span className='fs-12 clr-white'>-</span>
								<span className='fs-12 clr-white'>
									About Us
								</span>
							</div>
							<h2 className='h3 fw-bold clr-neutral-90 mt-4 max-text-32 ms-auto me-auto'>
								<span className='clr-grad-1'>Cavarates</span> -
								An Enhanced Trading Experience and a
								Customer-First Approach
							</h2>
						</div>
					</div>
				</div>
				<Image
					src='/resources/landing/assets/img/breadcrumb-shape-top.png'
					alt='image'
					className='img-fluid breadcrumb-shape breadcrumb-shape-top'
					width={100}
					height={100}
				/>
				<Image
					src='/resources/landing/assets/img/breadcrumb-shape-left.png'
					alt='image'
					className='img-fluid breadcrumb-shape breadcrumb-shape-left'
					width={100}
					height={100}
				/>
				<Image
					src='/resources/landing/assets/img/breadcrumb-shape-right.png'
					alt='image'
					className='img-fluid breadcrumb-shape breadcrumb-shape-right'
					width={100}
					height={100}
				/>
				<Image
					src='/resources/landing/assets/img/breadcrumb-shape-line-left.png'
					alt='image'
					className='img-fluid breadcrumb-shape breadcrumb-shape-line-left'
					width={100}
					height={100}
				/>
				<Image
					src='/resources/landing/assets/img/breadcrumb-shape-line-right.png'
					alt='image'
					className='img-fluid breadcrumb-shape breadcrumb-shape-line-right'
					width={100}
					height={100}
				/>
			</section>
			<div className='use-case-section section-space-sm-bottom'>
				<div className='container'>
					<div className='p-4 p-md-6 py-xxl-10 bg-neutral-10 border border-neutral-17 rounded-4'>
						<h4 className='h4 clr-neutral-90 fw-extrabold mt-3 mb-6'>
							About Us
						</h4>
						<p className='clr-neutral-80'>
							We pride ourselves on being trailblazers in the
							brokerage industry. Established in 2006, a
							significant tenure in online trading, we were among
							the pioneering platforms accessible to retail
							traders like yourself. Over the years, we&apos;ve
							cultivated a robust reputation and fostered strong
							client relationships. Safeguarding this reputation
							and our bond with our clients is paramount to us.
						</p>
						<p className='clr-neutral-80 mb-5'>
							Being among the most rigorously regulated online
							brokers providing CFD trading online instills a high
							level of confidence and trust in our traders. We
							deeply cherish this trust and are committed to
							preserving it through all means possible. Our focus
							lies on delivering both quality and variety. We
							offer a range of platforms, host diverse assets, and
							provide various account types, all aimed at ensuring
							our clients have a satisfying and fruitful trading
							experience.
						</p>
						<h5 className='h5 clr-neutral-90 fw-extrabold mt-3 mb-6'>
							Boasting of over 350,000 Happy Traders Worldwide
						</h5>
						<p className='clr-neutral-80'>
							For close to twenty years, we&apos;ve solidified our
							position as a significant presence in the online
							financial sector, backed by a demonstrated history
							of delivering positive customer satisfaction. Here
							are a few compelling reasons why:
						</p>
						<ul className='list flex-wrap list-row gap-6 mt-10'>
							<li className='d-flex gap-3 align-items-center'>
								<span className='w-6 h-6 bg-neutral-24 rounded-circle clr-neutral-80 d-inline-flex justify-content-center align-items-center fs-18 flex-shrink-0'>
									<i className='bi bi-check'></i>
								</span>
								<span className='fw-semibold clr-neutral-80 flex-grow-1'>
									Around 1000 instruments are at your
									disposal, spanning Cryptocurrencies, Stocks,
									and Commodities, among others.
								</span>
							</li>
							<li className='d-flex gap-3 align-items-center'>
								<span className='w-6 h-6 bg-neutral-24 rounded-circle clr-neutral-80 d-inline-flex justify-content-center align-items-center fs-18 flex-shrink-0'>
									<i className='bi bi-check'></i>
								</span>
								<span className='fw-semibold clr-neutral-80 flex-grow-1'>
									A range of automated tradin platforms and EA
									compatibility
								</span>
							</li>
							<li className='d-flex gap-3 align-items-center'>
								<span className='w-6 h-6 bg-neutral-24 rounded-circle clr-neutral-80 d-inline-flex justify-content-center align-items-center fs-18 flex-shrink-0'>
									<i className='bi bi-check'></i>
								</span>
								<span className='fw-semibold clr-neutral-80 flex-grow-1'>
									Regulated in Europe, Australia, Japan,
									British Virgin Islands, UAE and South Africa
								</span>
							</li>
							<li className='d-flex gap-3 align-items-center'>
								<span className='w-6 h-6 bg-neutral-24 rounded-circle clr-neutral-80 d-inline-flex justify-content-center align-items-center fs-18 flex-shrink-0'>
									<i className='bi bi-check'></i>
								</span>
								<span className='fw-semibold clr-neutral-80 flex-grow-1'>
									Client funds are held in segregated accounts
									for increased security
								</span>
							</li>
							<li className='d-flex gap-3 align-items-center'>
								<span className='w-6 h-6 bg-neutral-24 rounded-circle clr-neutral-80 d-inline-flex justify-content-center align-items-center fs-18 flex-shrink-0'>
									<i className='bi bi-check'></i>
								</span>
								<span className='fw-semibold clr-neutral-80 flex-grow-1'>
									Competitive spread and leverage offering
								</span>
							</li>
						</ul>
					</div>
					<div className='mt-13'>
						<h4 className='h4 clr-neutral-90 fw-extrabold mt-3 mb-6'>
							Our Advantage
						</h4>
						<div className='row gy-4'>
							<div className='col-sm-6 col-lg-4'>
								<div className='ai-template-card p-4 p-sm-6 px-xxl-10 py-xxl-12 text-center text-xl-start h-100'>
									<div className='clr-neutral-50 fs-32'>
										<Image
											src='/resources/landing/assets/img/advantage2.png'
											alt='image'
											width={100}
											height={100}
										/>
									</div>
									<h4 className='clr-neutral-90 fs-24 mt-10 mb-4'>
										Paid-Up capital of over $122million
									</h4>
								</div>
							</div>
							<div className='col-sm-6 col-lg-4'>
								<div className='ai-template-card p-4 p-sm-6 px-xxl-10 py-xxl-12 text-center text-xl-start h-100'>
									<div className='clr-neutral-50 fs-32'>
										<Image
											src='/resources/landing/assets/img/advantage1.png'
											alt='image'
											width={100}
											height={100}
										/>
									</div>
									<h4 className='clr-neutral-90 fs-24 mt-10 mb-4'>
										Highest Level of Leverage up to 500:1
									</h4>
								</div>
							</div>
							<div className='col-sm-6 col-lg-4'>
								<div className='ai-template-card p-4 p-sm-6 px-xxl-10 py-xxl-12 text-center text-xl-start h-100'>
									<div className='clr-neutral-50 fs-32'>
										<Image
											src='/resources/landing/assets/img/advantage3.png'
											alt='image'
											width={100}
											height={100}
										/>
									</div>
									<h4 className='clr-neutral-90 fs-24 mt-10 mb-4'>
										Full ECN with Spreads startin from 0.0*
										pips
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className='section-space-sm-top section-space-sm-bottom'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xxl-6 col-lg-8 text-center'>
							<h3 className='clr-neutral-90'>
								{' '}
								What makes Cavarates the best?{' '}
							</h3>
						</div>
					</div>
					<div className='mt-12'>
						<div className='pricing-compare-wrapper'>
							<div className='pricing-compare-wrapper-inner'>
								<ul className='pricing-compare-list'>
									<li>
										<span className='caption'>
											Real-time forex and CFD quotes
										</span>
										<div className='writebot-check'>
											<span className='w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key'>
												<i className='bi bi-check-circle-fill'></i>
											</span>
										</div>
									</li>
									<li>
										<span className='caption'>
											Servers in the LD5 IBX Equinix Data
											Center
										</span>
										<div className='writebot-check'>
											<span className='w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key'>
												<i className='bi bi-check-circle-fill'></i>
											</span>
										</div>
									</li>
									<li>
										<span className='caption'>
											Multiple order types
										</span>
										<div className='writebot-check'>
											<span className='w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key'>
												<i className='bi bi-check-circle-fill'></i>
											</span>
										</div>
									</li>
									<li>
										<span className='caption'>
											Level II pricing with full market
											depth
										</span>
										<div className='writebot-check'>
											<span className='w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key'>
												<i className='bi bi-check-circle-fill'></i>
											</span>
										</div>
									</li>
									<li>
										<span className='caption'>
											Flexible funding and withdrawing
											options
										</span>
										<div className='writebot-check'>
											<span className='w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key'>
												<i className='bi bi-check-circle-fill'></i>
											</span>
										</div>
									</li>
									<li>
										<span className='caption'>
											No restrictions on limit orders
										</span>
										<div className='writebot-check'>
											<span className='w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key'>
												<i className='bi bi-check-circle-fill'></i>
											</span>
										</div>
									</li>
									<li>
										<span className='caption'>
											Market leading spreads and low
											commissions
										</span>
										<div className='writebot-check'>
											<span className='w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key'>
												<i className='bi bi-check-circle-fill'></i>
											</span>
										</div>
									</li>
									<li>
										<span className='caption'>
											Micro lot trading – Minimum lot size
											of 0.01 with no maximum
										</span>
										<div className='writebot-check'>
											<span className='w-7 h-7 bg-primary-key bg-opacity-3 rounded-circle d-inline-flex justify-content-center align-items-center clr-primary-key'>
												<i className='bi bi-check-circle-fill'></i>
											</span>
										</div>
									</li>
								</ul>
							</div>
							<Image
								src='/resources/landing/assets/img/difference-line-top.png'
								alt='image'
								className='img-fluid difference-line difference-line-top'
								width={100}
								height={100}
							/>
							<Image
								src='/resources/landing/assets/img/difference-line-bottom.png'
								alt='image'
								className='img-fluid difference-line difference-line-bottom'
								width={100}
								height={100}
							/>
							<Image
								src='/resources/landing/assets/img/difference-line-left.png'
								alt='image'
								className='img-fluid difference-line difference-line-left'
								width={100}
								height={100}
							/>
							<Image
								src='/resources/landing/assets/img/difference-line-right.png'
								alt='image'
								className='img-fluid difference-line difference-line-right'
								width={100}
								height={100}
							/>
						</div>
					</div>
				</div>
			</section>

			<div
				className='section-space-sm-top position-relative z-1 overflow-hidden'
				data-cursor='Subscribe Now'
			>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='newsletter-section-1 ps-xl-15'>
								<div className='row g-4 justify-content-xxl-between align-items-center'>
									<div className='col-lg-6'>
										<div className='text-xl-center fadein_bottom_12'>
											<div className='newsletter-section-1__img-container d-inline-flex justify-content-center align-items-center'>
												<div className='d-inline-block overflow-hidden'>
													<Image
														src='/resources/landing/assets/img/Copytrading.png'
														alt='image'
														className='img-fluid object-fit-cover'
														width={1000}
														height={100}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className='col-lg-6 col-xxl-5'>
										<h3 className='mb-12 clr-neutral-90 animate-text-from-right'>
											{' '}
											Another Way to Enjoy the Markets
										</h3>
										<div className='input-group input--group input--group-underline input--group-inverse-surface mb-6 fadein_bottom_10'>
											<p className='clr-neutral-90'>
												Use your bonus to trade a huge
												selection of financial
												instruments with one of the most
												regulated brokers in the world.
											</p>
											<p className='clr-neutral-90'>
												Get access to trader insights,
												helpful tools and charting
												packages to enhance your trades
												and enjoy the personal touch,
												with our multilingual live
												support.
											</p>
											<p>
												<a
													href='/auth/signup'
													className='gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-6 py-4 rounded fw-bold text-center'
												>
													<span className='d-inline-block'>
														{' '}
														Create Account{' '}
													</span>
													<span className='d-inline-block'>
														<i className='bi bi-arrow-right'></i>
													</span>
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Image
					src='/resources/landing/assets/img/newsletter-1-shape.png'
					alt='image'
					className='img-fluid newsletter-section-1__shape'
					width={1000}
					height={100}
				/>
			</div>

			<section className='cta-section-5 section-space-sm-top section-space-sm-bottom'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-12'>
							<div className='cta-wrapper-5'>
								<div className='text-center'>
									<h3 className='clr-neutral-90 fw-bold'>
										Start Your Trading Account For Free
									</h3>
									<p className='mb-0 fs-14 clr-neutral-80'>
										Start copying top traders with
										guaranteed profits today.
									</p>
									<a
										href='register.html'
										className='link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-1 fw-bold clr-white mt-8 :arrow-btn'
									>
										<span>Get Started Now</span>
										<i className='bi bi-arrow-right'></i>
									</a>
								</div>
								<Image
									src='/resources/landing/assets/img/cta-4-bg.png'
									alt='image'
									className='img-fluid cta-wrapper-4-bg w-100 h-100 object-fit-cover'
									width={100}
									height={100}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUsPage;
