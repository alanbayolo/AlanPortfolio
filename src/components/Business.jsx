import { features } from "../constants";
import styles, {layout} from "../style";
import Button from "./Button";

const FeatureCard = ({icon,title,content,index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card cursor-pointer`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Nice to meet you!</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I’m Alan, I love building things online and offline. Whether it’s arts, computer science, robots or a bench. I’ve been obsesed with creating something for as long as I can remember. 
        This resulted in me teaching myself a bunch of stuff, going to university to get a degree in Mechatronics Engineering and, lately, getting a graduate diploma in Computer Science.
        </p>

        <Button styles="mt-10" />
        
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 bottom-0 w-[30%] h-[30%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[30%] h-[30%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </section>
  )
}

export default Business