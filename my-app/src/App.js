import logo from './logo.svg';
import './App.css';
import { Flex, Box, Image, Text, Input } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';


function App() {
  return (
    <>
      <Flex align="center" h="80px" bg="#0078ad" color="white">

        <Flex w="50%" border="1px solid white" align="center">
          <Box border="1px solid red" w="50px" h="50px" alignItems="center" justifyContent="center" display="flex" borderRadius="50%">
            <HamburgerIcon fontSize="22px" color="white" />
          </Box>

          <Box w="150px" border="1px solid">
            <Image border="1px solid red" w="100%" src="https://lh6.googleusercontent.com/psu-EgWu8Zxpx57ZosGZmc71301f72dvCho6LIMwq9ETpZhFLcTvvX7rZmuOu-L86co=w2400" />
          </Box>
          <Flex border="1px solid pink" align="center">
            <MdLocationPin fontSize="17px" />
            <Text>
              Deliver to Mumbai 400020</Text>
          </Flex>

        </Flex>


        <Flex w="50%" border="1px solid white">
          <Flex w="49%" align="center"  bg="white"  border="1px solid red" borderRadius="20px" paddingLeft="10px" h={10}>
            <AiOutlineSearch fontSize="30px" color='grey' />
            < Input border="none" outline={"none"} h='90%' w="70%" placeholder="Search PS mart"  />
            <HamburgerIcon color={"grey"} marginLeft={7} fontSize={20}/>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
