import { FETCH_USER_REQUEST,FETCH_USER_SUCESS,FETCH_USER_FAILURE, } from "./UserTypes";
// set the intial state, loading as false users are empty and error ia lasoempty string
const intialstate={
    loading: false,
    users: [],
    error:''
}
// create reducer function
const userReducer=(state=intialstate, action)=>{
// there will 3 cases of actions
//console.log(state);
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return{...state,loading:true}
            // here user is comming from the action as payload that given in the user action 
        case FETCH_USER_SUCESS:
            return{error:'',loading:false,users:action.payload}
        case FETCH_USER_FAILURE:
            return{users:[],loading:false,error:action.payload}
        default:
           return state
    }

}
export default userReducer