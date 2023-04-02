import { Route,Routes } from "react-router-dom";
import Body from "./body";
import Productpage from "./productpage";
import Cartseletpage from './cartselectpage'
import Singlepage from './singlepage'

const Allroots=()=>{

    return(
<>
<Routes>
<Route path="/" element={<Body/>} />
<Route path="/productpage" element={<Productpage/>} />
<Route path="/singlepage/:id" element={<Singlepage/>} />
<Route path="/cartpage" element={<Cartseletpage/>} />
</Routes>

</>
    );
}

export default Allroots;