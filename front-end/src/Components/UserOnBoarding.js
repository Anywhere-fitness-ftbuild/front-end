  
import React from 'react';
import { Link } from 'react-router-dom';

export default function UserOnboarding(){
    return(
        <>
            <div className='user-onboarding-container'>
                <h3>Thank you for creating your ANYWHERE FITNESS user account!</h3>
                <p>As a user, you can...</p>
                <ul>
                    <li>Browse all the fitness classes we offer</li>
                    <li>Reserve your spot in a class</li>
                    <li>Reschedule or cancel your reservations</li>
                </ul>
            </div>
            <Link to = "/login"><button>Go to Login</button></Link>
        </>
    )
}