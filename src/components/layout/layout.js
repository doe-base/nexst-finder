import React from 'react'
import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from './layoutStyles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { format } from "date-fns"
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';





export default function Layout({ children }){
   const {useStyle} = useStyles

    const classes = useStyle();
    const location = useLocation();
    const navigate = useNavigate();
    
    const menuItem = [
        {
            text: 'Expore',
            imgElement: <img src="./images/nav-icons/home.png" alt="" className={classes.navIcon}/>,
            path: '/'
        },
        {
            text: 'Search',
            imgElement: <img src="./images/nav-icons/search.png" alt="" className={classes.navIcon}/>,
            path: '/search'
        },
        {
            text: 'Library',
            imgElement: <img src="./images/nav-icons/lib.png" alt="" className={classes.navIcon}/>,
            path: '/library' 
        }
    ]

    const handleLogout =()=>{
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, '_self')
    }


    return (
        <main className={classes.mainRoot}>
            {/* side draw */}
            <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{ 
                paper: classes.drawerPaper,
                 }}>
                <div>
                    <Typography variant="h5" className={classes.title}>Nexst Finder</Typography>
                </div>

                 <div className={classes.drawerLine}></div>


                {/* List / Links */}
                <List className={classes.list}>
                {menuItem.map((item) => (
                    <ListItem key={item.text} button className={location.pathname == item.path ? classes.active : classes.listBtn} onClick={() => navigate(item.path)} >
                        <ListItemIcon classes={{ 
                            root: classes.listItemIcon,
                        }}>{item.imgElement}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
                </List>


                <div className={classes.drawerLine}></div>

                <List className={classes.list}>
                    <ListItem button className={classes.listBtn2}>
                        <ListItemText>Following</ListItemText>
                    </ListItem>
                    <ListItem button className={classes.listBtn2}>
                        <ListItemText>Likes</ListItemText>
                    </ListItem>
                    <ListItem button className={classes.listBtn2}>
                        <ListItemText>Activity log</ListItemText>
                    </ListItem>
                </List>


            </Drawer>

            <div className={classes.oneSide}>
                {/* app bar */}
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar className={classes.toolbar} classes={{regular	: classes.toolbarRegular}}>
                        <Typography className={classes.date} >
                            {/* {format(new Date(), 'do MMMM')} */}
                        </Typography>
                        <Typography className={classes.motto}>
                            find your next stop... 
                        </Typography>
                            
                        <div className={classes.pillDiv}>
                            <div className={classes.avatar}>
                                <PermIdentityOutlinedIcon className={classes.avatarIcon}/>
                            </div>
                            <p className={classes.userName} onClick={handleLogout}>logout</p>
                        </div>
                    </Toolbar>
                </AppBar>

                <div className={classes.children}>
                    {children}
                </div>
            </div>
        </main>
    )
}