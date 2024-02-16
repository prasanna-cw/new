import React from 'react';
import Box from '@mui/material/Box';
import MiniDrawer from '../../component/MiniDrawer';


const User = () => {
  return (
   <>
     <Box  sx={{display: "flex"}}>
        <MiniDrawer/>
      <Box component ="main" sx={{flexGrow: 1, p:3}}>
         <h1>User</h1>
      </Box>

     </Box>
   
   </>
  );
};

export default User;


