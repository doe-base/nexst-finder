import axios from "axios";
import { authContext } from "../../context/auth-context";
import { Button, Container, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, FormGroup, Typography, RadioGroup, FormLabel, Radio} from "@material-ui/core";
import styleFunctions from "./page-styles/form-styles";
import { useState, useEffect, useContext } from "react";
import { NigeriaState, SAProvice, GhanaRegions } from "../../fixtures/location-data"
import { Abia, Adamawa, AkwaIbom, Anambra, Bauchi, Bayelsa, Benue, Borno, CrossRiver, Delta, Ebonyi, Edo, Ekiti, Enugu, Gombe, Imo, Jigawa, Kaduna, Kano, Katsina, Kebbi, Kogi, Kwara, Lagos, Nasarawa, Niger, Ogun, Ondo, Osun, Oyo, Plateau, Rivers, Sokoto, Taraba, Yobe, Zamfara, FCT} from "../../fixtures/location-data";
import { WesternCape, EasternCape, NorthernCape, NorthWest, FreeState, KwazuluNatal, Gauteng, Limpopo, Mpumalanga } from "../../fixtures/location-data";
import { Ahafo, Ashanti, Bono, BonoEast, CentralRegion, EasternRegion, GreatestAccra, NorthernRegion, NorthEastRegion, Oti, Savannah, UpperEast, UpperWest, Volta, WesternRegion, WesternNorthRegion } from "../../fixtures/location-data";
import { useNavigate } from "react-router-dom";

export default function Form(){
    const {user, authMethod} = useContext(authContext)
    const navigate = useNavigate()
    
    const {useStyles, styles} = styleFunctions
    const classes = useStyles()
    const textFieldClasses = styles()


/*
=============================================================== 
//**  Use States
===============================================================
*/

    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState(false)

    const [dob, setDob] = useState('')
    const [dobError, setDobError] = useState(false)
    const [inValidBirthYear, setInValidBirthYear] = useState(false)

    const [country, setCountry] = useState("")
    const [states, setStates] = useState([])
    const [state, setState] = useState('')
    const [city, setCity] = useState("")
    const [cities, setCities] = useState([])
    const [zipCode, setZipCode] = useState('00000')
    const [locationError, setLocationError] = useState(false)

    const [interests, setInterests] = useState({ Parties: false, Seminars: false, Birthdays: false, Weddings: false, ThemeParties: false, Conferences: false, TradeShows: false, CharityEvents: false, MusicEvents: false, SportingEvents: false, Festivals: false, NetworkingEvents: false, Dinners: false, ProductLaunch: false, Exhibitions: false,})
    const {Parties,Seminars,Birthdays,Weddings,ThemeParties,Conferences,TradeShows,CharityEvents,MusicEvents,SportingEvents,Festivals,NetworkingEvents,Dinners,ProductLaunch,Exhibitions, } = interests;
    const [intrestError, setIntrestsError] = useState(false)


    const [gender, setGender] = useState('female');
    const [age, setAge] = useState('teen')
    const [selected, setSelected] = useState([])
   
    
/*
=============================================================== 
//**  Submit FORM
===============================================================
*/

const SubmitForm = ()=>{
    try{
        const url = `${process.env.REACT_APP_API_URL}/user/user-data`
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
                UserID: user,
                AuthMethod: authMethod,
                UserName: userName,
                DOB: dob,
                Country: country,
                State: state,
                City: city,
                ZipCode: zipCode,
                Selected: selected,
                Gender: gender,
                Age: age,
            }
        };
        axios(options)
        .then(function (response){
            navigate('/')
        })
    }
    catch(error){
        console.log(error)
    }
}




/*
=============================================================== 
//**  Use Effects
===============================================================
*/
    useEffect(() => {
        if(country === "NG"){
          setStates(NigeriaState)
        }else if(country === "SA"){
          setStates(SAProvice)
        }else if(country === "GH"){
          setStates(GhanaRegions)
        }else{
          setStates([])
        }
      }, [country])
    useEffect(() => {
    if (country === "NG"){

        if(state === "Abia"){
        setCities(Abia)
        }else if(state === "Adamawa"){
        setCities(Adamawa)
        }else if(state === "Akwa-Ibom"){
        setCities(AkwaIbom)
        }else if(state === "Anambra"){
        setCities(Anambra)
        }else if(state === "Bauchi"){
        setCities(Bauchi)
        }else if(state === "Bayelsa"){
        setCities(Bayelsa)
        }else if(state === "Benue"){
        setCities(Benue)
        }else if(state === "Borno"){
        setCities(Borno)
        }else if(state === "Cross River"){
        setCities(CrossRiver)
        }else if(state === "Delta"){
        setCities(Delta)
        }else if(state === "Ebonyi"){
        setCities(Ebonyi)
        }else if(state === "Edo"){
        setCities(Edo)
        }else if(state === "Ekiti"){
        setCities(Ekiti)
        }else if(state === "Enugu"){
        setCities(Enugu)
        }else if(state === "Gombe"){
        setCities(Gombe)
        }else if(state === "Imo"){
        setCities(Imo)
        }else if(state === "Jigawa"){
        setCities(Jigawa)
        }else if(state === "Kaduna"){
        setCities(Kaduna)
        }else if(state === "Kano"){
        setCities(Kano)
        }else if(state === "Katsina"){
        setCities(Katsina)
        }else if(state === "Kebbi"){
        setCities(Kebbi)
        }else if(state === "Kogi"){
        setCities(Kogi)
        }else if(state === "Kwara"){
        setCities(Kwara)
        }else if(state === "Lagos"){
        setCities(Lagos)
        }else if(state === "Nasarawa"){
        setCities(Nasarawa)
        }else if(state === "Niger"){
        setCities(Niger)
        }else if(state === "Ogun"){
        setCities(Ogun)
        }else if(state === "Ondo"){
        setCities(Ondo)
        }else if(state === "Osun"){
        setCities(Osun)
        }else if(state === "Oyo"){
        setCities(Oyo)
        }else if(state === "Plateau"){
        setCities(Plateau)
        }else if(state === "Rivers"){
        setCities(Rivers)
        }else if(state === "Sokoto"){
        setCities(Sokoto)
        }else if(state === "Taraba"){
        setCities(Taraba)
        }else if(state === "Yobe"){
        setCities(Yobe)
        }else if(state === "Zamfara"){
        setCities(Zamfara)
        }else if(state === "Federal Capital Territory"){
        setCities(FCT)
        }else{
        setCities([])
        }
    }else if(country === "SA"){
        if(state === "Western Cape"){
        setCities(WesternCape)
        }else if(state === 'Eastern Cape'){
        setCities(EasternCape)
        }else if(state === 'Northern Cape'){
        setCities(NorthernCape)
        }else if(state === 'North West'){
        setCities(NorthWest)
        }else if(state === 'Free State'){
        setCities(FreeState)
        }else if(state === 'Kwazulu Natal'){
        setCities(KwazuluNatal)
        }else if(state === 'Gauteng'){
        setCities(Gauteng)
        }else if(state === 'Limpopo'){
        setCities(Limpopo)
        }else if(state === 'Mpumalanga'){
        setCities(Mpumalanga)
        }else{
        setCities([])
        }
    }else if(country === 'GH'){
        if(state === 'Ahafo'){
        setCities(Ahafo)
        }else if(state === 'Ashanti'){
        setCities(Ashanti)
        }else if(state === 'Bono'){
        setCities(Bono)
        }else if(state === 'Bono East'){
        setCities(BonoEast)
        }else if(state === 'CentralRegion'){
        setCities(CentralRegion)
        }else if(state === 'Eastern Region'){
        setCities(EasternRegion)
        }else if(state === 'Greater Accra'){
        setCities(GreatestAccra)
        }else if(state === 'Northern Region'){
        setCities(NorthernRegion)
        }else if(state === 'North East Region'){
        setCities(NorthEastRegion)
        }else if(state === 'Oti'){
        setCities(Oti)
        }else if(state === 'Savannah'){
        setCities(Savannah)
        }else if(state === 'Upper East'){
        setCities(UpperEast)
        }else if(state === 'Upper West'){
        setCities(UpperWest)
        }else if(state === 'Volta'){
        setCities(Volta)
        }else if(state === 'Western Region'){
        setCities(WesternRegion)
        }else if(state === 'Western North Region'){
        setCities(WesternNorthRegion)
        }
    }
    },[state])


/*
=============================================================== 
//**  Onchage Handles
===============================================================
*/
    const handleUserName = (e)=>{
        setUserName(e.target.value)
    }

    const handleDobChange = (e)=>{
        setDob(e.target.value)
    }
    const handleCountry = (e) =>{
        setCountry(e.target.value)
    }
    const handleState =(e)=>{
        setState(e.target.value)
    }
    const handleCity =(e) =>{
        setCity(e.target.value)
      }
      const handleZipChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value == "" || regex.test(e.target.value)) {
          setZipCode(e.target.value);
        }
      };
      const handleIntrest =(e) =>{
        setInterests({
          ...interests,
          [e.target.name] : e.target.checked,
        })
      }
      const handleGender = (event) => {
        setGender(event.target.value);
      };
      const handleAge = (e) =>{
        setAge(e.target.value)
      }
    
/*
=============================================================== 
//**  Form Input Checks Handles
===============================================================
*/
      const handleUserNameSubmit =()=>{
        if(userName == ''){
            setUserNameError(true)
        }else{
            setUserNameError(false)
            setActiveQestion(2)
        }
      }


      const handleDobSubmit =() => {
        if(dob != ''){
            const birthYear = parseInt(dob.split('-')[0])
            const currentYear = new Date().getFullYear()
            setDobError(false)

            if(birthYear > currentYear){
                setInValidBirthYear(true)

            }else{
                setInValidBirthYear(false)
                setActiveQestion(3)
            }

        }else{
            setDobError(true)
        }

      }

      const handleLocationSubmit =()=>{
        if(country != '' && state != '' && city != '' && zipCode != ''){
            setLocationError(false)
            setActiveQestion(4)
        }else{
            setLocationError(true)
        }
      }

      
      const handleIntrestSubmit =()=>{
        Object.keys(interests).forEach(function(key) {
            if(interests[key] === true){
                selected.push(key)
            }
        });

        if(selected.length < 3){
            setIntrestsError(true)
        }else{
            setIntrestsError(false)
            setActiveQestion(5)
        }
      }

      const handleGenderSubmit =()=>{
        setActiveQestion(6)
      }

      const handleAgeSubmit =()=>{
        SubmitForm()
      }
/*
=============================================================== 
//**  Page swap handle
===============================================================
*/
    const [activeQestion, setActiveQestion] = useState(0)

    const active = {
        opacity: '1',
        transform: 'translateX(0)',
    }

    const next = {
        transform: 'translateX(100%)',
    }
    const prev = {
        transform: 'translateX(-100%)',
    }    



    return (
        <Container>
            <section className={classes.movementSection}>
                {/* Starter */}
                <main className={classes.mainContainer} style={activeQestion === 0 ? active : activeQestion === 1 ? prev : null}>
                    <h5 className={classes.title}>Complete Registration</h5>

                    <p className={classes.question} style={{marginBottom: '1rem'}}><span className={classes.spanColor}>Nexst Finder</span> needs to ask you a few questions. </p>
                    <p className={classes.question}>Your answers will help us make better recommendations for you.</p>
                    <Button variant="contained" onClick={()=> setActiveQestion(1)}>Ready</Button>

                </main>


                {/* User Name */}
                <main className={classes.mainContainer} style={activeQestion === 0 ? next : activeQestion === 1 ? active : activeQestion === 2 ? prev : null}>
                    {/* <h5 className={classes.title}>1 0f 6</h5> */}
                    {userNameError ? <Typography variant="body1" color="error" className={classes.errorInput}>Input is Empty</Typography> : null}
                    {inValidBirthYear ? <Typography variant="body1" color="error" className={classes.errorInput}>You can't be born in the future</Typography> : null}

                    <p className={classes.question}>Whats your name?</p>
                    <div className={classes.inputHolder}>
                        <TextField
                            required
                            type="text"
                            id="outlined-required"
                            onChange={(e)=> handleUserName(e)}
                            className={classes.textField}
                            fullWidth
                            InputLabelProps={{
                                classes: {
                                root: textFieldClasses.cssLabel,
                                },
                            }}
                            InputProps={{
                                classes: {
                                root: textFieldClasses.cssOutlinedInput,
                                focused: textFieldClasses.cssFocused,
                                underline: textFieldClasses.underline
                                }}}
        
                        />
                    </div>


                    <div className={classes.buttonHolder}>
                        {/* <Button className={classes.switchBtn} variant="contained" onClick={()=> setActiveQestion(1)}>Back</Button> */}
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> handleUserNameSubmit()}>Submit</Button>
                    </div>

                </main>



                {/* Date of Birth */}
                <main className={classes.mainContainer} style={activeQestion === 1 ? next : activeQestion === 2 ? active : activeQestion === 3 ? prev : next}>
                    {/* <h5 className={classes.title}>1 0f 6</h5> */}
                    {dobError ? <Typography variant="body1" color="error" className={classes.errorInput}>Input is Empty</Typography> : null}
                    {inValidBirthYear ? <Typography variant="body1" color="error" className={classes.errorInput}>You can't be born in the future</Typography> : null}

                    <p className={classes.question}>Whats your birth day?</p>
                    <div className={classes.inputHolder}>
                        <TextField
                            required
                            type="date"
                            id="outlined-required"
                            onChange={(e)=> handleDobChange(e)}
                            className={classes.textField}
                            fullWidth
                            InputLabelProps={{
                                classes: {
                                root: textFieldClasses.cssLabel,
                                },
                            }}
                            InputProps={{
                                classes: {
                                root: textFieldClasses.cssOutlinedInput,
                                focused: textFieldClasses.cssFocused,
                                underline: textFieldClasses.underline
                                }}}
        
                        />
                    </div>


                    <div className={classes.buttonHolder}>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> setActiveQestion(1)}>Back</Button>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> handleDobSubmit()}>Submit</Button>
                    </div>

                </main>


                {/* Location */}
                <main className={classes.mainContainer} style={activeQestion === 2 ? next : activeQestion === 3 ? active : activeQestion === 4 ? prev : next}>
                    {/* <h5 className={classes.title}>1 0f 6</h5> */}
                    {locationError ? <Typography variant="body1" color="error" className={classes.errorInput}>Field can not be empty</Typography> : null}
                    <p className={classes.question}>Where do you live?</p>
                    
                    <div className={classes.inputHolder}>
                        <FormControl variant="standard"  fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">Country*</InputLabel>

                            <Select 
                                labelId="demo-simple-select-standard-label" 
                                id="demo-simple-select-standard" 
                                value={country} 
                                onChange={handleCountry} 
                                label="Country" 
                                className={classes.textField}
                            >
                                <MenuItem value="">
                                <em>-- None --</em>
                                </MenuItem>

                                <MenuItem value="GH">Ghana</MenuItem>
                                <MenuItem value="NG">Nigeria</MenuItem>
                                <MenuItem value="SA">South Africa</MenuItem>
                            </Select>
                        </FormControl>


                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">Region*</InputLabel>
                            <Select 
                                labelId="demo-simple-select-standard-label" 
                                id="demo-simple-select-standard" 
                                value={state} onChange={handleState} 
                                label="Region" fullWidth
                                className={classes.textField}
                                >
                                <MenuItem value="">
                                <em>-- Select Country --</em>
                                </MenuItem>
                                {/* <MenuItem value="Abuja">Abuja</MenuItem> */}
                                {
                                states.map((item, index)=>{
                                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                                })
                                }
                            </Select>
                        </FormControl>


                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">City*</InputLabel>

                            <Select 
                                labelId="demo-simple-select-standard-label" 
                                id="demo-simple-select-standard" 
                                value={city} 
                                onChange={handleCity} 
                                label="City" 
                                fullWidth
                                className={classes.textField}
                                >
                                <MenuItem value="">
                                    <em>-- Select State --</em>
                                </MenuItem>

                                {
                                cities.map((item, index)=>{
                                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                                })
                                }
                            </Select>
                        </FormControl>


                        <TextField  
                            id="user-zip-code" 
                            label="Zip Code" 
                            onChange={handleZipChange} 
                            value={zipCode}  
                            inputProps={{ maxLength: 999999 }} 
                            variant="standard" fullWidth
                            className={classes.textField}
                        />
                    </div>


                    <div className={classes.buttonHolder}>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> setActiveQestion(2)}>Back</Button>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> handleLocationSubmit()}>Submit</Button>
                    </div>

                </main>



                {/* Intrest */}
                <main className={classes.mainContainer} style={activeQestion === 3 ? next : activeQestion === 4 ? active : activeQestion === 5 ? prev : next}>
                    {/* <h5 className={classes.title}>1 0f 6</h5> */}
                    {intrestError ? <Typography variant="body1" color="error" className={classes.errorInput}>Choose atleast 3 intrest</Typography> : null}
                    <p className={classes.question}>What type of events are your interested in?</p>
                    <div className={classes.inputHolder} style={{maxWidth: '450px'}}>
                        <FormGroup className={classes.checklistSection}>
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={Parties} 
                                name="Parties" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Parties</Typography>}                              
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={Seminars} 
                                name="Seminars" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Seminars</Typography>}    
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={Birthdays} 
                                name="Birthdays" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Birthdays</Typography>}    
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={Weddings} 
                                name="Weddings" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Weddings</Typography>}                          
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={ThemeParties} 
                                name="ThemeParties" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Theme Parties</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={Conferences} 
                                name="Conferences" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Conferences</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={TradeShows} 
                                name="TradeShows" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Trade Shows</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={CharityEvents} 
                                name="CharityEvents" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Charity Events</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={MusicEvents} 
                                name="MusicEvents" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Music Events</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={SportingEvents} 
                                name="SportingEvents" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Sporting Events</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={Festivals} 
                                name="Festivals" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Festivals</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={NetworkingEvents} 
                                name="NetworkingEvents" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Networking Events</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={Dinners} 
                                name="Dinners" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Dinners</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={ProductLaunch} 
                                name="ProductLaunch" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Product Launch</Typography>}  
                            />
                            <FormControlLabel 
                                control={<Checkbox 
                                onChange={handleIntrest} 
                                checked={Exhibitions} 
                                name="Exhibitions" 
                                style={{color: "white"}}
                                />}  
                                label={<Typography className={classes.formControlLabel}>Exhibitions</Typography>}  
                            />
                        </FormGroup>
                    </div>


                    <div className={classes.buttonHolder}>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> setActiveQestion(3)}>Back</Button>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> handleIntrestSubmit()}>Submit</Button>
                    </div>

                </main>



                {/* Gender */}
                <main className={classes.mainContainer} style={activeQestion === 4 ? next : activeQestion === 5 ? active : activeQestion === 6 ? prev : next}>
                    {/* <h5 className={classes.title}>1 0f 6</h5> */}

                    <p className={classes.question}>Whats your gender?</p>
                    <div className={classes.inputHolder}>
                        <FormControl>
                            <RadioGroup
                                defaultValue="female"
                                name="gender"
                                value={gender}
                                onChange={handleGender}
                                sx={{ my: 1 }}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" style={{color: 'white'}} />
                                <FormControlLabel value="male" control={<Radio />} label="Male" style={{color: 'white'}}/>
                            </RadioGroup>
                        </FormControl>
                    </div>


                    <div className={classes.buttonHolder}>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> setActiveQestion(4)}>Back</Button>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> handleGenderSubmit()}>Submit</Button>
                    </div>

                </main>



                {/* Age */}
                <main className={classes.mainContainer} style={activeQestion === 5 ? next : activeQestion === 6 ? active : activeQestion === 7 ? prev : next}>
                    {/* <h5 className={classes.title}>1 0f 6</h5> */}

                    <p className={classes.question}>Whats you age bracket?</p>
                    <div className={classes.inputHolder}>
                        <FormControl>
                            <RadioGroup
                                defaultValue="teen"
                                name="age"
                                value={age}
                                onChange={handleAge}
                                sx={{ my: 1 }}
                            >
                                <FormControlLabel value="teen" control={<Radio />} label="Teen" style={{color: 'white'}} />
                                <FormControlLabel value="twenties" control={<Radio />} label="Twenties" style={{color: 'white'}}/>
                                <FormControlLabel value="thirties" control={<Radio />} label="Thirties" style={{color: 'white'}}/>
                                <FormControlLabel value="forties" control={<Radio />} label="Forties" style={{color: 'white'}}/>
                                <FormControlLabel value="fifties" control={<Radio />} label="Fifties" style={{color: 'white'}}/>
                                <FormControlLabel value="older" control={<Radio />} label="Older" style={{color: 'white'}}/>
                            </RadioGroup>
                        </FormControl>
                    </div>


                    <div className={classes.buttonHolder}>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> setActiveQestion(5)}>Back</Button>
                        <Button className={classes.switchBtn} variant="contained" onClick={()=> handleAgeSubmit()}>Finish</Button>
                    </div>

                </main>

            </section>
        </Container>
    )
}