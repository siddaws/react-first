import ServicesCard from "./ServicesCard";

interface IServices {
    id: number,
    imgSrc: string,
    title: string,
}

export default function Services() {

    const servicesList: IServices[] = [
        {
            id: 1,
            imgSrc: 'images/iconHeadset.svg',
            title: 'Best Services',
        },
        {
            id: 2,
            imgSrc: 'images/iconHeadset.svg',
            title: 'Best Services',
        },
        {
            id: 3,
            imgSrc: 'images/iconHeadset.svg',
            title: 'Best Services',
        }, {
            id: 4,
            imgSrc: 'images/iconHeadset.svg',
            title: 'Best Services',
        },
        {
            id: 5,
            imgSrc: 'images/iconHeadset.svg',
            title: 'Best Services',
        },
        {
            id: 6,
            imgSrc: 'images/iconHeadset.svg',
            title: 'Best Services',
        }
    ]

    return <>
        <section className="services">
            <div className="container">
                <h2>Services</h2>
                <ul className="services-grid">
                    {servicesList.map((item) => <ServicesCard
                        key={item.id}
                        imgSrc={item.imgSrc}
                        title={item.title} />)}
                </ul>
            </div>
        </section>
    </>
}