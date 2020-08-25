import {FETCH_CLAIMS_DETAILS} from '../actions/ClaimSumActions.js'

const initState ={
    items: [],
    loading: false,
    error: null
};

export default function claimReducer (state = initState, action)  {
  switch (action.type){
   
      case FETCH_CLAIMS_DETAILS:
      return {
            loading: false,           
            items: action.payload.data
           
      }
     
      default: return state
  };  
 
};
