//import React from 'react'
import styles, {layout} from "../style";
import {conveyorBelt} from "../assets";

{/*const ProjectCard = ({ img, title, content, index, skillTags, links}) => (
  <p>holder</p>
);*/}

const Projects = () => {
  return (
    <section id="projects" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2alt}>Some projects I've worked on</h2>
          <div className="flex md:flex-row flex-col">
              <div></div>
          </div>
          <div className="absolute z-[3] -left-1/3 w-[25%] h-[40%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 rounded-full green__gradient" />
          {/*Start regular card */}
          <div className="relative z-[4] h-auto min-h-[320px] w-[85%] my-3">
            <div className="w-[75%] h-full border border-[#282D33] rounded-[1.3rem] bg-[#171717]">
              <div className="w-[56%] m-4 inset-y-0 left-0 ">
                <h3 className={styles.heading3}>
                  Conveyor Belt Automatization with Robotic arm
                </h3>
                <p className={styles.CardParagraph}>
                Simulation of Robotic Arm  (RB12) in Coppelia Sim, interfaced with Matlab. Calculated the degrees of freedom for the robotic arm and programmed the behavior of the robot and conveyor belt to react to the signal from a proximity sensor.
                </p>
                <ul className="skillList pt-4 inline-flex gap-2">
                  <li className={styles.skillItem}>MatLab</li>
                  <li className={styles.skillItem}>Coppelia</li>
                  <li className={styles.skillItem}>Calculus</li>
                </ul>
              </div>
            </div>
            <div className="z-[5] my-3 w-[53%] absolute inset-y-0 right-0 flex items-center">
                <img className="h-full  leftShadow" src={conveyorBelt} />
            </div>
          </div>
          {/*End regular card */}


          {/*Start inversed card */}
          <div className="relative z-[4] self-end h-auto min-h-[320px] w-[85%] my-3 flex flex-row-reverse">
            <div className="w-[75%] h-full border border-[#282D33] rounded-[1.3rem] bg-[#171717] flex flex-row-reverse">
              <div className="w-[56%] m-4 inset-y-0 text-right">
                <h3 className={styles.heading3}>
                  Conveyor Belt Automatization with Robotic arm
                </h3>
                <p className={styles.CardParagraph}>
                Simulation of Robotic Arm  (RB12) in Coppelia Sim, interfaced with Matlab. Calculated the degrees of freedom for the robotic arm and programmed the behavior of the robot and conveyor belt to react to the signal from a proximity sensor.
                </p>
                <ul className="skillList pt-4 inline-flex gap-2">
                  <li className={styles.skillItem}>MatLab</li>
                  <li className={styles.skillItem}>Coppelia</li>
                  <li className={styles.skillItem}>Calculus</li>
                </ul>
              </div>
            </div>
            <div className="z-[5] my-3 w-[53%] absolute inset-y-0 left-0 flex items-center">
                <img className="h-full rightShadow" src={conveyorBelt} />
            </div>
          </div>
          {/*End inversed card */}

          {/*Start mobile card */}
          {/*<div className="relative z-[4] w-[90%] my-3 place-self-center">
            <div className="h-[437px] border border-[#282D33] rounded-[1.3rem] bg-[#171717]">
              <div className="m-4 inset-y-0 left-0 text-center">
                <h3 className={styles.heading3}>
                  Conveyor Belt Automatization with Robotic arm
                </h3>
                <p className={styles.CardParagraph}>
                Simulation of Robotic Arm  (RB12) in Coppelia Sim, interfaced with Matlab. Calculated the degrees of freedom for the robotic arm and programmed the behavior of the robot and conveyor belt to react to the signal from a proximity sensor.
                </p>
                <ul className="skillList pt-4 inline-flex gap-2">
                  <li className={styles.skillItem}>MatLab</li>
                  <li className={styles.skillItem}>Coppelia</li>
                  <li className={styles.skillItem}>Calculus</li>
                </ul>
              </div>
              <div className="z-[0] mx-3 h-[36%] ">
                <img className="w-full  leftShadow" src={conveyorBelt} />
              </div>
            </div>
            
          </div>*/}
          {/*End mobile card */}

        </div>
        
    </section>
  )
}

export default Projects