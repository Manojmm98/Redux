// it is action creator act as object
// will work for object type and payload type
// here the type of object is payload and the payload is of number type


const BUY_BAT = 'BUY_BAT';
const SELL_BAT = 'SELL_BAT';
// here we are providing default number= 1 if we don't provid any number then it will take default value
 export const buybat=(number=1)=>{
    return {
        type: BUY_BAT, 
        payload: number
    }
}
export const sellbat=(number=1)=>{
    return {
        type: SELL_BAT, 
        payload: number
    }
}

