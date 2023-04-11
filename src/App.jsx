import styles from "./style";

import {Navbar,About,Footer,Hero,Projects,Contact, ProjectsClone} from "./components";
import { useState } from "react";


const App = () => {
  const [selectedLanguage, setLanguage] = useState("en");
  /*console.log(selectedLanguage);*/
  return(
  <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar selectedLanguage={selectedLanguage} languageSelection={setLanguage}/>
      </div>
    </div>


    <div className={`bg-black px-4 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero selectedLanguage={selectedLanguage} />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingXm} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About selectedLanguage={selectedLanguage} />
        {/*<Projects />*/}
        <ProjectsClone />
        <Contact selectedLanguage={selectedLanguage}/>
      </div>
    </div>
    <Footer selectedLanguage={selectedLanguage}/>
  </div>
)};

export default App
