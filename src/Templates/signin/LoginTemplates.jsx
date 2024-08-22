import React from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'
import CrmGif from '../signin/img/crm.gif'
import ShowTime from '@/common/showTime/ShowTime'

const LoginTemplates = () => {
  return (
    <Grid container >
        <Grid sx={{position:'relative'}}  >
            <img src={CrmGif} alt='singlogo'/>
            <Box sx={{position:'absolute',zIndex:'50',top:'20px',left:'10px'}}>
                <ShowTime />
            </Box>
        </Grid>
        <Grid gridColumn="span 8" >
            <Typography variant='h3' color={'blue'} >CRM</Typography>
            <Box sx={{width:'100%'}}>
            <TextField fullWidth label="fullWidth" id="fullWidth" />
            </Box>
        </Grid>
    </Grid>
  )
}

export default LoginTemplates