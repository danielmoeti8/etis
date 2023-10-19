import React from "react";
import {FaFacebook} from 'react-icons/fa'

function Home () {
  return(
    <div className="home flex w-[100%] h-[100vh]">

      {/* Social Media */}
      <div className="flex bottom-[20%] px-6  justify-between items-end py-6">
       <a href="https://web.facebook.com/profile.php?id=100087103557194">
       <FaFacebook size={30} className="icon" />
       </a>
       <p className="text-white px-[550px] ">Mon-Sun | 10am-2am</p>
      </div>
    </div>
  )
}

export default Home;