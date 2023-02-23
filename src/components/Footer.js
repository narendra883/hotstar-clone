import classes from './Footer.module.css';
import {Fragment} from "react";
import Github from '../Images/Github.svg'

import Linkedln from '../Images/Linkedln.svg'

const Footer =()=>{
    return(
        <Fragment>
            <div className={classes.footer}>
                <div className={classes.leftFooter}>
                    <div className={classes.leftFooter1}>
                        <div>About</div>
                        <div>Terms Of Use</div>
                        <div>Privacy Policy</div>
                        <div> FAQ</div>
                        <div>FeedBack</div>
                        <div>Careers</div>
                    </div>
                    <div className={classes.leftFooter2}> 
                    All rights reserved to Developer
                    @Narendra
                    </div>
                </div>
                <div className={classes.rightFooter}>
                    <div className={classes.rightFooter1}> Connect With Me</div>
                    <div className={classes.connect}>
                        <div>
                        <a
            href="https://github.com/narendra883"
            target="_blank"
            rel="noreferrer"
          >
                            <img src={Github} alt="github"/>
                            </a>
                        </div>
                        

                        
                        <div>
                        <a
            href="https://www.linkedin.com/in/gunda-narendra-7680a11a9/"
            target="_blank"
            rel="noreferrer"
          >
                        <img src={Linkedln} alt="linkedln"/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;