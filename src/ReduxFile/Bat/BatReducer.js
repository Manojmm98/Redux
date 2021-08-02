// it is pure function which will take state and action as an argument we have to provide intialstate to it

const BUY_BAT ='BUY_BAT'
const SELL_BAT= 'SELL_BAT'
const intialstate ={
    noofBats:20
}
// ball reducer will reduce the noofBats as the payload given by user
const BatReducer=(state=intialstate,action)=>{
     switch (action.type) {
         case BUY_BAT:
             
             return {...state, noofBats: state.noofBats-action.payload}
        case SELL_BAT:{
            return {...state, noofBats: Number(state.noofBats)+Number(action.payload)}
        }
     
         default:
             return state;
     }
}

export default BatReducer;