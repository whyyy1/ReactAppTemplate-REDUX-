import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppNavBar from '../Navigation/appNavBar';
import Home from '../pages/AppPages/Home';
import Profile from '../pages/AppPages/Profile';
import Activity from '../pages/AppPages/Activity';
import userData from './userData'
import { useSelector } from 'react-redux';

function AppStack({user}) {
  // const dispatch = useDispatch()
  console.log(user)
  // const { id: userId } = state.user; // Destructure the userId from the state.user object

//  let data = state.user

  // Remove the useEffect hook, it's not necessary in this case

  return (
    <>
      <h1>AppStack</h1>
      <AppNavBar userId={'hey'} data={userData}/> {/* Pass the userId to AppNavBar */}
      <Routes>
        {/* Remove the string concatenation, and use parameter syntax */}
        <Route path="/home/:userId" element={<Home data={userData}/>} />
        <Route path="/profile/:userId" element={<Profile data={userData} />} />
        <Route path="/activity/:userId" element={<Activity data={userData} />} />
      </Routes>
    </>
  );
}

export default AppStack;
