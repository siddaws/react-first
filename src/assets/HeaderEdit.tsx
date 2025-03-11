import { useState } from "react";


export default function HeaderEdit() {
    const [headerCSS, setHeaderCSS] = useState({
        accent: "#F9995D",
        backgroundStyle: "#ffffff",
        colorTextHeader: "#000000"
    });


    const root = document.documentElement

    root.style.setProperty('--secondaryColor', headerCSS.accent);
    root.style.setProperty('--backgroundStyle', headerCSS.backgroundStyle);
    root.style.setProperty('--colorTextHeader', headerCSS.colorTextHeader);



    return <>

        <label htmlFor="backgroundStyle">Зміна фону header</label>
        <input type="color" value={headerCSS.backgroundStyle} onChange={e => setHeaderCSS({ ...headerCSS, backgroundStyle: e.target.value })} id="backgroundStyle" />

        <label htmlFor="colorTextHeader">Зміна кольору тексту в header</label>
        <input type="color" value={headerCSS.colorTextHeader} onChange={e => setHeaderCSS({ ...headerCSS, colorTextHeader: e.target.value })} id="colorTextHeader" />

        <label className="accent" htmlFor="accent">Зміна кольору тексту в header при наведені</label>
        <input type="color" value={headerCSS.accent} onChange={e => setHeaderCSS({ ...headerCSS, accent: e.target.value })} id="accent" />



    </>
}


