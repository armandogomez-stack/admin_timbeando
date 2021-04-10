import React, { useState } from 'react'
import UserContext from './UserContext'
import SessionProvider from '../Components/SessionProvider/Component'


const UserProvider = ({ children }) => {
  

  const [ userDetails, setUserDetails ] = useState({
    user_id : null,
    nombres: null,
    email: null,
    token: null,
    type_user: null,
    refferer_code : null,
    investment : 0,
    toggleMenu : true,
    avatar : null
})
 const ob = {
    ...userDetails,
    setUserDetails
  }

  return (
    <UserContext.Provider value={ob}>
      <SessionProvider />
      
        { children }


    </UserContext.Provider>
  )
}
export default UserProvider
