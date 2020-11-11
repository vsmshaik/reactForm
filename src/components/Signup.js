import React,{useState} from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

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


const Signup = () => {
    const classes = useStyles();
    const [email,setEmail]= useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd,setCpwd] = useState('');
    const signUpSubmit = (e) =>{
        e.preventDefault();
        if(email === ''){
            document.querySelector('.errorMessage').innerText="Please Enter Email/User Name";
        }else if(pwd === '' && pwd.trim() === ''){
            document.querySelector('.errorMessage').innerText="";
            document.getElementById('errorMessage1').innerText="Please Enter password";
        }else if(cpwd === '' && cpwd.trim() === ''){
            document.querySelector('#errorMessage1').innerText="";
            document.getElementById('errorMessage2').innerText="Please Enter Confirm password";
        }
        else if(pwd !== cpwd){
            document.getElementById('errorMessage1').innerText="";
            document.getElementById('errorMessage2').innerText='password not match with confirm password';
        }else{
            document.getElementById('errorMessage2').innerText="";
            const signUpData = {
                email,
                pwd,
                cpwd
            }
            console.log(signUpData);
        }
    }
    return (
        <>
        <div className="LoginPage">
       <form className={classes.root} noValidate autoComplete="off" onSubmit={signUpSubmit}>
         <img src="https://freepngimg.com/thumb/web_design/24790-3-sign-up-button.png" alt="signUp" style={{height:"100px"}} />
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="UserName/Email" value={email} onChange={event => setEmail(event.target.value)}/>
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
              <TextField id="input-with-icon-grid" label="password"  value={pwd} onChange={event => setPwd(event.target.value)}/>
            </Grid>
          </Grid>
          <p id="errorMessage1"></p>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <VisibilityOffIcon />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Confirm password"  value={cpwd} onChange={event => setCpwd(event.target.value)}/>
            </Grid>
          </Grid>
          <p id="errorMessage2"></p>
        </div>
        <div className={classes.root}>
        <Button variant="contained" color="primary" type="submit">
        SignUP
      </Button>
        </div>
        </form>

      </div>
        <p className="signUp">Already have an account?<Link to="/">Login</Link></p>
        </>
    )
    
}

export default Signup
