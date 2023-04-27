import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useRecommender(){
    const [finalResult, setFinalResult] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(()=>{
        
        if(userInfo != null){
            const {provider} = userInfo
           var userId 

           if(provider == 'email'){
            userId = userInfo.user_email
           }else{
            userId = userInfo.auth0_id
           }

            try{

                const options = {
                    url: `${process.env.REACT_APP_API_URL}/user/get-info`,
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
                    data: {
                        AuthId: userId
                    }
                };
                axios(options)
                .then(function (response){
                    // console.log(response.data)
                })
            }
            catch(err){
                console.log(err)
            }

            // setFinalResult({Events: [], Services: [], Places: []})
        }

    }, [userInfo])

    return [finalResult, setUserInfo]
}