import React, { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import { gsap } from "gsap";
import MacBookModel16 from "../models/Macbook-16.jsx";
import MacBookModel14 from "../models/Macbook-14";

const ANIMATION_DURATION = 1; // Duration of the animation in seconds
const OFFSET_DISTANCE = 5; // Distance to offset the model when switching

const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.traveverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, {opacity,duration: ANIMATION_DURATION})
        }
    })
}

const 

const ModelSwitcher = ({scale, isMobile}) => {

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === 0.08;

    const controlsConfig = {
        snap: true,
        speed: 2,
        zoom: 1,
        azimuth: [-Infinity,Infinity],
        config: { mass: 1, tension: 0, friction: 26 },
    }


  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacBookModel16 scale = {isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      {/* <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacBookModel14 scale = {isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls> */}

    </>
  )
}

export default ModelSwitcher
