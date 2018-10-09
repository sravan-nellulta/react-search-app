import React from 'react';

const ModalComponent = (props) => {
    console.log(props);
    return (
        <div className='modal'>
            <div className='modal-main'>
                <button className='close' onClick={props.onClose}>
                    Close
          </button>
            <div className='modal-details'>
                <img className='modal-img' src={props.data.avatar} alt={props.data.firstName} />
                <p className='modal-jb-title'>{props.data.jobTitle}</p>
                <p>Age: {props.data.age}</p>
                <p> DOJ:{props.data.dateJoined}</p>
            </div>
            <div className='modal-data'>
                <h5>{props.data.firstName} {props.data.lastName}</h5>
                <hr/>
                <p>{props.data.bio}</p>
            </div>
            </div>
        </div>
    )
}

export default ModalComponent;