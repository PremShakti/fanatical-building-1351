
import Cartpageforcartselectpage from './cartpageforCartselectpage'
import { SimpleGrid } from '@chakra-ui/react';
import { useState,useEffect } from 'react';





const Cartseletpage=()=>{

    const [data,setdata]=useState([]);


 
    
    useEffect(()=>{
        fetch("https://masaiproject.onrender.com/selectdata")
        .then((res)=>res.json())
        .then((data)=>{
            setdata(data)
        })
    
    
    },[])
const dataof=data.map((e)=>(
    <Cartpageforcartselectpage {...e}/>
))
console.log(data)
    return(
<>
<SimpleGrid columns={{base:"2",lg:"4"}} spacing={2}>
{dataof}
</SimpleGrid>

</>
    );
}

export default Cartseletpage;