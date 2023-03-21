import react from 'react'
import useStyles from './page-styles/single-style'
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ShareSharpIcon from '@material-ui/icons/ShareSharp';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

import { Button } from '@material-ui/core';



export default function Single(){

    // Send info to determine style like image and color with useStyles

    const classes = useStyles() 

    return(
        <main className={classes.main}>
            <div><ChevronLeftIcon className={classes.goBack}/></div>
            <div className={classes.top}>
                <div className={classes.overlay}>
                    <FullscreenIcon className={classes.fullIcon}/>
                    <div className={classes.tag}>
                        <p className={classes.tagP}>CONFERENCE</p>
                    </div>
                    <div className={classes.mainTitle}>
                        <h2 className={classes.h2}>The Boardroom Conference</h2>
                    </div>
                </div>
            </div>
                <div className={classes.colorLine}></div>
                <div class="arrow-down"></div>

            <div className={classes.bottom}>

                <div className={classes.firstSection}>
                    <div className={classes.half}>
                        <p className={classes.p} style={{marginRight: '0.5rem'}}>commit</p>
                        <ThumbUpSharpIcon />
                    </div>
                    <div className={classes.shortLine}></div>
                    <div className={classes.half}>
                        <p className={classes.p} style={{marginRight: '0.5rem'}}>share</p>
                        <ShareSharpIcon />
                    </div>
                </div>
                
                <div className={classes.secondSection}>
                    <div>
                        <p className={classes.creditText}><span>By</span><span className={classes.brandName}>GAZAfrica</span><br />
                            <span>207 followers</span></p>
                    </div>
                    <div>
                        <Button variant="contained" size="small">Follow</Button>
                    </div>
                </div>

                <div className={classes.thirdSection}>
                    <div className={classes.thirdPHolder}>
                        <p className={classes.thirdP}>
                            <span>Time:</span><br />
                            10:00 AM (WAT)
                        </p>
                    </div>
                    <div className={classes.thirdPHolder}>
                        <p className={classes.thirdP}>
                            <span>Date:</span><br />
                             Fri, Mar 17, 2023
                        </p>
                    </div>
                    <div className={classes.thirdPHolder}>
                        <p className={classes.thirdP}>
                            <span>Location:</span><br />
                            Eko conference center, Banana Island, Thrid Mainland Bringe, Lagos, Nigeria
                        </p>
                    </div>
                    <div className={classes.thirdPHolder}>
                        <p className={classes.thirdP}>
                            <span>Duration:</span><br />
                            6 hours
                        </p>
                    </div>
                    <div className={classes.thirdPHolder} style={{border: 'none'}}>
                        <p className={classes.thirdP}>
                            <span>Entry fee:</span><br />
                            free
                        </p>
                    </div>
                </div>

                <div className={classes.forthSection}>
                    <h3 className={classes.p}>More about this event</h3>
                    <p className={classes.thirdP}>
                        To celebrate International Women's Day this March, our "Tech Jewel" community will be hosting an in-person event for 200+ women from a variety of sectors (Health, Technology, Finance, Education, etc.).</p>
                    <p className={classes.thirdP}>
                        This conference will bring together astounding female leaders & innovators with key activities focused on recognizing the solutions and achievements gained by women as well as offering channels for open discourse, panel sessions, fireside chats & presentations by keynote speakers.  Our theme is: "Women In Tech: Embracing Equity."</p>
                        <p className={classes.thirdP}>
                        Don't miss out on your chance to join inspiring female leaders and innovators in recognizing the solutions and achievements made by women in tech!</p>
                        <p className={classes.thirdP}>
                        Register for our International Women's Day event today and be a part of the empowering conversations and activities that will be taking place. Help us spread the message of embracing equity and join us in celebrating the progress we have made!</p>

                        <div className={classes.imgsHolder}>
                            <div className={classes.imgScroll}>
                                
                                <img src="./images/service-9.jpg" alt="" className={classes.Img}/>
                                <img src="./images/service-10.jpg" alt="" className={classes.Img}/>
                                <img src="./images/ex-1.avif" alt="" className={classes.Img}/>
                                <img src="./images/service-10.jpg" alt="" className={classes.Img}/>
                                <img src="./images/ex-2.avif" alt="" className={classes.Img}/>
                                
                            </div>
                        </div>
                </div>

                <div className={classes.fifthSection}>
                    <div className={classes.textHolder}>
                        <span className={classes.creditText2}>Organized by</span>
                        <span className={classes.p} style={{color: "#bb9c2d"}}>GAZAfrica</span>
                    </div>
                    <div className={classes.textHolder}>
                        <span className={classes.p} style={{color: "#bb9c2d"}}>207</span>
                        <span className={classes.creditText2}>followers</span>
                    </div>
                    <div className={classes.contactHolder}>
                        <Button variant="outlined" size="small" color="secondary"  className={classes.contactBtn}>Contact</Button>
                        <Button variant="contained" size="small" className={classes.contactBtn}>Follow</Button>
                    </div>
                </div>

            </div>
        </main>
    )
}