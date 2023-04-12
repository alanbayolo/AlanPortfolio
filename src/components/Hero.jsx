import styles from "../style";
import {A} from "../assets";
import GetStarted from "./GetStarted";
import React, {useState, useEffect, useCallback} from "react";
import {client} from '../client';

const Hero = ({selectedLanguage}) => {
  const [heroContent, setHeroContent] = useState([]);
  const [query, setQuery] = useState('*[_type == "heroes"]{'
  +'"hello":hello.'+selectedLanguage+','
  +'"who":who.'+selectedLanguage+','
  +'"what":what.'+selectedLanguage+','
  +'"where":where.'+selectedLanguage+','
  +'}');
  useEffect(() => {
    setQuery('*[_type == "heroes"]{'
    +'"hello":hello.'+selectedLanguage+','
    +'"who":who.'+selectedLanguage+','
    +'"what":what.'+selectedLanguage+','
    +'"where":where.'+selectedLanguage+','
    +'}');
    let mounted = true;
    client.fetch(query)
    .then((data) => {
      if(mounted) {
      setHeroContent(data[0])
      }
    }
    )
    return () => mounted = false;
  },[selectedLanguage, query]);
  /*const [newName, setnewName] = useState("Hi!");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * greetings.length);
    setnewName(greetings[index]);
  }, []);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 800);
      return () => clearInterval(intervalID);
  }, [shuffle]);*/
  /*console.log(heroContent);*/
  return(
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/*<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> DISCOUNT FOR {" "}
            <span className="text-white">1 Month</span> ACCOUNT
          </p>
        </div>*/}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-tight leading-none">
            {/*newName*/} {heroContent.hello}<br className="sm:block hidden"/> {" "}
            <span className="slime-text-gradient">{heroContent.who}</span> {" "}
          </h1>
          {/*<div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
      </div>*/}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">{heroContent.what}</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{heroContent.where}</p>
        <div className="absolute z-[0] w-[37%] h-[30%] -left-1/4  rounded-full white__gradient2"></div>

      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/*<img src={A} alt="logo" draggable="false" className="w-[65%] relative h relative z-[5]" /> older code*/}
        <img src={A} alt="logo" draggable="false" className="w-[45%] relative h relative z-[5]" />
      </div>
      {/*<div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
    </div>*/}
    </section>
  )
}

export default Hero