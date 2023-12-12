import React from 'react';

const Portfolio = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="border-t-[2px] border-[#ffff] border-l-0 border-r-0 border-b-0 w-[100%] h-[100%] flex flex-row px-[11vw]">
       <div className=" h-[75%] w-[35vw] shadow-lg mr-[2vw] mt-[2vh] rounded-sm drop-shadow-2xl shadow-[#272727] bg-baseRed bg-opacity-[.15] flex justify-start" >

       </div>
       <div className=" h-[75%] w-[35vw] shadow-lg ml-[2vw] rounded-sm drop-shadow-2xl shadow-[#272727] bg-baseBeige bg-opacity-[.15] mt-[23vh] flex justify-end" >

       </div>
      </div>
    </div>
  )
}

export default Portfolio;