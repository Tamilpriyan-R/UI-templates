import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import '../showTime/showtime.css'

const ShowTime = () => {
    const [hourDeg,setHourDeg]=useState(0)
    const [minuteDeg,setMinuteDeg]=useState(0)
    const [secondDeg,setSecondDeg]=useState(0)
    useEffect(()=>{
        const interval=setInterval(updateTime,1000)
        return ()=>clearInterval(interval)
    },[])
    const updateTime=()=>{
        const date=new Date();
    
        const sectodeg=(date.getSeconds()/60)*360
       
        const mintodeg=(date.getMinutes()/60)*360
        const hourtodeg=((date.getHours()%12)/12)*360+(mintodeg/12)

        setHourDeg(hourtodeg)
        setMinuteDeg(mintodeg)
        setSecondDeg(sectodeg)

    }
  return (
    <div>
        <div className='clock'>
            <p style={{position:'absolute',top:'3px',color:'white'}}>12</p>
            <p style={{position:'absolute',right:'3px',color:'white'}}>3</p>
            <p style={{position:'absolute',left:'3px',color:'white'}}>9</p>
            <p style={{position:'absolute',bottom:'3px',color:'white'}}>6</p>
            <div className='indicator'>
                <span className='clockhand hour' style={{transform:`rotate(${hourDeg}deg)`}}></span>
                <span className='clockhand min' style={{transform:`rotate(${minuteDeg}deg)`}}></span>
                <span className='clockhand sec' style={{transform:`rotate(${secondDeg}deg)`}}></span>
            </div>
        </div>
    </div>
  )
}

export default ShowTime