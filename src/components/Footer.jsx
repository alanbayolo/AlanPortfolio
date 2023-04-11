import {useState, useEffect} from "react";

const Footer = ({selectedLanguage}) => {
  const made = {"en": "Made with",
                "fr": "Fait avec",
              "es": "Hecho con amor"};
  const [text, setText] = useState([]);
  useEffect(() => {
    setText(made[selectedLanguage]);
  },[selectedLanguage]);
  return (
    <div className='w-full bg-[#0F0F0F] font-helvetica text-[15px] border-t-[1.5px] border-[#282D33] py-3 z-[5] text-center text-[#CAD1D8]'>{text} ❤️ Alan Bayolo 2023</div>
  )
}

export default Footer