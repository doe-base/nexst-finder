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
            marginLeft: '0.5rem'
        },
        h2: {
            fontWeight: '600'
        },
        fullIcon: {
            color: '#fff',
            fontSize: '2.3rem',
            float: "right",
            margin: '0.5rem'
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
            padding: '0.5rem',
            borderRadius: '0 0.5rem 0.5rem 0',

        },
        tagP: {
            margin: '0',
            fontSize: '1.1rem',
            fontWeight: '500',
            color: '#fff'
            
        },
        goBack: {
            position: 'absolute',
            top: '0',
            left: '0',
            margin: '0.5rem',
            zIndex: '10',
            color: '#fff',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2.3rem'
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
            color: '#fff',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        },
        p: {
            color: '#fff',
            fontSize: '1.2rem'
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
            padding: '0 0.5rem',
            background: 'rgb(0 0 0 / 20%)',
        
        },
        thirdSection: {
            marginLeft: '3rem'
        },
        creditText: {
            color: '#ccc',
            fontSize: '0.8rem'
        },
        brandName: {
            color: '#bb9c2d'
        },
        thirdP: {
            color: '#fff',
            fontSize: '0.9rem',
            lineHeight: '22px'
        },
        thirdPHolder:{
            borderBottom: '0.2px solid #646464',
        },
        forthSection: {
            padding: '0 0.5rem',
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
            marginRight: '1rem'
        },
        fifthSection: {
            textAlign: 'center',
            padding: '1rem 0'
        },
      
        creditText2: {
            color: '#ccc',
            fontSize: '0.8rem',
            margin: '0.5rem 0'
        },
        textHolder:{
            margin: '1.5rem 0',
            display: 'grid'
        },
        contactHolder: {
            margin: '1.5rem 0'
        },
        contactBtn: {
            margin: '0 0.5rem'
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
            padding: '0.5rem'
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
            padding: '0.5rem'
        },
        thumbIcon: {
            fontSize: '1.9rem',
            color: '#999999'
        }

    }
})

export default useStyles
