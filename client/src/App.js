import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { NavBar } from "./components";
import { motion } from 'framer-motion';


const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
   
    <div>
    <NavBar/>
    <motion.div initial="hidden" exit="pageExit" animate="visible" variants={{
      hidden: {
          y:100,
          opacity:0
      },
      visible:{
          y:0,
          opacity:1,
          transition:{
            type: "spring",
              
              ease: "easeIn", duration: 1
          },
   
      },
      pageExit:{
            opacity:0,
            backgroundColor: '#232323'
        
          }
  }}>
    <Route path='/' component={Home} exact />
    <Route path='/login' component={Login} exact /> 
    <Route path='/register' component={Register} exact /> 
    </motion.div>

  </div>
  );
}


export default App;
