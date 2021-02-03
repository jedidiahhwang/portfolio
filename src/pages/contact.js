import React from "react";
import {Link} from "gatsby";
import Header from "./header.js";

const Contact = (props) => {
    return (
        <div style={{color: "teal"}}>
            <Link to="/">Home</Link>
            <Header headerText="Contact" />
            <p>Send us a message!</p>
        </div>
    )
}

export default Contact