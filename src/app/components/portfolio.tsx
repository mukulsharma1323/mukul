import Image from "next/image";

export default function Portfolio() {
    return (
        <>
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Portfolio
                                </h3>
                                <p className="subtitle-a">
                                    Projects Developed by me.
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="img/portfolio/react-datatable.png" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <Image src="/img/portfolio/react-datatable.png" alt="" className="img-fluid" width={440} height={365} />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <br />
                                                <h2 className="w-title">React Data Table</h2>
                                                <div className="w-more">

                                                    <a href="https://admin-table-ui.netlify.app/" target="blank"> <span className="w-ctegory">Demo</span></a> / <span className="w-date">React</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="img/portfolio/isee.png" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <Image src="/img/portfolio/isee.png" alt="" className="img-fluid" width={440} height={365} />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">ISEE Analytics</h2>
                                                <div className="w-more">

                                                    <a href="https://i2l.solutions/" target="blank"> <span className="w-ctegory">Demo</span></a> / <span className="w-date">Angular Nodejs</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="img/portfolio/isee.png" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <Image src="/img/portfolio/login-demo.png"  alt="" className="img-fluid" width={440} height={365} />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Authentication</h2>
                                                <div className="w-more">
                                                <a href="http://mukulsharma.in/login-demo/" target="blank"> <span className="w-ctegory">Demo</span></a> / <span className="w-date">PHP Authentication</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="img/portfolio/isee.png" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <Image src="/img/portfolio/1.png" alt="" className="img-fluid" width={440} height={365} />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">DNH News</h2>
                                                <div className="w-more">

                                                    <a href="" target="blank"> <span className="w-ctegory">Demo</span></a> / <span className="w-date">Angular Nodejs</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}