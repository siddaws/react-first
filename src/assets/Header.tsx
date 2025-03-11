

export default function Header() {


    return <>
        <header>
            <div className="container">
                <div className="logo">
                    <img src="/logo.svg" alt="TheBox" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header >
    </>
}