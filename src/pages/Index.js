import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import logo from '../widgets/logo.png'
import home from '../images/home.png'

import Program from './Program'
import Facilitators from './Facilitators'
import Form from './Form'

import './css/navigation.css'
import './css/home.css'

const Index = () => {
    return (
        <>
            <nav className="navigation-desktop">
                <img src={logo} className="logo" alt="logo" />

                <ul>
                    <li>
                        <a href="#section1">Home</a>
                    </li>

                    <li>
                        <a href="#section2">Program</a>
                    </li>

                    <li>
                        <a href="#section3">Facilitators</a>
                    </li>

                    <li className="register">
                        <a href="#section4">Register</a>
                    </li>
                </ul>
            </nav>

            <div className="home component">
                <div className="left">
                    <div className="title">Fostering Hope Through Opportunities</div>
                    <div className="text">Hope is much sought after, especially in this times of pandemic where both businesses and job have been decimated in an unprecedented fashion. In developing countries and oil-dependent economy like Nigeria, the effects of the pandemic have been catastrophic. 60% of jobs have been lost while it is also predicted that majority of small businesses will be closed down. </div>
                    <div className="button">
                        <button className="register"><a href="#section4">REGISTER</a></button>
                        <button className="learn-more"><a href="#section3">LEARN MORE</a></button>
                    </div>
                </div>
                

                <div className="right">
                    <img src={home} alt="home" className="image" />
                </div>
            </div>

            <div className="home-mobile component-mobile">
                <div className="image-container">
                    <img src={home} alt="home" className="image" />
                </div>

                <div className="text-container">
                    <div className="title">Fostering Hope Through Opportunities</div>
                    <div className="text">Hope is much sought after, especially in this times of pandemic where both businesses and job have been decimated in an unprecedented fashion. In developing countries and oil-dependent economy like Nigeria, the effects of the pandemic have been catastrophic. 60% of jobs have been lost while it is also predicted that majority of small businesses will be closed down. </div>
                    <div className="button">
                        <button className="register"><a href="#section4">REGISTER</a></button><br />
                        <button className="learn-more"><a href="#section4">LEARN MORE</a></button>
                    </div>
                </div>
            </div>




            <div className="content">
                <ScrollableAnchor id={"section2"}>
                    <Program />
                </ScrollableAnchor>

                
                <ScrollableAnchor id={"section3"}>
                    <Facilitators />
                </ScrollableAnchor>

                
                <ScrollableAnchor id={"section4"}>
                    <Form />
                </ScrollableAnchor>
            </div>
        </>
    )
}

export default Index
