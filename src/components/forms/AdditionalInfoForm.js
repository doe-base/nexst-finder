import React from 'react'
import { styled } from '@material-ui/core';
import useStyles from "../../pages/signup/pages-styles/signup-styles";
import {Typography,Box,TextField,InputLabel,MenuItem,FormControl,Select,FormGroup,FormControlLabel,Checkbox,Grid} from "@material-ui/core";


import { NigeriaState, SAProvice, GhanaRegions } from "../../fixtures/location-data"
import { Abia, Adamawa, AkwaIbom, Anambra, Bauchi, Bayelsa, Benue, Borno, CrossRiver, Delta, Ebonyi, Edo, Ekiti, Enugu, Gombe, Imo, Jigawa, Kaduna, Kano, Katsina, Kebbi, Kogi, Kwara, Lagos, Nasarawa, Niger, Ogun, Ondo, Osun, Oyo, Plateau, Rivers, Sokoto, Taraba, Yobe, Zamfara, FCT} from "../../fixtures/location-data";
import { WesternCape, EasternCape, NorthernCape, NorthWest, FreeState, KwazuluNatal, Gauteng, Limpopo, Mpumalanga } from "../../fixtures/location-data";
import { Ahafo, Ashanti, Bono, BonoEast, CentralRegion, EasternRegion, GreatestAccra, NorthernRegion, NorthEastRegion, Oti, Savannah, UpperEast, UpperWest, Volta, WesternRegion, WesternNorthRegion } from "../../fixtures/location-data";


export default function AdditionalInfoForm(){
    const classes = useStyles();

  
  // pro-user info
  const [brand, setBrand] = React.useState('')
  const [countryCode, setCountryCode] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [proCountry, setProCountry] = React.useState("")
  const [proStates, setProStates] = React.useState([])
  const [proZipCode, setProZipCode] = React.useState('000000')
  const [proState, setProState] = React.useState('')
  const [proCities, setProCities] = React.useState([])
  const [proCity, setProCity] = React.useState("")

  const [countryCodes, setCountryCodes] = React.useState([ { "code": "+233", "name": "GH(+233)" }, { "code": "+234",   "name": "NG(+234)" }, { "code": "+27", "name": "SA(+27 )" },]) 
  const [specialties, setSpecialties] = React.useState({ PrivateEvents: false, CorporateEvents: false, Charity: false, LiveEvents: false, PartiesEvents: false, Sporting: false })
  const {PrivateEvents, CorporateEvents, Charity, LiveEvents, PartiesEvents, Sporting} = specialties

  const [isBrand, setIsBrand] = React.useState(false)
  const [isCountryCode, setIsCountryCode] = React.useState(false)
  const [isPhone, setIsPhone] = React.useState(false)
  const [isProCountry, setIsProCountry] = React.useState(false)
  const [isProState, setIsProState] = React.useState(false)
  const [isProCity, setIsProCity] = React.useState(false)
  const [isProZipCode, setIsProZipCode] = React.useState(false)
  const [userSpecialty, setUserSpecialty] = React.useState(() => new Set())

  const [brandError, setBrandError] = React.useState(false)
  const [countryCodeError, setCountryCodeError] = React.useState(false)
  const [phoneError, setPhoneError] = React.useState(false)
  const [proCountryError, setProCountryError] = React.useState(false)
  const [proStateError, setProStateError] = React.useState(false)
  const [proCityError, setProCityError] = React.useState(false)
  const [proZipCodeError, setProZipCodeError] = React.useState(false)
  
  const handleBrand =(e) =>{
    setBrand(e.target.value)
  }
  const handleCountryCode =(e)=>{
    setCountryCode(e.target.value)
  }
  const handlePhone =(e) =>{

  const regex = /^[0-9\b]+$/;
    if (e.target.value == "" || regex.test(e.target.value)) {
        setPhone(e.target.value)
    }
  }
  const handleSpecialisation =(e)=>{
    setSpecialties({
      ...specialties,
      [e.target.name] : e.target.checked,
    })
  }
  const handleProCountry = (event) => {
    setProCountry(event.target.value);
  };
  const handleProState = (event) => {
    setProState(event.target.value);
  };
  const handleProCity = (event) => {
    setProCity(event.target.value);
  }
  const handleProZipCode = (event) => {
    const regex = /^[0-9\b]+$/;
    if (event.target.value == "" || regex.test(event.target.value)) {
        setProZipCode(event.target.value);
    }   
  };


  // USE EFFECT
  React.useEffect(() => {
    if (proCountry === "NG"){

      if(proState === "Abia"){
        setProCities(Abia)
      }else if(proState === "Adamawa"){
        setProCities(Adamawa)
      }else if(proState === "Akwa-Ibom"){
        setProCities(AkwaIbom)
      }else if(proState === "Anambra"){
        setProCities(Anambra)
      }else if(proState === "Bauchi"){
        setProCities(Bauchi)
      }else if(proState === "Bayelsa"){
        setProCities(Bayelsa)
      }else if(proState === "Benue"){
        setProCities(Benue)
      }else if(proState === "Borno"){
        setProCities(Borno)
      }else if(proState === "Cross River"){
        setProCities(CrossRiver)
      }else if(proState === "Delta"){
        setProCities(Delta)
      }else if(proState === "Ebonyi"){
        setProCities(Ebonyi)
      }else if(proState === "Edo"){
        setProCities(Edo)
      }else if(proState === "Ekiti"){
        setProCities(Ekiti)
      }else if(proState === "Enugu"){
        setProCities(Enugu)
      }else if(proState === "Gombe"){
        setProCities(Gombe)
      }else if(proState === "Imo"){
        setProCities(Imo)
      }else if(proState === "Jigawa"){
        setProCities(Jigawa)
      }else if(proState === "Kaduna"){
        setProCities(Kaduna)
      }else if(proState === "Kano"){
        setProCities(Kano)
      }else if(proState === "Katsina"){
        setProCities(Katsina)
      }else if(proState === "Kebbi"){
        setProCities(Kebbi)
      }else if(proState === "Kogi"){
        setProCities(Kogi)
      }else if(proState === "Kwara"){
        setProCities(Kwara)
      }else if(proState === "Lagos"){
        setProCities(Lagos)
      }else if(proState === "Nasarawa"){
        setProCities(Nasarawa)
      }else if(proState === "Niger"){
        setProCities(Niger)
      }else if(proState === "Ogun"){
        setProCities(Ogun)
      }else if(proState === "Ondo"){
        setProCities(Ondo)
      }else if(proState === "Osun"){
        setProCities(Osun)
      }else if(proState === "Oyo"){
        setProCities(Oyo)
      }else if(proState === "Plateau"){
        setProCities(Plateau)
      }else if(proState === "Rivers"){
        setProCities(Rivers)
      }else if(proState === "Sokoto"){
        setProCities(Sokoto)
      }else if(proState === "Taraba"){
        setProCities(Taraba)
      }else if(proState === "Yobe"){
        setProCities(Yobe)
      }else if(proState === "Zamfara"){
        setProCities(Zamfara)
      }else if(proState === "Federal Capital Territory"){
        setProCities(FCT)
      }else{
        setProCities([])
      }
    }else if(proCountry === "SA"){
      if(proState === "Western Cape"){
        setProCities(WesternCape)
      }else if(proState === 'Eastern Cape'){
        setProCities(EasternCape)
      }else if(proState === 'Northern Cape'){
        setProCities(NorthernCape)
      }else if(proState === 'North West'){
        setProCities(NorthWest)
      }else if(proState === 'Free State'){
        setProCities(FreeState)
      }else if(proState === 'Kwazulu Natal'){
        setProCities(KwazuluNatal)
      }else if(proState === 'Gauteng'){
        setProCities(Gauteng)
      }else if(proState === 'Limpopo'){
        setProCities(Limpopo)
      }else if(proState === 'Mpumalanga'){
        setProCities(Mpumalanga)
      }else{
        setProCities([])
      }
    }else if(proCountry === 'GH'){
      if(proState === 'Ahafo'){
        setProCities(Ahafo)
      }else if(proState === 'Ashanti'){
        setProCities(Ashanti)
      }else if(proState === 'Bono'){
        setProCities(Bono)
      }else if(proState === 'Bono East'){
        setProCities(BonoEast)
      }else if(proState === 'CentralRegion'){
        setProCities(CentralRegion)
      }else if(proState === 'Eastern Region'){
        setProCities(EasternRegion)
      }else if(proState === 'Greater Accra'){
        setProCities(GreatestAccra)
      }else if(proState === 'Northern Region'){
        setProCities(NorthernRegion)
      }else if(proState === 'North East Region'){
        setProCities(NorthEastRegion)
      }else if(proState === 'Oti'){
        setProCities(Oti)
      }else if(proState === 'Savannah'){
        setProCities(Savannah)
      }else if(proState === 'Upper East'){
        setProCities(UpperEast)
      }else if(proState === 'Upper West'){
        setProCities(UpperWest)
      }else if(proState === 'Volta'){
        setProCities(Volta)
      }else if(proState === 'Western Region'){
        setProCities(WesternRegion)
      }else if(proState === 'Western North Region'){
        setProCities(WesternNorthRegion)
      }
    }
  },[proState])

  React.useEffect(() => {
    if(proCountry === "NG"){
      setProStates(NigeriaState)
    }else if(proCountry === "SA"){
      setProStates(SAProvice)
    }else if(proCountry === "GH"){
      setProStates(GhanaRegions)
    }else{
      setProStates([])
    }
  }, [proCountry])

  React.useEffect(() => {

    if(brand === ""){
        setIsBrand(false)
    }else{
        setIsBrand(true)
    }

    if(countryCode === ""){
        setIsCountryCode(false)
    }else{
        setIsCountryCode(true)
    }

    if(phone === ""){
        setIsPhone(false)
    }else{
        setIsPhone(true)
    }

    if(proCountry === ""){
        setIsProCountry(false)
    }else{
        setIsProCountry(true)
    }

    if(proState === ""){
        setIsProState(false)
    }else{
        setIsProState(true)
    }

    if(proCity === ""){
        setIsProCity(false)
    }else{
        setIsProCity(true)
    }

    if(proZipCode === ""){
        setIsProZipCode(false)
    }else{
        setIsProZipCode(true)
    }

  },[brand, countryCode, phone, proCountry, proState, proZipCode, proCity])

  React.useEffect(() => {
    //interset 
    Object.keys(specialties).forEach(function(key, index) {
      if (specialties[key] == true){
        setUserSpecialty(prev => new Set(prev).add(key))
      }
    });
  },[specialties])

// Costomize TextField
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});


const onSumbit = (e) =>{
    e.preventDefault()

    if (isBrand && isCountryCode && isPhone && isProCountry && isProState && isProCity && isProZipCode){
        const proUserData = {
            brand : brand,
            countryCode : parseInt(countryCode),
            phoneNumber : parseInt(phone),
            country : proCountry,
            state : proState,
            city : proCity,
            zipCode : parseInt(proZipCode),
            specialties: userSpecialty,
      }
      console.log(proUserData)
    }else{
        if(!isBrand){
            setBrandError(true)
        }else{
            setBrandError(false)
        }

        if(!isCountryCode){
            setCountryCodeError(true)
        }else{
            setCountryCodeError(false)
        }
        
        if(!isPhone){
            setPhoneError(true)
        }else{
            setPhoneError(false)
        }

        
        if(!isProCountry){
            setProCountryError(true)
        }else{
            setProCountryError(false)
        }

        if(!isProState){
            setProStateError(true)
        }else{
            setProStateError(false)
        }

        if(!isProCity){
            setProCityError(true)
        }else{
            setProCityError(false)
        }

        if(!isProZipCode){
            setProZipCodeError(true)
        }else{
            setProZipCodeError(false)
        }


    }

    
    
}
  




    return (
        <section className={classes.section2}>
          <Typography variant="h1" className={classes.title2}>
            Additional Infomation
          </Typography>
            <Typography variant="h3" className={classes.subtitle2} style={{paddingTop: "0", paddingBottom: "2rem", color: "white"}}>If you want to post events on this site, you'll also need to fill this part. (It can be done later)</Typography>

            <Box component="form" sx={{  "& > :not(style)": { m: 1, width: "25ch" }, }} noValidate onSubmit={onSumbit} autoComplete="off">

            <div className={classes.formRow}>
              <div className={classes.textfield}>
                <TextField id="organisation-name" label="Brand or Industry you represent" variant="standard" color="secondary" onChange={handleBrand} required fullWidth error={brandError}/>
              </div>
            </div>
 
            <Grid container className={classes.formRow}>
              <Grid item className={classes.textfield} xs={3}>
                {/* <CssTextField id="phone-code" label="" variant="standard" color="secondary"/> */}
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} color="secondary" fullWidth error={countryCodeError}>
                    <InputLabel id="demo-simple-select-standard-label">Code +</InputLabel>

                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={countryCode} onChange={handleCountryCode} label="Phone Code" fullWidth required error={countryCodeError}>
                        {
                          countryCodes.map((item, index)=>{
                            return <MenuItem key={index} value={item.code}>{item.name}</MenuItem>
                          })
                        }
                    </Select>
                  </FormControl>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item className={classes.textfield} xs={8}>
          
                <TextField id="phone-number" label="Phone Number" variant="standard" color="secondary" value={phone} onChange={handlePhone} fullWidth required error={phoneError} />
              </Grid>
            </Grid>

            <Typography variant="h3" className={classes.subtitle} style={{color: "#fff"}}>
                What type of event do you specilise in?
            </Typography>

            <div className={classes.formRow}>
              <div className={classes.textfield}>
                  <FormGroup className={classes.checklistSection} style={{color: "#fff"}}>

                      <FormControlLabel control={<Checkbox onChange={handleSpecialisation} name="PrivateEvents" checked={PrivateEvents} style={{color: "#fff"}}/>} label="PRIVATE EVENTS" />
                      <FormControlLabel control={<Checkbox onChange={handleSpecialisation} name="CorporateEvents" checked={CorporateEvents} style={{color: "#fff"}}/>} label="CORPORATE EVENTS" />
                      <FormControlLabel control={<Checkbox onChange={handleSpecialisation} name="Charity" checked={Charity} style={{color: "#fff"}}/>} label="CHARITY/FUNDRAISING" />
                      <FormControlLabel control={<Checkbox onChange={handleSpecialisation} name="LiveEvents" checked={LiveEvents} style={{color: "#fff"}}/>} label="LIVE EVENTS" />
                      <FormControlLabel control={<Checkbox onChange={handleSpecialisation} name="PartiesEvents" checked={PartiesEvents} style={{color: "#fff"}}/>} label="PARTIES/FESTIVALS" />
                      <FormControlLabel control={<Checkbox onChange={handleSpecialisation} name="Sporting" checked={Sporting} style={{color: "#fff"}}/>} label="SPORTING EVENTS" />
                     
                  </FormGroup>
              </div>
            </div>

            <Typography variant="h3" className={classes.subtitle} style={{color: "#fff"}}>
                Where are you based?
            </Typography>

            <Grid container className={classes.formRow}>
              <Grid item xs={6} className={classes.textfield}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Country*</InputLabel>

                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={proCountry} onChange={handleProCountry} label="Country" color="secondary" fullWidth error={proCountryError}>
                    <MenuItem value="">
                      <em>-- None --</em>
                    </MenuItem>

                    <MenuItem value="GH">Ghana</MenuItem>
                    <MenuItem value="NG">Nigeria</MenuItem>
                    <MenuItem value="SA">South Africa</MenuItem>
                  </Select>
                 </FormControl>
              </Grid>

              <Grid item xs={6} className={classes.textfield}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">State*</InputLabel>
                  <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={proState} onChange={handleProState} label="State" color="secondary" fullWidth error={proStateError}>
                    <MenuItem value="">
                        <em>-- Select Country --</em>
                      </MenuItem>
                      {/* <MenuItem value="Abuja">Abuja</MenuItem> */}
                      {
                        proStates.map((item, index)=>{
                          return <MenuItem key={index} value={item}>{item}</MenuItem>
                        })
                      }
                  </Select>
                </FormControl>
              </Grid>
            </Grid>


            <Grid container className={classes.formRow}>

                <Grid item xs={3} className={classes.textfield}>
                    <TextField  id="user-zip-code" label="Zip Code" variant="standard" color='secondary' value={proZipCode} onChange={handleProZipCode} required error={proZipCodeError}/>
                </Grid>

                <Grid item xs={1}></Grid>

                <Grid item xs={8} className={classes.textfield}>
                      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} color="secondary" fullWidth >
                        <InputLabel id="demo-simple-select-standard-label">City*</InputLabel>

                        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={proCity} onChange={handleProCity} label="City" color="secondary" className={classes.textfield} fullWidth error={proCityError}>
                            <MenuItem value="">
                                <em>-- None --</em>
                            </MenuItem>

                            {
                              proCities.map((item, index)=>{
                                return <MenuItem key={index} value={item}>{item}</MenuItem>
                              })
                            }
                        </Select>
                      </FormControl>
                </Grid>
            </Grid>


            <div className={classes.formRow}>
              <div className={classes.textfield} style={{display: "flex", color:"#fff"}}>
                
                    <input type="checkbox" id="tsandc" name="tsandc" value="yes" />
                      <p>I do accept the <a href="" style={{color: "#fff"}}>Terms and Conditions</a> of this site.</p>   
              
              </div>
            </div>

            <div className={classes.formRow}><button id="shadow">Submit</button></div>

            </Box>

        </section>
    )
}