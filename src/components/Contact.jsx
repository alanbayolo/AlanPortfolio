import styles, {layout} from "../style";
import {linkedin, github} from "../assets";
import SayHi from "./SayHi";

const Contact = () => {
  return (
    <section id="contact" className={`${layout.section} relative`}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.headingContact}>Get In Touch ✉️</h2>
          <div className="flex flex-col place-self-center gap-7 mt-7">
            <div className="flex flex-row place-self-center gap-4">
              <a href="https://linkedin.com/in/alanbayolo"><img src={linkedin} alt="LinkeIn" /></a>
              <a href="https://github.com/alanbayolo/"><img src={github} alt="GitHub" /></a>
            </div>
            <a class="email-link" href="mailto:alanbayolo@hotmail.com" className="text-[#CAD1D8] text-[20px]">alanbayolo@hotmail.com</a>
            <SayHi />
            <div className="absolute z-[0] w-[40%] h-[70%] -bottom-2/4 -right-1/4  rounded-full white__gradient3"></div>
            <div className="absolute z-[0] w-[20%] h-[30%] -bottom-2/4 -right-1/4  rounded-full white__gradient3"></div>
          </div>
        </div>
    </section>
  )
}

export default Contact