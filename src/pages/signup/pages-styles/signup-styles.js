import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme)=>{
    return{
        root:{
            width: '100%',
            height: '100vh',
        },
        main: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        emptyField: {
            color: theme.palette.error.light,
            textAlign: 'left',
            [theme.breakpoints.up('md')]: {
                textAlign: 'center',
            }
        },
        centralize:{
            width: '100%',
           textAlign: 'center'
        },
        hold: {
            margin: `${theme.appBoundaries.sizeRegular2} 0`
        },
        h3: {
            color: theme.palette.secondary.main,
            margin: '0 !important',
            fontSize: theme.appBoundaries.sizeRegular2
        },
        fwPillBtn: {
            width: '100%',
            height: '56px',
            borderRadius: '56px',
            border: 'none',
            backgroundColor: '#47bb5e',
            fontFamily: 'inherit',
            color: theme.palette.secondary.main,
            fontSize: theme.appBoundaries.sizeRegular,
            fontWeight: theme.typography.fontWeightMedium
        },
        line:{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgb(161, 159, 157)'
        },
        or:{
            display: 'flex',
            alignItems: 'center',
            margin: `${theme.appBoundaries.sizeRegular3} 0`
        },
        orP:{
            display: 'block',
            margin: `0 ${theme.appBoundaries.sizeRegular3}`,
            fontSize: theme.appBoundaries.fontWeightMedium,
            color: 'rgb(161, 159, 157)'
        },
        fwPillIconBtn: {
            width: '100%',
            height: '56px',
            borderRadius: '56px',
            border: '1px solid rgb(161, 159, 157)',
            backgroundColor: 'transparent',
            fontFamily: 'inherit',
            color: theme.palette.secondary.main,
            fontSize: theme.appBoundaries.sizeRegular,
            fontWeight: '500',
            position: 'relative'
        },
        tcp:{
            position: 'absolute',
            bottom: '0',
            textAlign: 'center',
            margin: '0',
            marginBottom: theme.appBoundaries.sizeRegular3,
            fontSize: theme.appBoundaries.sizeLight2,
            color: theme.palette.secondary.main,
            padding: `0 ${theme.appBoundaries.sizeRegular3}`
        },
        tcpa: {
            color: theme.palette.secondary.main,
            fontSize: theme.appBoundaries.sizeLight2,
        },
        buttonsImg: {
            width: '25px',
            position: 'absolute',
            left: theme.appBoundaries.sizeRegular2,
            top: '25%',
            zIndex: '10'
        }
    }
})

const styles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    cssLabel: {
      color : 'rgb(161, 159, 157)'
    },
  
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: `${theme.palette.primary.main} !important`,
      }
    },
  
    cssFocused: {},
  
    notchedOutline: {
      borderWidth: '1px',
      borderColor: 'rgb(161, 159, 157) !important'
    },
  
  }));
  

export default {useStyles, styles}

