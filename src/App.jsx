import styles from "./style";

import {Navbar,About,Footer,Hero,Projects,Contact} from "./components";

const App = () => (
  <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


    <div className={`bg-black px-4 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingXm} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
    <Footer />
  </div>
);

export default App
