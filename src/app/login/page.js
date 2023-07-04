'use client'

//? CSS
// import './styles/home/styles.css';
// import './rootStyles.css'

//? REACT
import React from 'react';

//? NEXT.JS
import Image from 'next/image';

//? MATERIAL UI
import { Box, Button, Divider, TextField, Typography } from '@mui/material';

//? ICONS
import bugIcon from '../../../public/assets/icons/icons8-bug-60.png';

const Home = () => {
  return (
    <>
      <div className='signup-div'>
        <Box sx={{textAlign: 'center', width: '100%', maxWidth: '25%', marginLeft: "auto", marginRight: "auto", backgroundColor: '#e7ebf0', p: 3, borderRadius: '3px'}}>
          <Typography variant='h1' sx={{fontSize: 45, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image src={bugIcon} alt="Bug Icon" width={60} height={60} layout="fixed" /> Bug Tracker 
          </Typography>
          <Divider />

          <Typography variant='h2' sx={{fontSize: 35, textAlign: 'center', marginTop: 2}}>
            Welcome Back
          </Typography>

          <Box component={'form'}>
            <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'left'}}>
              Email
            </Typography>
            <TextField required variant='outlined' size='small' sx={{width: '100%', backgroundColor: '#dadee3'}} />
            <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'left'}}>
              Password
            </Typography>
            <TextField required variant='outlined' size='small' sx={{width: '100%', backgroundColor: '#dadee3'}} />
          </Box>
          <Button variant='contained' size='large' onClick={() => alert('submitted')} sx={{marginTop: 2, width: '100%'}}>
            Sign In
          </Button>
          <Typography sx={{marginTop: 1}}>
                Need an account?{" "}
                <a href="/" style={{ color: "#0091E2", textDecoration: "none", fontWeight: 600 }}>
                  Sign Up
                </a>
          </Typography>
          <Typography sx={{marginTop: 1}}>
                Sign in as {" "}
                <a href="/" style={{ color: "#0091E2", fontWeight: 600 }}>
                  Demo User
                </a>
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default Home;