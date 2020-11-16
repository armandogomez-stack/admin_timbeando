import React, { useContext, useCallback } from 'react'
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage'


function Index(props){
    

    const { setUserDetails } = useContext(UserContext)
    
    const setDetail = useCallback(()=>{
        setUserDetails({})
    },[setUserDetails])


    React.useEffect(()=>{
        const logout = async () =>{
        setDetail({})
        localStorage.clear()
        window.location.href = '/'
      }

    logout()

},[ setDetail ])


    return <LoaderPage />


}


export default Index