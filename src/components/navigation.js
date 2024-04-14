export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="logo.jpg" alt="Bootstrap" width="50" />
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#nav-links"
                aria-expanded="false"
                aria-controls="#nav-links"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end"
                id="nav-links">
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