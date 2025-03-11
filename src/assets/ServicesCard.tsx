export default function ServicesCard(props: {
    imgSrc: string,
    title: string
}) {

    return <>
        <li className="card">
            <div className="img-Card">
                <img src={props.imgSrc} alt={props.title} />
            </div>
            <h3>{props.title}</h3>
        </li>
    </>
}