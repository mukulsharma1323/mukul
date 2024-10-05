export default function Hero() {
    return (
        <div id="home" className="intro route bg-image" style={{ backgroundImage: 'url(img/intro-bg.jpg)' }}>
            <div className="overlay-itro"></div>
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="intro-title mb-4">I am Mukul Sharma</h1>
                        <p className="intro-subtitle"><span className="text-slider-items">Web Developer,Frontend Developer,Full Stack Developer</span><strong className="text-slider"></strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}