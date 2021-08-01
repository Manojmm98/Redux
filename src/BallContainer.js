import React from 'react'
import {buyball} from './ReduxFile/Ball/BallAction';
import {connect} from 'react-redux'
import BallReducer from './ReduxFile/Ball/BallReducer'
function BallContainer(props) {
    console.log(props);
    return (
        <div>
            <h2>No of ball : {props.noofBalls}</h2>
            <button onClick={props.buyball}>Buy</button>
        </div>
    )
}
// there are two method of ball container 
// 1st one will read the data from global state---->mapStatetoProps
// 2nd one will dispatch the action ---------->mapDispatchToProps

// mapStateToProps return the updated number of balls

const mapStateToProps =state => {
         return {
             noofBalls:state.noofBalls,
         }
}

// mapToDispatchToProps
// here mapToDispatchToProps is caling for dispatching function 
const mapToDispatchToProps =dispatch => {
    return {
         buyball: ()=>dispatch(buyball())
    }
}

export default connect(mapToDispatchToProps,mapStateToProps)(BallContainer)
