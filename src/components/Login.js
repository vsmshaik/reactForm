import React,{useState} from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import {Link , Redirect} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
  }));

const Login = () => {
    const[email,setEmail] = useState('');
    const[pwd,setPwd] = useState('');
    const classes = useStyles();
  
  
  const handleSubmit = (e) =>{
      e.preventDefault();
      if(email === '' && email.trim() === ''){
          document.querySelector('.errorMessage').innerText = "Enter Email/User Name";
         
      }else if(pwd === ''  && pwd.trim() === ''){
        document.querySelector('.errorMessage').innerText = "";
          document.getElementById('errorPwd').innerText = "Please Enter Password";
         
      }else{
        document.getElementById('errorPwd').innerText = "";
          const inputData = {
              email,
              pwd
          }
          if(email == "test@test.com" && pwd == "123456"){
            window.location.href = '/counter';
          }else{
            document.getElementById('errorbtn').innerText = "Invalid user/password"
          }
          console.log(inputData);
      }
  }
    return (
        <>
        <div className="LoginPage">
       <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
         <img src=" https://static3.depositphotos.com/1005574/224/v/950/depositphotos_2240334-stock-illustration-login-icon-button.jpg" style={{height:"100px"}} />
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField name="email" id="input-with-icon-grid" label="UserName/Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Grid>
          </Grid>
          <p className="errorMessage"></p>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <VisibilityOffIcon />
            </Grid>
            <Grid item>
              <TextField name="password" id="input-with-icon-grid" label="password" value={pwd} onChange={event =>setPwd(event.target.value)}/>
            </Grid>
          </Grid>
          <p id="errorPwd"></p>
        </div>
        <div className={classes.root}>
        <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      <span id="errorbtn"></span>
        </div>
        </form>

      </div>
        <p className="signUp">Don't you have an account?<Link to="/signUp">Signup</Link></p>
        </>
    )
}

export default Login
