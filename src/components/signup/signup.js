import './signup.css';
import { React } from 'react';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { Button } from '@mui/material';
import TextBox  from '../../core/textField';
import { Component } from 'react';
import axios from 'axios';
 
class Signup extends Component {

  constructor(props){
    super(props);
    this.onChangeName= this.onChangeName.bind(this);
    this.onChangeAge= this.onChangeAge.bind(this);
    this.onChangePhone= this.onChangePhone.bind(this);
    this.onChangeBatch= this.onChangeBatch.bind(this);
    this.onChangeMonth= this.onChangeMonth.bind(this);
    this.onChangePayment= this.onChangePayment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
    this.state ={
      name: '',
      Age:'',
      phone:'',
      Batch:'',
      Month:'',
      Payment:'',
    }
  }
   
  onChangeName(e){
    this.setState({
      name:e.target.value
    });
  }
   
  onChangeAge(e){
    this.setState({
      Age:e.target.value
    });
  }
   
  onChangePhone(e){
    this.setState({
      phone:e.target.value
    });
  }

  onChangeBatch(e){
    this.setState({
      Batch:e.target.value
    });
  }
   
  onChangeMonth(e){
    this.setState({
      Month:e.target.value
    });
  }
   
  onChangePayment(e){
    this.setState({
      Payment:e.target.value
    });
  }
   
  onSubmit(e){
    e.preventDefault();
    const obj ={
      name:this.state.name,
      Age:this.state.Age,
      phone:this.state.phone,
      Batch:this.state.Batch,
      Month:this.state.Month,
      Payment:this.state.Payment,
    };
   
    axios.post('http://localhost/reactProject/insert.php',obj)
    .then(res=> console.log(res.data))
    .catch(error => {
      console.log(error.response)
  });
  }

 render(){
  return (
    <div className="card">
    <Card className="cardStyle" >
      <CardContent>
        <div className="signupText">Registration Form</div>
        <TextBox label="Full Name"/>
      </CardContent>

      <CardContent>
        <TextBox label="Age"/>
      </CardContent>

      <CardContent>
        <TextBox label="Phone No"/>
      </CardContent>

      <CardContent>
        <TextBox label="Batch No"/>
      </CardContent>

      <CardContent>
        <TextBox label="Month of start"/>
      </CardContent>

      <CardContent>
        <TextBox label="Montly Payment"/>
      </CardContent>

      <CardActions className="CardActions" >
        <Button style={{background:'black',color:'white'}}> SIGNUP</Button>
      </CardActions>
       
    </Card>
    </div>
  );
 }
}
 
 
export default Signup;