import { useEffect, useState } from "react";
import ItemListReputation from "./ItemListReputation";

interface IList {
    id: number;
    imgSrc: string;
    title: string;
    description: string;
}

export default function SectionReputation() {
    const [items, setItems] = useState<IList[]>([]);
    useEffect(() => {
        const fetchListReputation = async () => {
            const response = await fetch('mocks/reputationList.json');
            const data = await response.json();
            setItems(data);
        };
        fetchListReputation();
    }, []);



    return (
        <section className="why-choose-us">
            <h2>Our Reputation</h2>
            <div className="container">
                <ul className="list-item">
                    {items.map((item) => (
                        <ItemListReputation
                            key={item.id}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            children={item.description}

                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

