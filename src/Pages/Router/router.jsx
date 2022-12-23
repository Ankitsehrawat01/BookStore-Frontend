
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import ForgetPassword from '../ForgetPassword/ForgetPassword'
import Lander from '../Lander/Lander'
import ResetPassword from '../ResetPassword/ResetPassword'


function Router1() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Lander />} />
                    <Route path='/forgetpassword' element={<ForgetPassword />} />
                    <Route path='/resetpassword' element={<ResetPassword />} />
                    <Route path ='/dashboard' element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Router1
