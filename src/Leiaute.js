import { NavLink, Outlet, Link } from "react-router-dom";

const Leiaute = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Título do Site
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Principal
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contato">
                                    Contato
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Leiaute;
