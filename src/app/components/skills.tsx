export default function Skills() {

    const data = [
        {
            intro: "Web Design",
            description: "Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design."
        },
        {
            intro: "Web Development",
            description: "Web development refers to building, creating websites. It includes aspects such as web design, web publishing, web programming, and database management."
        },
        {
            intro: "IoT",
            description: "Internet of Things is a term that refers to anything connected to the Internet.In order for a device to be part of the IoT, it must be able to communicate with other devices."
        },
        {
            intro: "Responsive Design",
            description: "Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically adjust for different screen sizess"
        },
        {
            intro: "Blockchain",
            description: "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network."
        },
        {
            intro: "Cloud computing",
            description: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power.ie AWS and Google cloud"
        }
    ]

    return (
        <section id="service" className="services-mf route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">
                                Specilizing In
                            </h3>
                            <p className="subtitle-a">
                                Skills
                            </p>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {data.map((item, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><i className="ion-monitor"></i></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">{item?.intro}</h2>
                                        <p className="s-description text-center">
                                            {item?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}