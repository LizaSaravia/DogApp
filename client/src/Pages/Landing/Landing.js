import React from 'react'
import './Landing.css'
import Footer from '../../Components/Footer'

function Landing() {
    return (
        <div className='MainContainer'>
            <div className = 'Landing'>
                <h1 className='Title'>The Dog</h1>
                <h1 className='Title'>Encyclopedia</h1>
                <div>
                    <a className='LandingA' href = '/home'>
                    <button className = 'btn' type = 'button'>enter</button>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Landing
