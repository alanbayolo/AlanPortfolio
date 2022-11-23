import styles from "../style";
import { discount, spinningA} from "../assets";
import GetStarted from "./GetStarted";
import { greetings } from "../constants";
import React, {useState, useEffect, useCallback} from "react";

const Hero = () => {
  const [newName, setnewName] = useState("Hi!");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * greetings.length);
    setnewName(greetings[index]);
  }, []);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 800);
      return () => clearInterval(intervalID);
  }, [shuffle]);

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
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            {newName} <br className="sm:block hidden"/> {" "}
            <span className="text-gradient-outline">I'm Alan</span> {" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Developer & Engineer</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Currently based @ Montréal, Canada🇨🇦.</p>
        <div className="absolute z-[0] w-[40%] h-[35%] -left-1/4  rounded-full white__gradient2"></div>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={spinningA} alt="billing" draggable="false" className="w-[80%] relative h relative z-[5]" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero