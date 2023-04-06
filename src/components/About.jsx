import { skills } from "../constants";
import styles, {layout} from "../style";
import SeeMore from "./SeeMore";
import { profilePic, peace } from "../assets";

const About = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>Nice to meet you!</h2>

        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>I’m Alan and I love building things online and offline. Whether it’s arts, computer science, robots or furniture. I’ve been obsesed with creating things for as long as I can remember. Because of this, I developed the habit of self-teaching at an early age.</p> 
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>My interest in computers sparked the idea to pursue a degree in Mechatronics Engineering, where I learned about Electronics, Internet of Things and Robotics, amongst others aspects of engineering.</p> 
        <p className={`${styles.paragraph} max-w-[560px] mt-5`}> In 2021, after graduating and noticing how much I enjoyed the CS aspect of Mechatronics, I decided to pursue a Diploma in Computer Science.</p>
        {/*<Skills />*/}
        <p className={`${styles.altparagraph} max-w-[550px] mt-5`}>Tech I’ve been working with recently:</p>

        <div className={`${styles.customList} max-w-[550px] mt-2`}>
          <ul className="max-w-md text-white list-inside grid grid-cols-3 gap-1">
            {skills.map((skill) => (
              <li key={skill.id}>{skill.title}</li>
            ))}
          </ul>
        </div>
        <SeeMore />
      </div>

      <div className={`${layout.sectionImgAlt} flex-col`}>
        {/*<img src={profilePic} alt="profile" draggable="false" className="w-[55%] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover: cursor-pointer rounded-lg relative h relative z-[5] md:ml-24 ml-0"/>*/}

        <figure draggable="false" className="relative max-w-sm  cursor-pointer w-[55%] relative h relative z-[5] md:ml-24 ml-0">
          <img className="rounded-lg" src={profilePic} alt="image description" />
          <figcaption className="absolute px-2 pt-4 left-0 top-0 w-full h-full transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <img src={peace} draggable="false" className="sm:w-[35%] w-[40%]" alt="peace" />
          </figcaption>
        </figure>
        <div className="absolute z-[0] w-[30%] h-[65%] -right-1/4  rounded-full white__gradient2"></div>
        {/*<div className="absolute z-[0] w-[40%] h-[30%] -right-1/3  rounded-full bleu__gradient"></div>*/}
      </div>

      {/* gradient start */}
      {/*<div className="absolute z-[3] -left-1/4 w-[30%] h-[30%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[40%] h-[30%] -left-1/2 rounded-full pink__gradient" />*/}
      {/* gradient end */}
    </section>
  )
}

export default About