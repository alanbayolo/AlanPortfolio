import {useState, useEffect} from 'react';
import {close,logo,menu, resume} from '../assets';
import {navLinks, languages} from '../constants';
import { Link } from "react-scroll";
import LanguageSwitchSelect from "./LanguageSwitchSelect";
import {client} from '../client';

const ResumeLink = ({title}) => {
  return(
    <li><a href={resume} className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-[#79EE5A] border rounded-lg border-[#79EE5A] hover:bg-[#00ce1174] px-2 py-1`}>
      {title}
    </a></li>
  )
}

const LinkElement = ({nav}) => {
  return(
    <li key={nav.link} className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-[#79EE5A] mr-10`}>
      <Link activeClass="active" smooth spy to={nav.link}>{nav.title}</Link>
    </li>
  )
}

const Navbar = ({selectedLanguage, languageSelection}) => {
  const [toggle, setToggle] = useState(false);
  //Hiding behavior
  /*const [show, setShow] = useState(true);*/
  const [links, setLinks] = useState([]);
  const [query, setQuery] = useState('*[_type == "navLinks"] | order(id asc) {link,"title":title.'+selectedLanguage+'}');
  useEffect(() => {
    setQuery('*[_type == "navLinks"] | order(id asc) {link,"title":title.'+selectedLanguage+'}');
    let mounted = true;
    client.fetch(query)
    .then((data) => {
      if(mounted) {
      setLinks(data)
      }
    }
    )
    return () => mounted = false;
  },[selectedLanguage, query]);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <a href=''><img src={logo} alt="Alan Bayolo" className='w-[124px] h-[32px]'/></a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <li>
          <LanguageSwitchSelect selectedLanguage={selectedLanguage} languageSelection={languageSelection} />
        </li>
        {links.map((nav,index) => (
          nav.link === "resume" ? <ResumeLink title={nav.title} /> : <LinkElement nav={nav} />))
        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>

              <li>
                <LanguageSwitchSelect selectedLanguage={selectedLanguage} languageSelection={languageSelection}/>
              </li>

              <a href={resume} className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-[#79EE5A] border rounded-lg border-[#79EE5A] hover:bg-[#00ce1174] px-2 py-1`}>

                  Resume

              </a>
      </div>
    </nav>
  )
}

export default Navbar