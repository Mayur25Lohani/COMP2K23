import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
 
class Navigation extends React.Component {

    state = {
        collapsed: true,
        isOpen: false
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    componentDidUpdate(nextProps) {
        if (this.props.match.path !== nextProps.match.path) {
            // this.onRouteChanged();
            console.log('OK')
        }
    }

    onRouteChanged = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <header id="header" className="header-area">
                <div id="navbar" className="elkevent-nav">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <NavLink 
                                            exact="true" 
                                            to="/" 
                                            onClick={this.toggleNavbar} 
                                            className="nav-link"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <NavLink 
                                            to="/about" 
                                            onClick={this.toggleNavbar} 
                                            className="nav-link"
                                        >
                                            About
                                        </NavLink> 
                                    </li>

                                    <li className="nav-item">
                                        <NavLink 
                                            to="/speakers" 
                                            className="nav-link"
                                            onClick={this.toggleNavbar}
                                        >
                                            Our Team
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink 
                                            to="/schedule" 
                                            className="nav-link"
                                            onClick={this.toggleNavbar}
                                        >
                                            Schedule
                                        </NavLink>
                                    </li>

                                    
                                    <li className="nav-item">
                                        <NavLink 
                                            to="/events" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                            Events
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink 
                                            to="/sponsors" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                            Sponsors
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink 
                                            to="/contact" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
 
export default withRouter(Navigation);