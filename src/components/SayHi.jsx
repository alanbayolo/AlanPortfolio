import React from 'react'
const SayHi = ({styles}) => {
  return (
    <a href="mailto:alanbayolo@hotmail.com" className="place-self-center">
      <button type="button" className={`py-3 px-10 bg-gradient-to-r from-[#35e205] to-[#CCFB54] hover:from-[#CCFB54] hover:to-[#35e205] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-Helvetica font-bold text-[20px] text-primary rounded-full outline-none ${styles} mt-3`}>Say Hi</button>
    </a>
  )
}

export default SayHi