import React,{useEffect} from 'react'
import {connect } from 'react-redux'
import {fetchUser} from './ReduxFile/Users/UsersAction'


function UserContainer({userData,fetchUser}) {
    useEffect(()=>{
        fetchUser();
    },[])
    return (

        userData.loading==true?<h2>Loading please wait...</h2>:userData.error?<h2>{userData.error}</h2>:(
            <div>
             {
                 userData.users && userData.users.map(user=>(
                     <p key={user.id} >{user.name}</p>
                 ))
             }
            </div>
            )
            
    )
}
const mapStateToProps = (state)=>{
    //console.log(state);
    return {
        userData: state.user,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchUser: ()=>dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer) 
