import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../Contexts/UserContext'
import axios from 'axios'
import Env from '../../Env'

function Index( props ){

	const user = useContext( UserContext )
	const { setUserDetails } = useContext( UserContext )
	const { api_uri } = Env

		useEffect(() => {
			
			const interval = setInterval( async () => {

			if( user.access_token ){
				try {
		
					const { data }	= await axios.post(`${api_uri}/Stats` , {
						"Login" : user.Login,
						"Password" : user.random_password
					})

					setUserDetails({
						...user,
						balance : data.balance
					})

		
				} catch (error) {
					console.log(error)
				}

			}

			}, 5000);
			return () => clearInterval(interval);
		}, [user]);


return (<div className="menu">
				<div className="left">
				{/* <span className='text-light'>Ultima conexion : </span> */}
				</div>
				<div className="right">
					<span className="balance">
						Saldo : <b>{ user.balance } ARS </b>
					</span>
					<span>Bienvenido : {user.Name} </span>

					<Link to="/">Home</Link>
					<Link to="/security" >Seguridad</Link>
					<a href={'./logout'}>Salir</a>
				</div>
			</div>)

}


export default Index