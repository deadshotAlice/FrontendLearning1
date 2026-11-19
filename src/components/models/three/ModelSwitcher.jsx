
import {useRef} from 'react';
import {PresentationControls} from "@react-three/drei";
import MacbookModel14 from "../Macbook-14.jsx";
import MacbookModel16 from "../Macbook-16.jsx";
const ModelSwitcher = ({scale,isMobile}) => {
    const smallMacbookref=useRef(null);
    const largeMacbookRef=useRef(null);
    const showMacbookRef=scale===0.08 || scale===0.05;
    const controlsConfig={
        snap:true,
        speed:1,
        zoom:1,
        // polar:[-Math.PI/2,Math.PI/2],
        azimuth:[-Infinity,Infinity],
        config:{
            mass:1,
            tension:0,
            friction:26,

        },
    }

    return (
        <>
    <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookref}>
            <MacbookModel14 scale={isMobile?0.03:0.06} />
        </group>
        </PresentationControls>
        <PresentationControls  {...controlsConfig}>
        <group ref={largeMacbookRef}>
            <MacbookModel16 scale={isMobile?0.05:0.08} />
        </group>
    </PresentationControls>
            </>
    )
}
export default ModelSwitcher
