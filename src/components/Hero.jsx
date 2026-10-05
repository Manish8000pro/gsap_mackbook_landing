import { useEffect, useRef } from "react"

const Hero = () => {
    const videRef = useRef();

    useEffect(()=>{
        if(videRef.current) videRef.current.playbackRate = 2;
    },[]);

  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />

            <video ref={videRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
        </div>

        <button>Buy</button>

        <p>From $1699 or $143/mo for 12 months</p>

    </section>
  )
}

export default Hero
