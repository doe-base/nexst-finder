import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme)=>{
    return{
        top: {
            height: '300px',
            width: '100%',
            background: 'url(./images/item-1.jpeg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%',
            position: 'relative'
        },
        overlay: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            background: 'linear-gradient(0deg, rgba(0,0,0,5) 0%, rgba(9,9,121,0) 100%)',
            // backgroundColor: 'rgba(0,0,0,0.4)',
        },
        mainTitle: {
            color: '#fff',
            position: 'absolute',
            bottom: '0',
            left: '0',
            marginLeft: theme.appBoundaries.sizeLight
        },
        h2: {
            fontWeight: theme.typography.fontWeightMedium,
            paddingBottom: theme.appBoundaries.sizeLight
        },
        fullIcon: {
            color: theme.palette.secondary.main,
            fontSize: theme.appBoundaries.sizeRegular3,
            float: "right",
            margin: theme.appBoundaries.sizeLight
        },
        colorLine:{
            width: '100%',
            height: '2px',
            backgroundColor: '#bb9c2d'
        },
        tag: {
            background: '#bb9c2d',
            position: 'absolute',
            left: '0',
            top: '50%',
            padding: theme.appBoundaries.sizeLight,
            borderRadius: '0 0.5rem 0.5rem 0',

        },
        tagP: {
            margin: '0',
            fontSize:  theme.appBoundaries.sizeRegular,
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.palette.secondary.main
            
        },
        goBack: {
            position: 'absolute',
            top: '0',
            left: '0',
            margin: theme.appBoundaries.sizeLight,
            zIndex: '10',
            color: theme.palette.secondary.main,
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: theme.appBoundaries.sizeRegular3
        },
        firstSection: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        half: {
            width: '100%',
            textAlign: 'center',
            color: theme.palette.secondary.main,
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        },
        p: {
            color: theme.palette.secondary.main,
            fontSize: theme.appBoundaries.sizeRegular
        },
        shortLine: {
            height: '40px',
            width: '0.5px',
            background: '#646464'
        },
        secondSection: {
            width: '100%',
            borderTop: '0.2px solid #646464',
            borderBottom: '0.2px solid #646464',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme.appBoundaries.sizeLight2,
            background: 'rgb(0 0 0 / 20%)',
        
        },
        thirdSection: {
            marginLeft: theme.appBoundaries.sizeMedium
        },
        creditText: {
            color: '#ccc',
            fontSize: theme.appBoundaries.sizeLight2
        },
        brandName: {
            color: '#bb9c2d'
        },
        thirdP: {
            color: theme.palette.secondary.main,
            fontSize: theme.appBoundaries.sizeRegular,
            lineHeight: '24px',
            margin: `${theme.appBoundaries.sizeLight} 0`
        },
        thirdPHolder:{
            borderBottom: '0.2px solid #646464',
        },
        forthSection: {
            padding: theme.appBoundaries.sizeLight2,
            borderTop: '0.5px solid #646464',
            borderBottom: '0.5px solid #646464',
        },
        imgsHolder:{
            width: '100%',
            background: 'rgb(0 0 0 / 20%)',
        },
        imgScroll: {
            width: '100%',
            display: 'flex',

            overflowX: 'auto',
            overflowY: 'hidden',
            msOverflowStyle: 'none', /* for Internet Explorer, Edge */
            scrollbarWidth: 'none', /* for Firefox */

            "&::-webkit-scrollbar":{
                display: 'none', /* for Chrome, Safari, and Opera */
            }
        },
        
        Img: {
            width: '100%',
            height: '100%',
            marginRight: theme.appBoundaries.sizeRegular
        },
        fifthSection: {
            textAlign: 'center',
            padding: `${theme.appBoundaries.sizeRegular} 0`
        },
      
        creditText2: {
            color: '#ccc',
            fontSize: theme.appBoundaries.sizeLight2,
            margin: `${theme.appBoundaries.sizeLight2} 0`
        },
        textHolder:{
            margin: `${theme.appBoundaries.sizeRegular2} 0`,
            display: 'grid'
        },
        contactHolder: {
            margin: `${theme.appBoundaries.sizeRegular2} 0`
        },
        contactBtn: {
            margin: `0 ${theme.appBoundaries.sizeLight}`
        },
        thumbBtnHolder:{
            height: '50px',
            width: '80%',
            margin: '0 auto',
            background: 'rgb(0 0 0 / 26%)',
            borderRadius: '50px',
            display: 'flex'
        },
        thubBtn: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#fff',
            padding: theme.appBoundaries.sizeLight
        },
        thubBtn2: {
            width: '100%',
            height: '100%',
            borderLeft: '0.2px solid #646464',
            borderRight: '0.2px solid #646464',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#fff',
            padding: theme.appBoundaries.sizeLight
        },
        thumbIcon: {
            fontSize: theme.appBoundaries.sizeRegular3,
            color: '#999999'
        }

    }
})

export default useStyles
