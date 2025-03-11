
export default function SaveTema(prop: {
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    saveLovaleStorage: () => void
}) {



    return <>
        <input id="title" type="text" placeholder="name" value={prop.title}
            onChange={e => prop.setTitle(e.target.value)} />
        <button type="button" onClick={prop.saveLovaleStorage} className="btn">Save</button>
    </>
}

