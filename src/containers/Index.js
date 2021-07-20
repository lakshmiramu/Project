import React,{useState} from 'react'
import SignUp1 from '../components/SignUp1';
import Login1 from '../components/Login1';
// import Login1 from '../components/sidebar/Login';
// import SignUp from '../components/sidebar/SignUp';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const SignInOutContainar=()=>{
 const [value, setValue] = useState(0)
 const handleChange = (event, newValue) => {
 setValue(newValue);
 };
 const paperStyle={width:340,margin:"20px auto"}

 function TabPanel(props) {
 const { children, value, index, ...other } = props;
 
 return (
 <div
 role="tabpanel"
 hidden={value !== index}
 id={`simple-tabpanel-${index}`}
 aria-labelledby={`simple-tab-${index}`}
 {...other}
 >
 {value === index && (
 <Box>
 <Typography>{children}</Typography>
 </Box>
 )}
 </div>
 );
 }
 return(
 <Paper style={paperStyle} elevation={20}>
 <Tabs
 value={value}
 indicatorColor="primary"
 textColor="primary"
 onChange={handleChange}
 aria-label="disabled tabs example"
 >
 <Tab label="SignIn" />
 
 <Tab label="SignUp" />
 </Tabs>
 <TabPanel value={value} index={0}>
 <Login1 handleChange={handleChange}/>
 </TabPanel>
 <TabPanel value={value} index={1}>
 <SignUp1/>
 </TabPanel>
 </Paper>
 );

}

export default SignInOutContainar;