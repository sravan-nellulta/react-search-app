import React from 'react';
import * as JsonData from '../assets/sample-data.json';
import EmployeeDetails from './employeeDetails';
import ModalComponent from './modalComponent';

class employeeData extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showModal: null,
      data: JsonData.employees
    }
    this.closeModal = this.closeModal.bind(this);
  }
  renderModal = (data) => {
    this.setState({
      showModal: true,
      data: [data]
    })
  }
  selectSearchValue = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  getSearchData = (e) => {
    const self = this;
    let filteredData = JsonData.employees.filter((item) => item[self.state.searchValue].toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
    this.setState({
      data: filteredData,
      filterValue: e.target.value
    })
  }
  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }
  render() {
    let mappedValue = this.state.filterValue && this.state.filterValue.length > 0 ? this.state.data : JsonData.employees;
    return (
      <div>
        <h5 className='employee-heading'>Our Employees</h5>
        <p className='employee-sort'>Sort by:
                <select className='select-box' onChange={this.selectSearchValue}>
            <option value=''>Select</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="opel">bio</option>
          </select>
        </p>
        <span>Search <input type='text' onChange={this.getSearchData} /> </span>
        <p className='header-date'>Since: {JsonData.companyInfo.companyEst}</p>
        <hr />
        {mappedValue.map((item) => {
          return (<EmployeeDetails key={item.id} data={item} onClick={() => this.renderModal(item)} />)
        })}
        {this.state.showModal && <ModalComponent data={this.state.data} onClose={this.closeModal} />}
      </div>
    )
  }
}

export default employeeData;
