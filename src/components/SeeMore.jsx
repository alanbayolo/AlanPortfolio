import {resume} from '../assets';

const SeeMore = ({styles, caption}) => {
  return (
    <a href={resume}>
      <button type="button" className={`py-[6px] px-2 bg-gradient-to-r from-[#35e205] to-[#CCFB54] hover:from-[#CCFB54] hover:to-[#35e205] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-Helvetica font-bold text-[16px] text-primary rounded-[10px] outline-none ${styles} mt-3`}>{caption}</button>
    </a>
  )
}

export default SeeMore