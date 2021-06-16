import React,{useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import { Button, useTheme } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { Dispatch, RootState } from './store';
import { User } from './services/auth';

function Copyright() {
  const {palette}=useTheme();
  const count = useSelector<RootState>(state => state);
  console.log(count)
  const dispatch = useDispatch<Dispatch>()
  
  const onClick=()=>{
    console.log("sa")
    dispatch.auth.loginAsync();
  }
  return (
    <>
    <Typography style={{color:"red"}} variant="body2" color={"primary"} align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    <Button onClick={onClick}>Login</Button>

    </>
  );
}

export default function App() {
  const user = useSelector<RootState,User>(state => state.auth.user);

  return (
    <Container maxWidth="sm" >
      <Box my={5}>
        <Typography align="center" variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example with TypeScript
        </Typography>
        <ProTip />
        <Copyright />
        <Typography align="left" variant="h5" >{user?.first_name+" "+user?.last_name}</Typography>
      </Box>
    </Container>
  );
}
