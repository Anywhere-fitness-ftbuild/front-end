  
import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';



const CreateClass = () => {
    let history = useHistory();
    const [newClass, setNewClass] = useState({
        ClassId: '',
        Name: '',
        Type: '',
        StartTime: '',
        Duration: '',
        IntensityLevel: '',
        Location: '',
        Attendees: 0,
        MaxClassSize: 20
    });

    const handleChange = e => {
        if (e.target.name === 'Attendees' || e.target.name === 'MaxClassSize') {
            setNewClass({
                ...newClass,
                ClassId: Math.random(),
                [e.target.name]: Number(e.target.value)
            });
        } else {
            setNewClass({
                ...newClass,
                ClassId: Math.random(),
                [e.target.name]: e.target.value
            });
        }
    };//end of handleChange

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('', newClass, {
                headers: {
                    Authorization: JSON.parse(window.localStorage.getItem('token'))
                }
            })
            .then(resp => {
                console.log(resp.data);
                history.push('/classes');
            })
            .catch(err => {
                console.log({ err })
            });
    };//end of handleSubmit

    const clearForm = e => {
        e.preventDefault();
        setNewClass({
            ClassId: '',
            Name: '',
            Type: '',
            StartTime: '',
            Duration: '',
            IntensityLevel: '',
            Location: '',
            Attendees: 0,
            MaxClassSize: 20            
        });
    };//end of clear Form

    const routeToClassList = () => {
        history.push('/classes');
    };//end of routeToClasslist

    return (
        <div>
        <classdiv id="class-div">
                <h2>Create A New Class</h2>
                <form id="class-form" onSubmit={handleSubmit}>
                    <label>Name:</label>
                        <input id=""
                            name="Name"
                            type="text"
                            value={newClass.Name}
                            placeholder="class name..."
                            onChange={handleChange}
                        />
                    <label>Type:</label>
                        <input id=""
                            name="Type"
                            type="text"
                            value={newClass.Type}
                            placeholder="class type..."
                            onChange={handleChange}
                        />
                    <label>Start Time:</label>
                        <input id=""
                            name="StartTime"
                            type="text"
                            value={newClass.StartTime}
                            placeholder="what time does class begin..."
                            onChange={handleChange}
                        />
                    <label>Duration:</label>
                        <input id=""
                            name="Duration"
                            type="text"
                            value={newClass.Duration}
                            placeholder="how long does class last..."
                            onChange={handleChange}
                        />
                    <label>Intensity Level:</label>
                        <input id=""
                            name="IntensityLevel"
                            type="text"
                            value={newClass.IntensityLevel}
                            placeholder="what is the intensity level..."
                            onChange={handleChange}
                        />
                    <label>Location:</label>
                        <input id=""
                            name="Location"
                            type="text"
                            value={newClass.Location}
                            placeholder="where will class be held..."
                            onChange={handleChange}
                        />
                    <label>Attendees:</label>
                        <input id=""
                            name="Attendees"
                            type="number"
                            value={newClass.Attendees}
                            placeholder="how many clients are attending..."
                            onChange={handleChange}
                        />
                    <label>Max Class Size:</label>
                        <input id="final-input"
                            name="MaxClassSize"
                            type="number"
                            value={newClass.MaxClassSize}
                            placeholder="what is the max class size..."
                            onChange={handleChange}
                        />
                    <input id='create-class-submit' type='submit' value='Create Class'/>
                    <button onClick={clearForm}>Clear</button>
                    <button onClick={routeToClassList}>Cancel</button>
                </form>
            </classdiv>
        </div>
    )
}//end of createClass

export default CreateClass;