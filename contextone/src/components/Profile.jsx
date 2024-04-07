import React,{useContext} from 'react'
import UsContext from '../context/UsContext'

const Profile = () => {
    const { user } = useContext(UsContext);
    if(!user){
        return (
            <div>Please login!</div>
          )
    }
    else{
        return(
            <div>Welcome {user.username}</div>
        )
    }
  
}

export default Profile