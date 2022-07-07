import React from "react"
import emailLogo from "../images/Mail.png"
import linkedInLogo from "../images/linkedin.png"
import "../style.css"

export default function Email() {
    return(
        <button>
            <email>
                <img src={emailLogo} alt="Email logo"/>
                <h3>Email</h3>
            </email>
            <linkedin>
                <img src={linkedInLogo} alt="LinkedIn logo"/>
                <h3>LinkedIn</h3>
            </linkedin>
        </button>
    )
}