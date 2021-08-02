import React from 'react'
import {buyball} from './ReduxFile/Ball/BallAction';
import {connect} from 'react-redux'
function BallContainer(props) {
    console.log('ball render');
    return (
         
        <div>
            <h2>No of ball - {props.noofBalls}</h2>
            <button onClick={props.buyball}>Buy  balls</button>
        </div>
         
        
      
    
    )
}
// there are two method of ball container 
// 1st one will read the data from global state---->mapStatetoProps
// 2nd one will dispatch the action ---------->mapDispatchToProps

// mapStateToProps return the updated number of balls

// we placed our reducer insidre root recuer within a object with name ball so we do state.ball.noofballs
const mapStateToProps =state => {
    //console.log(state);
         return {
             noofBalls:state.ball.noofBalls,
         }
}

// mapToDispatchToProps
// here mapToDispatchToProps is caling for dispatching  action buyball through calling buyball function 
const mapDispatchToProps =dispatch => {
    return {
         buyball: ()=>dispatch(buyball()),
    }
}

// we have to wrap the two component with connect and have to export it with BallContainer 
export default connect(mapStateToProps,mapDispatchToProps)(BallContainer)

