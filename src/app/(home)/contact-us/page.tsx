import Image from "next/image";
const ContactUs = () => {
  return (
    <>
        <section className="breadcrumb-section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 text-center section-space-y">
                <div className="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1">
                    <a href="index.html" className="link fs-12 clr-white">Home</a>
                    <span className="fs-12 clr-white">-</span>
                    <span className="fs-12 clr-white">Contact Us </span>
                </div>
                <h2 className="h3 fw-bold clr-neutral-90 mt-4 max-text-32 ms-auto me-auto">We are available 24/7</h2>
            </div>
        </div>
    </div>
    <Image src="/resources/landing/assets/img/breadcrumb-shape-top.png" alt="image"
        className="img-fluid breadcrumb-shape breadcrumb-shape-top" width={100} height={100} />
    <Image src="/resources/landing/assets/img/breadcrumb-shape-left.png" alt="image"
        className="img-fluid breadcrumb-shape breadcrumb-shape-left" width={100} height={100} />
    <Image src="/resources/landing/assets/img/breadcrumb-shape-right.png" alt="image"
        className="img-fluid breadcrumb-shape breadcrumb-shape-right" width={100} height={100} />
    <Image src="/resources/landing/assets/img/breadcrumb-shape-line-left.png" alt="image"
        className="img-fluid breadcrumb-shape breadcrumb-shape-line-left" width={100} height={100} />
    <Image src="/resources/landing/assets/img/breadcrumb-shape-line-right.png" alt="image"
        className="img-fluid breadcrumb-shape breadcrumb-shape-line-right" width={100} height={100} />
</section>

<div className="section-space-sm-y position-relative z-1">
    <div className="container">
        <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="gradient-card top-shadow px-6 py-10 rounded-3 d-flex gap-5 flex-column justify-content-between h-100 fadein_bottom_20"
                    style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}>
              
                    <h1 className="clr-secondary-key"><i className="bi bi-geo"></i></h1>
                    <div className="d-flex flex-column gap-3">
                        <h6 className="mb-0 clr-neutral-90 fs-18 reveal-text"> Office Address </h6>
                        <p className="mb-0 clr-neutral-80 fs-14 reveal-text"> </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="gradient-card top-shadow px-6 py-10 rounded-3 d-flex gap-5 flex-column justify-content-between h-100 fadein_bottom_20"
                    style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}>
                    <h1 className="clr-secondary-key"><i className="bi bi-headset"></i></h1>
                    <div className="d-flex flex-column gap-3">
                        <h6 className="mb-0 clr-neutral-90 fs-18 reveal-text"> Dial </h6>
                        <p className="clr-neutral-80 fs-14 reveal-text">  </p>
                        <i className="mb-0 clr-neutral-80">International Charges may apply</i>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="gradient-card top-shadow px-6 py-10 rounded-3 d-flex gap-5 flex-column justify-content-between h-100 fadein_bottom_20"
                    style=  {{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}>
                    <h1 className="clr-secondary-key"><i className="bi bi-envelope-at"></i></h1>
                    <div className="d-flex flex-column gap-3">
                        <h6 className="mb-0 clr-neutral-90 fs-18 reveal-text"> Email Us </h6>
                        <p className="mb-0 clr-neutral-80 fs-14 reveal-text"> support@Cavarates.com </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Image src="/resources/landing/assets/img/payment-section-shape-1.png" alt="image"
        className="img-fluid position-absolute pointer-none position-center" width={100} height={100} />
    <Image src="/resources/landing/assets/img/payment-section-shape-2.png" alt="image"
        className="img-fluid position-absolute z-n1 top-0 end-0" width={100} height={100} />
</div>

<div className="position-relative z-1">
    <div className="container">
        <div className="row g-4">
            <div className="col-md-6">
                <div className="border border-neutral-10 bg-black rounded-4 h-100">
                    <div className="p-4 p-lg-6 p-xxl-12 text-center fadeIn_bottom"
                        style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}>
                        <Image src="/resources/landing/assets/img/img-2.png" alt="image" className="img-fluid" width={100} height={100} />
                    </div>
                    <div className="px-4 px-lg-6 px-xxl-12 pb-4 pb-lg-4 pb-xxl-12">
                        <h5 className="mb-0 fw-extrabold">
                            <h3 className="mb-6 clr-neutral-90 fw-extrabold animate-line-3d">
                                Our strength is in the numbers. </h3>
                        </h5>
                        <p className="mb-8 max-text-40 fs-14 fw-medium clr-neutral-80 animate-text-from-right">
                            Cavarates is one of the largest Copy Trading platform providers in the world by trading
                            volume. With full support across the globe.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="border border-neutral-10 bg-black rounded-4 h-100">
                    <div className="pt-4 pt-lg-6 pt-xxl-12 text-center overflow-hidden">
                        <div className="scroller-x mb-6" data-direction="left" data-speed="slow" data-animated="true">
                            <ul className="list list-row align-items-center gap-4 scroller-x__list">
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-1.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-2.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-3.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-4.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-5.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-6.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-7.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-8.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-9.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-10.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-11.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-12.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-13.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-1.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-2.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-3.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-4.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-5.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-6.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-7.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-8.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-9.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-10.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-11.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-12.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-13.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                            </ul>
                        </div>
                        <div className="scroller-x mb-6" data-direction="right" data-speed="slow" data-animated="true">
                            <ul className="list list-row align-items-center gap-4 scroller-x__list">
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-1.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-2.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-3.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-4.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-5.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-6.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-7.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-8.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-9.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-10.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-11.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-12.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-13.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-1.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-2.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-3.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-4.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-5.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-6.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-7.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-8.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-9.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-10.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-11.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-12.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-13.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                            </ul>
                        </div>
                        <div className="scroller-x" data-direction="left" data-speed="slow" data-animated="true">
                            <ul className="list list-row align-items-center gap-4 scroller-x__list">
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-1.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-2.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-3.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-4.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-5.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-6.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-7.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-8.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-9.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-10.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-11.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-12.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li>
                                    <Image src="/resources/landing/assets/img/flag-box-13.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-1.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-2.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-3.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-4.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-5.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-6.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-7.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-8.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-9.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-10.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-11.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-12.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                                <li aria-hidden="true">
                                    <Image src="/resources/landing/assets/img/flag-box-13.png" alt="image"
                                        className="img-fluid" width={100} height={100} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 p-lg-6 p-xxl-12">
                        <span className="d-inline-block py-1 px-3 bg-neutral-6 clr-neutral-80 mb-4 rounded fadeIn_bottom"
                            style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}>
                            <span className="d-inline-block fw-extrabold"> Unlimited Language Support </span>
                        </span>
                        <h5 className="mb-6 fw-extrabold">
                            <a href="index.html" className="link d-block clr-grad-1 animate-text-from-right">
                                    Cavarates is Trusted by Millions in 40+ Countries. </a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Image src="/resources/landing/assets/img/about-section-1-shape-1.png" alt="image"
        className="img-fluid d-none d-xl-block position-absolute top-0 start-0 z-n1" width={100} height={100} />
    <Image src="/resources/landing/assets/img/about-section-1-shape-2.png" alt="image"
        className="img-fluid d-none d-xl-block position-absolute top-0 end-0 z-n1" width={100} height={100} />
</div>

<section className="cta-section-5 section-space-sm-top section-space-sm-bottom">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="cta-wrapper-5">
                    <div className="text-center">
                        <h3 className="clr-neutral-90 fw-bold">Start Your Trading Account For Free</h3>
                        <p className="mb-0 fs-14 clr-neutral-80">Start copying top traders with guaranteed profits today.
                        </p>
                        <a href="/auth/signup"
                            className="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-1 fw-bold clr-white mt-8 :arrow-btn">
                            <span>Get Started Now</span>
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <Image src="/resources/landing/assets/img/cta-4-bg.png" alt="image"
                        className="img-fluid cta-wrapper-4-bg w-100 h-100 object-fit-cover" width={100} height={100} />
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default ContactUs;