import React from "react";
import { Grid,Paper,Avatar,TextField,Button,Typography,FormHelperText} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import EmiCalculator from './home/emicalculator/EmiCalculator';
 const SignUp1=() => {
   let history=useHistory();
   const [userName, setUserName] = React.useState("");
   const [password, setPassword] = React.useState("");
   const doSignup1=()=>{
    console.log(userName,password,"----")

   history.push('/');
}
 const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
 const headerStyle = { margin: 0 };
 const avataStyle = { backgroundColor: "#1bbd7e" };
 const margeTop = { marginTop: 5 };
 const initialValues = {
 name: "",
 email: "",
 gender: "",
 phoneNumber: "",
 password: "",
 confirmPassword: "",
 termAndConditions: false,
 };
 const validationSchema = Yup.object().shape({
 name: Yup.string().min(3, "It's too short").required("Required"),
 email: Yup.string().email("Enter valid email").required("Required"),
 gender: Yup.string()
 .oneOf(["male", "female"], "Required")
 .required("Required"),
 phoneNumber: Yup.number().min(10).max(10)
 .typeError("Enter valid phone number")
 .required("Required"),
 password: Yup.string()
 .min(8, "password minimum length should be 8")
 .required("Required"),
 confirmPassword: Yup.string()
 .oneOf([Yup.ref("password")], "password not matched")
 .required("Required"),
 termAndConditions: Yup.string().oneOf(
 ["true"],
 "Accept terms & conditions"
 ),
 });
 const onSubmit = (values, props) => {
 console.log(values);
 console.log(props);
 setTimeout(()=>{
 props.resetForm()
 props.setSubmitting(false)
 },2000)
 };
 return (
 <Grid>
 <Paper style={paperStyle}>
 <Grid align="center">
 <Avatar style={avataStyle}>
 <AddCircleOutlineOutlinedIcon />
 </Avatar>
 <h2 style={headerStyle}>Sign Up</h2>
 <Typography variant="caption" gutterBottom>
 {" "}
 Please fill this form to create an account !
 </Typography>
 </Grid>
 <Formik
 initialValues={initialValues}
 validationSchema={validationSchema}
 onSubmit={onSubmit}
 >
 {(props) => (
 <Form>
 <Field
 as={TextField}
 fullWidth
 name="name"
 label="Name"
 placeholder="Enter Your Name"
 helperText={<ErrorMessage name="name" />}
 />
 <Field
 as={TextField}
 type="email"
 name="email"
 fullWidth
 label="Email"
 placeholder="Enter Your Email"
 helperText={<ErrorMessage name="email" />}
 />
 <FormControl component="fieldset" style={margeTop}>
 <FormLabel component="legend">Gender</FormLabel>
 <Field
 as={RadioGroup}
 aria-label="gender"
 name="gender"
 name="gender"
 style={{ display: "initial" }}
 >
 <FormControlLabel
 value="female"
 control={<Radio />}
 label="Female"
 />
 <FormControlLabel
 value="male"
 control={<Radio />}
 label="Male"
 />
 </Field>
 </FormControl>
 <FormHelperText>
 <ErrorMessage name="gender" />
 </FormHelperText>
 <Field
 as={TextField}
 fullWidth
 name="phoneNumber"
 label="Phone Number"
 placeholder="Enter Your Phone Number"
 helperText={<ErrorMessage name="phoneNumber" />}
 />
 <Field
 as={TextField}
 fullWidth
 name="password"
 type="password"
 label="Password"
 helperText={<ErrorMessage name="password" />}
 />
 <Field
 as={TextField}
 fullWidth
 name="confirmPassword"
 type="password"
 label="Conform Password"
 helperText={<ErrorMessage name="confirmPassword" />}
 />
 <FormControlLabel
 control={<Field as={Checkbox} name="termAndConditions" />}
 label="I accept the terms and Conditions"
 />
 <FormHelperText>
 <ErrorMessage name="termAndConditions" />
 </FormHelperText>
 <Button type="submit"  variant="contained" disabled={props.isSubmitting} color="primary" onClick={doSignup1}>
 {props.isSubmitting?"Loading":"Sign up"}
 </Button>
 </Form>
 )}
 </Formik>
 </Paper>
 </Grid>
 );
}

export default SignUp1;