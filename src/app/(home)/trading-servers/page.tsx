import Image from 'next/image';
const TradingServers = () => {
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
									Servers{' '}
								</span>
							</div>
							<h2 className='h3 fw-bold clr-neutral-90 mt-4 max-text-32 ms-auto me-auto'>
								Trading Servers
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
						<p className='clr-neutral-80'>
							Cavarates MetaTrader 4 and trade servers are
							situated in the NY4 and LD5 IBX Equinix Data Centers
							in New York and London, ensuring clients experience
							optimal execution speeds. Equinix data centers are
							internationally recognized for their secure and
							dependable infrastructure.
						</p>
					</div>
					<div className='p-4 p-md-6 py-xxl-10 bg-neutral-10 border border-neutral-17 rounded-4 mt-10'>
						<h4 className='h4 clr-neutral-90 fw-extrabold mt-3 mb-6'>
							What is Equinix NY4 and LD5?
						</h4>
						<p className='clr-neutral-80'>
							The Equinix NY4 and LD5 IBX Data Centers in New York
							and London host over 60 exchanges and trading
							platforms, along with more than 400 buy and sell
							side firms, over 150 financial service providers,
							and a choice of 675+ network bandwidth options.
						</p>
						<p className='clr-neutral-80'>
							Equinix data centers are renowned for their
							unparalleled reliability worldwide. These facilities
							enable financial market participants to interact
							with each other with minimal latency, ensuring
							ultra-fast data transfer and delivering the swiftest
							execution speeds for end users.
						</p>
					</div>
					<div className='p-4 p-md-6 py-xxl-10 bg-neutral-10 border border-neutral-17 rounded-4 mt-10'>
						<h4 className='h4 clr-neutral-90 fw-extrabold mt-3 mb-6'>
							The Equinix NY4 Advantage
						</h4>
						<p className='clr-neutral-80'>
							The Cavarates MetaTrader 4 and 5 servers are
							presently situated in the NY4 data center in New
							York, where they are colocated with our price
							providers, encompassing an aggregation of 50 banks
							and dark pool liquidity venues.
						</p>
						<p className='clr-neutral-80'>
							By hosting the MetaTrader 4 and 5 servers in NY4, we
							facilitate cross connects between the MetaTrader
							server and all of Cavarates&apos;s price providers.
							These dedicated lines ensure minimal latency,
							thereby guaranteeing the swiftest execution speeds
							for our clients.
						</p>
						<p className='clr-neutral-80'>
							The rapid execution speeds attained through our
							low-latency connection establish optimal trading
							conditions for traders worldwide. These conditions
							ensure that orders are executed at the most
							favorable market prices available.
						</p>
					</div>
					<div className='p-4 p-md-6 py-xxl-10 bg-neutral-10 border border-neutral-17 rounded-4 mt-10'>
						<h4 className='h4 clr-neutral-90 fw-extrabold mt-3 mb-6'>
							The Equinix LD5 Advantage
						</h4>
						<p className='clr-neutral-80'>
							Our Cavarates servers are presently housed in the
							LD5 data center in London, benefiting from
							colocation with our price providers, mirroring the
							setup of the MetaTrader servers.
						</p>
						<p className='clr-neutral-80'>
							Crafted with meticulous attention to detail, the
							Cavarates server prioritizes swift connectivity,
							sparing no effort to deliver the utmost trading
							experience for forex traders. This positioning
							establishes Cavarates as the optimal platform and
							configuration for both manual and automated traders
							situated in and around Europe.
						</p>
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

export default TradingServers;
