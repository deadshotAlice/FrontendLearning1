import {useRef,useEffect} from "react";


const Hero = () => {
    const videoRef = useRef();
    useEffect(()=>{
        if(videoRef.current)
            videoRef.current.playbackRate=0.8;}
        ,[]
    );

    return (
        <section id='hero'>
            <div>
                <h1>MacBook Pro</h1>
                <img src='/title.png' alt='MacBook Title'/>
            </div>
            <video ref={videoRef} src='/videos/hero.mp4' autoPlay muted playsInline loop/>
            <button>Buy</button>
            <p style={{color:'white', margin:'0 auto'}}>$3600/mo</p>
        </section>
    )
}
export default Hero
