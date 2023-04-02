
import { Button,Text,Image,Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Cartpageforcartselectpage=({image,name,price,id})=>{




const Delete=()=>{
    fetch(`https://masaiproject.onrender.com/selectdata/${id}`,{method: 'DELETE'})
}
    return(
<>
<Box  boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"} p={2} borderRadius={"10px"} >
       <Link to={`/singlepage/${id}`} ><Image src={image} /></Link> 
        <Text>{name}</Text>
        <Text>Rs {price}</Text>
        <Button >Buy</Button>
        <Button onClick={Delete}>Delete</Button>
     </Box>
</>
    );
}
export default Cartpageforcartselectpage;
