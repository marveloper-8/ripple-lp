import React from 'react'

import onyedikachi from '../images/onyedikachi-ekwerike.jpeg'
import person from '../images/person-two.png'
import ukinebo from '../images/ukinebo-dare.jpg'

import FacilitatorsSub from './FacilitatorsSub'

import './css/home.css'
import './css/facilitators.css'

function Facilitators() {
    return (
        <div className="facilitators component">
            <FacilitatorsSub 
                name="Ukinebo Dare" 
                topic="Lorem Ipsum Dolor Sit Amet"
                image={ukinebo}
            />

            <FacilitatorsSub 
                name="Onyedikachi Ekwerike" 
                topic="Lorem Ipsum Dolor Sit Amet"
                image={onyedikachi}
            />

            <FacilitatorsSub 
                name="Ukinebo Dare" 
                topic="Lorem Ipsum Dolor Sit Amet"
                image={person}
            />
        </div>
    )
}

export default Facilitators
