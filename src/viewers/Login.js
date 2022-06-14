import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import { LockClockOutlined } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axiosInstance from '../axios';



export default function Login(){
    const navigate=useNavigate();
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    // const classes=useStyles();
    const btnstyle={margin:'8px 0'}
    
    // const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		// e.preventDefault();
		// console.log(formData);
		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				navigate('/home');
				console.log(res);
				console.log(res.data);
			});
	};
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockClockOutlined/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                
                    <TextField label='Email' placeholder='Enter email adress' fullWidth required id='email' value={formData.email} name='email' autoFocus autoComplete='email' onChange={handleChange}/>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required name='password' value={formData.password} autoComplete='current-password' id='password' onChange={handleChange}/>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Me rappeler"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleSubmit}>Sign in</Button>
                    <Typography >
                        <Link href="home" >
                            Mot de passe oublié ?
                    </Link>
                    </Typography>
                    <Typography > Avez-vous un compte ?
                        <Link href="#" >
                            Sign Up 
                    </Link>
                    </Typography>
               
            </Paper>
        </Grid>
    )
}

