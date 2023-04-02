import Navbar from './component/navbar'
import Sidebar from './component/sidebar'
import Body from './component/body';
import Footer from './component/footer';
import Allroots from './component/allroots'
import { useState } from 'react';




const App=()=>{
  const [sidebarTogel,setsidebar]=useState(false);

  const toggel =(e)=>{
     setsidebar(e)
    }
  return(
    <>
<Navbar navbar={toggel} val={sidebarTogel}/>
    <Sidebar navbar={toggel} val={sidebarTogel}/>
    <Allroots/>
<Footer/>
    </>
  );
}

export default App;