import '../css/components.css'
import github from '../images/github.png';


import React from 'react'

export default function Footer() {
    return (
        <div className='icons__holder'>
        
        
         <a href='https://github.com/shaan98kho' target='_blank' rel="noreferrer"><img src={github} alt='github'/></a>

        </div>
    )
}