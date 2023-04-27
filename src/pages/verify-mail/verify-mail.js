import { Container } from "@material-ui/core";
import React, { useEffect, useRef, useState, useContext } from "react";
import useStyles from "./page-styles/verify-mail-styles"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ReactCodeInput from 'react-verification-code-input';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import {authContext} from "../../context/auth-context"

export default function VerifyMail(){
    const classes = useStyles()
    const navigate = useNavigate()
    const {setUser, setAuthMethod, setSignInComplete } = useContext(authContext)

    // The state for our timer
	const [timer, setTimer] = useState('30');
    const [isResend, setIsResend] = useState(false)

    const Ref = useRef(null);

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 30);
		return {
			total, seconds
		};
	}
	const startTimer = (e) => {
		let { total, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
			 (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}
	const clearTimer = (e) => {
		setTimer('30');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}
	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 180);
		return deadline;
	}
    useEffect(() => {
        setIsResend(false)
		clearTimer(getDeadTime());
	}, []);
    useEffect(()=>{
        if(timer === "00"){
            setIsResend(true)
        }
    }, [timer])
    const handleResendRequest = () => {
        setIsResend(false)
        clearTimer(getDeadTime());
    }


   
    const handleCodeSubmit = (e)=>{
        try{
            const url = `${process.env.REACT_APP_API_URL}/auth/email/verify-code`
            const options = {
                url: url,
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                credentials: 'include', 
                withCredentials: true,
                data: {
                    Code: e
                }
              };

            axios(options)
            .then(function (response) {
                setSignInComplete(response.data.user.complete);
                setUser(response.data.user.auth_id)
                setAuthMethod('email')
                navigate('/')
              })
        }catch(error){
            console.error(error)
        }
    }


return(
        <Container>
            <div className={classes.firstHolder}>
                <div><ChevronLeftIcon className={classes.goBack}/></div>
                <h3 className={classes.firstText}>Enter code</h3>
            </div>
            <div className={classes.secondHolder}>
                <p className={classes.secondText}>A code was sent to <br /> <strong className={classes.secondStrong}>idokoidogwu@gmail.com</strong> <br /><span className={classes.secondSpan}>Edit email address</span></p>
            </div>
            <div className={classes.thirdHolder}>
                <form className={classes.form}>
                    <div className={classes.inputsHolder}>
                        {/* {
                            inputFields.map(item => {
                                return (
                                    <input key={item.id} type="number" className={classes.inputs} id={item.id} disabled={!item.isActive} onChange={(e)=> handleInputChange(e)} ref={item.ref}/>
                                )
                            })
                        } */}
                        <ReactCodeInput className={classes.inputsField} fields={4} type='number' onComplete={handleCodeSubmit}/>
                    </div>
                </form>  
            </div>
            <div className={classes.fouthHolder}>
                {isResend ? <p onClick={isResend ? handleResendRequest : null} className={classes.secondSpan}>Resend code</p> : <p className={classes.secondText}>Resend code in <strong style={{color: '#fff'}}>{timer}</strong></p>} 
                
            </div>
        </Container>
    )
}