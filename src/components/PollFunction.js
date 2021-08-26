import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getPoll } from "../store/Poll";
import Loader from "react-loader-spinner";
import Contestant from './Contestant';

function PollFunction(prop) {
   
    const {isLoading,poll}= prop
   
    const[load,setLoad]=useState(false)
    
    
    let time =5000
    //Hitting the data every five second
    let interVal;
    useEffect(()=>{
       interVal=setInterval(()=>{
        
        console.log(poll)
        prop.getPoll()
        setLoad(true)
  
      
      },time);

     
      
    },[])

    


    if (isLoading) {
        return <div className="mainloader">
          <div className="poll">
           <h3 >Status : Loading..</h3>

            <br></br>
            <div className="contestants" >
              Contestants
             </div>
            <br></br>
          
            <div className="loader">
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={60}
                width={60}
          
              />
              </div>
     
          

            
          </div>
          </div>
      }
   
    else if(load){
      let status= poll.poll.data.filter((item)=>item[0]=="Poll_State")
     
      return <div className="poll">
      

          
          <h3 >Status : {status[0][1]}</h3>
      
          <br></br>
          <div className="contestants" >
              Contestants
          </div>
          
          <br></br>
          <div className="wraper" >

            {
              poll.poll.data.map((item)=>{
               if (item[0].includes("contestant")) {
                
                return <Contestant key={1} contestant={item } load={load} data={poll.poll}/>
               } else {
                return null
               } 
              })
            }
        
          </div>
    
          </div>;
    }else{
        return (
            <div>
              <br></br>
                <h1>Election will be started in Few Seconds </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    return {
      poll: state.poll,
      isLoading: state.poll.isLoading,
      
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getPoll: (categoryId) => {
        dispatch(getPoll(categoryId));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PollFunction)
