import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react'
import TrainerDashboard from './pages/trainer/TrainerDashboard'
import UserDashboard from './pages/user/UserDashboard'

import Skill from './pages/trainer/Skill'
import ChangePassword from './pages/trainer/ChangePassword'
import Profile from './pages/trainer/Profile'
import Content from './pages/trainer/Content'
import UserProfile from './pages/user/UserProfile'
// import Logout from './pages/trainer/Logout'
import Handshake from './pages/trainer/Handshake'
import Course from './pages/user/Course'

const Login = lazy(() => import('./pages/public/Login'))
const Register = lazy(() => import('./pages/public/Register'))

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Suspense fallback={<div>......loading</div>}>
          <Routes>
            <Route path='/' element={<Login />}> </Route>
            <Route path='/register' element={<Register />}></Route>
            {/* admin Dash board start */}
            <Route path='/admindashboard'></Route>
            {/*admin Dash board end  */}

            {/* trainer board start */}
            <Route path='/trainerdashboard' element={<TrainerDashboard />}>
              <Route path='Skill' element={<Skill />}></Route>
              <Route path='changepassword' element={<ChangePassword />}></Route>
              <Route path='trainerprofile' element={<Profile />}></Route>
              <Route path='content' element={<Content />}></Route>
              <Route path='handshake' element={<Handshake/>}></Route>
            
            </Route>
            {/* trainer Dash board start */}

            {/* user Dash board start */}
            <Route path='/userdashboard' element={<UserDashboard />}>
              <Route path='userprofile' element={<UserProfile />}></Route>
              <Route path='changepassword' element={<ChangePassword/>}></Route>
                 <Route path='handshake' element={<Handshake/>}></Route>
                 <Route path='course' element={<Course/>}></Route>
            </Route>
            {/* user Dash board end */}

          </Routes>
        </Suspense>
      </BrowserRouter>



    </>
  )
}

export default App