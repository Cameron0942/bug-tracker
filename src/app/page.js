'use client';

//? CSS
import './rootStyles.css';

//? REACT
import React, { useState } from 'react';

//? NEXT.JS
import Image from 'next/image';

//? MATERIAL UI
import { Box, Button, Divider, TextField, Typography } from '@mui/material';

//? FONT AWESOME COMPONENTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

//? ICONS
import bugIcon from '../../public/assets/icons/icons8-bug-60.png';

//? CUSTOM FUNCTIONS
import emailValidator from '@/validators/validateEmail';

const Home = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordShown, setPasswordShown] = useState(true);

  const eye = <FontAwesomeIcon icon={faEye} />;
  const eyeClosed = <FontAwesomeIcon icon={faEyeSlash} />;

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e, field) => {
    switch (field) {
      case 'email':
        setEmailError(false);
        setEmailHelperText('');
        setEmail(e.target.value);
        break;

      case 'password':
        setPassword(e.target.value);
        break;

      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(false);
        setConfirmPasswordHelperText('');
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailValidator(email)) {
      setEmailError(true);
      setEmailHelperText('Please enter a valid email');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordHelperText('Passwords must match');
      setConfirmPasswordError(true);
    }

  };

  return (
    <>
      <div className='signup-div'>
        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
            maxWidth: '25%',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#e7ebf0',
            p: 3,
            borderRadius: '3px',
          }}
        >
          <Typography
            variant='h1'
            sx={{
              fontSize: 45,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={bugIcon} alt='Bug Icon' width={60} height={60} layout='fixed' /> Bug Tracker
          </Typography>
          <Divider />

          <Typography variant='h2' sx={{ fontSize: 35, textAlign: 'center', marginTop: 2 }}>
            Create Account
          </Typography>

          <Box component='form' onSubmit={handleSubmit}>
            <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'left' }}>
              Email *
            </Typography>
            <TextField
              required
              variant='outlined'
              size='small'
              error={emailError}
              helperText={emailHelperText}
              onChange={(event) => handleChange(event, 'email')}
              sx={{ width: '100%', backgroundColor: '#dadee3' }}
            />
            <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'left' }}>
              Password *
            </Typography>
            <TextField
              required
              variant='outlined'
              size='small'
              type={passwordShown ? 'text' : 'password'}
              onChange={(event) => handleChange(event, 'password')}
              sx={{ width: '100%', backgroundColor: '#dadee3' }}
              InputProps={{
                endAdornment: (
                  <i onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                    {passwordShown ? eye : eyeClosed}
                  </i>
                )
              }}
            />
            <Typography variant='h6' sx={{ fontWeight: 600, textAlign: 'left' }}>
              Confirm Password
            </Typography>
            <TextField
              required
              variant='outlined'
              size='small'
              type={passwordShown ? "text" : "password"}
              onChange={(event) => handleChange(event, 'confirmPassword')}
              helperText={confirmPasswordHelperText}
              error={confirmPasswordError}
              sx={{ width: '100%', backgroundColor: '#dadee3' }}
              InputProps={{
                endAdornment: (
                  <i onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                    {passwordShown ? eye : eyeClosed}
                  </i>
                )
              }}
            />
            <Button type='submit' variant='contained' size='large' sx={{ marginTop: 2, width: '100%' }}>
              Sign Up
            </Button>
          </Box>
          <Typography sx={{ marginTop: 1 }}>
            Already have an account?{' '}
            <a href='/login' style={{ color: '#0091E2', textDecoration: 'none', fontWeight: 600 }}>
              Sign In
            </a>
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Sign in as{' '}
            <a href='/' style={{ color: '#0091E2', fontWeight: 600 }}>
              Demo User
            </a>
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default Home;
