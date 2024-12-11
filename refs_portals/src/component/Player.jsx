// import React, { useEffect, useState } from 'react'

// const Player = () => {
//    const [playerName,setPlayerName]= useState('')
//    const [submitted,setSubmitted]=useState(false)
//    function handleChange(e)
//    {
//     setSubmitted(false)
// setPlayerName(e.target.value)


//    }
//    function submitChange()
//    {
// setSubmitted(true)
//    }

//    useEffect(()=>{
//     console.log(playerName);
//    },[playerName])
//   return (
//     <section className='player'>
//         <h1>Welcome {submitted? playerName :"unknown entity"} </h1>
//         <p>
//         <input type="text" onChange={handleChange} value={playerName}/>
// <button onClick={submitChange}>Set Name</button>
//         </p>

      
//     </section>
//   )
// }

// export default Player




// // useRef 
import  { useEffect, useRef, useState } from 'react'

const Player = () => {
   const [playerName,setPlayerName]= useState(null)

   const enterName= useRef()
  
   function submitChange()
   {

setPlayerName(enterName.current.value)
enterName.current.value=''
   }

   useEffect(()=>{
console.log(playerName);  // it will not re-render the page 

   },[playerName])
  return (
    <section className='player'>
        {/* <h1>Welcome {playerName? playerName :"unknown entity"} </h1>  INSTEAD OF USING THIS WAY*/} 
        <h1>Welcome {playerName??"unknown entity"} </h1>

        <p>
        <input type="text" ref={enterName} />
<button onClick={submitChange}>Set Name</button>
        </p>

      
    </section>
  )
}

export default Player