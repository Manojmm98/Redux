// Reducer is a pure function which changes the state imuutativly
// Reducer will take two argument one is state and another is action 

const intialstate ={
    noofBalls:20
}

const BUY_BALL = 'BUY_BALL';
// we are passing state as intialstate because if we make any changes to it then it will be visible every where h
const BallReducer =(state=intialstate, action)=>{
     switch(action.type) {
         case BUY_BALL:
             return {...state,noofBalls:state.noofBalls-1}
         default:
             return state
     }
}
export default BallReducer