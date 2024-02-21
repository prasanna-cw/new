import React from 'react';
import Box from '@mui/material/Box';
import MiniDrawer from '../../component/MiniDrawer';
import LoginForm from './LoginForm';



const User = () => {
  return (
   <>
     <Box  sx={{display: "flex"}}>
        <MiniDrawer/>
      <Box component ="main" sx={{flexGrow: 1, p:3}}>
      {/* <LoginForm /> */}
      
      </Box>
      
     </Box>
   
   </>
  );
};

export default User;


