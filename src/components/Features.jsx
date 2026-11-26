
import {Canvas} from "@react-three/fiber";
import StudioLights from "./models/three/StudioLights.jsx";
import {features, featureSequence} from "../constants/index.js";
import clsx from "clsx";
import {Suspense, useEffect, useRef} from "react";
import {Html} from "@react-three/drei";
import MacbookModel from "./models/Macbook.jsx";
import {useMediaQuery} from "react-responsive";
import useMacbookStore from "../store/index.js";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Features = () => {


    return (
    <section id="features">
        <h2>See it all in a new light.</h2>

        <Canvas id="f-canvas" camera={{}}>
            <StudioLights />
            <ambientLight intensity={0.5} />
            <ModelScroll />
        </Canvas>

        <div className="absolute inset-0">
            {features.map((feature, index) => (
                <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                    <img src={feature.icon} alt={feature.highlight} />
                    <p>
                        <span className="text-white">{feature.highlight}</span>
                        {feature.text}
                    </p>
                </div>
            ))}
        </div>
    </section>
    )
}
export default Features
