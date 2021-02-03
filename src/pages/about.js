import React from "react";
import {Link} from "gatsby";
import Header from "./header.js";

const About = (props) => {
    return (
        <div style={{color: "teal"}}>
            <Link to="/contact/">Contact</Link>
            <Header headerText="About Gatsby" />
            <Header headerText="It's pretty cool" />
            <p>Such wow. Very React</p>
        </div>
    )
}

export default About