import { useEffect, useState } from "react";
import ItemTema from "./ItemTema";


export default function LocaleStorageKeys(prop: {
    isFlag: boolean
}) {


    const [keys, setKeys] = useState<string[]>([]);


    useEffect(() => {
        const storageKeys = Object.keys(localStorage);
        setKeys(storageKeys);
    }, [prop.isFlag]);

    return <>
        <ul className="list-keys-local">
            {keys.map((key) => (
                <ItemTema key={key} title={key} />
            ))}
        </ul>
    </>
}





