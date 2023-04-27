import React, {useContext, useState, useEffect, useLayoutEffect} from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/signup/signin";
import Home from "./pages/home/home";
import Single from "./pages/single/single";
import Single2 from "./pages/single/single2";
import Single3 from "./pages/single/single3";
import VerifyMail from "./pages/verify-mail/verify-mail";
import Layout from "./components/layout/layout";
import Welcome from "./pages/welcome/welcome"
import {authContext} from "./context/auth-context"
import {createTheme, ThemeProvider } from "@material-ui/core"
import axios from "axios";
import Form from "./pages/form/form";


/*
=============================================================== 
//* Define MUI Themes
===============================================================
*/
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1020,
      xl: 1536,
    },
  },
  
  palette: {
    primary:{
      main: '#47bb5e',
      backgroundColor: '#272727'
    },
    secondary: {
      main: "#fff"
    },
    neutral: {
      main: "#fc4445"
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  appBoundaries: {
    sizeLight: '0.5rem',
    sizeLight2: '0.8rem',
    sizeRegular: '1rem',
    sizeRegular2: '1.5rem',
    sizeRegular3: '2rem',
    sizeMedium: '3rem',
    sizeBold: '3.5rem',
  }
})


function App() {
  
const { user, setUser, authMethod, setAuthMethod, signInComplete, setSignInComplete } = useContext(authContext)
const [isLoading, setIsLoading] = useState(true)


/*
=============================================================== 
//* Login Status Checker
===============================================================
*/
const isLoggedIn = async()=>{
const emailUrl = `${process.env.REACT_APP_API_URL}/auth/email/success`
const auth0 = `${process.env.REACT_APP_API_URL}/auth/login/success`
  /*
  =============================================================== 
  //**  Email
  ===============================================================
  */
  try{
      const options = {
      url: emailUrl,
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
      },
      withCredentials: true
      };

      const {data} = await axios(options)
      setUser(data.user.auth_id)
      setAuthMethod('email')
      setIsLoading(false)
      return
      }catch(err){
          /*
            =============================================================== 
            //**  0Auth
            ===============================================================
            */
          try{
              const options = {
                  url: auth0,
                  method: 'GET',
                  headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json;charset=UTF-8'
                  },
                  withCredentials: true
              };
          
              const {data} = await axios(options)
      
              setUser(data.user.auth_id)
              setAuthMethod(data.user.provider)
              setIsLoading(false)
              return
          }catch(err){
              setIsLoading(false)
          }
      }
}
useLayoutEffect(()=>{
  isLoggedIn()
}, [])
 


  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout>
                <Routes>
                 <Route exact path='/' element={isLoading ? <h1>Loading</h1> : user ? <Home user={user} authMethod={authMethod}  setSignInComplete={setSignInComplete}/> : <Welcome />} />
                 <Route exact path='/signin' element={user ? <Navigate to='/' /> : <Signin />}/>
                 {/* <Route path="/event" element={ <Single3 /> } /> */}
                  <Route path="/verify" element={ <VerifyMail /> } />
                  <Route path="/complete" element={ <Form /> } />
                </Routes> 
            </Layout>
          </BrowserRouter>
        </ThemeProvider>

    </div>
  );
}

export default App;
