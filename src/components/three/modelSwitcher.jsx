import { useRef } from "react";

const modelSwitcher = (scale, isMobile) => {

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === 0.08;
  return (
    <div>
      Model Switcher
    </div>
  )
}

export default modelSwitcher
