import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Login-Page.jsx";
import SignUpPage from "./Pages/SignUp-Page.jsx";
import OtpPages from "./Pages/Otp-pages.jsx";
import ProfilePage from "./Pages/Profile-page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/create-account" element={<SignUpPage/>}/>
                <Route path="/verifyOTP" element={<OtpPages/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;