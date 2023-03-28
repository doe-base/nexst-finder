import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme)=>{
    return{
        goBack: {
            color: '#fff',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.26)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: theme.appBoundaries.sizeRegular3,
        },
        firstHolder: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            margin: `${theme.appBoundaries.sizeRegular} 0`
        },
        firstText: {
            margin: '0',
            marginLeft: theme.appBoundaries.sizeRegular3,
            color: theme.palette.secondary.main,
        },
        secondText: {
            color: 'rgb(255 255 255 / 60%)',
            lineHeight: theme.appBoundaries.sizeRegular2,
            margin: '0'
        },
        secondStrong: {
            color: theme.palette.secondary.main
        },
        secondSpan: {
            color: theme.palette.primary.main
        },
        secondHolder: {
            margin: `${theme.appBoundaries.sizeRegular2} 0`
        },
        form:{
            display: 'grid'
        },
        inputsHolder: {
            width: '100%',
            display: 'grid',
            gridAutoFlow: 'column',
            justifyContent: 'flex-start'
        },
        inputsField: {
            background: '#cccccc57',
            border: 'none',
            color: theme.palette.secondary.main,
            fontSize: theme.appBoundaries.sizeRegular2,
            fontFamily: 'inherit',
        },
        fouthHolder: {
            position: 'absolute',
            bottom: theme.appBoundaries.sizeRegular3
        },
        secondSpanBtn: {
            color: theme.palette.primary.main,
            cursor: 'pointer'
        },
    }
})

export default useStyles
