import { useState } from "react";
import PostImage from "./PostImage";



export default function HomeEdit() {
    const [colorTextHome, setColorTextHome] = useState("#000000");
    const [bgHero, setBgHero] = useState("#3559C7");
    const [colorTextHero, setColorTextHero] = useState("#ffffff");
    const [bgButtonsHero, setBgButtonsHero] = useState("#000000");
    const [colorTextButtonsHero, setColorTextButtonsHero] = useState("#ffffff");

    const root = document.documentElement

    root.style.setProperty('--colorTextHome', colorTextHome);
    root.style.setProperty('--bgHero', bgHero);
    root.style.setProperty('--colorTextHero', colorTextHero);
    root.style.setProperty('--bgButtonsHero', bgButtonsHero);
    root.style.setProperty('--colorTextButtonsHero', colorTextButtonsHero);


    return <>
        <label htmlFor="colorTextHome">Зміна кольору тексту в home</label>
        <input type="color" value={colorTextHome} onChange={e => setColorTextHome(e.target.value)} id="colorTextHome" />

        <label htmlFor="bgHero" >Зміна фону hero</label>
        <input type="color" value={bgHero} onChange={e => setBgHero(e.target.value)} id="bgHero"></input>

        <label htmlFor="colorTextHero">Зміна кольору тексту в hero</label>
        <input type="color" value={colorTextHero} onChange={e => setColorTextHero(e.target.value)} id="colorTextHero" />

        <label htmlFor="bgButtonsHero">Зміна фону кнопок hero</label>
        <input type="color" value={bgButtonsHero} onChange={e => setBgButtonsHero(e.target.value)} id="bgButtonsHero" />

        <label htmlFor="colorTextButtonsHero">Зміна кольору тексту в кнопках hero</label>
        <input type="color" value={colorTextButtonsHero} onChange={e => setColorTextButtonsHero(e.target.value)} id="colorTextButtonsHero" />

        <PostImage />

        <p>

        </p>
    </>
}
