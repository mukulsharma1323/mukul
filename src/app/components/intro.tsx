import Image from "next/image";

export default function Intro() {
    return (
        <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <Image src="/img/profile.jpg" className="img-fluid rounded b-shadow-a" alt="" width={230} height={200} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info">
                                                <p><span className="title-s">Name: </span> <span>Mukul Sharma</span></p>
                                                <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                                                <p><span className="title-s">Email: </span> <span>hello@mukulsharma.in</span></p>
                                                <p>
                                                    <div className="socials" style={{padding: "0px !important"}}>
                                                        <ul>
                                                            <li><a href="https://www.linkedin.com/in/mukulsharma1323"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                                                            <li><a href="https://www.facebook.com/mukulsharma1323"><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                                                            <li><a href="https://www.instagram.com/mukulsharma1323/"><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
                                                        </ul>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-mf">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                Skills
                                            </h5>
                                        </div>
                                        <div className="tags">
                                            <a href="" style={{textDecoration: "none"}} className="btn-warning">HTML</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-info">CSS</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-danger">Bootstrap</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-warning">PHP</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-success">MySQL</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-primary">JavaScript</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-danger">jQuery</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-danger">NodeJs</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-warning">Express Js</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-info">MongoDB</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-primary">Angular</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-success">AWS</a>
                                            <a href="" style={{textDecoration: "none", marginLeft: "10px"}} className="btn-primary">Google APIs</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                About me
                                            </h5>
                                        </div>
                                        <p className="lead">Experienced Web Developer with a demonstrated history of working in the information technology
                                            and services industry. Skilled in PHP, SQL, Apache, Angular 2, Node.js and Linux. Strong knowledge of websites
                                            Stacks HTML, CSS, JavaScript, jQuery, and AJAX technology. Professional with an Engineer`s Degree focused in
                                            Computer Science Engineering.
                                        </p>
                                        <p className="lead">
                                        </p>
                                        <p className="lead">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}