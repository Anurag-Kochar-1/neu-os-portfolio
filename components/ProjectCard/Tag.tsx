import React from 'react'

interface IProps {
    text: string
}

const Tag = (  {text,}: IProps ) => {
    const getTagStyles = () => {
        switch (text) {
          case "HTML":
            return `bg-[#E44D26] text-black text-white`;
    
          case "CSS":
            return `bg-[#369CD6] text-black text-white`;
    
          case "JavaScript":
            return `bg-[#F7DF1E] text-black`;
    
          case "TypeScript":
            return `bg-[#027BCE] text-white`;
    
          case "React JS":
            return `bg-[#00D8FF] text-black`;
    
          case "Next JS":
            return `bg-[#E8E8E8] text-black`;
    
          case "Node JS":
            return `bg-[#8BC500] text-black`;
    
          case `Express JS`:
            return `bg-[#333331] text-white`;
    
          case `MongoDB`:
            return `bg-[#81C564] text-black`;
    
          case `Firebase`:
            return `bg-[#FCCA3F] text-black`;
    
          case `Redux`:
            return `bg-[#764ABC] text-white`;
    
          case `Tailwind CSS`:
            return `bg-[#00B9D8] text-white`;
    
          default:
            return `bg-white text-black`;
        }
      };

  return (
    <div className={`w-min px-2 ${getTagStyles()} border border-black rounded-sm text-center flex justify-center items-center m-1 hover:cursor-pointer`}>
        <span className={`text-sm font-medium uppercase truncate pointer-events-none`}> {text} </span>
    </div>
  )
}

export default Tag