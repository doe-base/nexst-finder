import { Container } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import useStyles from "./page-styles/verify-mail-styles"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ReactCodeInput from 'react-verification-code-input';
import axios from "axios";

export default function VerifyMail(){
    const classes = useStyles()

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
                // mode: 'same-origin',
                // redirect: 'follow',
                credentials: 'include', 
                withCredentials: true, // Don't forget to specify this if you need cookies
                data: {
                    Code: e
                }
              };

            axios(options)
            .then(function (response) {
                console.log(response.data);
              })
        }catch(error){
            console.error(error)
        }
    }



//     const [input1, setInput1] = React.useState(false)
//     const [input2, setInput2] = React.useState(true)
//     const [input3, setInput3] = React.useState(true)
//     const [input4, setInput4] = React.useState(true)
//     const [input5, setInput5] = React.useState(true)
//     const [input6, setInput6] = React.useState(true)

//     const input1Ref = React.useRef(null)
//     const input2Ref = React.useRef(null)
//     const input3Ref = React.useRef(null)
//     const input4Ref = React.useRef(null)
//     const input5Ref = React.useRef(null)
//     const input6Ref = React.useRef(null)

    



//     const handleInputChange = (e)=>{
//         if (e.currentTarget.value.length == 1){
//             setInput1(true)
//             setInput2(false)
//         }
//     }
//     const handleInputChange2 =(e)=>{
//         if (e.currentTarget.value.length == 1){
//             setInput2(true)
//             setInput3(false)
//         }
//     }
//     const handleInputChange3 =(e)=>{
//         if (e.currentTarget.value.length == 1){
//             setInput3(true)
//             setInput4(false)
//         }
//     }
//     const handleInputChange4 =(e)=>{
//         if (e.currentTarget.value.length == 1){
//             setInput4(true)
//             setInput5(false)
//         }
//     }
//     const handleInputChange5 =(e)=>{
//         if (e.currentTarget.value.length == 1){
//             setInput5(true)
//             setInput6(false)
//         }
//     }
//     const handleInputChange6 =(e)=>{
//         if (e.currentTarget.value.length > 1){
//             e.currentTarget.value = e.currentTarget.value[1]
//         }
//     }

//     React.useEffect(()=>{
//         if(input1 === false){
//             input1Ref.current.focus()
//         }
//         if(input2 === false){
//             input2Ref.current.focus()
//         }
//         if(input3 === false){
//             input3Ref.current.focus()
//         }
//         if(input4 === false){
//             input4Ref.current.focus()
//         }
//         if(input5 === false){
//             input5Ref.current.focus()
//         }
//         if(input6 === false){
//             input6Ref.current.focus()
//         }
//     }, [input1, input2, input3, input4, input5, input6])



//     document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
//     function KeyCheck(event)
//     {
//     var KeyID = event.keyCode;

//     if(KeyID == 8 || KeyID == 46){
//         if(!input6 && input6Ref.current.value == ''){
//             setInput6(true)
//             setInput5(false)
//         }
//         if(!input5 && input5Ref.current.value == ''){
//             setInput5(true)
//             setInput4(false)
//         }
//         if(!input4 && input4Ref.current.value == ''){
//             setInput4(true)
//             setInput3(false)
//         }
//         if(!input3 && input3Ref.current.value == ''){
//             setInput3(true)
//             setInput2(false)
//         }
//         if(!input2 && input2Ref.current.value == ''){
//             setInput2(true)
//             setInput1(false)
//         }
//         // if(!input1 && input1Ref.current.value == ''){
//         //     setInput2(true)
//         //     setInput1(false)
//         // }
//     }
// }
//     const [activeInput, setActiveInput] = useState({})

//     const input1 = useRef(null)
//     const input2 = useRef(null)
//     const input3 = useRef(null)
//     const input4 = useRef(null)
//     const input5 = useRef(null)
//     const input6 = useRef(null)

//     const [inputFields, setInputFields] = useState([
//         {
//             id: 1,
//             isActive: true,
//             ref: input1,
//             value: ''
//         },
//         {
//             id: 2,
//             isActive: false,
//             ref: input2,
//             value: ''
//         },
//         {
//             id: 3,
//             isActive: false,
//             ref: input3,
//             value: ''
//         },
//         {
//             id: 4,
//             isActive: false,
//             ref: input4,
//             value: ''
//         },
//         {
//             id: 5,
//             isActive: false,
//             ref: input5,
//             value: ''
//         },
//         {
//             id: 6,
//             isActive: false,
//             ref: input6,
//             value: ''
//         },
//     ])

//     const handleInputChange = (e) => {
//         if(e.target.id === '1' && e.target.value.length > 0){
//             setInputFields(inputFields.map(item => item.id === 2 ? {...item, isActive: true} : {...item, isActive: false} ))
//             input2.current.focus()
//         }        
//         if(e.target.id === '2' && e.target.value.length > 0){
//             setInputFields(inputFields.map(item => item.id === 3 ? {...item, isActive: true} : {...item, isActive: false} ))
//             input3.current.focus()
//         }        
//         if(e.target.id === '3' && e.target.value.length > 0){
//             setInputFields(inputFields.map(item => item.id === 4 ? {...item, isActive: true} : {...item, isActive: false} ))
//             input4.current.focus()
//         }        
//         if(e.target.id === '4' && e.target.value.length > 0){
//             setInputFields(inputFields.map(item => item.id === 5 ? {...item, isActive: true} : {...item, isActive: false} ))
//             input5.current.focus()
//         }        
//         if(e.target.id === '5' && e.target.value.length > 0){
//             setInputFields(inputFields.map(item => item.id === 6 ? {...item, isActive: true} : {...item, isActive: false} ))
//             input6.current.focus()
//         }        
//         // if(e.target.id === '6' && e.target.value.length > 0){
//         //     setInputFields(inputFields.map(item => item && {...item, isActive: false} ))
//         // }        
             
//     }

//     useEffect(()=>{
//         inputFields.map(item=>{
//             if(item.isActive){
//                 item.ref.current.focus()
//             }
//         })
//     },[inputFields])

//     const updateActiveInput =(activeInput)=>{
        
//         const currentId = activeInput.id
//         setInputFields(inputFields.map(item => item.id === currentId - 1 ? {...item, isActive: true} : {...item, isActive: false} ))
//     }


//     document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
//     function KeyCheck(event)
//     {
//     var KeyID = event.keyCode;

//     if(KeyID == 8 || KeyID == 46){
//         inputFields.map(item => {
//             if(item.isActive === true){
//                 setActiveInput(item)
//                 updateActiveInput(item)
//             }
//         })
//     }
// }



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