// ball action is an action creator which creates an action
// it will return an object type and payload

const BUY_BALL = 'BUY_BALL';


export const buyball =()=>{
    return {
             type: BUY_BALL,
    }
}