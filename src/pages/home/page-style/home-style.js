import { makeStyles } from "@material-ui/core"


const useStyle = makeStyles((theme)=>{
    return{
        root : {
            backgroundColor: theme.palette.primary.backgroundColor,
            margin: "0 auto !important"
        },
        main: {
            width: "100vw",
            margin: "2.9375rem auto !important",
            borderRadius: "1.2498rem",
            boxShadow: "0 8px 20px 0 rgb(0 0 0 / 15%)",
        },
        small: {
            display: 'block',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            }
        },
        space: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'block',
                height: '100px',
            }
        },
        topHeading: {
            flex: "1 60%",
            color: theme.palette.secondary.main,
            fontWeight: theme.typography.fontWeightMedium,
        },
        icon: {
            fontSize: theme.appBoundaries.sizeRegular2,
            fontWeight: "100",
            color: theme.palette.secondary.main,
            [theme.breakpoints.up('xs')]: {
                marginLeft: theme.appBoundaries.sizeRegular2,
            },
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.appBoundaries.sizeMedium,
            },
        },
        iconsHolder: {
            display: 'grid',
            gridAutoFlow: 'column',
            justifyContent:"space-between",
            alignItems: "center",
        },
        top:{
            display: "flex",
            justifyContent:"space-between",
            alignItems: "center",
            margin: '1.5rem 0',
            [theme.breakpoints.up('md')]:{
                display: 'none',
            }
        },
        selectIntrest:{
            margin: '1.5rem 0',
            [theme.breakpoints.up('md')]: {
                display: 'none'
            }
        },
        filterBtn:{
            backgroundColor: "#383532",
            border: 'none',
            borderRadius: theme.appBoundaries.sizeLight2,
            color: theme.palette.secondary.main,
            marginRight: theme.appBoundaries.sizeLight,
            fontFamily: 'inherit',
            padding: theme.appBoundaries.sizeLight,
            fontSize: theme.appBoundaries.sizeLight2,
            letterSpacing: '0.5px'
        },
        sectionTitle: {
            color: theme.palette.secondary.main,
            fontWeight: theme.typography.fontWeightMedium,
            marginBottom: theme.appBoundaries.sizeRegular2
        },
        card: {
            width: '160px',
            marginRight: theme.appBoundaries.sizeRegular
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
            color: theme.palette.secondary.main,
            fontFamily: 'inherit',
            fontSize: theme.appBoundaries.sizeRegular,
            fontWeight: theme.typography.fontWeightRegular,
            borderLeft: "3.5px solid #c15252",
            paddingLeft: theme.appBoundaries.sizeLight
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
            fontSize: theme.appBoundaries.sizeLight2,
            margin: '0',
        },
        cardDescIcon: {
            fontSize: theme.appBoundaries.sizeRegular,
            fontWeight: 'bold',
            color: '#858585',
            marginRight: theme.appBoundaries.sizeLight,
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
            marginBottom: theme.appBoundaries.sizeRegular3,
        },
        
        
        cardTitle2:{
            position: 'absolute',
            bottom: '1px',
            margin: '1rem 0',
            color: 'white',
            fontFamily: 'inherit',
            fontSize: theme.appBoundaries.sizeRegular,
            fontWeight: theme.typography.fontWeightRegular,
            borderLeft: "3.5px solid #c152a9",
            paddingLeft: theme.appBoundaries.sizeLight
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
            height: "50px",
            [theme.breakpoints.up('md')]: {
                display: 'none'
            }
        },
        navigationInner: {
            width: '75%',
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.up('sm')]: {
                width: '50%',
            },
            [theme.breakpoints.up('lg')]: {
                width: '30%',
            },
        },
        navIcon: {
            width: '100%',
            filter: 'invert(100%) sepia(0%) saturate(1691%) hue-rotate(318deg) brightness(103%) contrast(107%)',
        },
        navIconHolder: {
            width: '25px'
        }


    }
})

const useStyle2 = makeStyles((theme)=>{
    return {
        large: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'block',
            }
        },
        greetings: {
            color: theme.palette.secondary.main,
            fontWeight: theme.typography.fontWeightMedium
        },
        line: {
            width: '100%',
            height: '1px',
            backgroundColor: 'hsla(0,0%,100%,.1)',
            margin: '2rem auto',
        },
        firstCollection: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2rem 0',
            '& > :last-child': {
                [theme.breakpoints.down('md')]: {
                    display: 'none',
                }
              }
        },
        eventCard: {
            width: '24%',
            backgroundColor: '#1c1c1c',
            [theme.breakpoints.down('md')]: {
                width: '32%',
            }
        },
        img: {
            width: '100%',
            height: '200px',
            objectFit: 'cover'

        },
        text: {
            color: "#858585",
            padding: theme.appBoundaries.sizeLight,
        },
        cardTextp1: {
            fontWeight: theme.typography.fontWeightMedium,
            marginBottom: theme.appBoundaries.sizeLight2,
            color: theme.palette.secondary.main
        },
        cardTextp2: {
            color: '#bb9c2d'
        },
        cardTextlink: {
            color: theme.palette.secondary.main,
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        cardTextp3: {
            fontSize: theme.appBoundaries.sizeLight2
        },
        collectionTitleHolder: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        collectionTitle: {
            color: theme.palette.secondary.main,
            fontSize: theme.appBoundaries.sizeRegular2
        },
        collectionLink: {
            color: "#858585",
            cursor: 'pointer'
        },
        moreIconHolder: {
            width: '100%',
            margin: '2rem 0 0 0 !important'
        },
        moreIcon: {
            float: 'right',
            cursor: 'pointer'
        }
    }
})

export default {useStyle, useStyle2 }
