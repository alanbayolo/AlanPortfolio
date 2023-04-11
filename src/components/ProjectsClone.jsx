//import React from 'react'
import styles, {layout} from "../style";
import { projects } from "../constants";
import { useRef, useEffect } from "react";

{/*const ProjectCard = ({ img, title, content, index, skillTags}) => (*/}
const ProjectCard = ({ image, title, content, index, skillsUsed}) => {
    const targetRef = useRef(null);
    useEffect(() => {
      const updateMousePosition = ev => {
        const targetBoundaries = targetRef.current.getBoundingClientRect();
        const targetX = targetBoundaries.left;
        const targetY = targetBoundaries.top;
        const centerX = targetBoundaries.left - targetBoundaries.width/2;
        const centerY = targetBoundaries.top - targetBoundaries.height/2;
        if (!targetRef.current) return;
        const {clientX, clientY} = ev;
        /*console.log(clientX - targetX,clientY - targetY);*/
        targetRef.current.style.setProperty("--x", `${clientX - targetX}px`);
        targetRef.current.style.setProperty("--y", `${clientY - targetY}px`);
      };
      window.addEventListener('mousemove', updateMousePosition);
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
    return(
        <div className={styles.cardLayout}>
          <div ref={targetRef} className={`${styles.cardSectionmod} gradientmoving`}>
            <div className={styles.cardContent}>
              <h3 className={styles.heading3}>
                {title}
              </h3>
              <p className={styles.CardParagraph}>
              {content}
              </p>
              <ul className={styles.cardSkills}>
                {skillsUsed.map((skill) => (
                  <li key={skill} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.cardImage}>
              <img className="md:invisible rounded-[20px] w-full" src={image} />
            </div>
          </div>
          <div className={styles.cardImage}>
              <img className="invisible md:visible h-[50%] md:h-full rounded-[20px] leftShadow" src={image} />
          </div>
        </div>
)};

const ProjectCardReversed = ({ image, title, content, index, skillsUsed}) => {
  const targetRef = useRef(null);
    useEffect(() => {
      const updateMousePosition = ev => {
        const targetBoundaries = targetRef.current.getBoundingClientRect();
        const targetX = targetBoundaries.left;
        const targetY = targetBoundaries.top;
        const centerX = targetBoundaries.left - targetBoundaries.width/2;
        const centerY = targetBoundaries.top - targetBoundaries.height/2;
        if (!targetRef.current) return;
        const {clientX, clientY} = ev;
        /*console.log(clientX - targetX,clientY - targetY);*/
        targetRef.current.style.setProperty("--x", `${clientX - targetX}px`);
        targetRef.current.style.setProperty("--y", `${clientY - targetY}px`);
      };
      window.addEventListener('mousemove', updateMousePosition);
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
    return(
  <div className={styles.reversedCardLayout}>
    <div ref={targetRef} className={`${styles.reversedCardSectionmod} gradientmoving`}>
      <div className={styles.reversedCardContent}>
        <h3 className={styles.heading3}>
          {title}
        </h3>
        <p className={styles.CardParagraph}>
        {content}
        </p>
        <ul className={styles.cardSkills}>
          {skillsUsed.map((skill) => (
            <li key={skill} className={styles.skillItem}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.cardImage}>
        <img className="md:invisible rounded-[20px] w-full" src={image}/>
      </div>
    </div>
    <div className={styles.reversedCardImage}>
        <img className="invisible md:visible h-[50%] md:h-full rounded-[20px] rightShadow" src={image}/>
    </div>
  </div>
)};

const ProjectsClone = () => {
    
    return (
        <section id="projects" className={layout.section}>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2alt}>Some projects I've worked on</h2>
              <div className="flex md:flex-row flex-col">
                  <div></div>
              </div>
              <div className="absolute z-[3] -left-1/3 w-[25%] h-[40%] rounded-full white__gradient" />
              <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 rounded-full green__gradient" />
              {projects.map((project, index) => {
            return (index+1)%2 !=0 ?
              <ProjectCard key={project.id} {...project} index={index}/>
              :
              <ProjectCardReversed key={project.id} {...project} index={index}/>
          })}
              
            </div>
          
        </section>
    )
}

export default ProjectsClone