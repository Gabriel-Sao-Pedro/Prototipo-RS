import React, {useEffect, useState} from "react";

function Tempo1(){

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState( 5.2*60 )
  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60

  useEffect(() => {
    if(totalTimeInSeconds === 0){
        alert("O tempo Acabou!")
        return
      }
    else if(totalTimeInSeconds === 300){
      alert("Restam 5 minutos!")
      return
    }
    else{
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1)
      }, 1000)
    }
  }, [totalTimeInSeconds])
  return(
    <div>
      <span>
        {minutes.toString().padStart(2, "0")}
      </span>
      <span>:</span>
      <span>
      {seconds.toString().padStart(2, "0")}
      </span>
    </div>
  )
}


export default Tempo1