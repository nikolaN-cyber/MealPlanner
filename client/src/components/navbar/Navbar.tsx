import { useNavigate } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {

    const navigate = useNavigate()

    const openLogin = () => {
        navigate('login')
    }

    const openRegister = () => {
        navigate('register')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark custom-navbar fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Event Management</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Admin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Notifications</a>
                        </li>
                    </ul>
                    <div className="d-flex mt-2">
                        <ul className="navbar-nav me-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">My profile</a></li>
                                <li><a className="dropdown-item" href="#">My tickets</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    <div className="d-flex mt-2">
                        <button onClick={openLogin} className="btn me-2 custom-btn" type="button">Sign in</button>
                        <button onClick={openRegister} className="btn me-2 custom-btn" type="button">Register</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar