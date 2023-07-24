import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthStack from '../Authorize/AuthStack';
import AppStack from '../Authorize/AppStack';
import {useDispatch, useSelector} from "react-redux"


function AppNav() {
  const state = useSelector((state) => state.users)
  const dispatch = useDispatch()
  console.log(state)
  // useEffect(() => {
  //   // getData()
  //   localStorage.setItem("user", JSON.stringify(initialState));

  // }, [initialState]);

  return (
    <Routes>
      {/* Render AuthStack when the user is not logged in */}
      {!state.user ? <Route path="/*" element={<AuthStack />} /> : null}
      {/* Render AppStack when the user is logged in */}
      {state.user ? <Route path="/*" element={<AppStack user={state} />} /> : null}
      {/* Add a default route to handle other URLs */}
      <Route path="/*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
}

export default AppNav;
