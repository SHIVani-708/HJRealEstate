import React from 'react'
import './style.css';
import img from '../img/location.png'

const location = () => {
    return (
        <div className='container'>
            <div className="subcontainer">
                <div className='header'>
                    <div className='head'>Location</div>
                    <div className="dort">
                        <div className='dot'></div>
                    </div>
                </div>
                <div className="desc">
                    <img src={img} alt="img" />
                    <div>
                        Bayz 102 is located in the heart of Business Bay, one of Dubai’s most vibrant and sought-after
                        districts. Positioned just minutes away from iconic landmarks like the Burj Khalifa, Dubai Mall,
                        and the Dubai Canal, it offers residents the perfect balance of city convenience and luxurious
                        living. The area is well-connected with major highways, making it easy to access other parts of
                        the city, whether you're heading to the financial district or the nearby beaches. With a wide
                        variety of retail, dining, and entertainment options right at your doorstep, Bayz 102 places you in
                        the center of it all, making it an ideal address for those who crave an upscale urban lifestyle.

                    </div>
                </div>
            </div>

        </div>
    )
}

export default location