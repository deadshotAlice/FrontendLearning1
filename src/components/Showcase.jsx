
const Showcase = () => {
    return (
        <section id="showcase">
            <div className='media'>
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="text1">
                        <h2>Rocket Chip</h2>

                        <div className="text2">
                            <p>
                                Introducing {" "}
                                <span className="text3">
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.
                            </p>
                            <p>
                                A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                            </p>
                            <p className="text-primary">Learn more about Apple Intelligence</p>
                        </div>
                    </div>

                </div>
                </div>
        </section>


    )
}
export default Showcase
