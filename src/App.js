import React from 'react'
import ChatRoom from './component/ChatRoom'
import {Route,Routes} from "react-router-dom";
import Login from './auth/login'
const App = () => {
  return (
    
    <div>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/chatroom' element={<ChatRoom/>}></Route>
    </Routes>
     
   

    </div>  );
}

export default App;
