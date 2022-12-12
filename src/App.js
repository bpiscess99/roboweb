import './common.css'
import './responsive.css'
import Header from './Component/Header/Header';
import RoboticsLife from './Component/RoboticsLife/RoboticsLife';
import OurRobot from './Component/OurRobot/OurRobot';
import Develop from './Component/Develop/Develop';
import MultipleItems from './Component/News/News';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import { useState } from 'react';
import Items from './Component/Footer/Footer.jsx';


function App() {
 const [ListItem] = useState(Items)
 
  return (
   <>
   <Header/>
   <RoboticsLife/>
   <OurRobot/>
   <Develop/>
   <MultipleItems/>
   <Contact/>
   <Footer listitem = {ListItem}/>
   </>
  );
}

export default App;
