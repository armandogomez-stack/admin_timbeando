import { createContext } from 'react'

const UserContext = createContext({
  
  /**
   * {Object} userDetails i.e. {[name], [dateOfBirth], [email], [secretQuestion], [secretAnswer]}
   */

  setUserDetails: userDetails => {}
})

export default UserContext