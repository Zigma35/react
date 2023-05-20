import React from "react";
import Badge from "react-bootstrap/Badge";
import "./Footer.css";

const Footer = ({text}) => {
return (
<div className="footerContainer">
    <Badge className="footer" bg="dark">
    {text}    
    </Badge>
</div>

);

};

export default Footer;