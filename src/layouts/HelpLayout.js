import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout(){
    return(
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veritatis mollitia ut consectetur, blanditiis</p>
            <nav>
                <NavLink to="faq">Viwe the FAQ</NavLink>
                <NavLink to="contacts">Contact Us</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}   