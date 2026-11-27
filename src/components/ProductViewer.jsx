
import useMacbookStore from '../store/index.js';
import {Canvas} from '@react-three/fiber';
import {Box, PresentationControls} from '@react-three/drei';
import {OrbitControls} from '@react-three/drei'
import MacbookModel14 from "./models/Macbook-14.jsx";
import MacbookModel16 from "./models/Macbook-16.jsx";
import StudioLights from "./models/three/StudioLights.jsx";
import ModelSwitcher from "./models/three/ModelSwitcher.jsx";
import {useMediaQuery} from "react-responsive";

const ProductViewer = () => {
    const {color,scale,setColor,setScale} = useMacbookStore();
    const isMobile=useMediaQuery({query:'(max-width: 1024px)'});
    return (
        <section id="product-viewer">
            <h2 style={{color:"white",fontSize:'2.0rem'}}>Take a closer look</h2>
            <Canvas id="canvas" style={{width:'100%',height:'560px',flexShrink:'1'}} camera={{position:[0,1.5,4.5],fov:50,near:0.1,far:100}}>
                <StudioLights />
                <ambientLight intensity={1} />
                {/*<MacbookModel14 scale={0.06} position={[0,0,0]} />*/}
                {/*<MacbookModel16 scale={0.08} position={[-1,-1,0]} />*/}
                {/*<ModelSwitcher scale={isMobile ? scale-0.03 : scale} isMobile={isMobile} />*/}
                {<ModelSwitcher scale={scale} isMobile={isMobile} />}
                <PresentationControls enableZoom={false} target={[0,0.6,0]} />
            </Canvas>
        <div className="info" style={{fontSize:'1.5rem'}}>MacBook Pro {scale} in {color}</div>
        <div className="control">
        <div className="color-control">
        <div onClick={()=>setColor('grey')} className={`grey ${color === 'grey' ? 'active' : ''}`}></div>
            <div onClick={()=>setColor('silver')} className={`silver ${color === 'silver' ? 'active' : ''}`}></div>
        </div>
            <div className="size-control">
                <div onClick={()=>setScale(14)} className={scale ===14 ? 'active' : ''}><p>14"</p></div>
                <div onClick={()=>setScale(16)} className={scale ===16 ? 'active' : ''}><p>16"</p></div>
            </div>
        </div>
            {/*<Canvas id='canvas' camera={{position:[0,2,5],fov:50,near:0.1,far:100}}>*/}
            {/*    <Box position={[0, 0, 0]} scale={scale===16?0.8:0.6} material-color={color}/>*/}
            {/*    <OrbitControls enableZoom={false}/>*/}
            {/*</Canvas>*/}

        </section>


    )
}
export default ProductViewer
