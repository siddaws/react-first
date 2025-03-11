export default function ItemListReputation(props: {
    imgSrc: string,
    title: string,
    children: string,


}) {



    return <>
        <li className="item" >
            <div className="icon-item">
                <img src={props.imgSrc} alt={props.title} />
            </div>
            <div className="text-item">
                <h3>{props.title}</h3>
                <p>{props.children}</p>
            </div>
        </li>
    </>
}   
