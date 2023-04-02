
 import{Box,Image,SimpleGrid} from '@chakra-ui/react';
 import Cart from './cartpage';
import Axios from 'axios';
import { useState,useEffect } from 'react';

 const getData=()=>{
    return Axios.get("https://masaiproject.onrender.com/data")
    
 }

const Productpage=()=>{
const [data,setdata]=useState([]);


const fetcheddata=async ()=>{
    try {
        
let data=await getData();

setdata(data.data)

    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    fetcheddata()


},[])

const cardcomp=data.map((e,i)=>(
<Cart {...e} />
))

    return(
<>

 <Box w={{base:"99%", lg:"70%"}} margin={"auto"} >
<Image src='https://www.jiomart.com/images/category/2/groceries-20230228.jpeg' alt='error' borderRadius={10} mt={10} mb={10}/>

<SimpleGrid columns={{base:"2",lg:"4"}} spacing={2}>

{cardcomp}
</SimpleGrid>


 </Box>


</>
    );
}

export default Productpage;