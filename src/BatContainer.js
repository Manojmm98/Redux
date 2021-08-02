import React,{useState} from 'react'
import {connect} from 'react-redux'
import {buybat,sellbat} from './ReduxFile/Bat/BatAction'
function BatContainer(props) {
    console.log('bat render');
    const [number,Setnumbers] =useState(0)
    return (
        <div>
            <h2>Number of bats-{props.noofBats}</h2>
            <input type="number" value={number} onChange={e=>{Setnumbers(e.target.value)}}/>
            <button onClick={()=>{props.buybat(number)}}>Buy {number} bats</button>
            <button onClick={()=>{props.sellbat(number)}}>Sell {number} bats</button>

        </div>
    )
}

const mapStateToProps = state=>{
      return {
        noofBats:state.bat.noofBats,
      }
}


const mapDispatchToProps=dispatch=>{
        return {
             buybat :(number)=>dispatch(buybat(number)),
             sellbat :(number)=>dispatch(sellbat(number))
            }
             
}

export default connect(mapStateToProps,mapDispatchToProps)(BatContainer)

