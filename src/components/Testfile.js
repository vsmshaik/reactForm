import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography  } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import {Link} from 'react-router-dom';

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


const Testfile = () => {
	const classes = useStyles();
	const [ user, setUser ] = useState([]);
	useEffect(() => Axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setUser(res.data)), []);
	console.log(user);
	return (
		<div>
			<Grid container className={classes.root} spacing={4}>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={10}>
						{user.map((value) => (
							<Grid key={value.id} item spacing={8}>
								<Paper className={classes.paper}>
									<Typography component="h2" align="center" paragraph>
										<strong><PersonIcon />  :</strong> <span>{value.name}</span> 
										
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
		</div>
	);
};

export default Testfile;
