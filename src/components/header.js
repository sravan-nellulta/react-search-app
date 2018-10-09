import React from 'react';
import * as JsonData from '../assets/sample-data.json';

const header = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <h3 className='company-name'>{JsonData.companyInfo.companyName}</h3>
        <p className='company-motto'>{JsonData.companyInfo.companyMotto}</p>
      </div>
      <p className='header-date'>Since: {JsonData.companyInfo.companyEst}</p>
    </div>)
}

export default header;
