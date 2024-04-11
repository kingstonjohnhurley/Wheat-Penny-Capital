export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="logo.jpg" alt="Bootstrap" width="50" />
                </a>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/strategy">Strategy</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );

}