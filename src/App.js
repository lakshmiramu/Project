import './App.css';
import{ BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Switch} from 'react-router';
import Login from './components/home/Login';
import Home from './components/home/Home';
import Service from'./components/service/Service';
import About from './components/home/About';
import Contact from './components/home/Contact';
import CustomerService from './components/services/CustomerService';
import CustomerComponent from './components/CustomerComponent';
import Loan from './components/home/Loan';
import Sidebar from './components/home/Sidebar';
import Index from './containers/Index';
import Details from './components/details/Details';
import Login1 from './components/Login1';
import SignUp1 from './components/SignUp1';
import Dashboard from './components/home/dash/Dashboard';
import { SidebarData } from './components/home/dash/SidebarData';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Table,TableCell,TableRow } from '@material-ui/core';
import {Pie} from 'react-chartjs-2';
import EmiCalculator from './components/home/emicalculator/EmiCalculator';
import TableDetails from './components/home/emicalculator/TableDetails';
import Dash from './components/home/dashboard/Dash';
import LoanCards from './components/Cards/LoanCards';
// import CreateCustomerComponent from './components/crudOperations/CreateCustomerComponent';
// import CustomerListComponent from './components/crudOperations/CustomerListComponent';
// import CustomerServices from './components/crudOperations/CustomerServices';
// import Header from './components/crudOperations/Header';
// import ViewCustomerComponent from './components/crudOperations/ViewCustomerComponent';
// import LoanCards from './components/Cards/LoanCards';

function App() {
  return (
    <Router>
      {/* Enables navigation among different Components and keeps UI in sync with URL */}
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <Link class="navbar-brand" to="/Loan">Loan Management Application System</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <Link class="nav-link" to="/Loan"><span class="sr-only"></span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/About">About<span class="sr-only"></span></Link>
      </li>
      
      <li class="nav-item">
      <li><Link class="nav-link" to="/Contact">ContactUs</Link></li>
      </li>
      <li class="nav-item active">
      <li style={{ marginLeft: "1800px" }} className="nav-item"></li>
        <Link class="nav-link" to="/Home">Login<span class="sr-only"></span></Link>
      </li>
      </ul>
      </div>
      </nav>
      
      <Switch>
        {/* Render the route that matches the path */}
        {/* Route shows component that renders some ui when its path matches */}
      <Route exact path="/" component={Loan}/>
        <Route exact path="/Loan" component={Loan}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Sidebar" component={Sidebar}/>
        <Route  path="/Service" component={Service}/>
        <Route  path="/About" component={About}/>
        <Route  path="/Contact" component={Contact}/>
        <Route  path="/CustomerComponent" component={CustomerComponent}/>
        <Route path="/Index" component={Index}/>
        <Route path="/Details" component={Details}/>
        <Route path="/Login1" component={Login1}/>
        <Route path="/SignUp1" component={SignUp1}/>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/SidebarData" component={SidebarData}/>
        <Route  path="/EmiCalculator" component={EmiCalculator}/>
        <Route  exact path="/TableDetails" component={TableDetails}/>
        <Route path="/Dash" component={Dash}/>
        <Route path="/LoanCards" component={LoanCards}/>
        {/* <Route path="/CreateCustomerComponent" component={CreateCustomerComponent}/>
        <Route path="/CustomerListCustomer" component={CustomerListComponent}/>
        <Route path="/CustomerServices" component={CustomerServices}/>
        <Route path="/Header" component={Header}/>
        <Route path="/ViewCustomerComponent" component={ViewCustomerComponent}/>
        <Route path="/LoanCards" component={LoanCards}/> */}

      </Switch>
    
    </div>
    </Router>
  );
    }

    export default App;