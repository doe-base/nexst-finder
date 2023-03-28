import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/signup/signin";
import Home from "./pages/home/home";
import Single from "./pages/single/single";
import Single2 from "./pages/single/single2";
import Single3 from "./pages/single/single3";
import VerifyMail from "./pages/verify-mail/verify-mail";
import Layout from "./components/layout/layout";

import axios from "axios";
import {createTheme, ThemeProvider } from "@material-ui/core"
import { green } from "@material-ui/core/colors"



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
    }
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

  // const [user, setUser] = React.useState({})
    
  const getUser = async()=>{
      try{
          const url = `${process.env.REACT_APP_API_URL}/auth/login/success`
          const options = {
            url: url,
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            },
            withCredentials: true
          }
          const {data} = await axios(options)
          console.log(data.user)

      }catch(err){
          console.log(err)
      }
  }
  const getUser2 = async()=>{
    const url = `${process.env.REACT_APP_API_URL}/auth/email/success`
      try{
          const options = {
            url: url,
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            },
            withCredentials: true
          };

          const {data} = await axios(options)
          console.log(data.user)

      }catch(err){
          console.log(err)
      }
  }

  React.useEffect(()=>{
      getUser()
      getUser2()
  }, [])


  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout>
                <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/signin" element={ <Signin /> } />
                  <Route path="/event" element={ <Single3 /> } />
                  <Route path="/verify" element={ <VerifyMail /> } />
                </Routes> 
            </Layout>
          </BrowserRouter>
        </ThemeProvider>

    </div>
  );
}

export default App;
