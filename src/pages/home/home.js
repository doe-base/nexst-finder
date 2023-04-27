import react, {useRef, useState} from 'react'
import useStyles from "./page-style/home-style";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Container, Link, Typography } from '@material-ui/core';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import homeData from '../../fixtures/home-data'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import useRecommender from '../../hooks/useRecommender';




export default function Home({ user, authMethod, setSignInComplete }){

    const navigate = useNavigate()
    const {useStyle, useStyle2} = useStyles
    const classes = useStyle();
    const largeClasses = useStyle2()
    const {menuData, eventData, serivceData} = homeData

    
    const [finalResult, setUserInfo] = useRecommender()

    if(finalResult){
        // console.log(finalResult)
    }   
    

/*
=============================================================== 
//**  Registration status Check
===============================================================
*/
    useEffect(()=>{
        try{
            const url = `${process.env.REACT_APP_API_URL}/user/complete-check`
            const options = {
                url: url,
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                credentials: 'include', 
                withCredentials: true,
                data: {
                    UserID: user,
                    AuthMethod: authMethod,
                }
            };
            axios(options)
            .then(function (response){
                console.log(response.data.complete)
                setSignInComplete(response.data.complete)

                if(response.data.complete == 1){
                    console.log(response.data)
                    setUserInfo(response.data)
                }else if(response.data.complete == 0){
                    navigate('/complete')
                }else{
            
                }
            })
        }
        catch(err){
            console.log(err)
        }

       
    }, [])

    

    
    

    return (
        <Container>
            <main className={classes.small}>

                <div className={classes.top}>
                    <div className={classes.topHeading}><h2>Good evening</h2></div>

                    <div className={classes.iconsHolder}>
                        <div><NotificationsNoneOutlinedIcon style={{margin: '0'}} className={classes.icon}/></div>
                        <div><ThumbUpOutlinedIcon className={classes.icon}/></div>
                        <div><SettingsOutlinedIcon className={classes.icon}/></div>
                    </div>
                </div>

            

                <div className={classes.selectIntrest}>
                    <button className={classes.filterBtn}>Event</button>
                    <button className={classes.filterBtn}>Products</button>
                    <button className={classes.filterBtn}>Service</button>
                    <button className={classes.filterBtn}>Online</button>
                </div>

                
                <div className="more-info"></div>
                <div className={classes.firstSection}>
                    <h2 className={classes.sectionTitle}>What do you crave</h2>
                    <div className={classes.slide}>
                        {
                            menuData.map((item, index) =>{
                                return (

                                    <div className={classes.card} key={index}>
                                        <div className={classes.imgHolder}>
                                            <div className={classes.cardOverlay}></div>
                                            <img src={item.img} alt="" className={classes.img}/>
                                            
                                                <h3 className={classes.cardTitle}>{item.category}</h3>
                                                <div className={classes.bottomLine}> </div>
                                        </div>
                                        <div className={classes.descHolder}>
                                            <FastfoodOutlinedIcon className={classes.cardDescIcon}/>    
                                            <p className={classes.discription}>{item.title}</p>
                                        </div>
                                        <div className={classes.descHolder}>
                                            {/* <MoreOutlinedIcon className={classes.cardDescIcon}/> */}
                                            <p className={classes.discription} style={{textTransform: "inherit"}}>{item.desc.length > 35 ? `${item.desc.substring(0, 35)}...` : item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className={classes.firstSection}>
                    <h2 className={classes.sectionTitle}>Go somewhere today</h2>
                    <div className={classes.slide}>
                        {
                            eventData.map((item, index) =>{
                                return (

                                    <div className={classes.card} key={index}>
                                        <div className={classes.imgHolder}>
                                            <div className={classes.cardOverlay}></div>
                                            <img src={item.img} alt="" className={classes.img}/>
                                            
                                                <h3 className={classes.cardTitle2}>{item.category}</h3>
                                                <div className={classes.bottomLine2}> </div>
                                        </div>
        
                                        <div className={classes.descHolder}>
                                            <p className={classes.discription} style={{textTransform: "capitalize"}}>{item.title.length > 35 ? `${item.title.substring(0, 35)}...` : item.title}</p>
                                        </div>
                                        <div className={classes.descHolder}>
                                            <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                            <p className={classes.discription} style={{textTransform: "inherit"}}>Sat, Mar 25, 10:00 AM</p>
                                        </div>
                                        <div className={classes.descHolder}>
                                            <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                            <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className={classes.firstSection}>
                    <h2 className={classes.sectionTitle}>Looking for a service</h2>
                    <div className={classes.slide}>
                        {
                            serivceData.map((item, index) =>{
                                return (

                                    <div className={classes.card} key={index}>
                                        <div className={classes.imgHolder}>
                                            <div className={classes.cardOverlay}></div>
                                            <img src={item.img} alt="" className={classes.img}/>
                                            
                                                <h3 className={classes.cardTitle}>{item.category}</h3>
                                                <div className={classes.bottomLine}> </div>
                                        </div>
                                        <div className={classes.descHolder}>
                                            <p className={classes.discription}>{item.title}</p>
                                        </div>
                                        <div className={classes.descHolder}>
                                            <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                            <p className={classes.discription}>OPEN: <span style={{color: '#51c151'}}>Opened</span></p>
                                        </div>
                                        <div className={classes.descHolder}>
                                            <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                            <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={classes.navigation}>
                    <div className={classes.navigationInner}>
                        <div className={classes.navIconHolder}>
                            <img src="./images/nav-icons/home.png" alt="" className={classes.navIcon}/> 
                        </div>
                        <div className={classes.navIconHolder}>
                            <img src="./images/nav-icons/search.png" alt="" className={classes.navIcon}/> 
                        </div>
                        <div className={classes.navIconHolder}>
                            <img src="./images/nav-icons/lib.png" alt="" className={classes.navIcon}/> 
                        </div>
                    </div>
                </div>
            </main>
            <div className={classes.space}></div>
            <main className={largeClasses.large}>
                <Typography variant="h1" className={largeClasses.greetings}>Good evening</Typography>
                <div className={largeClasses.line}></div>
                <div className={largeClasses.collectionWrap}>
                    <div className={largeClasses.collectionTitleHolder}>
                        <p className={largeClasses.collectionTitle}>Event happening today</p>
                        <Link to="" className={largeClasses.collectionLink}>See more</Link>
                    </div>
                    <div className={largeClasses.firstCollection}>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/event-pic.avif" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'The Boardroom Conference'.length > 25 ? `${'The Boardroom Conference'.substring(0, 25)}...` : 'The Boardroom Conference'}</p>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Sat, Mar 25, 10:00 AM</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                    <p className={largeClasses.cardTextp3}><span className={largeClasses.cardTextp2}>Conference</span> by <Link to="" className={largeClasses.cardTextlink}>vigiAfrica</Link></p>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/event-pic-2.avif" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'Build Your First Website'.length > 25 ? `${'Build Your First Website'.substring(0, 25)}...` : 'Build Your First Website'}</p>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Sat, Mar 25, 10:00 AM</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                    <p className={largeClasses.cardTextp3}><span className={largeClasses.cardTextp2}>Learning</span> by <Link to="" className={largeClasses.cardTextlink}>vigiAfrica</Link></p>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/event-pic-3.avif" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'2023 IWD: DIGITAL ALL - INNOVATION & TECHNOLOGY FOR GENDER EQUALITY'.length > 25 ? `${'2023 IWD: DIGITAL ALL - INNOVATION & TECHNOLOGY FOR GENDER EQUALITY'.substring(0, 25)}...` : '2023 IWD: DIGITAL ALL - INNOVATION & TECHNOLOGY FOR GENDER EQUALITY'}</p>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Sat, Mar 25, 10:00 AM</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                    <p className={largeClasses.cardTextp3}><span className={largeClasses.cardTextp2}>Serminar</span> by <Link to="" className={largeClasses.cardTextlink}>vigiAfrica</Link></p>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/event-pic-4.avif" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'Aiivon Tech-Job Fair 1.0'.length > 25 ? `${'Aiivon Tech-Job Fair 1.0'.substring(0, 25)}...` : 'Aiivon Tech-Job Fair 1.0'}</p>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Sat, Mar 25, 10:00 AM</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                    <p className={largeClasses.cardTextp3}><span className={largeClasses.cardTextp2}>Learning</span> by <Link to="" className={largeClasses.cardTextlink}>vigiAfrica</Link></p>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>




                <div className={largeClasses.collectionWrap}>
                    <div className={largeClasses.collectionTitleHolder}>
                        <p className={largeClasses.collectionTitle}>What are you craving today</p>
                        <Link to="" className={largeClasses.collectionLink}>See more</Link>
                    </div>
                    <div className={largeClasses.firstCollection}>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/item-2.jpeg" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'diner double'.length > 25 ? `${'diner double'.substring(0, 25)}...` : 'diner double'}</p>
                                    
                                    <p className={largeClasses.cardTextp3}>Nexst found 4 <span className={largeClasses.cardTextp2}>Shawama</span> place(s) near you</p>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/item-5.jpeg" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'egg attack'.length > 25 ? `${'egg attack'.substring(0, 25)}...` : 'egg attack'}</p>
                                    
                                    <p className={largeClasses.cardTextp3}>Nexst found 4 <span className={largeClasses.cardTextp2}>Shawama</span> place(s) near you</p>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/item-1.jpeg" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'buttermilk pancakes'.length > 25 ? `${'buttermilk pancakes'.substring(0, 25)}...` : 'buttermilk pancakes'}</p>
                                    
                                    <p className={largeClasses.cardTextp3}>Nexst found 4 <span className={largeClasses.cardTextp2}>Shawama</span> place(s) near you</p>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/item-6.jpeg" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'oreo dream'.length > 25 ? `${'oreo dream'.substring(0, 25)}...` : 'oreo dream'}</p>
                                    
                                    <p className={largeClasses.cardTextp3}>Nexst found 4 <span className={largeClasses.cardTextp2}>Shawama</span> place(s) near you</p>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>



                <div className={largeClasses.collectionWrap}>
                    <div className={largeClasses.collectionTitleHolder}>
                        <p className={largeClasses.collectionTitle}>Looking for a service</p>
                        <Link to="" className={largeClasses.collectionLink}>See more</Link>
                    </div>
                    <div className={largeClasses.firstCollection}>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/service-1.jpg" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'Day care'.length > 25 ? `${'Day care'.substring(0, 25)}...` : 'Day care'}</p>
                                
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                         <p className={classes.discription}>OPEN: <span style={{color: '#51c151'}}>Opened</span></p>
                                    </div>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/service-2.jpg" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'Carpentary'.length > 25 ? `${'Carpentary'.substring(0, 25)}...` : 'Carpentary'}</p>
                                    
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                         <p className={classes.discription}>OPEN: <span style={{color: '#51c151'}}>Opened</span></p>
                                    </div>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/service-3.jpg" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'Laundry'.length > 25 ? `${'Laundry'.substring(0, 25)}...` : 'Laundry'}</p>
                                
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                         <p className={classes.discription}>OPEN: <span style={{color: '#51c151'}}>Opened</span></p>
                                    </div>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            
                            <div className={largeClasses.eventCard}>
                                <div className={largeClasses.image}>
                                    <img src="./images/service-4.jpg" alt="" className={largeClasses.img}/>
                                </div>
                                <div className={largeClasses.text}>
                                    <p className={largeClasses.cardTextp1}>{'Electrician'.length > 25 ? `${'Electrician'.substring(0, 25)}...` : 'Electrician'}</p>
                                
                                    <div className={classes.descHolder}>
                                        <LocationOnOutlinedIcon className={classes.cardDescIcon}/>
                                        <p className={classes.discription} style={{textTransform: "inherit"}}>Abuja • Abuja, Federal Capital Territory</p>
                                    </div>
                                    <div className={classes.descHolder}>
                                        <AccessTimeOutlinedIcon className={classes.cardDescIcon}/>
                                         <p className={classes.discription}>OPEN: <span style={{color: '#51c151'}}>Opened</span></p>
                                    </div>

                                    <div className={largeClasses.moreIconHolder}>
                                        <MoreHorizIcon className={largeClasses.moreIcon}/>
                                    </div>
                                </div>
                            </div>

                            
                    </div>
                </div>
            </main>
        </Container>
    )
}