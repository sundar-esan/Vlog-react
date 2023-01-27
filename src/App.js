import Header from "./components/Header";
import React, { useEffect } from "react";
import Vlogs from "./components/Vlogs";
import Auth from "./components/Auth";
import { Route, Routes } from "react-router-dom";
import UserVlogs from "./components/UserVlogs";
import VlogDetail from "./components/VlogDetail";
import AddVlog from "./components/AddVlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {
     const dispatch = useDispatch();
     const isLoggedIn = useSelector(state => state.isLoggedIn);
     console.log(isLoggedIn);
     useEffect(() => {

          if(localStorage.getItem("userId")) {
               dispatch(authActions.login())
          }
      },[dispatch])
  return (
  <React.Fragment>
       <header>
            <Header />
       </header>
       <main>
        <Routes>
        {  !isLoggedIn ?   <Route path="/auth" element={ <Auth />} /> : <>
            <Route path="/vlogs" element={ <Vlogs />} />
            <Route path="/myVlogs" element={ <UserVlogs />} />
            <Route path="/myVlogs/:id" element={ <VlogDetail />} />
            <Route path="/vlogs/add" element={ <AddVlog />} /> </>}
          
        </Routes>
       </main>
  </React.Fragment>

  );
}

export default App;
