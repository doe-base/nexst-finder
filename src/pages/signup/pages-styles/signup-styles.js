import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme)=>{
    return{
        root:{
            width: '100%',
            height: '100vh',
            background: '#fff'
        },
        main: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        centralize:{
            width: '100%',
           textAlign: 'center'
        },
        hold: {
            margin: '1.2rem 0'
        },
        h3: {
            color: '#000',
            margin: '0 !important',
            fontSize: '1.3rem'
        },
        fwPillBtn: {
            width: '100%',
            height: '56px',
            borderRadius: '56px',
            border: 'none',
            backgroundColor: '#47bb5e',
            fontFamily: 'inherit',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: '600'
        },
        line:{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(0, 0, 0, 0.15)'
        },
        or:{
            display: 'flex',
            alignItems: 'center',
            margin: '2rem 0'
        },
        orP:{
            display: 'block',
            margin: '0 1rem',
            fontSize: '0.8rem',
            color: '#333333'
        },
        fwPillIconBtn: {
            width: '100%',
            height: '56px',
            borderRadius: '56px',
            border: '1px solid rgba(0, 0, 0, 0.15)',
            backgroundColor: 'transparent',
            fontFamily: 'inherit',
            color: '#000',
            fontSize: '1rem',
            fontWeight: '500',
            position: 'relative'
        },
        tcp:{
            position: 'absolute',
            bottom: '0',
            textAlign: 'center',
            margin: '0',
            marginBottom: '2.5rem',
            fontSize: '0.8rem',
            color: '#272727',
            padding: '0 1rem'
        },
        tcpa: {
            color: '#272727',
            fontSize: '0.8rem',
        },
        buttonsImg: {
            width: '25px',
            position: 'absolute',
            left: '1.5rem',
            top: '25%',
            zIndex: '10'
        }
    }
})

export default useStyles
