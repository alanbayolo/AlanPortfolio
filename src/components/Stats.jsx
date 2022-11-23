import {stats} from "../constants";
import styles from "../style";
import {cplusplus, java, javascript, php, python} from "../assets";

const Stats = () => (
  <section className={`${styles.flexLeft} flex-col flex-wrap sm:mb-20 mb-6`}>
    <h4 className={`font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-gradient`}>My Stack</h4>
    <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <img src={cplusplus} alt="" />
      <img src={java} alt="" />
      <img src={javascript} alt="" />
      <img src={python} alt="" />
      <img src={php} alt="" />
      {/*{stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className={`font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white`}>{stat.value}</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}*/}
    </div>
    

  </section>
)

export default Stats