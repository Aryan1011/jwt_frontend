import React, { useEffect } from 'react'
import heroGroup from '../../assets/images/heroGroup.png'
function Hero() {
    const heroRef = React.useRef(null);

    React.useLayoutEffect(() => {
        const { current: heroImgElement } = heroRef;
        if (!heroImgElement) return;
        setTimeout(() => {
            heroRef.current.classList.add("hero-load")
        }, 600)
    }, [heroRef.current])
    return (
        <>

        <main className='heroContainer'>
            <div ref={heroRef} className='hero'>

            </div>
        </main>

        <div className='heroContent'>
        <div>
            <p>Serving the Social Work <br /> Profession, the Practitioner <br /> and the Public!</p>
        </div>
        <div>
            <img src={heroGroup} alt="" />
        </div>
        </div>

        </>
    )
}

export default Hero