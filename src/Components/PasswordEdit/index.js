import React,{ useState } from 'react'
import { store } from 'react-notifications-component'
import PasswordStrengthBar from 'react-password-strength-bar';
import axios from 'axios'
import Env from '../../Env'


function Index( props ){
	
	const [ password , setPassword] = useState({})
	const { api_uri } = Env
	const Login = props.Login

	const changePasswordHandler = ({ target }) => {
		setPassword({
			...password,
				[ target.name ] : target.value
			})
	}

	const onSubmitChangePassword = async (event)=>{
		
		event.preventDefault()

		if( password.newPassword !== password.confirmPassword ){
			store.addNotification({
				title: "Las claves no coinciden!",
				message: `Las claves deben coincidir`,
				type: "danger",
				insert: "top",
				container: "top-right",
				animationIn: ["animated", "fadeIn"],
				animationOut: ["animated", "fadeOut"],
				dismiss: {
				  duration: 5000,
				  onScreen: true
				}
			  });

			  return
		}
			

		if( !password.oldPassword || !password.newPassword || !password.confirmPassword ){
			store.addNotification({
				title: "Todos los campos son requeridos!",
				message: `Debes proporcionar todos los datos del formulario`,
				type: "danger",
				insert: "top",
				container: "top-right",
				animationIn: ["animated", "fadeIn"],
				animationOut: ["animated", "fadeOut"],
				dismiss: {
				  duration: 5000,
				  onScreen: true
				}
			  });
			return 
		}

		try {	
			
			await axios.post( `${api_uri}/api/auth/change/password` , {
				Login,
				...password
			})
			
			store.addNotification({
				title: "Clave cambiada con exito!",
				message: `Ahora puedes usar tu nueva clave`,
				type: "success",
				insert: "top",
				container: "top-right",
				animationIn: ["animated", "fadeIn"],
				animationOut: ["animated", "fadeOut"],
				dismiss: {
				  duration: 5000,
				  onScreen: true
				}
			  });

		} catch (error) {
			
			store.addNotification({
				title: "Error al cambiar la clave!",
				message: `Parese que los datos que nos proporcionaste no son correctos`,
				type: "danger",
				insert: "top",
				container: "top-right",
				animationIn: ["animated", "fadeIn"],
				animationOut: ["animated", "fadeOut"],
				dismiss: {
				  duration: 5000,
				  onScreen: true
				}
			  });

			console.log( error )
		}

	}


  return (

	  <form onSubmit={(event)=>onSubmitChangePassword(event)}>

	<div className="card">
	<div className="card-header pb-0 border-bottom">
		<div className="card-title pb-1">Seguridad</div>
	</div>
	<div className="card-body">
		<div className="form-group">
			<label className="form-label">Escribe tu contraseña</label>
			<input 
				type="password" 
				className="form-control" 
				value={password.oldPassword} 
				name={'oldPassword'} 
				onChange={ (event) => changePasswordHandler( event ) } />
		</div>
		<div className="form-group">
			<label className="form-label">Nueva contraseña</label>
			
			<input 
				type="password" 
				className="form-control" 
				value={password.newPassword} 
				name={'newPassword'} 
				onChange={ (event) => changePasswordHandler( event ) } />

			<PasswordStrengthBar password={password.newPassword} />
		</div>
		
		
		<div className="form-group">
			<label className="form-label">Confirma la contraseña</label>
			<input 
				type="password" 
				className="form-control" 
				value={password.confirmPassword} 
				name={'confirmPassword'} 
				onChange={ (event) => changePasswordHandler( event ) } />

		</div>
	</div>
			<div className="card-footer text-right">
				<button className="btn btn-primary" type="submit" >Cambiar clave de acceso</button>
			</div>
		</div>                           
	</form>
    )
}


export default Index