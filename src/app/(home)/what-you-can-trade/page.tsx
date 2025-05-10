import React from 'react';
import Image from 'next/image';
const page = () => {
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
									Range of Markets{' '}
								</span>
							</div>
							<h2 className='h3 fw-bold clr-neutral-90 mt-4 max-text-32 ms-auto me-auto'>
								What can you trade on Cavarates?
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
			<div className='blog-section-2 section-space-sm-y'>
				<div className='section-space-sm-bottom'>
					<div className='container'>
						<div className='row g-4'>
							<div className='col-xl-7'>
								<div className='p-4 p-md-6 rounded-4 bg-black border border-neutral-10'>
									<div className='row g-3'>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='rounded-3 overflow-hidden flex-shrink-0'>
													<Image
														src='/resources/landing/assets/img/futures.png'
														width={100}
														height={100}
														alt='image'
														className='img-fluid'
													/>
												</div>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Futures
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														Futures represent a
														highly sought-after
														category of CFDs.
														Cavarates presents a
														diverse selection of
														Futures from global
														markets, such as the ICE
														Dollar Index and CBOE
														VIX Index. Online
														Futures-based CFDs are
														available exclusively on
														Cavarates&apos;s
														MetaTrader 4 Platform.
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															{' '}
															Futures Markets
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														<ul className='list gap-4 mt-8'>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		4 Global
																		Futures
																		available
																		to trade
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		No
																		commissions
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Up to
																		1:200
																		leverage
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Deep
																		Liquidity
																	</span>
																</div>
															</li>
														</ul>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-7'>
								<div className='p-4 p-md-6 rounded-4 bg-black border border-neutral-10'>
									<div className='row g-3'>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															{' '}
															Stocks Markets
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														<ul className='list gap-4 mt-8'>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		+2100
																		stocks
																		from
																		ASX,
																		Nasdaq &
																		NYSE
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Earn
																		dividends
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		MT5
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Up to
																		1:20
																		leverage
																	</span>
																</div>
															</li>
														</ul>
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='rounded-3 overflow-hidden flex-shrink-0'>
													<Image
														src='/resources/landing/assets/img/stocks.png'
														width={100}
														height={100}
														alt='image'
														className='img-fluid'
													/>
												</div>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Stocks CFD
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														Explore a comprehensive
														array of more than 2100
														large-cap Stocks CFDs
														spanning the ASX, NYSE,
														and NASDAQ exchanges.
														We&apos;ve curated a
														selection of the
														globe&apos;s most
														renowned companies to
														provide you with optimal
														trading prospects.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-7'>
								<div className='p-4 p-md-6 rounded-4 bg-black border border-neutral-10'>
									<div className='row g-3'>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='rounded-3 overflow-hidden flex-shrink-0'>
													<Image
														src='/resources/landing/assets/img/crypto.png'
														width={100}
														height={100}
														alt='image'
														className='img-fluid'
													/>
												</div>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Cryptocurrency CFD
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														Participate in both long
														and short positions
														across our extensive
														selection of the
														world&apos;s largest and
														most widely traded
														Cryptocurrencies. Engage
														in trading against
														fellow retail traders
														every day of the week,
														where price fluctuations
														are predominantly
														influenced by fear,
														greed, news, and
														prevailing sentiment.
														Benefit from trading
														with leverage of up to
														1:200 and mitigate
														Cryptocurrency Exchange
														risk by trading with an
														FSA-regulated CFD
														Provider.
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Cryptocurrency
															Markets
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														<ul className='list gap-4 mt-8'>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		57 of
																		the most
																		popular
																		Cryptocurrency
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Trade
																		the
																		market 7
																		days a
																		week
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Long or
																		short
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		1:200
																		Leverage
																		MetaTrader4/MT5
																		1:5
																		Leverage
																	</span>
																</div>
															</li>
														</ul>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-7'>
								<div className='p-4 p-md-6 rounded-4 bg-black border border-neutral-10'>
									<div className='row g-3'>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Commodities Markets
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														<ul className='list gap-4 mt-8'>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Over 20
																		CFDs on
																		Commodities
																		to trade
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Energy,
																		agriculture
																		and
																		metals
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Spot and
																		Futures
																		CFDs
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Up to
																		1:1000
																		leverage
																	</span>
																</div>
															</li>
														</ul>
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='rounded-3 overflow-hidden flex-shrink-0'>
													<Image
														src='/resources/landing/assets/img/commodity.png'
														width={100}
														height={100}
														alt='image'
														className='img-fluid'
													/>
												</div>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Commodities CFD
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														Engage in trading
														energy, agriculture, and
														metals products akin to
														currency pairs against
														the USD or as Futures
														CFDs. We&apos;ve merged
														tight pricing with
														adaptable lot sizes
														ranging from 10 cents
														per point, providing you
														with a single, potent
														product.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-7'>
								<div className='p-4 p-md-6 rounded-4 bg-black border border-neutral-10'>
									<div className='row g-3'>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='rounded-3 overflow-hidden flex-shrink-0'>
													<Image
														src='/resources/landing/assets/img/bonds.png'
														width={100}
														height={100}
														alt='image'
														className='img-fluid'
													/>
												</div>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Bonds CFD
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														Bonds provide traders
														with a chance to
														speculate on interest
														rates and global risk
														sentiment, while also
														offering a hedge against
														equities exposure and an
														avenue to diversify
														their strategy. Select
														from a variety of Bonds
														issued by governments
														worldwide, including
														those from Japan,
														Europe, the U.K., and
														the U.S.
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															{' '}
															Bonds Markets
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														<ul className='list gap-4 mt-8'>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Over 9
																		Bonds
																		available
																		to trade
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		No
																		commissions
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Up to
																		1:200
																		leverage
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Deep
																		Liquidity
																	</span>
																</div>
															</li>
														</ul>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-7'>
								<div className='p-4 p-md-6 rounded-4 bg-black border border-neutral-10'>
									<div className='row g-3'>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Commodities Markets
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														<ul className='list gap-4 mt-8'>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		61
																		currency
																		pairs
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Tight
																		spreads
																		from 0.0
																		pips
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Up to
																		1:1000
																		leverage
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Deep
																		liquidity
																	</span>
																</div>
															</li>
														</ul>
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='rounded-3 overflow-hidden flex-shrink-0'>
													<Image
														src='/resources/landing/assets/img/forex.png'
														width={100}
														height={100}
														alt='image'
														className='img-fluid'
													/>
												</div>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Forex CFD
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														The Forex market offers
														traders the chance to
														engage in trading
														activities 24 hours a
														day, 5 days a week,
														within the world&apos;s
														most liquid financial
														market. Traders can
														capitalize on
														exceptionally tight
														spreads, superior
														execution, and extensive
														liquidity across 61
														currency pairs.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-7'>
								<div className='p-4 p-md-6 rounded-4 bg-black border border-neutral-10'>
									<div className='row g-3'>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='rounded-3 overflow-hidden flex-shrink-0'>
													<Image
														src='/resources/landing/assets/img/indices.png'
														width={100}
														height={100}
														alt='image'
														className='img-fluid'
													/>
												</div>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															Indices CFD
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														Access the world&apos;s
														largest equity markets
														through Cavarates&apos;s
														global Indices CFDs
														offering. With spreads
														starting from 0.4 points
														on 25 Indices, traders
														can adopt a broader
														perspective on equities
														markets while benefiting
														from commission-free and
														24/5 trading
														availability across
														major markets.
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-6 col-xl-12'>
											<div
												className='d-flex flex-column flex-sm-row flex-md-column flex-xxl-row gap-6 gradient-card top-shadow rounded-3 p-4 p-xl-5 p-xxl-6 fadeIn_bottom'
												style={{
													translate: 'none',
													rotate: 'none',
													scale: 'none',
													transform:
														'translate(0px, 0px)',
													opacity: 1,
												}}
											>
												<div className='flex-grow-1'>
													<h5 className='mb-2'>
														<a
															href='#'
															className='link d-block clr-neutral-90 :clr-primary-key'
														>
															{' '}
															Bonds Markets
														</a>
													</h5>
													<p className='mb-5 clr-neutral-80 fs-14'>
														<ul className='list gap-4 mt-8'>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		25
																		Indices
																		to trade
																		from
																		across
																		the
																		globe
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		Up to
																		1:200
																		leverage
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		No
																		commissions
																	</span>
																</div>
															</li>
															<li>
																<div className='d-flex align-items-center gap-3'>
																	<span className='flex-shrink-0 d-grid place-content-center w-4 h-4 rounded-circle border border-neutral-30 clr-neutral-80 fs-10'>
																		<i className='bi bi-check2 mt-1'></i>
																	</span>
																	<span className='d-block fs-14 clr-neutral-80 fw-medium'>
																		MT4,
																		MetaTrader
																		5
																	</span>
																</div>
															</li>
														</ul>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
										href='/auth/signup'
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

export default page;
