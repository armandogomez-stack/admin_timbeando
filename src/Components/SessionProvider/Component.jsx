import React, { useContext } from 'react';
import UserContext from '../../Contexts/UserContext'
import axios from 'axios'




const SessionProvider = (props) => {

	const { setUserDetails } = useContext(UserContext)

	
	
			
	React.useEffect(() => {

		function verifySession(){
			
			/*
			*	Definiendo el intervalo de verificacion de la sesion
			*/ 
					let veryfyInterval = setInterval(()=>{
						
					/*
					*	Verificando la sesion
					*/ 
						let result = JSON.parse(localStorage.getItem('user'))
						
						if(result){
		
							/*
							*	Iniciando la sesion
							*/ 
							axios.defaults.headers.common['access-token'] = result.access_token
							setUserDetails({
                  					access_token : result.access_token,
                 					 ...result
								})
							clearInterval(veryfyInterval);
						}
					},3000)
			}

    verifySession();
    
	  },[setUserDetails]);

		return (false);
    
}

export default SessionProvider