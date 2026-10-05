import { useEffect, useRef } from "react"

const Hero = () => {
    const vidoRef = useRef();

    useEffect(() => {
        if(vidoRef.current) vidoRef.current.playbackRate = 2;
    },[]);

  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />

            <video src="/videos/hero.mp4" autoPlay muted playsInline></video>
        </div>
    </section>
  )
}

export default Hero
