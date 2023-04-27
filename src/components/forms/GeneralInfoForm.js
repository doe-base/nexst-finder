import React from "react"
import validator from 'validator'
import { NigeriaState, SAProvice, GhanaRegions } from "../../fixtures/location-data"
import {Typography,Box,TextField,InputLabel,MenuItem,FormControl,Select,FormGroup,FormControlLabel,Checkbox,Grid} from "@material-ui/core";
import useStyles from "../../pages/signup/pages-styles/signup-styles";

import { Abia, Adamawa, AkwaIbom, Anambra, Bauchi, Bayelsa, Benue, Borno, CrossRiver, Delta, Ebonyi, Edo, Ekiti, Enugu, Gombe, Imo, Jigawa, Kaduna, Kano, Katsina, Kebbi, Kogi, Kwara, Lagos, Nasarawa, Niger, Ogun, Ondo, Osun, Oyo, Plateau, Rivers, Sokoto, Taraba, Yobe, Zamfara, FCT} from "../../fixtures/location-data";
import { WesternCape, EasternCape, NorthernCape, NorthWest, FreeState, KwazuluNatal, Gauteng, Limpopo, Mpumalanga } from "../../fixtures/location-data";
import { Ahafo, Ashanti, Bono, BonoEast, CentralRegion, EasternRegion, GreatestAccra, NorthernRegion, NorthEastRegion, Oti, Savannah, UpperEast, UpperWest, Volta, WesternRegion, WesternNorthRegion } from "../../fixtures/location-data";




export default function GeneralInfoForm(){
    const classes = useStyles();

// user info
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [age, setAge] = React.useState("");
  const [country, setCountry] = React.useState("")
  const [states, setStates] = React.useState([])
  const [zipCode, setZipCode] = React.useState('00000')
  const [state, setState] = React.useState('')
  const [cities, setCities] = React.useState([])
  const [city, setCity] = React.useState("")
  const [interests, setInterests] = React.useState({ Parties: false, Seminars: false, Birthdays: false, Weddings: false, ThemeParties: false, Conferences: false, TradeShows: false, CharityEvents: false, MusicEvents: false, SportingEvents: false, Festivals: false, NetworkingEvents: false, Dinners: false, ProductLaunch: false, ExhibitionsAndTradeShows: false,})
  const {Parties,Seminars,Birthdays,Weddings,ThemeParties,Conferences,TradeShows,CharityEvents,MusicEvents,SportingEvents,Festivals,NetworkingEvents,Dinners,ProductLaunch,ExhibitionsAndTradeShows, } = interests;


  const [isFirstName, setIsFirstName] = React.useState(false)
  const [isLastName, setIsLastName] = React.useState(false)
  const [isEmailValid, setIsEmailValid] = React.useState(false)
  const [isGenderValid, setIsGenderValid] = React.useState(false)
  const [isAge, setIsAge] = React.useState(false)
  const [isCountry, setIsCountry] = React.useState(false)
  const [isState, setIsState] = React.useState(false)
  const [isCity, setIsCity] = React.useState(false)
  const [isZipCode, setIsZipCode] = React.useState(false)
  const [userInterest, setUserInterest] = React.useState(() => new Set())

  const [firstNameError, setFirstNameError] = React.useState(false)
  const [lastNameError, setLastNameError] = React.useState(false)
  const [emailError, setEmailError] = React.useState(false)
  const [genderError, setGenderError] = React.useState(false)
  const [ageError, setAgeError] = React.useState(false)
  const [countryError, setCountryError] = React.useState(false)
  const [stateError, setStateError] = React.useState(false)
  const [cityError, setCityError] = React.useState(false)
  const [zipCodeError, setZipCodeError] = React.useState(false)


  // State Functions
  const handleFirstName = (e) =>{
    setFirstName(e.target.value);
  }
  const handleLastName = (e)  =>{
    setLastName(e.target.value);
  }
  const handleEmail = (e)  =>{
    setEmail(e.target.value);
  }
  const handleGender = (e) =>{
    setGender(e.target.value)
  }
  const handleAge = (e) =>{
    setAge(e.target.value)
  }
  const handleCountry =(e) =>{
    setCountry(e.target.value)
  }
 
  const handleChange = (e) => {
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
  const handleState =(e) =>{
    setState(e.target.value)
  }
  const handleCity =(e) =>{
    setCity(e.target.value)
  }


  React.useEffect(() => {
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

  React.useEffect(() => {
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

  React.useEffect(() => {
    //firstName checker
    if(firstName === ''){
      setIsFirstName(false);
    }else{
      setIsFirstName(true);
    }
    //lastname checker
    if(lastName === ''){
      setIsLastName(false);
    }else{
      setIsLastName(true);
    }
    //email checker
    if(!validator.isEmail(email)){
      setIsEmailValid(false);
    }else{
      setIsEmailValid(true)
    }
    //gender checker
    if(gender == 'M' || gender == 'F' || gender == 'O'){
      setIsGenderValid(true)
    }else{
      setIsGenderValid(false)
    }
    //age checker
    if(age == ""){
      setIsAge(false)
    }else{
      setIsAge(true)
    }
    //country checker
    if(country == ""){
      setIsCountry(false)
    }else{
      setIsCountry(true)
    }
    //state checker
    if(state == ""){
      setIsState(false)
    }else{
      setIsState(true)
    }
    //city checker
    if(city == ""){
      setIsCity(false)
    }else{
      setIsCity(true)
    }
    //city checker
    if(city == ""){
      setIsCity(false)
    }else{
      setIsCity(true)
    }
    //zipcode checker
    if(zipCode == ""){
      setIsZipCode(false)
    }else{
      setIsZipCode(true)
    }

  },[email, firstName, lastName, gender, age, country, state, city, zipCode])
  
React.useEffect(() => {
  //interset 
  Object.keys(interests).forEach(function(key, index) {
    if (interests[key] == true){
      setUserInterest(prev => new Set(prev).add(key))
    }
  });
},[interests])
  
  const onSubmit = (e)=>{
    e.preventDefault();

    if(isEmailValid && isFirstName && isLastName && isGenderValid && isAge && isCountry && isState && isCity && isZipCode){
      const userData = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        gender : gender,
        age : age,
        country: country,
        state: state,
        city: city,
        zipCode: parseInt(zipCode),
        interests : userInterest,
      }

    }else{
      if(!isEmailValid){
        setEmailError(true)
      }else{
        setEmailError(false)
      }

      if(!isFirstName){
        setFirstNameError(true)
      }else{
        setFirstNameError(false)
      }

      if(!isLastName){
        setLastNameError(true)
      }else{
        setLastNameError(false)
      }

      if(!isGenderValid){
        setGenderError(true)
      }else{
        setGenderError(false)
      }

      if(!isAge){
        setAgeError(true)
      }else{
        setAgeError(false)
      }

      if(!isCountry){
        setCountryError(true)
      }else{
        setCountryError(false)
      }

      if(!isState){
        setStateError(true)
      }else{
        setStateError(false)
      }

      if(!isCity){
        setCityError(true)
      }else{
        setCityError(false)
      }

      if(!isZipCode){
        setZipCodeError(true)
      }else{
        setZipCodeError(false)
      }
    }
  }

    return (
        <section className={classes.section1}>
        
          <Typography variant="h1" className={classes.title}>
            General Infomation
          </Typography>
          <Typography variant="h3" className={classes.subtitle2} style={{paddingTop: "0", paddingBottom: "2rem"}}>Informations such as your location and interests will help us recommend better for you</Typography>

          <Box onSubmit={onSubmit} component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" }, }} noValidate autoComplete="off">

{/* First Row */}
            <div className={classes.formRow}>
              <div className={classes.textfield}>
                <TextField id="first-name" label="First Name" variant="standard" onChange={handleFirstName} fullWidth required error={firstNameError} />
              </div>

              <div className={classes.textfield}>
                <TextField id="last-name" label="Last Name" variant="standard" onChange={handleLastName} fullWidth required error={lastNameError}/>
              </div>
            </div>

{/* Second Row */}
            <div className={classes.formRow}>
              <TextField id="user-email" label="Email Address" variant="standard" onChange={handleEmail} fullWidth required error={emailError}/>
            </div>

{/* Thrid Row */}
            <div className={classes.formRow}>

              <div className={classes.textfield}>  
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">Gender*</InputLabel>

                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={gender} onChange={handleGender} fullWidth error={genderError}>
                      <MenuItem value="">
                        <em>-- Select one --</em>
                      </MenuItem>

                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Others</MenuItem>
                    </Select>
                </FormControl>
              </div>

              <div className={classes.textfield}>  
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">Age*</InputLabel>

                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleAge} label="Age" fullWidth error={ageError}>
                      <MenuItem value="">
                        <em>-- None --</em>
                      </MenuItem>

                      <MenuItem value={10}>Teen</MenuItem>
                      <MenuItem value={20}>Twenties</MenuItem>
                      <MenuItem value={30}>Thirties</MenuItem>
                      <MenuItem value={40}>Forties</MenuItem>
                      <MenuItem value={50}>Fifties</MenuItem>
                      <MenuItem value={60}>Elderly</MenuItem>
                    </Select>
                </FormControl>
              </div>

              
            </div>

{/* forth Row */}
            <Typography variant="h3" className={classes.subtitle} style={{color: "#116466"}}>
                Where do you live?
            </Typography>

            <Grid container className={classes.formRow}>
              <Grid item xs={12} className={classes.textfield}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Country*</InputLabel>

                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={country} onChange={handleCountry} label="Country" fullWidth error={countryError}>
                    <MenuItem value="">
                      <em>-- None --</em>
                    </MenuItem>

                    <MenuItem value="GH">Ghana</MenuItem>
                    <MenuItem value="NG">Nigeria</MenuItem>
                    <MenuItem value="SA">South Africa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} className={classes.textfield}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Region*</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={state} onChange={handleState} label="Region" fullWidth error={stateError}>
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
              </Grid>
            </Grid>

{/* Fifth Row */}
            <Grid container className={classes.formRow}>

                <Grid item xs={12} className={classes.textfield}>
                    <TextField  id="user-zip-code" label="Zip Code" onChange={handleChange} value={zipCode}  inputProps={{ maxLength: 999999 }} variant="standard" fullWidth error={zipCodeError}/>
                </Grid>

                {/* <Grid item xs={1}></Grid> */}

                <Grid item xs={12} className={classes.textfield}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">City*</InputLabel>

                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={city} onChange={handleCity} label="City" fullWidth error={cityError}>
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
                </Grid>

            
            </Grid>


            <Typography variant="h3" className={classes.subtitle}>
                What type of events are your interested in?
            </Typography>

            <div className={classes.formRow}>

                <div className={classes.textfield}>
                
                    <FormGroup className={classes.checklistSection}>
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={Parties} name="Parties" style={{color: "black"}}/>}  label="Parties" />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={Seminars} name="Seminars" style={{color: "black"}}/>}  label='Seminars' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={Birthdays} name="Birthdays" style={{color: "black"}}/>}  label='Birthdays' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={Weddings} name="Weddings" style={{color: "black"}}/>}  label='Weddings' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={ThemeParties} name="ThemeParties" style={{color: "black"}}/>}  label='Theme Parties' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={Conferences} name="Conferences" style={{color: "black"}}/>}  label='Conferences' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={TradeShows} name="TradeShows" style={{color: "black"}}/>}  label='Trade Shows' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={CharityEvents} name="CharityEvents" style={{color: "black"}}/>}  label='Charity Events' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={MusicEvents} name="MusicEvents" style={{color: "black"}}/>}  label='Music Events' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={SportingEvents} name="SportingEvents" style={{color: "black"}}/>}  label='Sporting Events' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={Festivals} name="Festivals" style={{color: "black"}}/>}  label='Festivals' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={NetworkingEvents} name="NetworkingEvents" style={{color: "black"}}/>}  label='Networking Events' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={Dinners} name="Dinners" style={{color: "black"}}/>}  label='Dinners' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={ProductLaunch} name="ProductLaunch" style={{color: "black"}}/>}  label='Product Launch' />
                        <FormControlLabel control={<Checkbox onChange={handleIntrest} checked={ExhibitionsAndTradeShows} name="ExhibitionsAndTradeShows" style={{color: "black"}}/>}  label='Exhibitions And Tradeshows' />
                    </FormGroup>

                    <p>Be sure to go <span className="special-text">"customize recommendation"</span> option under settings when account has been created to futher personalize event suggestion.</p>
                </div>
            </div>

            <div className={classes.formRow}>
              <div className={classes.textfield} style={{display: "flex", color:"#000"}}>
                
                    <input type="checkbox" id="tsandc" name="tsandc" value="yes" />
                      <p>I do accept the <a href="" style={{color: "#000"}}>Terms and Conditions</a> of this site.</p>   
              
              </div>
            </div>

            <div className={classes.formRow}><button id="shadow">Register</button></div>
            
            
          </Box>
        </section>
    )
}