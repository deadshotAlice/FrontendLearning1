
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";
import {useMediaQuery} from "react-responsive";
const Showcase = () => {
    const isTablet=useMediaQuery({query:'(max-width: 1024px)'});
    useGSAP(()=>{
        if(!isTablet){
            const timeline=gsap.timeline({
                scrollTrigger:{
                    trigger:'#showcase',
                    start:'top top',
                    end:'bottom top',
                    scrub:true,
                    pin:true,
                }
            });
            timeline.to('.mask img',{
                transform:'scale(1.05)',})
                .to('.content',{opacity:1,y:0,ease:'power1.in'});
        }
    },[isTablet]);
    return (
        <section id="showcase">
            <div className='media'>
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>
            <div className='content'>
            <div className="content1">
                <div className="wrapper">
                    <div className="text1">
                        <h1>Rocket Chip</h1>
                    </div>
                    <div className="text2">
                        <p>
                            Introducing {" "}
                            <span>
                                    M4, the next generation of Apple silicon<br />
                                </span>
                            . M4 powers
                        </p>
                        <p>
                            It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.
                        </p>
                        <p>
                            A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                        </p>
                    </div>
                    <p className="text3">Learn more about Apple Intelligence</p>

                </div>


            </div>

            <div className="content2">
                <div>
                    <p>Up to</p>
                    <h3>4x faster</h3>
                    <p>pro rendering performance than M2</p>
                </div>
                <div>
                    <p>Up to</p>
                    <h3>1.5x faster</h3>
                    <p>CPU performance than M2</p>
                </div>
            </div>
            </div>

        </section>

    )



}
export default Showcase
