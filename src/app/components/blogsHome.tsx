import Image from "next/image"

export default function BlogsHome() {

    const data = [
        {
            title: "My Favourite Quotes",
            description: "Here is list of my favourite quotes, some of these quotes are from famous people, books or movies.",
            category: "Philosopy",
            image: "/img/post-1.jpg",
            url: "blog-1-quotes.php",
            authorImage: "/img/profile.jpg"
        },
        {
            title: "My Favourite Books",
            description: "Here is a list of my favourite books, some of these are very popular",
            category: "General",
            image: "/img/work-3.jpg",
            url: "blog-2-books.php",
            authorImage: "/img/profile.jpg"
        },
        {
            title: "Tools For Web Developement",
            description: "Tools make you more productive and makes web development fast, Here is a list of tools which I use for Web development.",
            category: "web design",
            image: "/img/post-3.jpg",
            url: "blog-3-tools.php",
            authorImage: "/img/profile.jpg"
        }
    ]

    return (
        <section id="blog" className="blog-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a"> Blog </h3>
                            <p className="subtitle-a">
                                Record of my thoughts, opinions, or experiences that I put on the internet.
                            </p>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.map((item, index) => {
                        return <div className="col-md-4" key={index} >
                            <div className="card card-blog">
                                <div className="card-img">
                                    <a href={item?.url}><Image src={item?.image} alt={item?.title} className="img-fluid" width={420} height={200} /></a>
                                </div>
                                <div className="card-body">
                                    <div className="card-category-box">
                                        <div className="card-category">
                                            <h6 className="category">{item?.category}</h6>
                                        </div>
                                    </div>
                                    <h3 className="card-title"><a href={item?.url}>{item?.title}</a></h3>
                                    <p className="card-description">
                                        {item?.description}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div className="post-author">
                                        <a href={item?.url}>
                                            <Image src={item?.authorImage} alt="" className="avatar rounded-circle" width={35} height={30} />
                                            <span className="author">Mukul Sharma</span>
                                        </a>
                                    </div>
                                    <div className="post-date">
                                        <span className="ion-ios-clock-outline"></span> 10 min
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}