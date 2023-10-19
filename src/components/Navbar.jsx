import { useEffect, useState } from 'react';
import React from 'react';
import Logo from '../assets/L O U N G E.png';
import {FaTimes, FaBars} from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar () {
  const [show, setShow] = useState(false);

  const HandleShow = () => {
    if (window.scrollY > 100) {
      setShow(true)
    }else {
      setShow(false)
    }
  };

  useEffect (() => {
window.addEventListener("scroll", HandleShow);
return () => window.removeEventListener("scroll", HandleShow)
  }, [] )

  const [nav, setNav] = useState(false);

  const HandleClick = () => {
    setNav(!nav)
  }

    return(
        <div name="navbar" className={`fixed flex justify-between items-center w-full h-[80px] ${show && 'bg-black'}`} >
          <div>
          <Link 
      to="home" 
      smooth={true}  
      duration={500} 
    >
      <img src={Logo} alt="Logo image" className='w-[150px] h-[150px] cursor-pointer ' />
    </Link>
            
          </div>
          <button type='button' className=' hidden sm:flex transition ease-in-out delay-150 bg-gradient-to-r from-white from-10% to-[#C79D60] to-50% duration-300  p-2 rounded-sm text-black text-2xl' >
            <Link 
      to="book" 
      smooth={true}  
      duration={500} 
    >
      Book us
    </Link></button>
           {/* Menu */}
          <div className='w-[25%] px-6'>
            <ul className='text-white hidden md:flex justify-between cursor-pointer'>
              <li>
              <Link 
      to="about" 
      smooth={true}  
      duration={500} 
    >
      About
    </Link>
                </li>

              <li>
              <Link 
      to="events" 
      smooth={true} 
      duration={500} 
    >
      Events
    </Link>
              </li>
              <li>
              <Link 
      to="address" 
      smooth={true} 
      duration={500} 
    >
      Address
    </Link>
                </li>
            </ul>
          </div>

          <div onClick={HandleClick} className='md:hidden bg-[#C79D60] z-10 mx-4'> 
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/*Mobile Menu */}
          <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-cols justify-center items-center text-4xl overflow-hidden cursor-pointer'}>
            <ul className='text-white py-4'>
              <li className='py-6'>
              <Link 
              onClick={HandleClick}
      to="about" 
      smooth={true} 
      duration={500} 
    >
      About
    </Link>
                </li>
              <li className='py-6'>
              <Link 
              onClick={HandleClick}
      to="events" 
      smooth={true} 
      duration={500} 
    >
      Events
    </Link>
                </li>
              <li className='py-6'>
              <Link 
              onClick={HandleClick}
      to="address" 
      smooth={true} 
      duration={500} 
    >
      Address
    </Link>
              </li>
              <li className='bg-gradient-to-r from-white from-10% to-[#C79D60] to-50% hover:bg-transparent p-2 rounded-sm text-black text-2x'>
              <Link 
              onClick={HandleClick}
      to="book" 
      smooth={true} 
      duration={500} 
    >
      Book Us
    </Link>
              </li>
            </ul>
          </div>
        </div>
    )
  }

export default Navbar;