import { React, useEffect } from 'react'
import adstyle from '../styles/Generalcalc.module.css'
function Ads() {

    useEffect(() => {
        (adsbygoogle = window.adsbygoogle || []).push({})
    }, [])
    return (
        <div>
            <ins className="adsbygoogle"
                style={adstyle.adstyle}
                data-ad-client="ca-pub-1395375581684994"
                data-ad-slot="4055871218"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    )
}

export default Ads