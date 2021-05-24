import React from 'react';


const RegisterForm = () => {

    return (
        <div>
            <form>
                <label>Username
                    <input 
                    name='username' 
                    type='text' 
                    placeholder='Type Username'/>
                </label><br/>

                <label>Password
                    <input 
                    name='password' 
                    type='text' 
                    placeholder='Type Password'/>
                </label><br/>
                
                <p>Select a role:</p><br/>

                <div>
                    <input type='radio' name='role' value='student'/>
                    <label>Student</label>
                </div><br/>

                <div>
                    <input type='radio' name='role' value='teacher'/>
                    <label>Teacher</label>
                </div><br/>
                

                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;