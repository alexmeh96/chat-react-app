import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import {AuthContext} from "../context";
import {Navigate} from "react-router";
import Register from "../pages/Register";

const RouterApp = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    isAuth
      ?
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="*"
          element={<Navigate to="/"/>}
        />
      </Routes>
      :
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route
          path="*"
          element={<Navigate to="/login"/>}
        />
      </Routes>
  );
};

export default RouterApp;
