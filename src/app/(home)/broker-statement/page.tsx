import Image from "next/image";

const BrokerStatement = () => {
    return (
        <>
           <section className="breadcrumb-section">
    <div className="container"> 
        <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 text-center section-space-y">
                <div className="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1">
                    <a href="index.html" className="link fs-12 clr-white">Home</a>
                    <span className="fs-12 clr-white">-</span>
                    <span className="fs-12 clr-white">Statements </span>
                </div>
                <h2 className="h3 fw-bold clr-neutral-90 mt-4 max-text-32 ms-auto me-auto">Broker Statement Report</h2>
                <p className="clr-neutral-90">Have a peek of our past profit reports and payouts from some
                    of our top traders.</p>
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

<div className="use-case-section section-space-sm-bottom">
    <div className="container">
        <div>
            <Image src="/resources/landing/assets/img/n2022.jpg" alt="image" className="img-fluid object-fit-cover" width={1000} height={100} />
        </div>
        <div className="mt-10">
            <Image src="/resources/landing/assets/img/o2021.jpg" alt="image" className="img-fluid object-fit-cover" width={1000} height={100} />
        </div>
        <div className="mt-10">
            <Image src="/resources/landing/assets/img/s2021.jpg" alt="image" className="img-fluid object-fit-cover" width={1000} height={100} />
        </div>
        <div className="mt-10">
            <Image src="/resources/landing/assets/img/a2021.png" alt="image" className="img-fluid object-fit-cover" width={1000} height={100} />
        </div>
     
          
      
        <div className="mt-10">
            <Image src="/resources/landing/assets/img/j2020.jpg" alt="image" className="img-fluid object-fit-cover" width={1000} height={100} />
        </div>
    </div>
    
</div>
        </>
    )
}

export default BrokerStatement;