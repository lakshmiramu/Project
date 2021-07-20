import React from 'react'
import {Grid,Paper,Avatar,TextField,Button,Link,Typography} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup'
const Login=({handleChange})=>{
 const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
 const avatarStyle={backgroundColor:'#1bbd7e'}
 const btnstyle={margin:'8px 0'}  
                   
 const initialValues={                            
 username:'',
 password:'',
 remember:false
 }
 const validationSchema=Yup.object().shape({
 username:Yup.string().email('please enter valid email').required('Required'),
 password:Yup.string().required('Required')
 })
 const onSubmit=(values,props)=>{
 console.log(values) 
 setTimeout(()=>{
 props.resetForm()
 props.setSubmitting(false)
 },2000)
 
 console.log(props)

 if(username === "abc"  && password === "abc") {
    this.setState({
        loggedIn: true
    })
}
 }

 
 return(
 <Grid>
 <Paper style={paperStyle}>
 <Grid align='center'>
 <Avatar style={avatarStyle}><LockIcon/></Avatar>
 <h2>Sign in</h2>
 </Grid>
 <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
 {(props)=>(
 <Form>
 
 <Field as={TextField} name='username' label='Username'
 placeholder='Enter Username' fullWidth required 
 helperText={<ErrorMessage name='username'/>}
 />
 <Field as={TextField} name='password' label='Password' 
 placeholder='Enter Password' type='password' fullWidth required
 helperText={<ErrorMessage name='password'/>}
 />
 <Field as={FormControlLabel}
 name='remember'
 control={
 <Checkbox
 color="primary"
 />
 }
 label="Remember Me"
 />
 <Button type='submit' color='primary'
 fullWidth variant="contained" disabled={props.isSubmitting}
 style={btnstyle}>{props.isSubmitting?"Loading":"Sign In"}</Button>
 
 </Form>
 )}

 </Formik>
 <Typography>
 <Link href="#">
 Forgot Password ?
 </Link>
 </Typography>
 <Typography>Do you have an account ?
 <Link href="#" onClick={()=>handleChange("event",1)}>
 Sign Up 
 </Link>
 </Typography>
 
 </Paper>
 </Grid>
 );
}
export default Login;