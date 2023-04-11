import { skills } from "../constants";
import styles, {layout} from "../style";
import SeeMore from "./SeeMore";
import { profilePic, peace } from "../assets";
import { Popover } from "flowbite";
import {client} from '../client';
import {useState, useEffect} from "react";

const Mechatronics = ({definition}) => (
      <div data-popover id="popover-description" role="tooltip" className="absolute z-[10] invisible inline-block text-sm text-gray-500 transition-opacity duration-300 border border-[#282D33] rounded-[1.3rem] bg-zinc-800 bg-opacity-87 op shadow-sm opacity-0 w-72">
          <div className="p-3 space-y-2">
            <p className="text-white">{definition}</p>
          </div>
          <div data-popper-arrow></div>
      </div>
);

const About = ({selectedLanguage}) => {
  const [aboutContent, setAboutContent] = useState([]);
  const [query, setQuery] = useState('*[_type == "about"] | order(id asc) {'
  +'title,'
  +'"content":content.'+selectedLanguage+','
  +'}');
  useEffect(() => {
    setQuery('*[_type == "about"] | order(id asc) {'
    +'title,'
    +'"content":content.'+selectedLanguage+','
    +'}');
    let mounted = true;
    client.fetch(query)
    .then((data) => {
      if(mounted) {
        setAboutContent(data.reduce((acc, paragraph)=>{
          return {...acc, [paragraph.title]:paragraph.content}
      },{}));
      }
    }
    )
    return () => mounted = false;
  },[selectedLanguage, query]);
  /*console.log(aboutContent.art);*/
  return (
    <section id="about" className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>{aboutContent.niceToMeetYou}</h2>
        
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>{aboutContent.iAm} <a href="https://www.instagram.com/alandoessomething/?hl=es" className="underline decoration-yellow-400 font-semibold hover:bg-gray-600 hover:text-white">{aboutContent.art}</a>{aboutContent.creating}</p> 
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>{aboutContent.myInterest} <button data-popover-target="popover-description" data-popover-placement="top" type="button"><p className="underline decoration-wavy decoration-cyan-400 font-semibold hover:bg-gray-600 hover:text-white">{aboutContent.mechatronics}</p></button> {aboutContent.iLearned}</p> 
        <p className={`${styles.paragraph} max-w-[560px] mt-5`}> {aboutContent.afterGraduation}</p>
        {/*<Skills />*/}
        <p className={`${styles.altparagraph} max-w-[550px] mt-5`}>{aboutContent.techIWorkWith}</p>

        <div className={`${styles.customList} max-w-[550px] mt-2`}>
          <ul className="max-w-md text-white list-inside grid grid-cols-3 gap-1">
            {skills.map((skill) => (
              <li key={skill.id}>{skill.title}</li>
            ))}
          </ul>
        </div>
        <SeeMore caption={aboutContent.seeMore}/>
      </div>
      <div className={`${layout.sectionImgAlt} flex-col`}>
        {/*<img src={profilePic} alt="profile" draggable="false" className="w-[55%] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover: cursor-pointer rounded-lg relative h relative z-[5] md:ml-24 ml-0"/>*/}

        <figure draggable="false" className="relative max-w-sm  cursor-pointer w-[55%] relative h relative z-[5] md:ml-24 ml-0">
          <img className="rounded-lg" src={profilePic} alt="image description" />
          <figcaption className="absolute px-2 pt-4 left-0 top-0 w-full h-full">
              <img src={peace} draggable="false" className="sm:w-[35%] w-[40%]" alt="peace" />
              <figcaption className="absolute left-6 sm:left-8 top-4 w-full h-full"><span className="z-[2] wave text-[7vw] sm:text-[5vw] md:text-[3vw] lg:text-[3vw]max-text-[2vw]">👋</span></figcaption>
          </figcaption>
        </figure>
        <div className="absolute z-[0] w-[30%] h-[65%] -right-1/4  rounded-full white__gradient2"></div>
        {/*<div className="absolute z-[0] w-[40%] h-[30%] -right-1/3  rounded-full bleu__gradient"></div>*/}
      </div>

      {/* gradient start */}
      {/*<div className="absolute z-[3] -left-1/4 w-[30%] h-[30%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[40%] h-[30%] -left-1/2 rounded-full pink__gradient" />*/}
      {/* gradient end */}
      <Mechatronics definition={aboutContent.definitionMechatronics} />
    </section>
  )
}

export default About