import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getPoll } from "../store/Poll";
import Contestant from './Contestant';
function PollFunction(prop) {
    let finalArray = []
    const {isLoading,poll}= prop
   
    const[load,setLoad]=useState(false)
  
    let time =5000
    //Hitting the data every five second
    useEffect(()=>{

      setInterval(()=>{
        prop.getPoll()
        setLoad(true)
  
      },time);
       
    },[])


    if (isLoading) {
        return <div className="loader">Loading...</div>;
      }
   
    else if(load){
        
      return <div className="poll">
          {/* <p>{array[0]}</p> */}
          
          <h3 >Status : {poll.poll.Poll_State}</h3>
      
          <br></br>
          <div className="contestants" >
              Contestants
          </div>
          <br></br>
          <div className="wraper" >
           <Contestant poll={poll.poll} contestant={ [poll.poll.contestant1,'contestant1'] } load={load}/>
            <Contestant poll={poll.poll} contestant={[poll.poll.contestant2,'contestant2']} load={load}/>
            <Contestant poll={poll.poll} contestant={[poll.poll.contestant3,'contestant3']} load={load}/>
            <Contestant poll={poll.poll} contestant={[poll.poll.contestant4,'contestant4']} load={load}/> 
          </div>
    
          </div>;
    }else{
        return (
            <div>
              <br></br>
                <h1>Election will be started in Few Seconds</h1>
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
