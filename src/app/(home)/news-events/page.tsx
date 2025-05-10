import React from 'react';
import Image from 'next/image';
import Tradeview1 from '@/app/(user)/dashboard/_components/TradingView/Tradeview1';
const NewsEvent = () => {
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
								<span className='fs-12 clr-white'>News </span>
							</div>
							<h2 className='h3 fw-bold clr-neutral-90 mt-4 max-text-32 ms-auto me-auto'>
								Cavarates Economic Calendar
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
					<div className='p-4 p-md-6 mb-10 py-xxl-10 bg-neutral-10 border border-neutral-17 rounded-4'>
						<p className='clr-neutral-80'>
							The Economic Calendar encompasses crucial economic
							events, announcements, and global news that impact
							financial markets. These events are automatically
							updated upon the release of new data. It&apos;s
							important to note that the Economic Calendar offers
							only general information and is intended solely for
							informative purposes.
						</p>
					</div>
					{/* TradingView Widget BEGIN */}
					<div className='h-[500px]'>
						<Tradeview1 />
					</div>
					{/* TradingView Widget END */}
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

export default NewsEvent;
