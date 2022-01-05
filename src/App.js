import React, {useState, useEffect} from "react";

import Menu from "./components/menu/Menu";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import ChatSection from "./components/chatSection/ChatSection";
import {DialogContext, AuthContext} from "./context";

import RouterApp from "./components/RouterApp";
import {BrowserRouter} from "react-router-dom";

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [currentDialog, setCurrentDialog] = useState({})


  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])


  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <DialogContext.Provider value={{
        currentDialog,
        setCurrentDialog
      }}>
        <BrowserRouter>
          <RouterApp/>
        </BrowserRouter>
      </DialogContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
