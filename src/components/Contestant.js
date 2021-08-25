import React from 'react'
import Loader from "react-loader-spinner";
function Contestant({poll,contestant,load}) {


    // Fuction to set background color
    function getColor(poll,str) {
       
        if (poll.largest[0]==str) {
          return "#c5e0b4";
        }else if(poll.slargest[0] ==str){
          return "#ffe699";
        }else{
          console.log('white')
          return "white";
        }
      }
      if (load){
    return (
        
        <div className="contestants" style={{backgroundColor : getColor(poll,contestant[1])}} > 
            {
           poll.Poll_State!= "voting" ? (
           <div className=""  >
               <h4>{contestant[1]}</h4>
               <p>{contestant[0]} </p>
               
          </div>) :
           (<div className="" >
          <p>{contestant[1]}</p><Loader
          type="Puff"
          color="#00BFFF"
           height={100}
        width={100}
         
       />
      </div>)
         }
         </div>
       
            
    )}else{
        return(
            <div>Loading</div>
        )
    }
}

export default Contestant
