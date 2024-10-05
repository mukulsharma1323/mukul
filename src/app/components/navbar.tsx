export default function Navbar() {
    return (
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll" href="/">MukulSharma.in</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                    aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link js-scroll active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll" href="./#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll" href="./#service">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll" href="./#work">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll" href="./#blog">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}