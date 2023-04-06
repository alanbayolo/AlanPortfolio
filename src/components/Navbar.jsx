import {useState, useEffect} from 'react'

import {close,logo,menu, resume} from '../assets';
import {navLinks} from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  //Hiding behavior
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false)
    }else{
      setShow(true)
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
  }, [])

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <a href=''><img src={logo} alt="Alan Bayolo" className='w-[124px] h-[32px]'/></a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-[#79EE5A] ${index === navLinks.length - 1 ? 'mr-0 text-[#79EE5A] border rounded-lg border-[#79EE5A] hover:bg-[#00ce1174] px-2 py-1' : 'mr-10'}`}>
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>
          
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient-3 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex justify-end items-center flex-1 flex-col'>
              {navLinks.map((nav,index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0 text-[#79EE5A]' : 'mb-4'}`}>
                  <a href={`${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar