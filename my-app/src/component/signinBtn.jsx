import { Text,Box } from '@chakra-ui/react';
import {  FaUserAlt } from 'react-icons/fa';

const Signbtn=()=>{


    return(
<>
<Box w={{base:"100px",lg:"130px"}} color="white" h="50%" border={{base:"1px solid white",lg:"none"}} alignItems="center" justifyContent="center" display="flex" borderRadius="20px" marginLeft={"1%"}
            _hover={{ bg: "#141414" }}>
            <FaUserAlt fontSize="22px" color="white" />
            <Text marginLeft={"10px"}>Sign In</Text>
          </Box>
</>
    );
}
export default Signbtn;