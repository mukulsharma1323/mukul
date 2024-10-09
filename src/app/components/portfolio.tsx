import Image from "next/image";

export default function Portfolio() {

    const data = [
        {
            title: "React Data Table",
            image: "/img/portfolio/react-datatable.png",
            imageUrl: "img/portfolio/react-datatable.png",
            demoUrl: "https://admin-table-ui.netlify.app/",
            tech: "React"
        },
        {
            title: "ISEE Analytics",
            image: "/img/portfolio/isee.png",
            imageUrl: "img/portfolio/isee.png",
            demoUrl: "https://i2l.solutions/",
            tech: "Angular"
        },
        {
            title: "Authentication",
            image: "/img/portfolio/login-demo.png",
            imageUrl: "img/portfolio/login-demo.png",
            demoUrl: "http://mukulsharma.in/login-demo/",
            tech: "PHP"
        },
        {
            title: "DNH News",
            image: "/img/portfolio/1.png",
            imageUrl: "img/portfolio/1.png",
            demoUrl: "",
            tech: "Wordpress"
        },
        {
            title: "API for Android App",
            image: "/img/portfolio/7.png",
            imageUrl: "img/portfolio/7.png",
            demoUrl: "",
            tech: "PHP"
        },
        {
            title: "Hospital Management System",
            image: "/img/portfolio/3.png",
            imageUrl: "img/portfolio/3.png",
            demoUrl: "",
            tech: "PHP"
        },
        {
            title: "Industrymall.in",
            image: "/img/portfolio/4.png",
            imageUrl: "img/portfolio/4.png",
            demoUrl: "",
            tech: "PHP"
        },
        {
            title: "Machine cloud",
            image: "/img/portfolio/5.png" ,
            imageUrl: "img/portfolio/5.png" ,
            demoUrl: "",
            tech: "PHP"
        },
        {
            title: "Electric Studio",
            image: "/img/portfolio/6.png",
            imageUrl: "img/portfolio/6.png",
            demoUrl: "",
            tech: "NodeJs"
        },
    ]

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
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="col-md-4" key={index} >
                                        <div className="work-box">
                                            <a href={item?.imageUrl} data-lightbox="gallery-mf">
                                                <div className="work-img">
                                                    <Image src={item?.image} alt="" className="img-fluid" width={440} height={365} />
                                                </div>
                                                <div className="work-content">
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <br />
                                                            <h2 className="w-title">{item?.title}</h2>
                                                            <div className="w-more">
                                                                <a href={item?.demoUrl} target="blank"> <span className="w-ctegory">Demo</span></a> / <span className="w-date">{item?.tech}</span>
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
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}