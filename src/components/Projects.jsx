//import React from 'react'
import styles, {layout} from "../style";
import {conveyorBelt} from "../assets";
import { projects } from "../constants";

{/*const ProjectCard = ({ img, title, content, index, skillTags}) => (*/}
const ProjectCard = ({ image, title, content, index, skillsUsed}) => (
  <div className={styles.cardLayout}>
    <div className={styles.cardSection}>
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
        <img className="invisible md:visible h-full rounded-[20px] leftShadow" src={image} />
    </div>
  </div>
);

const ProjectCardReversed = ({ image, title, content, index, skillsUsed}) => (
  <div className={styles.reversedCardLayout}>
    <div className={styles.reversedCardSection}>
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
        <img className="invisible md:visible h-full rounded-[20px] leftShadow" src={image}/>
    </div>
  </div>
);

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
          {/*features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))*/}
          {/*projects.map((project, index=1) => (
          <ProjectCard key={project.id} {...project} index={index}/>
          ))*/}

          {projects.map((project, index) => {
            return (index+1)%2 !=0 ?
              <ProjectCard key={project.id} {...project} index={index}/>
              :
              <ProjectCardReversed key={project.id} {...project} index={index}/>
          })}

          {/*<ProjectCardReversed />*/}
        </div>
        
    </section>
  )
}

export default Projects