import { Flex, Box, Text,ListItem,List,ListIcon,Image } from "@chakra-ui/react";
import { AiOutlineLeft,AiFillHome,AiFillHeart,AiFillCreditCard } from 'react-icons/ai';

import { BsFillBoxFill,BsGiftFill } from 'react-icons/bs';
import { CgPlayListCheck } from 'react-icons/cg';
import { RiWallet3Fill,RiCoupon3Fill } from 'react-icons/ri';
import { MdLocalOffer,MdPhoneCallback,MdNotificationImportant } from 'react-icons/md';
import { FaQuestionCircle,FaUsers,FaMapMarked } from 'react-icons/fa';
import Signbtn from './signinBtn'
import { useState } from "react";



const Sidebar = (props) => {
    const {val,navbar}=props
    const togbtn=()=>{
        if(val===false){
          navbar(true)
        }else if(val===true){
          navbar(false)
        }
      }
    
    return (
        <>
        
            
            <Box w={{ base: "100%", lg: "30%" }}  position={"fixed"} top={0} left={0} transform={ val?{base:"translateX(-100%)",lg:"-30%"}:{base:"translateX(0%)", lg:"0%"}}  transition=" transform 250ms ease-in-out" zIndex={"400000"} >

                <Flex bg="#0078ad" h={{ base: "70px", lg: "80px" }} width="100%" align="center" justify="center" gap={"50%"} position="absolute" top="0px" >

                    <Flex align={"center"} justify="center" color={"white"}  >
                        <AiOutlineLeft fontSize={"20px"} onClick={togbtn} />
                        <Text>Hello!</Text>
                    </Flex>

                    <Signbtn />

                </Flex>

                <List spacing={3}  bg={"white"} >
                    <ListItem borderBottom="1px solid" m={"20px"} p="8px" >
                        
                        <ListIcon as={AiFillHome}  color='#0078ad' fontSize={25}  />
                       Shop By Category
                    </ListItem >

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={BsFillBoxFill} color='#0078ad' fontSize={25} />
                       My Orders
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={CgPlayListCheck} color='#0078ad' fontSize={25} />
                  My List
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={AiFillHeart} color='#0078ad' fontSize={25} />
                       Wishlist
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={RiWallet3Fill} color='#0078ad' fontSize={25} />
                     PSmart Wallet
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={MdLocalOffer} color='#0078ad' fontSize={25} />
                       Offer Store
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={RiCoupon3Fill} color='#0078ad' fontSize={25} />
                       Coupon Store
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={BsGiftFill} color='#0078ad' fontSize={25} />
                       Gift Store
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={AiFillCreditCard} color='#0078ad' fontSize={25} />
                    Psmart Gift Card
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={FaQuestionCircle} color='#0078ad' fontSize={25} />
                      FAQs/Need Help
                    </ListItem>

                  

                      <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={FaUsers} color='#0078ad' fontSize={25} />
                       About Us
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={MdPhoneCallback} color='#0078ad' fontSize={25} />
                       Contact Us
                    </ListItem>

                    <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={FaMapMarked} color='#0078ad' fontSize={25} />
                       Guide
                    </ListItem>

                      <ListItem borderBottom="1px solid" m={"20px"} p="8px"  >
                        <ListIcon as={MdNotificationImportant} color='#0078ad' fontSize={25} />
                      Caution Notice
                    </ListItem>

                </List>

            <Image src="https://lh4.googleusercontent.com/8T3czh7Xil3Adz8GWVHpS4rG2-pjO7SopudIybIa-bnjVPVnkB34vQiG0Q-xhxwm5V0=w2400" alt="notwork issu" w="100%" />


            </Box>
        </>
    );
}

export default Sidebar;