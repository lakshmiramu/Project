import React, { Component } from 'react'
//import {Redirect} from 'react-router-dom'
import './register.css';
class Register1 extends Component {
    constructor(props){
        super(props)
        //let Registered = false
        this.state = {
        name : "",
        mobileNo: "",
        password:"",
        gender : "",
        addharCardNo:"",
        pancardNo:"",
        address:"",
        loanAmount:"",
        accountNo:"",
        ifscCode:""
        }
        //this.onChange=this.onChange.bind(this)
        // this.name = this.namehandler.bind(this)
        // this.mobileNo=this.mobilehandler.bind(this)
        // this.password=this.passwordhandler.bind(this)
        // this.gender=this.genderhandler.bind(this)
        // this.addharCardNo=this.addharhandler.bind(this)
        // this.pancardNo=this.pancardhandler.bind(this)
        // this.address=this.addresshandler.bind(this)
        // this.loanAmount=this.loanhandler.bind(this)
        // this.accountNo=this.accounthandler.bind(this)
        // this.ifscCode=this.ifschandler.bind(this)
        //this.submitForm = this.submitForm.bind(this)

        this.handleSubmit=this.handleSubmit.bind(this)
    }
     
    // onChange(e){
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }


      namehandler=(event) =>{
        this.setState({
            name: event.target.value
        })
    }
    mobilehandler=(event) =>{
        this.setState({
            mobileNo: event.target.value
        })
    }
    passwordhandler=(event) =>{
        this.setState({
            password: event.target.value
        })
    }
    genderhandler=(event) =>{
        this.setState({
            gender: event.target.value
        })
    }
    addharhandler=(event) =>{
        this.setState({
            addharCardNo: event.target.value
        })
    }
    pancardhandler=(event) =>{
        this.setState({
            pancardNo: event.target.value
        })
    }
    addresshandler=(event) =>{
        this.setState({
            address: event.target.value
        })
    }
    loanhandler=(event) =>{
        this.setState({
            loanAmount: event.target.value
        })
    }
    accounthandler=(event) =>{
        this.setState({
            accountNo: event.target.value
        })
    }
    ifschandler=(event) =>{
        this.setState({
            ifscCode: event.target.value
        })
    }

    handleSubmit=(event)=>
    {
        alert(`${this.state.name} ${this.state.mobileNo} Registered Successfully`)
        console.log(this.state);
        this.setState({
        name : "",
        mobileNo: "",
        password:"",
        gender : "",
        addharCardNo:"",
        pancardNo:"",
        address:"",
        loanAmount:"",
        accountNo:"",
        ifscCode:"",
        })
        event.preventDefault()
    }



        // submitForm(e){
        //     e.preventDefault()
        //     const{name,mobileNo,password,gender,addharCardNo,pancardNo,address,loanAmount,accountNo,ifscCode}=this.state
        // }




    render() {
        // if(this.state.Registered){
        //     return <Redirect to="/"/>  
        
        return (
            <div>
                <h1>Register</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Name :</label>
                    <input type="text"  value={this.state.name} onChange={this.onChange} placeholder="name"/>
                    <br/>
                    <label>Mobile No :</label>
                    <input type="text" value={this.state.mobileNo} onChange={this.onChange} placeholder="mobileNo"/>
                    <br/>
                    <label>Password :</label>
                    <input type="password" value={this.state.password} onChange={this.onChange} placeholder="password"/>
                    <br/>
                    <label>Gender :</label>
                    <select onChange={this.onChange} defaultValue="select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <br/>
                    <label>AddharCard No :</label>
                    <input type="text" value={this.state.addharCardNo} onChange={this.onChange} placeholder="addharCardNo"/>
                    <br/>
                    <label>Pancard No :</label>
                    <input type="text" value={this.state.pancardNo} onChange={this.onChange} placeholder="pancardNo"/>
                    <br/>
                    <label>Address :</label>
                    <input type="text" value={this.state.address} onChange={this.onChange} placeholder="address"/>
                    <br/>
                    <label>LoanAmount :</label>
                    <input type="text" value={this.state.loanAmount} onChange={this.onChange} placeholder="loanAmount"/>
                    <br/>
                    <label>AccountNo :</label>
                    <input type="text" value={this.state.accountNo} onChange={this.onChange} placeholder="accountNo"/>
                    <br/>
                    <label>IFSC Code :</label>
                    <input type="text" value={this.state.ifscCode} onChange={this.onChange} placeholder="ifscCode"/>
                    <br/>
                    <input type="submit" value="Register" />
                    
                    <br/>
                </form>
            </div>
        )
    }
}
export default Register1;