import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";
import Single from "./pages/single/single";
import Single2 from "./pages/single/single2";
import Single3 from "./pages/single/single3";
import axios from "axios";

import {createTheme, ThemeProvider } from "@material-ui/core"
import { green } from "@material-ui/core/colors"



const theme = createTheme({
  palette: {
    primary:{
      main: '#47bb5e',
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
  }
})

function App() {

  // const [user, setUser] = React.useState({})
    
  const getUser = async()=>{
      try{
          const url = `${'http://localhost:3000'}/auth/login/success`
          const {data} = await axios.get(url, {withCredentials: true})
          console.log(data.user)

      }catch(err){
          console.log(err)
      }
  }

  React.useEffect(()=>{
      getUser()
  }, [])


  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/" element={ <Home /> } />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </div>
  );
}

export default App;
