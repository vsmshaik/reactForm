import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography  } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		height: 250,
		width: 300
	},
	control: {
		padding: theme.spacing(2)
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      }
}));
const TestItr = (props) => {
    const classes = useStyles();
    return (
       
        <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={10}>
                    {props.value.map((value) => (
                        <Grid key={value.id} item spacing={8} >
                            <Paper className={classes.paper}>
                                <Typography component="h2" align="center" paragraph>
                                    <strong><PersonIcon />  :</strong> <span className="title_name">{value.name}</span> 
                                </Typography>
                                <Typography component="h2" align="center" paragraph>
                                    <strong> <MailOutlineIcon />   :</strong>
                                    {value.email}
                                </Typography>
                                <Typography component="h2" align="center" paragraph>
                                    <strong> <LanguageIcon />   :</strong>
                                    {value.website}
                                </Typography>
                            {/* <Link to={"/users/"+value.id} >More</Link> */}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    
    )
}

export default TestItr
