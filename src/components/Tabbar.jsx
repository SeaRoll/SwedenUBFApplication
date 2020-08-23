import React from "react";
import { Link } from "react-router-dom";

/*
    TAB BAR
    ----------
    Loads a bottom fixed navbar.
    Clicking on Plus or minus increases or decreases 
*/
function Tabbar(props) {

    return(
    <nav className="navbar fixed-bottom navbar-expand navbar-light bg-light mr-auto">
        <div className="navbar-nav mx-auto">
            <a className="nav-item nav-link" href="#" onClick={() => props.updateParagraph(5)}>Plus</a>
            <a className="nav-item nav-link" href="#" onClick={() => props.updateParagraph(-5)}>Minus</a>
            <Link to="/" className="nav-item nav-link">Home</Link>
            <a className="nav-item nav-link" href="/bible">Bible</a>
            <Link to="/psalm" className="nav-item nav-link">Psalm</Link>
        </div>
    </nav>
    );
}

export default Tabbar;