import { React, useEffect } from 'react'

function Ads() {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }, [])
    return (
        <div>
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-1395375581684994"
                data-ad-slot="4055871218"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    )
}

export default Ads