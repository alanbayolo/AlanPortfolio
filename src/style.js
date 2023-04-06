const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2OLD: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading2: "font-Helvetica font-bold xs:text-[40px] text-[40px] text-white xs:leading-[76.8px] leading-none w-full",
    heading2alt: "font-Helvetica font-bold xs:text-[36px] text-[36px] text-white xs:leading-[76.8px] leading-none w-full",
    heading3: "font-Helvetica font-semibold xs:text-[24px] text-[24px] text-white xs:leading-[1.2] leading-none w-full",
    headingContact: "font-Helvetica font-semibold text-center xs:text-[48px] text-[48px] text-white xs:leading-[1.2] leading-none w-full",
    CardParagraph: "font-Helvetica font-semibold text-[#838990] text-[19px] leading-[1.25] pt-2",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[1.37]",
    altparagraph: "font-Helvetica font-bold slime__gradient__2tone text-[20px] leading-[30.8px]",
    customList: "font-Helvetica font-normal text-white text-[16px] leading-[1.5]",

    skillItem: "bg-[#8F8F8F] w-min bg-opacity-20 py-1 px-3 rounded-lg",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingXm: "sm:px-24 px-6",
    paddingX: "sm:px-20 px-6",
    paddingY: "sm:py-28 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionImgAlt: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;