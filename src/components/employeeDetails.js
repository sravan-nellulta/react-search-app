import React from 'react';


const employeeDetails = (props) => {
    const { data: { firstName, avatar, bio, lastName }, onClick } = props;
    return (
        <div className='employee-data' onClick={onClick}>
            <div className='inline-block'>
                <img src={avatar} alt={firstName} className='image-block' />
            </div>
            <div className='inline-block bio'>
                <p>{firstName} {lastName}</p>
                <p>{bio}</p>
            </div>
        </div>)
}


export default employeeDetails;
