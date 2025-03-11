export default function ItemTema(props: {
    title: string,
}) {
    function takeCss() {
        const css = localStorage.getItem(`${props.title}`);
        if (css) {
            const objCss = JSON.parse(css);
            Object.keys(objCss).forEach((key) => {
                document.documentElement.style.setProperty(`--${key}`, objCss[key]);
            });
        }
    }

    return <>
        <li className="item" >
            <h3>{props.title}</h3>
            <button type="button" className="btn" onClick={takeCss}>Застосувати</button>
        </li >

    </>
}

