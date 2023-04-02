

import { Flex, Box, Image, Text, UnorderedList, List, ListItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { useReducer, useState } from 'react';
import Signbtn from './signinBtn'
import { useNavigate } from "react-router-dom";


const initioalState = {
  hover1: false,
  hover2: false,
  hover3: false,
  hover4: false,
  hover5: false,
  hover6: false,
  hover7: false,
  hover8: false
}

const reduser = (state, action) => {
  switch (action.type) {
    case "hover1": {
      return {
        hover1: action.payload
      }
    }

    case "hover2": {
      return {
        hover2: action.payload
      }
    }

    case "hover3": {
      return {
        hover3: action.payload
      }
    }

    case "hover4": {
      return {
        hover4: action.payload
      }
    }

    case "hover5": {
      return {
        hover5: action.payload
      }
    }

    case "hover6": {
      return {
        hover6: action.payload
      }
    }

    case "hover7": {
      return {
        hover7: action.payload
      }
    }

    case "hover8": {
      return {
        hover8: action.payload
      }
    }



    default:
      return state;
  }

}

function Navbar(props) {
  const navigate = useNavigate();
  const {val,navbar}=props
  const [state, dispatch] = useReducer(reduser, initioalState);
  const [hover, setHover] = useState(false);
  const inter = (e) => {
    setHover(true)
  }

  const out = (e) => {
    setHover(false)
  }
  const { hover1, hover2, hover3, hover4, hover5, hover6, hover7, hover8 } = state
  const dblock = {
    base: "none",
    lg: "block"
  }
  const dflex = {
    base: "none",
    sm: "flex"
  }

  const togbtn=()=>{
    if(val===false){
      navbar(true)
    }else if(val===true){
      navbar(false)
    }
  }
const naviga=()=>{
 navigate("/")
}
  return (
    <>
    <Box display={dblock} position={"sticky"} top={"0px"} zIndex={"300000"}>
      <Box display={dblock}  >
        <Flex align="center" h="80px" bg="#0078ad" color="white">

          <Flex w="50%" align="center" h={"90%"} >

            <Box w="50px" h="50px" alignItems="center" justifyContent="center" display="flex" borderRadius="50%" marginLeft={"7%"}
              _hover={{ bg: "#141414" }}
            >
              <HamburgerIcon fontSize="22px" color="white" onClick={togbtn} />
            </Box>

            <Box display={{ base: "none", sm: "flex" }} w="150px" alignItems={"center"} justifyContent="center" h="70%" borderRadius={"20px"} marginLeft="4%"
              _hover={{ bg: "#141414" }}  >
              <Image onClick={naviga} w="80%" src="https://lh6.googleusercontent.com/psu-EgWu8Zxpx57ZosGZmc71301f72dvCho6LIMwq9ETpZhFLcTvvX7rZmuOu-L86co=w2400" />
            </Box>

            <Flex align="center" marginLeft={"6%"} justify="center" borderRadius="10px" w={"35%"} h={"35%"}
              _hover={{ bg: "#141414" }}
            >
              <MdLocationPin fontSize="17px" />
              <Text>
                Deliver to Mumbai 400020</Text>
            </Flex>


          </Flex>


          <Flex w="50%" align="center" h={"90%"}>
            <Flex w="49%" align="center" bg="white" borderRadius="20px" paddingLeft="10px" h={10} marginLeft="10%">
              <AiOutlineSearch fontSize="30px" color='grey' />
              {/* < Input color={"black"} h='90%' w="70%" placeholder="Search PS mart"  /> */}
              <input type="search" placeholder='PS mart Search' style={{ color: "black", border: "none", outline: "none", marginLeft: "10px" }} />
              <HamburgerIcon color={"grey"} border="none" outline="0px" marginLeft={7} fontSize={20} />
            </Flex>


            <Box w="50px" h="50px" alignItems="center" justifyContent="center" display="flex" borderRadius="50%" marginLeft={"1%"}
              _hover={{ bg: "#141414" }}>
                <Link to="/cartpage"><FaShoppingCart fontSize="22px" color="white" /></Link>
              
            </Box>

            {/* signinbutton */}

            <Signbtn />

          </Flex>
        </Flex>
      </Box>

      {/* Dropdown menue */}

      <Box display={dblock} >
        <Flex bg={"#0c5273"} color="white" h={8} align="center" justify={"center"} gap={"3%"} fontSize={15}>


          <Box onMouseEnter={() => dispatch({ type: "hover1", payload: true })}
            onMouseLeave={() => dispatch({ type: "hover1", payload: false })}
          >
            <NavLink to="/productpage" >Groceries</NavLink>
            <Box mt={"4px"} borderBottomRightRadius={"10px"} borderBottomLeftRadius={"10px"} overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "grey",
                  borderRadius: '24px',
                },
              }} h={"400px"} bg={"white"} position="absolute" color={"black"} border={"1px solid"} pl="20px" pb={"35px"} pt="20px" pr={"30px"}
              display={hover1 ? "block" : "none"}
            >
              <List spacing={2} fontFamily="sans-serif">
                <ListItem >Fruits & Vegetables</ListItem>
                <ListItem>Snaks & Brand Foods</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
              </List>
            </Box>
          </Box>

          <Box onMouseEnter={() => dispatch({ type: "hover2", payload: true })}
            onMouseLeave={() => dispatch({ type: "hover2", payload: false })}
          >
            <NavLink>Premium Fruits</NavLink>
            <Box mt={"4px"}
              borderBottomRightRadius={"10px"} borderBottomLeftRadius={"10px"} overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "grey",
                  borderRadius: '24px',
                },
              }} h={"400px"}
              bg={"white"} position="absolute" color={"black"} border={"1px solid"} pl="20px" pb={"35px"} pt="20px" pr={"30px"}
              display={hover2 ? "block" : "none"}
            >
              <List spacing={2} fontFamily="JioType,helvetica,arial,sans-serif">
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Snaks & Brand Foods</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
              </List>
            </Box>
          </Box>

          <Box onMouseEnter={() => dispatch({ type: "hover3", payload: true })}
            onMouseLeave={() => dispatch({ type: "hover3", payload: false })}
          >
            <NavLink>Home & Kitchen</NavLink>
            <Box mt={"4px"} borderBottomRightRadius={"10px"} borderBottomLeftRadius={"10px"} overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "grey",
                  borderRadius: '24px',
                },
              }} h={"400px"} bg={"white"} position="absolute" color={"black"} border={"1px solid"} pl="20px" pb={"35px"} pt="20px" pr={"30px"}
              display={hover3 ? "block" : "none"}
            >
              <List spacing={2} fontFamily="JioType,helvetica,arial,sans-serif">
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Snaks & Brand Foods</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
              </List>
            </Box>
          </Box>

          <Box onMouseEnter={() => dispatch({ type: "hover4", payload: true })}
            onMouseLeave={() => dispatch({ type: "hover4", payload: false })}
          >
            <NavLink>Fashion</NavLink>
            <Box mt={"4px"} borderBottomRightRadius={"10px"} borderBottomLeftRadius={"10px"} overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "grey",
                  borderRadius: '24px',
                },
              }} h={"400px"} bg={"white"} position="absolute" color={"black"} border={"1px solid"} pl="20px" pb={"35px"} pt="20px" pr={"30px"}
              display={hover4 ? "block" : "none"}
            >
              <List spacing={2} fontFamily="JioType,helvetica,arial,sans-serif">
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Snaks & Brand Foods</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
              </List>
            </Box>
          </Box>

          <Box onMouseEnter={() => dispatch({ type: "hover5", payload: true })}
            onMouseLeave={() => dispatch({ type: "hover5", payload: false })}
          >
            <NavLink>Electronics</NavLink>
            <Box mt={"4px"} borderBottomRightRadius={"10px"} borderBottomLeftRadius={"10px"} overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "grey",
                  borderRadius: '24px',
                },
              }} h={"400px"} bg={"white"} position="absolute" color={"black"} border={"1px solid"} pl="20px" pb={"35px"} pt="20px" pr={"30px"}
              display={hover5 ? "block" : "none"}
            >
              <List spacing={2} fontFamily="JioType,helvetica,arial,sans-serif">
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Snaks & Brand Foods</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
              </List>
            </Box>
          </Box>

          <Box onMouseEnter={() => dispatch({ type: "hover6", payload: true })}
            onMouseLeave={() => dispatch({ type: "hover6", payload: false })}
          >
            <NavLink>Beauty</NavLink>
            <Box mt={"4px"} borderBottomRightRadius={"10px"} borderBottomLeftRadius={"10px"} overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "grey",
                  borderRadius: '24px',
                },
              }} h={"400px"} bg={"white"} position="absolute" color={"black"} border={"1px solid"} pl="20px" pb={"35px"} pt="20px" pr={"30px"}
              display={hover6 ? "block" : "none"}
            >
              <List spacing={2} fontFamily="JioType,helvetica,arial,sans-serif">
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Snaks & Brand Foods</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
              </List>
            </Box>
          </Box>

          <Box onMouseEnter={() => dispatch({ type: "hover7", payload: true })}
            onMouseLeave={() => dispatch({ type: "hover7", payload: false })}
          >
            <NavLink>Home Improvement</NavLink>
            <Box mt={"4px"} borderBottomRightRadius={"10px"} borderBottomLeftRadius={"10px"} overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "grey",
                  borderRadius: '24px',
                },
              }} h={"400px"} bg={"white"} position="absolute" color={"black"} border={"1px solid"} pl="20px" pb={"35px"} pt="20px" pr={"30px"}
              display={hover7 ? "block" : "none"}
            >
              <List spacing={2} fontFamily="JioType,helvetica,arial,sans-serif">
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Snaks & Brand Foods</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
              </List>
            </Box>
          </Box>

          <Box onMouseEnter={() => dispatch({ type: "hover8", payload: true })}
            onMouseLeave={() => dispatch({ type: "hover8", payload: false })}
          >
            <NavLink>Sports, Toys & Luggage</NavLink>
            <Box mt={"4px"} borderBottomRightRadius={"10px"} borderBottomLeftRadius={"10px"} overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "grey",
                  borderRadius: '24px',
                },
              }} h={"400px"} bg={"white"} position="absolute" color={"black"} border={"1px solid"} pl="20px" pb={"35px"} pt="20px" pr={"30px"}
              display={hover8 ? "block" : "none"}
            >
              <List spacing={2} fontFamily="JioType,helvetica,arial,sans-serif">
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Snaks & Brand Foods</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
                <ListItem>Fruits & Vegetables</ListItem>
              </List>
            </Box>
          </Box>
        </Flex>
      </Box>
      </Box>

      {/* navbar for mobile */}
      <Box display={{ base: "block", lg: "none" }} position="relative">
        <Flex h={"70px"} bg="#0078ad" align={"center"} justify="center" gap={"3%"} >
          <Box w="40px" h="40px" alignItems="center" justifyContent="center" display="flex" borderRadius="50%" 
            _hover={{ bg: "#141414" }}
          >
            <HamburgerIcon fontSize={25} color="white" onClick={togbtn} />
          </Box>

          <Flex w="200px" align="center" bg="white" borderRadius="20px" paddingLeft="10px" h={9} >
            <AiOutlineSearch fontSize="30px" color='grey' />
            
            <input type="search" placeholder='PS mart Search' style={{ color: "black", border: "none", outline: "none", marginLeft: "10px",width:"100px" }}  />
            
          </Flex>


          <Box w="50px" h="50px" alignItems="center" justifyContent="center" display="flex" borderRadius="50%" 
              _hover={{ bg: "#141414" }}>
              <FaShoppingCart fontSize={25} color="white" />
            </Box>
        </Flex>
      </Box>

     

    </>



  );
}

export default Navbar;
