import React from 'react'

const query = () => {
    return (
        <div className="container gray">
            <div className="subcontainer">
                <div className='header queryhead'>
                    <div className='head'>Have a Question ?</div>
                    <div className="dort">
                        <div className='dot'></div>
                    </div>
                </div>
                <div className="desc" style={{ display: 'flex', justifyContent: 'center' }}>We will tell you everything you need to know about the Bayz 102</div>
                <div className="query">
                    <div className="querydesc">
                        <div className="ques">WHAT ARE THE UNIQUE FEATURES AND AMENITIES OFFERED AT BAYZ 102?</div>
                        <div className="ans">
                            Bayz 102 boasts luxurious amenities including a rooftop infinity pool, modern fitness center,
                            wellness spa, and aqua gym. It offers family-friendly spaces like a kids' play area, pet park, and
                            daycare, plus leisure options such as lounges, rooftop party areas, and an outdoor cinema.
                            Sports enthusiasts can enjoy a cricket pitch, basketball arena, and jogging track, making Bayz
                            102 a perfect blend of luxury and convenience.
                        </div>
                    </div>
                    <div className="querydesc">
                        <div className="ques">WHAT VIEWS CAN I EXPECT FROM MY APARTMENT AT BAYZ 102?</div>
                        <div className="ans">
                            At Bayz 102 in Business Bay, you can expect views of the Dubai skyline, including the Burj
                            Khalifa, the Dubai Canal, Downtown Dubai, or Dubai Creek, depending on your apartment's
                            location.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default query