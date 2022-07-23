import '../css/components.css'
import profilepic from '../images/my-picture.jpeg';
import React from 'react'

export default function ProfPic() {
    return (
        <div className='profilepic__img-holder'>
            <img src={profilepic} alt='women'/>
        </div>
    )
}