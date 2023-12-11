

export default function Menu() {

    let appName = "Google";

    let menus = ['Accueil', 'A propos', 'Services', 'Contact'];

    return <header>
        <div className="logo">{appName}</div>
        <nav>
            <ul>
                {
                    menus.map((value, position) => {
                        return <li key={position}><a href="#">{value}</a></li>
                    })
                }
            </ul>
        </nav>
    </header>
}
