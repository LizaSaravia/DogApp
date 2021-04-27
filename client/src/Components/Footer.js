import React from 'react'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'
import './Footer.css'

function Footer() {
    return (
        <div className='FooterContainer'>
            <a href='https://www.linkedin.com/in/liza-saraviag/'>
            <img className='footerIcon' src={linkedin} />
            </a>
            <a href='https://github.com/LizaSaravia'>
            <img className='footerIcon' src={github} />
            </a>
            <p className='footerText'>An app by Liza Saravia</p>
        </div>
    )
}

export default Footer
