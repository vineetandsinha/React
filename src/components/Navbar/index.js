import React from "react";
import { Nav, NavLink, NavMenu, Nav2, NavLink2 } from "./NavbarElements"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCoffee, faHome, faSignOut } from '@fortawesome/free-solid-svg-icons'


// const element = <FontAwesomeIcon icon={faCoffee} />
const Navbar = () => {
    return (
       <>
        <Nav>
            <h1 style={{marginLeft: "-250px", color: "pearl"}}>Mercy Store</h1>
            <div className="headerCSS" style={{display: "flex"}}>
                <NavLink2 style={{color: "#000000" }}>Seller Dashboard</NavLink2>
                <NavLink2 style={{color: "#000000" }}><FontAwesomeIcon icon={faHome} style={{color: "#000000" }}/></NavLink2>
                <NavLink2 style={{color: "#000000" }}><FontAwesomeIcon icon={faBell} style={{color: "#000000" }}/></NavLink2>
                <NavLink2 style={{color: "#000000" }}>FAQ</NavLink2>
                <NavLink2 style={{color: "#000000" }}>Need Help?</NavLink2>
                <NavLink2 style={{color: "#000000" }}><FontAwesomeIcon icon={faSignOut} style={{color: "#000000" }}/>Logout</NavLink2>

                
            </div>
        </Nav>
        <br></br>
        <Nav2>
            <NavMenu>
                <NavLink to="/about" activeStyle>Dashboard</NavLink>
                <NavLink to="/contact" activeStyle>Sponsored</NavLink>
                <NavLink to="/blogs" activeStyle>Configuration</NavLink>
                <NavLink to="/sign-up" activeStyle>Sellers</NavLink>
                <NavLink to="/about" activeStyle>Products</NavLink>
                <NavLink to="/contact" activeStyle>Orders</NavLink>
                <NavLink to="/blogs" activeStyle>Commission</NavLink>
                <NavLink to="/sign-up" activeStyle>Payment</NavLink>
                <NavLink to="/sign-up" activeStyle>Mail Configuration</NavLink>
            </NavMenu>
        </Nav2>
       </>
    )
}

export default Navbar