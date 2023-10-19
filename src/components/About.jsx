import React from 'react';

function About () {

    return ( 
        <div name="about" className="w-[full] h-[screen]">
            <div className="w-[full] h-[300px] bg-white z-0">
              <p className="about-heading text-8xl text-center my-[150px]" >Who are we? What do we have to offer?</p>
            </div>
            <div className="about-icon w-[full] h-screen z-10 ">
              <p className='about-text text-white text-4xl md:p-48' >Eti's is the best lounge in the town of Lindley. <br></br>Where we prioritise hospitality and fun. <br></br> You will get the best food in town and follow it down with the coldest drinks in town, whilst relaxing. We want you to feel at home. Listen to the best music, coming from the best sound system. Are you a hip-hop head? We have it. Deep house head? We play it. Soul music? We love it.</p>
            </div>
        </div>
    
    )
}

export default About;