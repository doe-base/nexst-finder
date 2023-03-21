import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme)=>{
    return{
        root : {
            backgroundColor: "#272727",
            margin: "0 auto !important"
        },
        main: {
            width: "100vw",
            // width: "90vw",
            // margin: "5.9375rem auto !important",
            margin: "2.9375rem auto !important",
            borderRadius: "1.2498rem",
            boxShadow: "0 8px 20px 0 rgb(0 0 0 / 15%)",
            // display: "flex"
        },
        topHeading: {
            flex: "1 60%",
            color: "white",
            fontWeight: '600'
        },
        icon: {
            fontSize: "1.8rem",
            fontWeight: "100",
            color: "#fff"
        },
        iconsHolder: {
            flex: "1 40%",
            display: "flex",
            justifyContent:"space-between",
            alignItems: "center",
        },
        top:{
            display: "flex",
            justifyContent:"space-between",
            alignItems: "center",
        },
        filterBtn:{
            backgroundColor:"#383532",
            border: 'none',
            borderRadius: '13px',
            color: '#fff',
            marginRight: '10px',
            fontFamily: 'inherit',
            padding: '7px',
            fontSize: '12px',
            letterSpacing: '0.5px'
        },
        sectionTitle: {
            color: '#fff',
            fontWeight: '600'
        },
        card: {
            width: '160px',
            marginRight: '15px'
        },
        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },
        imgHolder:{
            width: '160px',
            height: '160px',
            position: 'relative',
        },
        cardTitle:{
            position: 'absolute',
            bottom: '1px',
            margin: '1rem 0',
            color: 'white',
            fontFamily: 'inherit',
            fontSize: '1rem',
            fontWeight: '500',
            borderLeft: "3.5px solid #c15252",
            paddingLeft: '0.5rem'
        },
        cardOverlay: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.4)',
        },
        bottomLine: {
            position: 'absolute',
            bottom: '0',
            left: '0',
            height: '3.5px',
            backgroundColor: "#c15252",
            width: '100%',
        },
        discription: {
            fontWeight: 'bold',
            color: '#858585',
            fontSize: '0.7rem',
            margin: '0',
        },
        cardDescIcon: {
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#858585',
            marginRight: '0.3rem',
        },
        descHolder: {
            display: 'flex',
            alignItems: 'flex-start',
            margin: '0.7rem 0'
        },
        slide:{
            overflowX: 'auto',
            overflowY: 'hidden',
            display: 'flex',
            msOverflowStyle: 'none', /* for Internet Explorer, Edge */
            scrollbarWidth: 'none', /* for Firefox */

            "&::-webkit-scrollbar":{
                display: 'none', /* for Chrome, Safari, and Opera */
            }
        },
        firstSection: {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            marginBottom: '2rem',
        },
        
        
        cardTitle2:{
            position: 'absolute',
            bottom: '1px',
            margin: '1rem 0',
            color: 'white',
            fontFamily: 'inherit',
            fontSize: '1rem',
            fontWeight: '500',
            borderLeft: "3.5px solid #c152a9",
            paddingLeft: '0.5rem'
        },
        bottomLine2: {
            position: 'absolute',
            bottom: '0',
            left: '0',
            height: '3.5px',
            backgroundColor: "#c152a9",
            width: '100%',
        },
        navigation: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgb(0,0,0)',
            background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0) 100%)',
            position: 'fixed',
            bottom: '0',
            left: '0',
            height: "50px"
        },
        navigationInner: {
            width: '75%',
            display: 'flex',
            justifyContent: 'space-between',
        },
        navIcon: {
            width: '100%',
            filter: 'invert(100%) sepia(0%) saturate(1691%) hue-rotate(318deg) brightness(103%) contrast(107%)',
        },
        navIconHolder: {
            width: '30px'
        }


    }
})

const useStyles2 = makeStyles((theme)=>{

})

export default useStyles
