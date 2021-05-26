import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Class from './Class';
import { fetchClasses, fetchMyClasses } from '../Actions/index';

const ManageClasses = (props) => {
    const { fetchClasses, fetchMyClasses} = props;
    const [myClasses, setMyClasses] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetchMyClasses();
    }, [fetchMyClasses]);

    useEffect(() => {
        fetchClasses();
    }, [fetchClasses]);

    const routeToLogin = () => {
        window.localStorage.clear('token')
        window.localStorage.clear('username');
        window.localStorage.clear('role');
        history.push('/login');
    }

    const routeToCreateClass = () => {
        history.push('/classes/createclass');
    }

    const createAClassButton = () => {
        if (JSON.parse(window.localStorage.getItem('role')) === 'Instructor') {
            return <button id='create-option' onClick={routeToCreateClass}>Create New Class</button>;
        } else {
            return null;
        }
    }

    return (
        <div className='manage-classes-container'>
            {props.IsLoading ? 'Loading...' : null} <br/>
            {props.Error ? <p style={{ color: 'red', fontWeight: 'bold' }}>{props.Error}</p> : null} <br/>

            <p>--- Welcome {window.localStorage.getItem('username')}! ---</p>
            <p>&nbsp;&nbsp;&nbsp;Role: {window.localStorage.getItem('role')}</p>

            {createAClassButton()}<br/>
            <button id='signout-button' onClick={routeToLogin}>Sign Out</button><br/><br/>

            &nbsp;&nbsp;&nbsp;List of Your Classes: <br/>
            <div className='my-classes-container'>
                {/* {props.MyClasses.length >= 1 ? props.MyClasses.map(item => (
                    <Class key={item.ClassId} name={item.Name} type={item.Type} startTime={item.StartTime} duration={item.Duration} intensityLevel={item.IntensityLevel} location={item.Location} attendees={item.Attendees} maxClassSize={item.MaxClassSize} />
                )) : null}     */}
            </div>  

            <br/>&nbsp;&nbsp;&nbsp;List of all our Classes Offered: <br/>
            <div className='classes-container'>
                {props.Classes.map(item => (
                    <Class key={item.ClassId} classId= {item.ClassId} name={item.Name} type={item.Type} startTime={item.StartTime} duration={item.Duration} intensityLevel={item.IntensityLevel} location={item.Location} attendees={item.Attendees} maxClassSize={item.MaxClassSize}/>
                ))}    
            </div>        
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        IsLoading: state.IsLoading,
        Error: state.Error,
        ActiveUser: state.ActiveUser,
        AllUsers: state.AllUsers,
        Classes: state.Classes,
        MyClasses: state.MyClasses
    };
}

export default connect(mapStateToProps, { fetchClasses, fetchMyClasses })(ManageClasses);