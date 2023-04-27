import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>{
    return {
        title: {
            color: theme.palette.secondary.main,
            textAlign: 'center',
            fontSize: '1.8rem',
            marginBottom: '2rem',
        },
        question: {
            color: theme.palette.secondary.main,
            textAlign: 'center',
            fontSize: '1.3rem',
            marginBottom: '2rem',
        },
        mainContainer: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'absolute',
            top: '0',
            left: '0',
            opacity: '0',
            transition: 'all 0.3s linear',
        },
        spanColor: {
            color: theme.palette.primary.main
        },
        movementSection: {
            margin: '0 auto',
            width: '80vw',
            height: '100vh',
            maxWidth: '800px',
            position: 'relative',
            display: 'flex',
            // flexDirection: 'column',
            textAlign: 'center',
            overflow: 'hidden',
        },
        buttonHolder: {
            display: 'flex',
        },
        switchBtn: {
            margin: '0 0.2rem'
        },
        textField: {
            marginBottom: '2rem',
            color: `${theme.palette.secondary.main} !important`,
        },
        inputHolder: {
          width: '100%',
          maxWidth: '320px',
          marginBottom: '2rem',
        },
        checklistSection: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 2fr)',
          alignItems: 'end',
          marginBottom: '2rem'
        },
        formControlLabel: {
          color: 'rgb(161, 159, 157)'
        },
        errorInput: {
          marginBottom: '1rem'
        }
    }
})

const styles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    cssLabel: {
      color : 'rgb(161, 159, 157)',

      '::-webkit-calendar-picker-indicator': {
        filter: 'invert(1) !important'
      }
    },
  
    cssOutlinedInput: {
      color: `${theme.palette.secondary.main} !important`,
      '&$cssFocused $notchedOutline': {
        borderColor: `${theme.palette.primary.main} !important`,
      }
    },
  
    cssFocused: {
      color: `${theme.palette.secondary.main} !important`,
    },
  
    underline: {
      '&:before': {
          borderBottom: '2px solid rgb(161, 159, 157)'
      },
      '&:after': {
          borderBottom: `2px solid ${theme.palette.primary.main}`
      },
      '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${theme.palette.primary.main}`
      }
  }
  
  }));


  export default {useStyles, styles}
