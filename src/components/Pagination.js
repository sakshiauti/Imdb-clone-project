import React,{useState} from 'react';

function Pagination({pageProp,goBack,goAhead}) {
 
  return (<>
    <div className="w-full 
    flex justify-center
    mb-8
    ">
        <button className="
        p-2
        border-2
        border-indigo-500
        text-indigo-500
        border-r-0
        rounded-l-xl"
        onClick={goBack} //for previous
        >Previous</button>
        
        <button className="
        p-2
        border-2
        border-indigo-500
        text-indigo-500
        bg-gray-300">
          {pageProp}
        </button>

        <button className="
        p-2
        border-2
        border-indigo-500
        text-indigo-500
        border-l-0
        rounded-r-xl"
        onClick={goAhead}  //now when we click on next btn it will work[bcoz of using goAhead function]
        >Next</button>
    </div>
  </>)
}

export default Pagination