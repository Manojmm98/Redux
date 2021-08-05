import { FETCH_USER_REQUEST,FETCH_USER_SUCESS,FETCH_USER_FAILURE, } from "./UserTypes";
import axios from "axios";

//Function for fetchuserrequest
export const fetchUserrequest =()=>{
    return{
        type: FETCH_USER_REQUEST,
    }
}
// Function for fetchusersucccess
export const fetchUsersucccess =(user)=>{
    console.log(user);
    return{
        type: FETCH_USER_SUCESS,
        payload:user
    }
}
// Function for fetchuserfailure

export const fetchUserfailure =(Error)=>{
    return{
        type: FETCH_USER_FAILURE,
        payload:Error
    }
}

// thunk for async function to fetch data 

export const fetchUser =()=>{
    // it is thunk act as a middleware and will dispatch our function to reducer
    return async (dispatch)=>{
        // it will dispatch the userrequest
         dispatch(fetchUserrequest())
         try{
             // we import the data through axios from jsonplaceholder
              let res=await axios.get('https://jsonplaceholder.typicode.com/users');
              let users = res.data;
              //console.log(user);
              // if all work is done then it will dispatch the sucess function
              dispatch(fetchUsersucccess(users))
         }
         catch(e){
             // if any error ocuurs i t will show the error & will dispatch the error function
            let errorMsg = e.message;
            dispatch(fetchUserfailure(errorMsg))
         }
    }
}