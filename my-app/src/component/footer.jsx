import { Link } from 'react-router-dom';
 import { Flex, Box, Image, Text, UnorderedList, List, ListItem } from '@chakra-ui/react';
 import { AiOutlineLeft,AiFillHome,AiFillHeart,AiFillCreditCard } from 'react-icons/ai';
 import { BsFillBoxFill,BsGiftFill } from 'react-icons/bs';
 import {  FaUserAlt } from 'react-icons/fa';
 import { CgPlayListCheck} from 'react-icons/cg';

const Footer=()=>{

    return (
<>
<Box display={{base:"none" ,lg:"block"}}>
<Flex bg="#e9e9e9" color="black" pt={5} justify={"center"} gap={20}  >
    
<List spacing={3}>
<Text as="b">All Categories</Text>
<ListItem>Grocery</ListItem>
<ListItem>Electronics</ListItem>
<ListItem>Fashion</ListItem>
<ListItem>Beauty</ListItem>
<ListItem>Home & Kitchen</ListItem>
<ListItem>Premium Fruits</ListItem>
<ListItem>Books</ListItem>
<ListItem>Furniture</ListItem>
</List>

<List spacing={3}>
<Text as="b" >All Categories</Text>
<ListItem>Grocery</ListItem>
<ListItem>Electronics</ListItem>
<ListItem>Fashion</ListItem>
<ListItem>Beauty</ListItem>
<ListItem>Home & Kitchen</ListItem>
<ListItem>Premium Fruits</ListItem>
<ListItem>Books</ListItem>
<ListItem>Furniture</ListItem>
</List>

<List spacing={3}>
<Text as="b">All Categories</Text>
<ListItem>Grocery</ListItem>
<ListItem>Electronics</ListItem>
<ListItem>Fashion</ListItem>
<ListItem>Beauty</ListItem>
<ListItem>Home & Kitchen</ListItem>
<ListItem>Premium Fruits</ListItem>
<ListItem>Books</ListItem>
<ListItem>Furniture</ListItem>
</List>

<List spacing={3}>
<Text as="b">All Categories</Text>
<ListItem>Grocery</ListItem>
<ListItem>Electronics</ListItem>
<ListItem>Fashion</ListItem>
<ListItem>Beauty</ListItem>
<ListItem>Home & Kitchen</ListItem>
<ListItem>Premium Fruits</ListItem>
<ListItem>Books</ListItem>
<ListItem>Furniture</ListItem>
</List>

<Box w={"25%"} >
    <Text fontSize={"4xl"}as="b" >Contact Us</Text>
    <Text mt={5}>
    WhatsApp us: 70003 70003
Call us: 1800 890 1222
8:00 AM to 8:00 PM, 365 days
Please note that you are accessing the BETA version of jiomart.com
Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@jiomart.com
    </Text>
</Box>
<hr style={{color:"black"}} mb={5}/>


</Flex>

<Flex  h={"50px"} align={"center"} justify={"center"} justifyContent={"space-between"} fontSize={13} borderTop={"1px solid black"} p={5} bg="#e9e9e9" color={"black"}>
    <Text>© 2023 All rights reserved. Reliance Retail Ltd.</Text>
    <Text>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</Text>
</Flex>
</Box>


{/* footer for mobile  */}
<Box display={{base:"block",lg:"none"}}  position={"sticky"} bottom="0px" bg="white" zIndex="3000" h='46px'>

<Flex align={"center"} justify={"center"} h={"45px"} gap={7} >
  
  <Box justifyContent="center" alignItems="center" display={"flex"} flexDirection={"column"} >
    <AiFillHome/>
    <Text textAlign="center">Home</Text>
  </Box>

  <Box justifyContent="center" alignItems="center"display={"flex"} flexDirection={"column"} >
    <CgPlayListCheck/>
    <Text>Category</Text>
  </Box>

  <Box justifyContent="center" alignItems="center" display={"flex"} flexDirection={"column"}>
    <FaUserAlt/>
    <Text>Acount</Text>
  </Box>

  <Box justifyContent="center" alignItems="center"display={"flex"} flexDirection={"column"} >
    <AiFillHeart/>
    <Text>Wishlist</Text>
  </Box>

  <Box justifyContent="center" alignItems="center"display={"flex"} flexDirection={"column"} >
    <BsFillBoxFill/>
    <Text>Order</Text>
  </Box>

</Flex >
</Box>

</>
    );
}

export default Footer;