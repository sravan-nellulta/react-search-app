import React from 'react';
// import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import header from './components/header';
import employeeDetails from './components/employeeDetails';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('header', () => {
  /* it('should render app component', () => {
    const appComponent = shallow(
      <App className='App' />
      );
      expect(appComponent).toMatchSnapshot();
  }); */
  it('should be defined', () => {
    expect(employeeDetails).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <employeeDetails className='employee-data' />
    );
    expect(tree).toMatchSnapshot();
  });
  it('should be defined', () => {
    expect(header).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <header className='header-container' />
    );
    expect(tree).toMatchSnapshot();
  });
 });
