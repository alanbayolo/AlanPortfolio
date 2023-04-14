//import React from 'react'
import styles, {layout} from "../style";
import { projects } from "../constants";
import { useRef, useState, useEffect } from "react";
import {urlFor, client} from '../client';
import MuxPlayer from '@mux/mux-player-react'
import {suspend} from 'suspend-react'

const DocumentWithImage = ({}) => {
  return(0);
}

const VideoPlayer = ({size, source}) => {
  return(size == 'mobile' ? 
  <MuxPlayer className="md:invisible rounded-[20px] w-full" playbackId={source} /> :
  <MuxPlayer className="invisible md:visible rounded-[20px] leftShadow" playbackId={source} />);
}

const ImageElement = ({size, source}) => {
  return(size == 'mobile' ? 
  <img className="md:invisible rounded-[20px] w-full" src={urlFor(source)} /> :
  <img className="invisible md:visible rounded-[20px] leftShadow" src={urlFor(source)} />);
}

const Media = ({type, image, playbackId, size}) => {
  console.log(type);
  switch(type){
    case 'image':
      return(<ImageElement size={size} source={image} />);
    case 'video':
      return(<suspend><VideoPlayer size={size} source={playbackId} /></suspend>);
    case 'document':
      return(0);
    default:
      return(0); 
  }
}

{/*const ProjectCard = ({ img, title, content, index, skillTags}) => (*/}
const ProjectCard = ({ image, title, content, type, playbackId, skills}) => {
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
    let object = {type, playbackId, image};
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
                {skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.cardImage}>
              <Media {...object} size={'mobile'} />
              {/*<img className="md:invisible rounded-[20px] w-full" src={urlFor(image)} />*/}
            </div>
          </div>
          <div className={styles.cardImage}>
              <Media {...object} size={'full'}/>
              {/*<img className="invisible md:visible h-[50%] md:h-full rounded-[20px] leftShadow" src={urlFor(image)} />*/}
          </div>
        </div>
)};

const ProjectCardReversed = ({ image, title, content, type, playbackId, skills}) => {
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
    let object = {type, playbackId, image};
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
          {skills.map((skill) => (
            <li key={skill} className={styles.skillItem}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.cardImage}>
        <Media {...object} size={'mobile'}/>
        {/*<img className="md:invisible rounded-[20px] w-full" src={urlFor(image)}/>*/}
      </div>
    </div>
    <div className={styles.reversedCardImage}>
        <Media {...object} size={'full'}/>
        {/*<img className="invisible md:visible h-[50%] md:h-full rounded-[20px] rightShadow" src={urlFor(image)}/>*/}
    </div>
  </div>
)};

const ProjectsClone = ({selectedLanguage}) => {
  const made = {"en": "Some projects I've built",
                "fr": "Quelques projets que j'ai fait",
              "es": "Algunos projectos que he realizado"};
  const [sectionTitle, setSectionTitle] = useState([]);
  const [projectObjects, setProjectObjects] = useState([]);
  const [query, setQuery] = useState('*[_type == "projects"] | order(id asc) {'
  +'"title":title.'+selectedLanguage+','
  +'"content":content.'+selectedLanguage+','
  +'skills,id,image,type,"playbackId": video.asset->playbackId'
  +'}');
  useEffect(() => {
    setSectionTitle(made[selectedLanguage]);
    setQuery('*[_type == "projects"] | order(id asc) {'
    +'"title":title.'+selectedLanguage+','
    +'"content":content.'+selectedLanguage+','
    +'skills,id,image,type,"playbackId": video.asset->playbackId'
    +'}');
    let mounted = true;
    client.fetch(query)
    .then((data) => {
      if(mounted) {
        setProjectObjects(data);
      }
    }
    )
    return () => mounted = false;
  },[selectedLanguage, query]);
  console.log(projectObjects[0]);
    return (
        <section id="projects" className={layout.section}>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2alt}>{sectionTitle}</h2>
              <div className="flex md:flex-row flex-col">
                  <div></div>
              </div>
              <div className="absolute z-[3] -left-1/3 w-[25%] h-[40%] rounded-full white__gradient" />
              <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 rounded-full green__gradient" />
              {projectObjects.map((project, index) => {
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