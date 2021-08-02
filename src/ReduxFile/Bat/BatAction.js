// it is action creator act as object
// will work for object type and payload type
// here the type of object is payload and the payload is of number type


const BUY_BAT = 'BUY_BAT';

const buybat=()=>{
    return {
        type: BUY_BAT, 
        payload: number
    }
}