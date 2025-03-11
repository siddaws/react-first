import { useState } from "react";
import HeaderEdit from "./HeaderEdit";
import HomeEdit from "./HomeEdit";
import LocalStorageKeys from "./LocaleStorageKeys";
import SaveTema from "./SaveTema";


export default function EditPanel() {
    const [title, setTitle] = useState<string>("");
    const [isFlag, setIsFlag] = useState<boolean>(false);

    function saveLovaleStorage() {
        const objCss = {
            colorTextHome: getPropertyCss('--colorTextHome'),
            bgHero: getPropertyCss('--bgHero'),
            colorTextHero: getPropertyCss('--colorTextHero'),
            bgButtonsHero: getPropertyCss('--bgButtonsHero'),
            colorTextButtonsHero: getPropertyCss('--colorTextButtonsHero'),
            colorTextHeader: getPropertyCss('--colorTextHeader'),
            secondaryColor: getPropertyCss('--secondaryColor'),
            backgroundStyle: getPropertyCss('--backgroundStyle'),
            imgSrc: getPropertyCss('--imgSrc'),
            topEditPanel: getPropertyCss('--topEditPanel'),
            leftEditPanel: getPropertyCss('--leftEditPanel'),
        };

        localStorage.setItem(`${title}`, JSON.stringify(objCss));
        setIsFlag(!isFlag);
    }

    function handleClear() {
        localStorage.clear()
        setIsFlag(!isFlag)
    }



    return (
        <div className="edit-panel">
            <HeaderEdit />
            <HomeEdit />
            <SaveTema title={title} setTitle={setTitle} saveLovaleStorage={saveLovaleStorage} />
            <LocalStorageKeys isFlag={isFlag} />
            <button type="button" className="btn" onClick={handleClear}>Очистити</button>
        </div>

    );
}



const rootStyles = getComputedStyle(document.documentElement);

function getPropertyCss(name: string) {
    return rootStyles.getPropertyValue(name).trim();
}

let isMouseDown: boolean = false;
let offsetX: number = 0;
let offsetY: number = 0;
let targetElement: HTMLElement | null = null;

document.addEventListener("mousedown", handleMouseDown);

function handleMouseDown(e: MouseEvent,) {
    const target = e.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    if (target.classList.contains("edit-panel")) {
        isMouseDown = true;
        targetElement = target;


        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        e.preventDefault(); // Запобігає небажаному вибору тексту під час перетягування
    }
}


document.addEventListener("mousemove", (e: MouseEvent) => {
    if (isMouseDown && targetElement) {
        const x: number = e.clientX - offsetX;
        const y: number = e.clientY - offsetY;

        targetElement.style.position = "absolute";
        targetElement.style.left = `${x}px`;
        targetElement.style.top = `${y}px`;

        console.log("Переміщення:", x, y);
    }
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
    targetElement = null;
});



// document.addEventListener("mousedown", handleEditPanel);

// function handleEditPanel(e: MouseEvent) {
//     const target = e.target as HTMLElement;
//     let x = e.clientX;
//     let y = e.clientY;
//     if (target.classList.contains('edit-panel')) {
//         x -= target.offsetLeft;
//         y -= target.offsetTop;
//         document.documentElement.style.setProperty('--topEditPanel', `${y}px`);
//         document.documentElement.style.setProperty('--leftEditPanel', `${x}px`);
//     }
// }
