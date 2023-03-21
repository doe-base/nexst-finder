import React, { useEffect } from "react";
import GeneralInfoForm from "../../components/forms/GeneralInfoForm";
import AdditionalInfoForm from "../../components/forms/AdditionalInfoForm";
import {Container} from "@material-ui/core";
import useStyles from "./pages-styles/signup-styles";
import {TextField} from "@material-ui/core";



export default function Signup() {
  const classes = useStyles();
  const url = "http://localhost:3000/auth/google"

  const handleGoogle =()=>{
   window.open(
    `${'http://localhost:3000'}/auth/google`, "_self"
   )
  }


  return (
    <Container className={classes.root}>
      <main className={classes.main}>

        <section className={classes.centralize}>
          <div className={classes.hold}>
            <h3 className={classes.h3}>Enter your email</h3>
          </div>
          
          <div className={classes.hold}>
            <TextField id="outlined-basic" label="Email address" variant="outlined" fullWidth/>
          </div>

          <div className={classes.hold}>
            <button className={classes.fwPillBtn}>Sign in</button>
          </div>

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
            <button className={classes.fwPillIconBtn} type="submit"><div> <img src="./fb.png" alt="" className={classes.buttonsImg}/></div>
            Sign in with Facebook</button>
          </div>
        </section>

        <p className={classes.tcp}>If you are creating a new account, <a href="" className={classes.tcpa}>Terms & Conditions</a> and <a href="" className={classes.tcpa}>Privacy Policy will apply</a></p>
      </main>
    </Container>
  );
}












