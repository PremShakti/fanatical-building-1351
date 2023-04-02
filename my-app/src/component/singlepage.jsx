import { Flex,Image,Box,Text, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getData=(id)=>{
    return axios.get(`https://masaiproject.onrender.com/data/${id}`)
}

const Singlepage=()=>{
const [data,setData]=useState({})
const val=useParams()
console.log(val.id)

let fetcheddata=async(id)=>{
    try {
        let res=await getData(id);
        setData(res.data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
fetcheddata(val.id);

},[val.id])

console.log(data)
    return(
<>
<Flex p={10} gap={5} flexDirection={{base:"column",lg:"row"}}>
<Image src={data.image} alt='error' w={{base:"99%", lg:"40%"}}  boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"} />
<Box w={{base:"99%", lg:"50%"}}  boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"} p={5} >
    <Text fontSize={"3xl"}>{data.brand}</Text>
    <Text fontSize={"3xl"}>{data.name}</Text>
    <Text fontSize={"2xl"} mb={5}>₹ {data.price}</Text>
 
  <Text as="b" fontSize={"2xl"}>Description</Text>
    <Text>{data.description}</Text>
    <Text as="b" >Manufacturer</Text>
    <Text  >{data.Manufacturer}</Text>
    <Text as="b" mt={"20px"}>Manufacturer Address</Text>
    <Text> {data.ManufacturerAddress}</Text>
    <Text as="b">Manufacturer Email  </Text>
    <Text>{data.ManufacturerEmail}</Text>

    <Button  margin={"auto"} display={"block"} w={100} >Buy</Button>
</Box>

</Flex>


</>
    );
}

export default Singlepage;