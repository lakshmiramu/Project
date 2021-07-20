
import{ BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Switch} from 'react-router';
import Login from '../home/Login';
import {useHistory } from "react-router-dom";
import Logout from '../home/Logout';

const Navbar = props =>{
    let history=useHistory();
    return (
      <Router>
      <div className="App">
      

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
    
      <Link class="navbar-brand" href="#">Loan</Link>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
    
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav mr-auto">
           <li class="nav-item active">

             <Link class="nav-link" to="/">  <span class="sr-only"></span></Link>
           </li>
           <li class="nav-item">
           <li style={{ marginLeft: "2700px"  }} className="nav-item"></li>
           <li><Link class="nav-link"  onClick={() => {history.push('/Logout');}}>Logout</Link></li>
           </li>
           </ul>
       </div>
       </nav>
       <h1>Wecome to Loan</h1>
       <Switch>
      
       <Route  path="/Logout" component={Logout}/>
       </Switch>
     </div>
     </Router>
    );
}
     export default Navbar;



          