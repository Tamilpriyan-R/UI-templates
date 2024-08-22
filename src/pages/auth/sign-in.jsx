import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import Checkbox from '@mui/material/Checkbox';
import { MailIcon } from '../components/icons/MailIcon';
import { EyeFilledIcon } from '../components/icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../components/icons/EyeSlashFilledIcon';
import { LockIcon } from '../components/icons/LockIcon';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link, useNavigate } from 'react-router-dom';
import { InputAdornment, TextField, IconButton } from '@mui/material';
import LoginImage from "../../../public/img/LoginImage.png";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import crmgif from '../../../public/img/crm.gif'
import ShowTime from '@/common/showTime/ShowTime';
import LoginTemplates from '@/Templates/signin/LoginTemplates';

const LoginData = [
  {
    emailid: "admin@gmail.com",
    password: "123",
    role: "admin"
  },
  {
    emailid: "doctor@gmail.com",
    password: "123",
    role: "doctor"
  },
  {
    emailid: "receptionist@gmail.com",
    password: "123",
    role: "receptionist"
  },
  {
    emailid: "nurse@gmail.com",
    password: "123",
    role: "nurse"
  },
  {
    emailid: "pharmacist@gmail.com",
    password: "123",
    role: "pharmacist"
  },
];


const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      try {
        const user = LoginData.find(
          (user) => user.emailid === formData.username && user.password === formData.password
        );

        if (user) {
          localStorage.setItem('loggedInUser', user.role);
          switch (user.role) {
            case "doctor":
              navigate('/doctor/dashboard');
              break;
            case "admin":
              navigate('/admin/dashboard');
              break;
            case "nurse":
              navigate('/nurse/dashboard');
              break;
            case "receptionist":
              navigate('/receptionist/dashboard');
              break;
            case "pharmacist":
              navigate('/pharmacist/dashboard');
              break;
          }
        } else {
          setError('Invalid username or password');
        }

      } catch (err) {
        console.error('Error:', err);
        setError('An error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className='auth-section'>
      <div className="auth-section__wrapper lg:flex">
        <div className="left-side__wrapper min-h-100vh pb-6 pt-4 px-6 hidden lg:flex flex-col items-center justify-center lg:w-2/4 bg-[#3F51B5]">
          <div className="content-wrapper flex flex-col gap-6">
            <img src={crmgif} alt="Login" />
            <ShowTime />
          </div>
        </div>
        <div className="right-side__wrapper min-h-dvh py-4 px-6 flex flex-col justify-center lg:w-2/4">
          <div className="form-content__wrapper md:px-12 max-w-[600px] w-full mx-auto">
            <div className="auth-form__title">
              <h3 className='m-0 mb-4 font-bold text-[#3F51B5] dark:text-white' style={{fontSize : "35px"}}>Hospital Management System</h3>
            </div>
            <form onSubmit={handleSubmit} method="post">
              <div className="flex flex-col gap-9 mt-10">
                <div className="relative" >
                  <TextField
                    autoFocus
                    // label="Enter your email"
                    placeholder="Enter your email"
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailIcon className="text-2xl text-default-400" />
                        </InputAdornment>
                      ),
                    }}
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <TextField
                    // label="Password"
                    placeholder="Enter your password"
                    type={isVisible ? "text" : "password"}
                    sx={{ width: "100%" }}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon className="text-2xl text-default-400" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={toggleVisibility} edge="end">
                            {isVisible ? <VisibilityOff className="text-2xl text-default-400" /> : <Visibility className="text-2xl text-default-400" />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex justify-between items-center w-full">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleCheckChange}
                        color="primary"
                      />
                    }
                    label="Remember me"
                    sx={{ '.MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
                  />
                  <Link to="/forget-password" className="text-[#021f01] text-md">
                    Forgot Password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className={`py-3 px-3 bg-[#3F51B5] hover:bg-[#3F51B5d4] text-white text-l font-bold rounded-md shadow focus:outline-none ${loading ? 'cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Sign In'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LoginTemplates />
    </section>
  );
}

export default Login;