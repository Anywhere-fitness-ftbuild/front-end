function MyClass(props) {
    const { name, type, startTime, duration, intensityLevel, location, attendees, maxClassSize } = props;

    const removeMyClass = () => {

    }

    const removeMyClassButton = () => {
        return <button id='removeMyClass-option' onClick={removeMyClass}>Remove Class</button>;
    }

    return (
        <div className='class-data'>
            <h3>Name: {name}</h3>
            <p>Type: {type}</p>
            <p>Start Time: {startTime}</p>
            <p>Duration: {duration}</p>
            <p>Intensity Level: {intensityLevel}</p>
            <p>Location: {location}</p>
            <p>Attendees: {attendees}</p>
            <p>Max Class Size: {maxClassSize}</p>
            {removeMyClassButton()}
        </div>
    );
}

export default MyClass;