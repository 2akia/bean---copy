import * as React from 'react';
import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { orange } from '@mui/material/colors';
import { brown } from '@mui/material/colors';
import { Typography } from '@mui/material';


export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 1260 }}> 
      <BottomNavigation sx={{ bgcolor: '#ffcc80' }} 
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        { /*<BottomNavigationAction icon={<LocalPhoneIcon sx={{ color: '#3e2723' href="" }} />} /> */ }
        <BottomNavigationAction icon={<EmailIcon sx={{ color: '#3e2723' }}/>} />
        <BottomNavigationAction icon={<InstagramIcon sx={{ color: '#3e2723' }}/>} />
        <BottomNavigationAction icon={<FacebookIcon sx={{ color: '#3e2723' }}/>} />
        <BottomNavigationAction icon={<GitHubIcon sx={{ color: '#3e2723' }}/>} />
      </BottomNavigation>
      <Typography sx={{textAlign:'center', fontSize:10 }}>  All Rights Reserved @Bean Cafe Reviews Pvt. Ltd. </Typography>
    </Box>
  );
}