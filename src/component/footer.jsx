import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../img/logofooter.png';

const footer = () => {
    return (
        <div className="container">
                <footer class="footer-distributed">
                    
                    <div class="footer-right">
                        <div className="icons"><FacebookIcon/></div>
                        <div className="icons"><InstagramIcon/></div>
                        <div className="icons"><LinkedInIcon/></div>
                        <div className="icons"><XIcon/></div>
                        <div className="icons"><YouTubeIcon/></div>
                    </div>

                    <div class="footer-left">
                        <img src={logo} />
                        <p class="footer-links">©2024 HJ Real Estates LLC. All Rights Reserved.</p>

                        <p>HJ Real Estates LLC is a company registered in Dubai, United Arab Emirates</p>
                    </div>

                </footer>
        </div>
    )
}

export default footer