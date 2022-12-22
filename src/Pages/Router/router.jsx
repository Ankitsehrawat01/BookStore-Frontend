import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
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
                </Routes>
            </Router>
        </div>
    )
}

export default Router1
