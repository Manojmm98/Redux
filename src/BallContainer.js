import React from 'react'
import {buyball} from './ReduxFile/Ball/BallAction';
import {connect} from 'react-redux'
import BallReducer from './ReduxFile/Ball/BallReducer'
function BallContainer(props) {
    console.log(props.noofBalls);
    return (
        <div>
            <h2>No of ball - {props.noofBalls}</h2>
            <button onClick={props.buyball}>Buy</button>
        </div>
    )
}
// there are two method of ball container 
// 1st one will read the data from global state---->mapStatetoProps
// 2nd one will dispatch the action ---------->mapDispatchToProps

// mapStateToProps return the updated number of balls

const mapStateToProps =state => {
    console.log(state);
         return {
             noofBalls:state.noofBalls,
         }
}

// mapToDispatchToProps
// here mapToDispatchToProps is caling for dispatching  action buyball through calling buyball function 
const mapDispatchToProps =dispatch => {
    return {
         buyball: ()=>dispatch(buyball())
    }
}

// we have to wrap the two component with connect and have to export it with BallContainer 
export default connect(mapStateToProps,mapDispatchToProps)(BallContainer)

