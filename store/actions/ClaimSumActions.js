
export const FETCH_CLAIMS_DETAILS = 'FETCH_CLAIMS_DETAILS';

import axios from 'axios'

export function GetClaimList() {
    return async dispatch => {
   
      
            const res = await axios
                .get(`http://localhost:7000/claims`);
       
            dispatch(fetchClaimsDetails(res.data));
            return res.data;
        
        
    };
  }



export function fetchClaimsDetails(data) {
    return {
        type: FETCH_CLAIMS_DETAILS,
        payload: {data}
    }
}



