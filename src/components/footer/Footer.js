import React from "react";
import './footer.css';
// import Github from process.env.PUBLIC_URL + '/images/github.svg',
// import Linkedin from "../images/linkedin.svg";
// import Email from "../images/email.svg";
// import Cv_icon from "../images/cv.svg";
// import Cv_image from "../images/SarahWatremet_CV.pdf";

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/sarahwatremet" target="_blank" rel="noreferrer" alt="link to github">
                <img src={process.env.PUBLIC_URL + "/images/github.svg"} alt="linkedin"></img>
            </a>
            <a href="https://www.linkedin.com/in/sarah-watremet-0ab26464/" target="_blank" rel="noreferrer" alt="link to Linkedin">
                <img src={process.env.PUBLIC_URL + "/images/linkedin.svg"} alt="linkedin"></img>
            </a>
            <a href="mailto:sarah.watremet@gmail.com" target="_blank" rel="noreferrer" alt="link to email">
                <img src={process.env.PUBLIC_URL + "/images/email.svg"} alt="email"></img>
            </a>
            <a href={process.env.PUBLIC_URL + "/images/SarahWatremet_CV.pdf"} target="_blank" rel="noreferrer" alt="link to CV">
                <img src={process.env.PUBLIC_URL + "/images/cv.svg"} alt="cv"></img>
            </a>
        </div>
    )
}