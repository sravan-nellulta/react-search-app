import React from 'react';

const ModalComponent = (props) => {
  return (
    <div className='modal'>
      <div className='modal-main'>
        <button className='close' onClick={props.onClose}>
          Close
        </button>

        <div className='modal-details'>
          <img className='modal-img' src={props.data[0].avatar} alt={props.data[0].firstName} />
          <p className='modal-jb-title'>{props.data[0].jobTitle}</p>
          <p>Age: {props.data[0].age}</p>
          <p> DOJ:{props.data[0].dateJoined}</p>
        </div>
        <div className='modal-data'>
          <h5>{props.data[0].firstName} {props.data[0].lastName}</h5>
          <hr />
          <p>{props.data[0].bio}</p>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent;