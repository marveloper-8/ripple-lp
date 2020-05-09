import React from 'react'

import program from '../images/program.png'

import './css/home.css'

function Program() {
    return (
        <>
        <div className="program component">
            <div className="left">
                <div className="text">
                    <p>The palliatives from the government is hardly felt, whilst the economic intervention by the central bank has been abysmal. Over 70% of jobs have been lost and there is an employment emergency of 20 million people without jobs . It seems hope is lost. It seems the government will remain aloof to the brutal facts of our reality.</p>

                    <p>In all these, we remain resolute and hopeful. We know that by working together, and being optimistic, we will thrive and come out stronger.</p>

                    <p>However, with information comes hope. Without knowledge, we remain blind to opportunities  to get ahead and truly believe again.</p>
                    
                    <p>The main aim of this forum is to rekindle hope through sharing of information and opportunities: both for small businesses and jobseekers.</p>

                    <p>We hope that you find answers to your questions.</p>
                </div>
            </div>
            

            <div className="right">
                <img src={program} className="image" alt="programs" />
            </div>
        </div>





        
        <div className="program-mobile component-mobile">
            <img src={program} className="image" alt="programs" />

            <div className="text-container">
                <div className="text">
                    <p>The palliatives from the government is hardly felt, whilst the economic intervention by the central bank has been abysmal. Over 70% of jobs have been lost and there is an employment emergency of 20 million people without jobs . It seems hope is lost. It seems the government will remain aloof to the brutal facts of our reality.</p>

                    <p>In all these, we remain resolute and hopeful. We know that by working together, and being optimistic, we will thrive and come out stronger.</p>

                    <p>However, with information comes hope. Without knowledge, we remain blind to opportunities  to get ahead and truly believe again.</p>
                    
                    <p>The main aim of this forum is to rekindle hope through sharing of information and opportunities: both for small businesses and jobseekers.</p>

                    <p>We hope that you find answers to your questions.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Program
