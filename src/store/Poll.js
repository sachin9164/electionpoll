import dummyApi from "../dummy";

export const GET_INIT = "items/GET_INITS";
export const GET_DONE = "items/GET_DONES";
export const SET_SELECTED_POLL = "categories/SET_SELECTEDS";

export function getPoll() {
  return async dispatch => {
 
    dispatch({ type: GET_INIT });
    let item = await dummyApi.getPoll();
    //console.log(item)
    let entries = Object.entries(item);
    let sorted = entries.sort((a, b) => a[1] - b[1]);
    var largest = [1,1] ;
    var slargest =[1,1] ;
     
    var x= {}
    //console.log(sorted)
     if (item.Poll_State=="Counting") {
          largest = sorted[sorted.length-1];
          x = {...item,largest,slargest}
          
        } else if(item.Poll_State=="Declared") {
          largest = sorted[sorted.length-1];
          slargest = sorted[sorted.length-2]
          x= {...item,largest,slargest}
     }else{
              x = {...item,largest,slargest}
     }

    console.log(x)
    
    dispatch({
      type: GET_DONE,
      payload: x
    });
  };
 
}


export default function poll(state = { poll: [{
  "S.No": 0,
  "Poll_State": "voting",
  "contestant1": 0,
  "contestant2": 0,
  "contestant3": 0,
  "contestant4": 0,
  "color" : "white",
}], isLoading: false ,setSelectedPoll: {}}, action) {
  switch (action.type) {
    case GET_INIT:
      return { ...state, isLoading: true };
    case GET_DONE:
      return { ...state, isLoading: false, poll: action.payload };
      case SET_SELECTED_POLL:
        return { ...state, setSelectedPoll : action.payload };
     
       default:
      return state;
  }
}
