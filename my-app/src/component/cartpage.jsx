import { Box,Image ,Text,Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";



const Cart=({image,name,price,id,description,Manufacturer,ManufacturerAddress,ManufacturerEmail,ManufacturerWebsite})=>{
let obj={
    
        id: id,
        image: image,
        price: price,
        name: name,
        description: description,
        Manufacturer: Manufacturer,
        ManufacturerAddress: ManufacturerAddress,
        ManufacturerEmail: ManufacturerEmail,
        ManufacturerWebsite: ManufacturerWebsite
        
}
const POst=()=>{
    
    fetch("https://masaiproject.onrender.com/selectdata", {
    method: "POST",
    body: JSON.stringify(obj),
    
    headers: {
        "Content-type": "application/json"
    }
})
}



    return(
        <>
     <Box  boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"} p={2} borderRadius={"10px"} >
       <Link to={`/singlepage/${id}`} ><Image src={image} /></Link> 
        <Text>{name}</Text>
        <Text>Rs {price}</Text>
        <Button onClick={POst}>Add to cart</Button>
     </Box>
        </>
    );
}

export default Cart;