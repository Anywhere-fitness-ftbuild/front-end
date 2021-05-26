  
import React from 'react';
import { Link } from 'react-router-dom';

export default function InstructorOnboarding(){
    return(
        <>
            <div className='instructor-onboarding-container'>
                <h3>Thank you for creating your ANYWHERE FITNESS instructor account!</h3>
                <p>As an instructor, you can...</p>
                <ul>
                    <li>Create, edit, or delete classes in our program</li>
                    <li>Keep track of the classes that you teach</li>
                </ul>
            </div>
            <Link to = "/login"><button>Go to Login</button></Link>
        </>       
    )
}