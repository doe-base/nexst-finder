import React, { useEffect, useState } from "react";
import GeneralInfoForm from "../../components/forms/GeneralInfoForm";
import AdditionalInfoForm from "../../components/forms/AdditionalInfoForm";
import {Container} from "@material-ui/core";
import styleFunctions from "./pages-styles/signup-styles";
import {TextField} from "@material-ui/core";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';


export default function Signin() {
  const classes = styleFunctions.useStyles();
  const textFieldClasses = styleFunctions.styles()
  const [userEmail, setUserEmail] = useState('')
  const [isFieldEmpty, setIsFieldEmpty] = useState(false)
  const [emailSigninError, setEmailSigninError] = useState(false)
  let navigate = useNavigate();

  const handleGoogle =()=>{
   window.open(
    `${process.env.REACT_APP_API_URL}/auth/google`, "_self"
   )
  }
  const handleFacebook =()=>{
   window.open(
    `${process.env.REACT_APP_API_URL}/auth/facebook`, "_self"
   )
  }

  const handleSubmitEmail =(e)=>{
    e.preventDefault()
    setEmailSigninError(false)

    if(userEmail == ''){
      setIsFieldEmpty(true)
    }else{
      setIsFieldEmpty(false)

      const url = `${process.env.REACT_APP_API_URL}/auth/email`
      const options = {
        url: url,
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          UserEmail: userEmail
        }
      };
      axios(options)
      .then((response) => {
        setEmailSigninError(false);
        navigate('/verify')
      })
      .catch((error) => {
        console.log(error);
        setEmailSigninError(true);
      });
    }
  }


  return (
    <Container className={classes.root}>
      <main className={classes.main}>

        <section className={classes.centralize}>
          <div className={classes.hold}>
            <h3 className={classes.h3}>Enter your email</h3>
          </div>

          {isFieldEmpty ? <p className={classes.emptyField}>Field is empty</p> : null}
          {emailSigninError ? <p className={classes.emptyField}>Something went wrong while attempting to signin. Please try again. <a href="" style={{color: 'inherit'}}>more about error?</a></p> : null}

          <form onSubmit={handleSubmitEmail}>
            <div className={classes.hold}>
              <TextField 
                id="outlined-basic" 
                label="Email address" 
                type="email" 
                variant="outlined" 
                fullWidth 
                onChange={(e)=> setUserEmail(e.currentTarget.value)} 
                InputLabelProps={{
                classes: {
                  root: textFieldClasses.cssLabel,
                  focused: textFieldClasses.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: textFieldClasses.cssOutlinedInput,
                  focused: textFieldClasses.cssFocused,
                  notchedOutline: textFieldClasses.notchedOutline,
                }}}
            />
            </div>
            <div className={classes.hold}>
              <button className={classes.fwPillBtn} type="submit">Sign in</button>
            </div>
          </form>

          <div className={classes.or}>
            <div className={classes.line}></div>
            <p className={classes.orP}>OR</p>
            <div className={classes.line}></div>
          </div>

            <div className={classes.hold}>
              <button className={classes.fwPillIconBtn} onClick={handleGoogle}><div> <img src="./Google__G__Logo.svg.png" alt="" className={classes.buttonsImg}/></div>
              Sign in with Google</button>
            </div>
          
          <div className={classes.hold}>
            <button className={classes.fwPillIconBtn} onClick={handleFacebook}><div> <img src="./fb.png" alt="" className={classes.buttonsImg}/></div>
            Sign in with Facebook</button>
          </div>
        </section>

        <p className={classes.tcp}>If you are creating a new account, <a href="" className={classes.tcpa}>Terms & Conditions</a> and <a href="" className={classes.tcpa}>Privacy Policy will apply</a></p>
      </main>
    </Container>
  );
}












