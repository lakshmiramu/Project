import React from 'react';
import CustomerService from './services/CustomerService';

class CustomerComponent extends React.Component{


    constructor(props){
        super(props)
        this.state={
            Customers:[]
        }
    }
    componentDidMount(){
        CustomerService.getCustomers().then((response) => {
            this.setState({Customers: response.data})
        })
    }

    render(){
        return(
            <div>
             <h1 className ="text-center">Customers List</h1>
             <table className = "table table-stripped">
              <thead>
                  <tr>
                      <td>Customer ID</td>
                      <td>Customer Name</td>
                      <td>MobileNo</td>
                      <td>Gender</td>
                      <td>AadharNo</td>
                      <td>PanCardNo</td>
                      <td>Address</td>
                      {/* <td>Password</td> */}
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.Customers.map(
                          Customer =>
                          <tr key={Customer.id}>
                              <td>{Customer.customerId}</td>
                              <td>{Customer.customerName}</td>
                              <td>{Customer.custMobileNumber}</td>
                              <td>{Customer.gender}</td>
                              <td>{Customer.aadharNumber}</td>
                              <td>{Customer.panNumber}</td>
                              <td>{Customer.address}</td>
                              {/* <td>{Customer.password}</td> */}
                          </tr>
                      )
                  }


              </tbody>
             </table>

            </div>
        )
    }

}
export default CustomerComponent;