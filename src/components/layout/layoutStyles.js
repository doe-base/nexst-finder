import { makeStyles } from "@material-ui/core";


const drawerWidth = 200;

const useStyle = makeStyles((theme)=>{
    return{
        mainRoot:{
            // display: 'flex',
        },
        children: {
            [theme.breakpoints.up('md')]:{
                paddingLeft: `${drawerWidth}px`
            },
        },
        drawer: {
            display: 'none',
            width: drawerWidth,

          [theme.breakpoints.up('md')]:{
            display: 'block',
          }
        },
        drawerPaper: {
          width: drawerWidth,
          backgroundColor: 'rgba(235,235,245,.03)',
          borderRight: '1px solid hsla(0,0%,100%,.1)',
        //   boxSizing: 'border-box !important',
        //   padding: theme.appBoundaries.sizeRegular,

        },
        list: {
            padding: `${theme.appBoundaries.sizeRegular3} 0`
        },
        active: {
          borderRight: `2px solid ${theme.palette.primary.main}`,
          color: '#fff',
        },
        listBtn: {
            color: '#858585',
            fontWeight: `${theme.typography.fontWeightLight} !important`,
        },
        listBtn2:{
            fontWeight: `${theme.typography.fontWeightLight} !important`,
            color: '#858585',
            
        },
        navIcon: {
            width: '100%',
            filter: 'invert(100%) sepia(0%) saturate(1691%) hue-rotate(318deg) brightness(103%) contrast(107%)',
        },
        listItemIcon: {
            width: theme.appBoundaries.sizeRegular,
            minWidth: '0',
            marginRight: theme.appBoundaries.sizeRegular
        },
        title:{
            padding: theme.spacing(2),
            color: theme.palette.primary.main
        },
        // App Bar
        appbar: {
          width: `calc(100% - ${drawerWidth}px) !important`,
          backgroundColor: '#1c1c1c',
          height: '2.3rem',
          display: 'none',
          [theme.breakpoints.up('md')]:{
            display: 'block'
          }
        },
        toolbar:{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '2.3rem',
        },
        toolbarRegular: {
            minHeight: '0 !important',
        },
        date: {
            color: `${theme.palette.secondary.main} !important`
        },
        motto: {
            color: `${theme.palette.primary.main} !important`,
            fontFamily: `'Fasthand', cursive`,
            fontSize: '1.2rem'
        },
        drawerLine: {
            width: '90%',
            height: '1px',
            backgroundColor: 'hsla(0,0%,100%,.1)',
            margin: '0 auto',
            
        },
        pillDiv: {
            backgroundColor: '#000',
            height: '1.2rem',
            // width: '8rem',
            borderRadius: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            cursor: 'pointer'
        },
        avatar: {
            marginRight: theme.spacing(1),
            color: theme.palette.secondary.main,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            backgroundColor: 'hsla(0,0%,100%,.1)',
            borderRadius: '50%',
          },
          userName: {
            color: theme.palette.secondary.main,
            fontSize: '1rem'
          },
          avatarIcon: {
            fontSize: '1.2rem'
          }
    }
});


export default {useStyle}