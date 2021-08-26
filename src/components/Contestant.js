import React from 'react'
import Loader from "react-loader-spinner";
function Contestant({data,contestant,load}) {

 

    // Fuction to set background color
    function getColor(poll,str) {
       
        if (poll.largest[0]==str) {
          return "#c5e0b4";
        }else if(poll.slargest[0] ==str){
          return "#ffe699";
        }else{
          
          return "white";
        }
      }
      if (load){
    return (
        

        
        <div className="contestants" style={{backgroundColor : getColor(data,contestant[0])}} > 
            {
           data.data[1][1]!= "voting" ? (
           <div className=""  >
               <h4>{contestant[0]}</h4>
               <p>{contestant[1]} </p>
               
          </div>) :
           (<div className="" >
             <p>{contestant[0]}</p>
         <Loader
          type="Puff"
          color="#00BFFF"
           height={60}
        width={60}
         
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
